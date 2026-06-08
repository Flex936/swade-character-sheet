export const DIE_VALUES = { d4: 1, d6: 2, d8: 3, d10: 4, d12: 5 };

// Map EVERY skill to its governing attribute based on your provided list
export const SKILL_LINK = {
    // Core Skills (Alapképzettségek)
    athletics: 'agility',
    commonKnowledge: 'smarts',
    notice: 'smarts',
    persuasion: 'spirit',
    stealth: 'agility',
    
    // Optional Skills (Választható képzettségek)
    weirdScience: 'smarts',   // Bizarr tudomány
    humanities: 'smarts',     // Bölcsészettudomány
    electronics: 'agility',   // Elektrotechnika
    performance: 'spirit',    // Előadóművészet
    focus: 'spirit',          // Fókusz
    taunt: 'smarts',          // Gúnyolódás
    healing: 'smarts',        // Gyógyítás
    battle: 'smarts',         // Hadvezetés
    boating: 'agility',       // Hajózás
    gambling: 'smarts',       // Hazárdjáték
    hacking: 'smarts',        // Hekkelés
    faith: 'spirit',          // Hit
    driving: 'agility',       // Járművezetés
    repair: 'smarts',         // Javítás
    fighting: 'agility',      // Közelharc
    research: 'smarts',       // Kutatómunka
    riding: 'agility',        // Lovaglás
    shooting: 'agility',      // Lövés
    intimidation: 'spirit',   // Megfélemlítés
    language: 'smarts',       // Nyelv
    occult: 'smarts',         // Okkultizmus
    psionics: 'smarts',       // Pszionika
    piloting: 'agility',      // Repülés
    science: 'smarts',        // Természettudomány
    thievery: 'smarts',       // Tolvajlás (Note: coded as Smarts per your text)
    survival: 'smarts',       // Túlélés
    spellcasting: 'smarts'    // Varázslás
} as const;

export const CORE_SKILLS = ['athletics', 'commonKnowledge', 'notice', 'persuasion', 'stealth'];

export class Character {
    // --- STATE ---
    attributes = $state({ agility: 1, smarts: 1, spirit: 1, strength: 1, vigor: 1 });
    
    // Initialize ALL skills. Core start at 1 (d4), Optional start at 0 (Untrained)
    skills = $state({
        athletics: 1, commonKnowledge: 1, notice: 1, persuasion: 1, stealth: 1, // Core
        weirdScience: 0, humanities: 0, electronics: 0, performance: 0, focus: 0,
        taunt: 0, healing: 0, battle: 0, boating: 0, gambling: 0, hacking: 0,
        faith: 0, driving: 0, repair: 0, fighting: 0, research: 0, riding: 0,
        shooting: 0, intimidation: 0, language: 0, occult: 0, psionics: 0,
        piloting: 0, science: 0, thievery: 0, survival: 0, spellcasting: 0
    });
    
    armor = $state(0);
    pace = $state(6);
    
    selectedHindrances = $state<{ id: string; name: string; cost: number }[]>([]);

    bonusAttributesBought = $state(0);
    bonusEdgesBought = $state(0);
    bonusSkillsBought = $state(0);
    bonusFundsBought = $state(0);

    // --- DERIVED STATE ---
    // Automatikusan kiszámolja a felvett hátrányok összértékét, de maximum 4 pontot ad.
    hindrancePointsEarned = $derived.by(() => {
        const total = this.selectedHindrances.reduce((sum, h) => sum + h.cost, 0);
        return Math.min(total, 4); // Max 4 pont szerezhető
    });

    hindrancePointsSpent = $derived(
        (this.bonusAttributesBought * 2) + (this.bonusEdgesBought * 2) + 
        (this.bonusSkillsBought * 1) + (this.bonusFundsBought * 1)
    );
    hindrancePointsRemaining = $derived(this.hindrancePointsEarned - this.hindrancePointsSpent);

    attrSpent = $derived(
        (this.attributes.agility - 1) + (this.attributes.smarts - 1) + 
        (this.attributes.spirit - 1) + (this.attributes.strength - 1) + (this.attributes.vigor - 1)
    );

    skillSpent = $derived.by(() => {
        let total = 0;
        for (const [skillKey, currentVal] of Object.entries(this.skills)) {
            if (currentVal === 0) continue; 

            const skillName = skillKey as keyof typeof SKILL_LINK;
            const attrVal = this.attributes[SKILL_LINK[skillName]];
            const isCore = CORE_SKILLS.includes(skillName);

            const startIdx = isCore ? 2 : 1;
            for (let i = startIdx; i <= currentVal; i++) {
                total += (i <= attrVal) ? 1 : 2;
            }
        }
        return total;
    });

    attrPointsRemaining = $derived((5 + this.bonusAttributesBought) - this.attrSpent);
    skillPointsRemaining = $derived((12 + this.bonusSkillsBought) - this.skillSpent);
    funds = $derived(500 + (this.bonusFundsBought * 500));

    parry = $derived(2 + (this.skills.fighting === 0 ? 0 : this.skills.fighting + 1));
    toughness = $derived(2 + (this.attributes.vigor + 1) + this.armor);
}