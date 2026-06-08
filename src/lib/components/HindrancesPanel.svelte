<script lang="ts">
    import type { Character } from '$lib/stores/character.svelte';
    import { hindrances } from '$lib/data/hindrances';

    let { char }: { char: Character } = $props();
    
    let selectedHindranceId = $state('');
    let selectedSeverity = $state<'kisebb' | 'jelentős'>('kisebb');
    let activeHindranceTemplate = $derived(hindrances.find(h => h.id === selectedHindranceId));

    function addHindrance() {
        if (!activeHindranceTemplate) return;
        const actualSeverity = activeHindranceTemplate.severity === 'kisebb/jelentős' 
            ? selectedSeverity 
            : activeHindranceTemplate.severity;
        const cost = actualSeverity === 'jelentős' ? 2 : 1;
        const fullName = activeHindranceTemplate.severity === 'kisebb/jelentős' 
            ? `${activeHindranceTemplate.name} (${actualSeverity === 'jelentős' ? 'Jelentős' : 'Kisebb'})`
            : activeHindranceTemplate.name;
        
        if (!char.selectedHindrances.find(h => h.id === activeHindranceTemplate.id)) {
            char.selectedHindrances = [...char.selectedHindrances, { id: activeHindranceTemplate.id, name: fullName, cost }];
        }
        selectedHindranceId = '';
    }

    function removeHindrance(id: string) {
        char.selectedHindrances = char.selectedHindrances.filter(h => h.id !== id);
    }
</script>

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
                <label for="static-severity-display" class="block text-sm font-bold text-guild-muted uppercase tracking-widest mb-2">Súlyosság</label>
                <div id="static-severity-display" class="flex items-center h-[42px] px-4 bg-guild-base rounded border border-guild-border text-guild-muted select-none">
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
        <label class="bg-guild-base p-4 rounded border border-guild-border flex flex-col items-center cursor-pointer">
            <span class="text-guild-muted text-sm text-center mb-2 uppercase tracking-wide">+1 Tulajdonság (2 pt)</span>
            <input type="number" bind:value={char.bonusAttributesBought} min="0" class="w-full rounded bg-guild-panel border-guild-border text-center" />
        </label>
        <label class="bg-guild-base p-4 rounded border border-guild-border flex flex-col items-center cursor-pointer">
            <span class="text-guild-muted text-sm text-center mb-2 uppercase tracking-wide">+1 Előny (2 pt)</span>
            <input type="number" bind:value={char.bonusEdgesBought} min="0" class="w-full rounded bg-guild-panel border-guild-border text-center" />
        </label>
        <label class="bg-guild-base p-4 rounded border border-guild-border flex flex-col items-center cursor-pointer">
            <span class="text-guild-muted text-sm text-center mb-2 uppercase tracking-wide">+1 Képzettség (1 pt)</span>
            <input type="number" bind:value={char.bonusSkillsBought} min="0" class="w-full rounded bg-guild-panel border-guild-border text-center" />
        </label>
        <label class="bg-guild-base p-4 rounded border border-guild-border flex flex-col items-center cursor-pointer">
            <span class="text-guild-muted text-sm text-center mb-2 uppercase tracking-wide">+500$ Pénz (1 pt)</span>
            <input type="number" bind:value={char.bonusFundsBought} min="0" class="w-full rounded bg-guild-panel border-guild-border text-center" />
        </label>
    </div>
</section>