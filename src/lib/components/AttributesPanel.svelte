<script lang="ts">
    import type { Character } from '$lib/stores/character.svelte';
    import DieSelect from './DieSelect.svelte';

    let { char }: { char: Character } = $props();

    /**
     * Returns the highest die index the player can currently afford for a
     * single attribute.
     *
     * Attributes cost exactly 1 point per step, so the maximum affordable
     * level is simply:
     *
     *   min(d12, currentValue + remaining)
     *
     * Math.max(0, remaining) prevents the cap from dropping below the current
     * value when the budget hits zero — the player must always be able to see
     * (and keep) their current die, even if they cannot raise it further.
     *
     * Because this function reads `char.attrPointsRemaining` (a $derived
     * signal), every DieSelect that calls it is automatically invalidated
     * whenever any attribute or bonus changes.
     */
    function maxAttrValue(current: number): number {
        return Math.min(5, current + Math.max(0, char.attrPointsRemaining));
    }
</script>

<section class="bg-guild-panel p-6 rounded shadow-xl border border-guild-border">
    <div class="flex justify-between items-end mb-6 border-b border-guild-border pb-2">
        <h2 class="text-2xl font-bold text-guild-gold">Tulajdonságok</h2>
        <span class="font-bold text-lg" class:text-guild-red={char.attrPointsRemaining < 0}>
            Pontok: {char.attrPointsRemaining} / 5
        </span>
    </div>

    <div class="space-y-2">
        <DieSelect
            label="Ügyesség"
            bind:value={char.attributes.agility}
            maxValue={maxAttrValue(char.attributes.agility)}
        />
        <DieSelect
            label="Ész"
            bind:value={char.attributes.smarts}
            maxValue={maxAttrValue(char.attributes.smarts)}
        />
        <DieSelect
            label="Lélek"
            bind:value={char.attributes.spirit}
            maxValue={maxAttrValue(char.attributes.spirit)}
        />
        <DieSelect
            label="Erő"
            bind:value={char.attributes.strength}
            maxValue={maxAttrValue(char.attributes.strength)}
        />
        <DieSelect
            label="Életerő"
            bind:value={char.attributes.vigor}
            maxValue={maxAttrValue(char.attributes.vigor)}
        />
    </div>
</section>