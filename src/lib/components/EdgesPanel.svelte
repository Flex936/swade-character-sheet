<script lang="ts">
    import type { Character } from '$lib/stores/character.svelte';
    import { edgesList } from '$lib/data/edges';

    let { char }: { char: Character } = $props();
    
    let selectedEdgeId = $state('');

    // Kategóriákba rendezzük az Előnyöket a lenyíló menühöz
    let groupedEdges = $derived.by(() => {
        const groups: Record<string, typeof edgesList> = {};
        edgesList.forEach(edge => {
            if (!groups[edge.category]) groups[edge.category] = [];
            groups[edge.category].push(edge);
        });
        return groups;
    });

    function addEdge() {
        if (!selectedEdgeId) return;
        const edge = edgesList.find(e => e.id === selectedEdgeId);
        if (!edge) return;

        // Csak akkor adjuk hozzá, ha még nincs a listán
        if (!char.selectedEdges.find(e => e.id === edge.id)) {
            char.selectedEdges = [...char.selectedEdges, edge];
        }
        selectedEdgeId = '';
    }

    function removeEdge(id: string) {
        char.selectedEdges = char.selectedEdges.filter(e => e.id !== id);
    }
</script>

<section class="bg-guild-panel p-6 rounded shadow-xl border border-guild-border">
    <div class="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-guild-border pb-4 gap-4">
        <h2 class="text-2xl font-bold text-guild-gold">Előnyök (Edges)</h2>
        <div class="text-guild-muted text-sm italic">
            Minden előny megvásárolható 2 Hátránypontért.
        </div>
    </div>

    <div class="mb-6 flex flex-col sm:flex-row gap-4 items-end">
        <div class="flex-1 w-full">
            <label for="edge-select" class="block text-sm font-bold text-guild-muted uppercase tracking-widest mb-2">Új Előny Felvétele</label>
            <select id="edge-select" bind:value={selectedEdgeId} class="w-full rounded bg-guild-base text-guild-text border-guild-border focus:border-guild-gold focus:ring focus:ring-guild-gold focus:ring-opacity-50">
                <option value="">-- Böngészés az Előnyök között --</option>
                {#each Object.entries(groupedEdges) as [category, edges] (category)}
                    <optgroup label={category} class="bg-guild-panel font-bold text-guild-gold">
                        {#each edges as edge (edge.id)}
                            <option value={edge.id} class="text-guild-text font-normal">
                                {edge.name} (Köv: {edge.requirements})
                            </option>
                        {/each}
                    </optgroup>
                {/each}
            </select>
        </div>
        <button onclick={addEdge} disabled={!selectedEdgeId} class="w-full sm:w-auto bg-guild-gold text-guild-base font-bold py-[10px] px-8 rounded hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            Hozzáad
        </button>
    </div>

    {#if char.selectedEdges.length > 0}
        <div class="space-y-3">
            {#each char.selectedEdges as edge (edge.id)}
                <div class="bg-guild-base p-4 rounded border border-guild-border relative group">
                    <button 
                        onclick={() => removeEdge(edge.id)} 
                        class="absolute top-4 right-4 text-guild-red hover:text-red-400 font-bold px-2 py-1 bg-guild-panel rounded border border-guild-border transition-colors text-xs uppercase"
                        title="Eltávolítás"
                    >
                        X
                    </button>
                    
                    <h3 class="font-bold text-guild-gold text-lg mb-1">{edge.name}</h3>
                    <div class="text-xs font-bold text-guild-muted uppercase tracking-wider mb-2 pb-2 border-b border-guild-border/50">
                        Követelmény: <span class="text-guild-text">{edge.requirements}</span>
                    </div>
                    <p class="text-sm text-guild-text leading-relaxed">
                        {edge.description}
                    </p>
                </div>
            {/each}
        </div>
    {:else}
        <div class="text-center p-8 border-2 border-dashed border-guild-border rounded text-guild-muted">
            A karaktered még nem rendelkezik különleges Előnyökkel.
        </div>
    {/if}
</section>