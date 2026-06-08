<script lang="ts">
    import type { Character } from '$lib/stores/character.svelte';
    import DieSelect from './DieSelect.svelte';

    let { char }: { char: Character } = $props();
</script>

<section class="bg-guild-panel p-6 rounded shadow-xl border border-guild-border">
    <div class="flex justify-between items-end mb-6 border-b border-guild-border pb-2">
        <h2 class="text-2xl font-bold text-guild-gold">Tulajdonságok</h2>
        <span class="font-bold text-lg" class:text-guild-red={char.attrPointsRemaining < 0}>
            Pontok: {char.attrPointsRemaining} / 5
        </span>
    </div>
    
    <div class="space-y-2">
        <DieSelect label="Ügyesség" bind:value={char.attributes.agility} />
        <DieSelect label="Ész" bind:value={char.attributes.smarts} />
        <DieSelect label="Lélek" bind:value={char.attributes.spirit} />
        <DieSelect label="Erő" bind:value={char.attributes.strength} />
        <DieSelect label="Életerő" bind:value={char.attributes.vigor} />
    </div>
</section>