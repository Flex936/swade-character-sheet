<script lang="ts">
    import { Character } from '$lib/stores/character.svelte';
    import DieSelect from '$lib/components/DieSelect.svelte';
    import { hindrances } from '$lib/data/hindrances';
    
    let char = new Character();
    
    // Internal state for the two-step dropdown
    let selectedHindranceId = $state('');
    let selectedSeverity = $state<'kisebb' | 'jelentős'>('kisebb');

    // Dynamically fetch the selected hindrance template
    let activeHindranceTemplate = $derived(hindrances.find(h => h.id === selectedHindranceId));

    // Logic to add a hindrance to the character
    function addHindrance() {
        if (!activeHindranceTemplate) return;
        
        // Ensure the actual severity matches what the hindrance allows
        const actualSeverity = activeHindranceTemplate.severity === 'kisebb/jelentős' 
            ? selectedSeverity 
            : activeHindranceTemplate.severity;
            
        const cost = actualSeverity === 'jelentős' ? 2 : 1;
        
        // Append the severity to the name ONLY if it's a variable choice
        const fullName = activeHindranceTemplate.severity === 'kisebb/jelentős' 
            ? `${activeHindranceTemplate.name} (${actualSeverity === 'jelentős' ? 'Jelentős' : 'Kisebb'})`
            : activeHindranceTemplate.name;
        
        // Prevent adding duplicates
        if (!char.selectedHindrances.find(h => h.id === activeHindranceTemplate.id)) {
            char.selectedHindrances = [...char.selectedHindrances, {
                id: activeHindranceTemplate.id,
                name: fullName,
                cost: cost
            }];
        }
        
        selectedHindranceId = ''; // Reset dropdown after adding
    }

    // Logic to remove a hindrance
    function removeHindrance(id: string) {
        char.selectedHindrances = char.selectedHindrances.filter(h => h.id !== id);
    }

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

