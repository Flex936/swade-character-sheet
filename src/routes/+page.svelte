<script lang="ts">
    import { Character } from '$lib/stores/character.svelte';
    import AttributesPanel from '$lib/components/AttributesPanel.svelte';
    import DerivedStatsPanel from '$lib/components/DerivedStatsPanel.svelte';
    import SkillsPanel from '$lib/components/SkillsPanel.svelte';
    import EquipmentPanel from '$lib/components/EquipmentPanel.svelte';
    import HindrancesPanel from '$lib/components/HindrancesPanel.svelte';
    import EdgesPanel from '$lib/components/EdgesPanel.svelte';
    
    let char = new Character();
</script>

<main class="min-h-screen p-4 md:p-8 overflow-x-hidden">
    <div class="max-w-6xl mx-auto space-y-8">
        
        <header class="text-center pb-6 border-b-2 border-guild-gold">
            <h1 class="text-4xl font-bold tracking-widest text-guild-gold uppercase">Savage Worlds Karakterlap</h1>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AttributesPanel {char} />
            <DerivedStatsPanel {char} />
        </div>

        <SkillsPanel {char} />

        <EquipmentPanel {char} />

        <EdgesPanel {char} />

        <HindrancesPanel {char} />

    </div>
</main>