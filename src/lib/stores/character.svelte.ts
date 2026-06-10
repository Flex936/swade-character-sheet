import type { Edge } from '$lib/data/edges';
export const DIE_VALUES = { d4: 1, d6: 2, d8: 3, d10: 4, d12: 5 };

export const SKILL_LINK = {
    athletics:       'agility',
    commonKnowledge: 'smarts',
    notice:          'smarts',
    persuasion:      'spirit',
    stealth:         'agility',
    weirdScience:  'smarts',
    humanities:    'smarts',
    electronics:   'agility',
    performance:   'spirit',
    focus:         'spirit',
    taunt:         'smarts',
    healing:       'smarts',
    battle:        'smarts',
    boating:       'agility',
    gambling:      'smarts',
    hacking:       'smarts',
    faith:         'spirit',
    driving:       'agility',
    repair:        'smarts',
    fighting:      'agility',
    research:      'smarts',
    riding:        'agility',
    shooting:      'agility',
    intimidation:  'spirit',
    language:      'smarts',
    occult:        'smarts',
    psionics:      'smarts',
    piloting:      'agility',
    science:       'smarts',
    thievery:      'smarts',
    survival:      'smarts',
    spellcasting:  'smarts',
} as const;

export const CORE_SKILLS = ['athletics', 'commonKnowledge', 'notice', 'persuasion', 'stealth'];

export interface InventoryItem {
    id: string;
    name: string;
    price: number;
    weight: number;
    quantity: number;
    equipped: boolean;
    category: string;
    notes?: string;
}

export class Character {
    // ─── MUTABLE STATE ───────────────────────────────────────────────────────
    attributes = $state({ agility: 1, smarts: 1, spirit: 1, strength: 1, vigor: 1 });

    skills = $state({
        athletics: 1, commonKnowledge: 1, notice: 1, persuasion: 1, stealth: 1,
        weirdScience: 0, humanities: 0, electronics: 0, performance: 0, focus: 0,
        taunt: 0, healing: 0, battle: 0, boating: 0, gambling: 0, hacking: 0,
        faith: 0, driving: 0, repair: 0, fighting: 0, research: 0, riding: 0,
        shooting: 0, intimidation: 0, language: 0, occult: 0, psionics: 0,
        piloting: 0, science: 0, thievery: 0, survival: 0, spellcasting: 0,
    });

    armor = $state(0);
    pace  = $state(6);

    selectedHindrances = $state<{ id: string; name: string; cost: number }[]>([]);
    selectedEdges      = $state<Edge[]>([]);
    inventory          = $state<InventoryItem[]>([]);

    bonusAttributesBought = $state(0);
    bonusSkillsBought     = $state(0);
    bonusFundsBought      = $state(0);

    // ─── DERIVED STATE ───────────────────────────────────────────────────────
    hindrancePointsEarned = $derived.by(() => {
        const total = this.selectedHindrances.reduce((sum, h) => sum + h.cost, 0);
        return Math.min(total, 4);
    });

    hindrancePointsSpent = $derived(
        Math.max(0, this.bonusAttributesBought) * 2 +
        this.selectedEdges.length * 2 +
        Math.max(0, this.bonusSkillsBought) * 1 +
        Math.max(0, this.bonusFundsBought)  * 1
    );

    hindrancePointsRemaining = $derived(this.hindrancePointsEarned - this.hindrancePointsSpent);

    attrSpent = $derived(
        (this.attributes.agility  - 1) +
        (this.attributes.smarts   - 1) +
        (this.attributes.spirit   - 1) +
        (this.attributes.strength - 1) +
        (this.attributes.vigor    - 1)
    );

    attrPointsRemaining = $derived(
        (5 + Math.max(0, this.bonusAttributesBought)) - this.attrSpent
    );