<main class="min-h-screen p-4 md:p-8 custom-scrollbar overflow-x-hidden">
    <div class="max-w-6xl mx-auto space-y-8">
        
        <header class="text-center pb-6 border-b-2 border-guild-gold">
            <h1 class="text-4xl font-bold tracking-widest text-guild-gold uppercase">Savage Worlds Karakterlap</h1>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
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

            <section class="bg-guild-panel p-6 rounded shadow-xl border border-guild-border h-fit">
                <h2 class="text-2xl font-bold text-guild-gold mb-6 border-b border-guild-border pb-2">
                    Származtatott Adatok
                </h2>
                <div class="grid grid-cols-3 gap-6 text-center">
                    <div class="bg-guild-base p-4 rounded border border-guild-border">
                        <span class="block text-sm text-guild-muted uppercase tracking-widest mb-1">Iram</span>
                        <span class="block text-4xl font-bold text-guild-text">{char.pace}</span>
                    </div>
                    <div class="bg-guild-base p-4 rounded border border-guild-border">
                        <span class="block text-sm text-guild-muted uppercase tracking-widest mb-1">Hárítás</span>
                        <span class="block text-4xl font-bold text-guild-text">{char.parry}</span>
                    </div>
                    <div class="bg-guild-base p-4 rounded border border-guild-border">
                        <span class="block text-sm text-guild-muted uppercase tracking-widest mb-1">Szívósság</span>
                        <span class="block text-4xl font-bold text-guild-text">{char.toughness}</span>
                    </div>
                </div>
            </section>

        </div>

        <section class="bg-guild-panel p-6 rounded shadow-xl border border-guild-border">
            <div class="flex justify-between items-end mb-6 border-b border-guild-border pb-2">
                <h2 class="text-2xl font-bold text-guild-gold">Képzettségek</h2>
                <span class="font-bold text-lg" class:text-guild-red={char.skillPointsRemaining < 0}>
                    Pontok: {char.skillPointsRemaining} / 12
                </span>
            </div>
            
            <div class="mb-8">
                <h3 class="text-sm font-bold text-guild-muted uppercase tracking-widest mb-4">Alapképzettségek</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-2 bg-guild-base p-4 rounded border border-guild-border">
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

        <section class="bg-guild-panel p-6 rounded shadow-xl border border-guild-border">
            <div class="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-guild-border pb-4 gap-4">
                <h2 class="text-2xl font-bold text-guild-red">Hátrányok</h2>
                <div class="flex items-center gap-4 bg-guild-base px-4 py-2 rounded border border-guild-border">
                    <span class="font-medium text-guild-muted">
                        Szerzett Pont: <span class="text-guild-text font-bold text-lg">{char.hindrancePointsEarned}</span> / 4
                    </span>
                    <span class:text-guild-red={char.hindrancePointsRemaining < 0} class="font-bold text-lg text-guild-gold border-l border-guild-border pl-4">
                        Elkölthető: {char.hindrancePointsRemaining}
                    </span>
                </div>
            </div>

            <div class="mb-6 flex flex-col sm:flex-row gap-4 items-end">
                <div class="flex-1 w-full">
                    <label for="hindrance-select" class="block text-sm font-bold text-guild-muted uppercase tracking-widest mb-2">Válassz egy hátrányt</label>
                    <select id="hindrance-select" bind:value={selectedHindranceId} class="w-full rounded bg-guild-base text-guild-text border-guild-border focus:border-guild-gold focus:ring focus:ring-guild-gold focus:ring-opacity-50">
                        <option value="">-- Keresés a listában --</option>
                        {#each hindrances as h (h.id)}
                            <option value={h.id}>{h.name}</option>
                        {/each}
                    </select>
                </div>

                {#if activeHindranceTemplate?.severity === 'kisebb/jelentős'}
                    <div class="w-full sm:w-48">
                        <label for="severity-select" class="block text-sm font-bold text-guild-muted uppercase tracking-widest mb-2">Súlyosság</label>
                        <select id="severity-select" bind:value={selectedSeverity} class="w-full rounded bg-guild-base text-guild-text border-guild-border focus:border-guild-gold focus:ring focus:ring-guild-gold focus:ring-opacity-50">
                            <option value="kisebb">Kisebb (1 pt)</option>
                            <option value="jelentős">Jelentős (2 pt)</option>
                        </select>
                    </div>
                {:else if activeHindranceTemplate}
                    <div class="w-full sm:w-48">
                        <label class="block text-sm font-bold text-guild-muted uppercase tracking-widest mb-2">Súlyosság</label>
                        <div class="flex items-center h-[42px] px-4 bg-guild-base rounded border border-guild-border text-guild-muted">
                            {activeHindranceTemplate.severity === 'jelentős' ? 'Jelentős (2 pt)' : 'Kisebb (1 pt)'}
                        </div>
                    </div>
                {/if}

                <button onclick={addHindrance} disabled={!activeHindranceTemplate} class="w-full sm:w-auto bg-guild-gold text-guild-base font-bold py-[10px] px-8 rounded hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    Hozzáad
                </button>
            </div>

            {#if char.selectedHindrances.length > 0}
                <ul class="mb-6 space-y-2">
                    {#each char.selectedHindrances as h (h.id)}
                        <li class="flex justify-between items-center bg-guild-base px-4 py-2 rounded border border-guild-border">
                            <span>
                                <span class="font-bold text-guild-red">{h.name}</span> 
                                <span class="text-guild-muted text-sm ml-2">({h.cost} pt)</span>
                            </span>
                            <button onclick={() => removeHindrance(h.id)} class="text-guild-red hover:text-red-400 font-bold px-3 py-1 bg-guild-panel rounded border border-guild-border transition-colors">
                                Eltávolít
                            </button>
                        </li>
                    {/each}
                </ul>
            {/if}

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 border-t border-guild-border pt-6">
                <div class="bg-guild-base p-4 rounded border border-guild-border flex flex-col items-center">
                    <span class="text-guild-muted text-sm text-center mb-2 uppercase tracking-wide">+1 Tulajdonság (2 pt)</span>
                    <input type="number" bind:value={char.bonusAttributesBought} min="0" class="w-full rounded bg-guild-panel border-guild-border text-center" />
                </div>
                <div class="bg-guild-base p-4 rounded border border-guild-border flex flex-col items-center">
                    <span class="text-guild-muted text-sm text-center mb-2 uppercase tracking-wide">+1 Előny (2 pt)</span>
                    <input type="number" bind:value={char.bonusEdgesBought} min="0" class="w-full rounded bg-guild-panel border-guild-border text-center" />
                </div>
                <div class="bg-guild-base p-4 rounded border border-guild-border flex flex-col items-center">
                    <span class="text-guild-muted text-sm text-center mb-2 uppercase tracking-wide">+1 Képzettség (1 pt)</span>
                    <input type="number" bind:value={char.bonusSkillsBought} min="0" class="w-full rounded bg-guild-panel border-guild-border text-center" />
                </div>
                <div class="bg-guild-base p-4 rounded border border-guild-border flex flex-col items-center">
                    <span class="text-guild-muted text-sm text-center mb-2 uppercase tracking-wide">+500$ Pénz (1 pt)</span>
                    <input type="number" bind:value={char.bonusFundsBought} min="0" class="w-full rounded bg-guild-panel border-guild-border text-center" />
                </div>
            </div>
            
            <div class="mt-4 text-right text-guild-green font-bold text-xl">
                Kezdőpénz: ${char.funds}
            </div>
        </section>  

    </div>
</main>