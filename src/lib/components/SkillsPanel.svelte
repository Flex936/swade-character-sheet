<script lang="ts">
    import type { Character } from '$lib/stores/character.svelte';
    import DieSelect from './DieSelect.svelte';

    let { char }: { char: Character } = $props();

    const optionalSkillsList: { key: keyof typeof char.skills; label: string }[] = [
        { key: 'weirdScience', label: 'Bizarr tudomány' },
        { key: 'humanities', label: 'Bölcsészettudomány' },
        { key: 'electronics', label: 'Elektrotechnika' },
        { key: 'performance', label: 'Előadóművészet' },
        { key: 'focus', label: 'Fókusz' },
        { key: 'taunt', label: 'Gúnyolódás' },
        { key: 'healing', label: 'Gyógyítás' },
        { key: 'battle', label: 'Hadvezetés' },
        { key: 'boating', label: 'Hajózás' },
        { key: 'gambling', label: 'Hazárdjáték' },
        { key: 'hacking', label: 'Hekkelés' },
        { key: 'faith', label: 'Hit' },
        { key: 'driving', label: 'Járművezetés' },
        { key: 'repair', label: 'Javítás' },
        { key: 'fighting', label: 'Közelharc' },
        { key: 'research', label: 'Kutatómunka' },
        { key: 'riding', label: 'Lovaglás' },
        { key: 'shooting', label: 'Lövés' },
        { key: 'intimidation', label: 'Megfélemlítés' },
        { key: 'language', label: 'Nyelv' },
        { key: 'occult', label: 'Okkultizmus' },
        { key: 'psionics', label: 'Pszionika' },
        { key: 'piloting', label: 'Repülés' },
        { key: 'science', label: 'Természettudomány' },
        { key: 'thievery', label: 'Tolvajlás' },
        { key: 'survival', label: 'Túlélés' },
        { key: 'spellcasting', label: 'Varázslás' }
    ];
</script>

<section class="bg-guild-panel p-6 rounded shadow-xl border border-guild-border">
    <div class="flex justify-between items-end mb-6 border-b border-guild-border pb-2">
        <h2 class="text-2xl font-bold text-guild-gold">Képzettségek</h2>
        <span class="font-bold text-lg" class:text-guild-red={char.skillPointsRemaining < 0}>
            Pontok: {char.skillPointsRemaining} / 12
        </span>
    </div>
    
    <div class="mb-8">
        <h3 class="text-sm font-bold text-guild-muted uppercase tracking-widest mb-4">Alapképzettségek</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-2 bg-guild-base p-4 rounded border border-guild-border">
            <DieSelect label="Atlétika" bind:value={char.skills.athletics} />
            <DieSelect label="Általános ismeretek" bind:value={char.skills.commonKnowledge} />
            <DieSelect label="Észlelés" bind:value={char.skills.notice} />
            <DieSelect label="Lopakodás" bind:value={char.skills.stealth} />
            <DieSelect label="Meggyőzés" bind:value={char.skills.persuasion} />
        </div>
    </div>

    <div>
        <h3 class="text-sm font-bold text-guild-muted uppercase tracking-widest mb-4">Választható Képzettségek</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-1">
            {#each optionalSkillsList as skill (skill.key)}
                <DieSelect 
                    label={skill.label} 
                    bind:value={char.skills[skill.key]} 
                    allowUntrained={true} 
                />
            {/each}
        </div>
    </div>
</section>