    skillSpent = $derived.by(() => {
        let total = 0;
        for (const [skillKey, currentVal] of Object.entries(this.skills)) {
            if (currentVal === 0) continue;
            const skillName = skillKey as keyof typeof SKILL_LINK;
            const attrVal   = this.attributes[SKILL_LINK[skillName]];
            const isCore    = CORE_SKILLS.includes(skillName);
            const startIdx  = isCore ? 2 : 1;
            for (let i = startIdx; i <= currentVal; i++) {
                total += i <= attrVal ? 1 : 2;
            }
        }
        return total;
    });

    skillPointsRemaining = $derived(
        (12 + Math.max(0, this.bonusSkillsBought)) - this.skillSpent
    );

    startingFunds  = $derived(500 + Math.max(0, this.bonusFundsBought) * 500);
    spentFunds     = $derived(this.inventory.reduce((s, i) => s + i.price  * i.quantity, 0));
    remainingFunds = $derived(this.startingFunds - this.spentFunds);

    maxWeight     = $derived(this.attributes.strength * 20);
    currentWeight = $derived(this.inventory.reduce((s, i) => s + i.weight * i.quantity, 0));

    // ─── ENCUMBRANCE PENALTY (NEW) ────────────────────────────────────────────
    // SWADE rule: exceeding Normal Load gives −1 to STR/AGI rolls;
    // exceeding 2× Normal Load gives −2.  Displayed in EquipmentPanel and
    // available for any future system that needs to apply it automatically.
    encumbrancePenalty = $derived.by(() => {
        if (this.currentWeight <= this.maxWeight)      return  0;
        if (this.currentWeight <= this.maxWeight * 2)  return -1;
        return -2;
    });

    // ─── AUTOMATIKUS FELSZERELÉS ÉRTELMEZŐ ───────────────────────────────────

    // 1. Viselt Hárítás bónusz (pajzsokból és védjegyfegyverekből)
    equippedParry = $derived.by(() => {
        let bonus = 0;
        for (const item of this.inventory) {
            if (!item.equipped) continue;
            const nameMatch  = item.name.match(/([+-]\d+)\s*Hárítás/i);
            if (nameMatch) bonus += parseInt(nameMatch[1], 10);
            const notesMatch = item.notes?.match(/Hárítás\s*([+-]\d+)/i);
            if (notesMatch) bonus += parseInt(notesMatch[1], 10);
        }
        return bonus;
    });

    // 2. Viselt Páncélzat (Szívóssághoz)
    equippedArmor = $derived.by(() => {
        let maxNormal = 0;
        let stackable = 0;
        for (const item of this.inventory) {
            if (!item.equipped) continue;
            const cat = item.category.toLowerCase();
            if (!cat.includes('páncél') && !cat.includes('vért')) continue;

            const name = item.name.toLowerCase();
            // Kizárjuk a fejre/végtagokra korlátozott elemeket a Szívósság számításból.
            if (
                name.includes('fej') || name.includes('láb') ||
                name.includes('sapka') || name.includes('sisak') ||
                name.includes('nadrág') || name.includes('karvas')
            ) continue;

            const match = item.name.match(/\+(\d+)(\*)?/);
            if (match) {
                const val = parseInt(match[1], 10);
                if (match[2]) {
                    stackable += val;        // csillagos (halmozódik)
                } else {
                    if (val > maxNormal) maxNormal = val; // csak a legjobb számít
                }
            }
        }
        return maxNormal + stackable;
    });

    // ─── COMBAT STATS ─────────────────────────────────────────────────────────
    // equippedParry and equippedArmor feed directly into these two formulas,
    // so the inventory checkboxes are the single source of truth for both.

    // Hárítás = 2 + (Közelharc kocka / 2) + Pajzs/Fegyver bónusz
    parry = $derived(
        2 + (this.skills.fighting === 0 ? 0 : this.skills.fighting + 1) + this.equippedParry
    );

    // Szívósság = 2 + (Életerő kocka / 2) + Viselt páncél + Kézi bónusz
    toughness = $derived(
        2 + (this.attributes.vigor + 1) + this.equippedArmor + this.armor
    );
}