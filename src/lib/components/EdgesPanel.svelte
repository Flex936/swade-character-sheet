<script lang="ts">
    import type { Character } from '$lib/stores/character.svelte';
    import { edgesList } from '$lib/data/edges';

    let { char }: { char: Character } = $props();

    let selectedEdgeId = $state('');

    // Group edges by category for the <optgroup> select — $derived.by keeps
    // the grouping object stable and reactive.
    let groupedEdges = $derived.by(() => {
        const groups: Record<string, typeof edgesList> = {};
        for (const edge of edgesList) {
            (groups[edge.category] ??= []).push(edge);
        }
        return groups;
    });

    function addEdge() {
        if (!selectedEdgeId) return;
        const edge = edgesList.find(e => e.id === selectedEdgeId);
        if (!edge) return;
        // Guard: prevent adding the same edge twice.
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
    <!-- ── Header with live budget readout ───────────────────────────── -->
    <!--
        FIX (Bug #1 + Bug #6): Now that selectedEdges.length * 2 feeds directly
        into hindrancePointsSpent, this panel shows the live effect on the budget.
        The player can see exactly how many points edges cost and what remains.
    -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-guild-border pb-4 gap-4">
        <h2 class="text-2xl font-bold text-guild-gold">Előnyök</h2>

        <div class="flex items-center gap-4 bg-guild-base px-4 py-2 rounded border border-guild-border">
            <span class="font-medium text-guild-muted text-sm">
                Felvett Előnyök:
                <span class="text-guild-text font-bold">{char.selectedEdges.length} db</span>
                <span class="text-guild-muted ml-1">
                    ({char.selectedEdges.length * 2} pt felhasználva)
                </span>
            </span>
            <span
                class="font-bold text-lg border-l border-guild-border pl-4"
                class:text-guild-red={char.hindrancePointsRemaining < 0}
                class:text-guild-gold={char.hindrancePointsRemaining >= 0}
            >
                Maradék: {char.hindrancePointsRemaining}
            </span>
        </div>
    </div>

    <!-- ── Edge picker ────────────────────────────────────────────────── -->
    <div class="mb-6 flex flex-col sm:flex-row gap-4 items-end">
        <div class="flex-1 w-full">
            <label for="edge-select" class="block text-sm font-bold text-guild-muted uppercase tracking-widest mb-2">
                Új Előny Felvétele
            </label>
            <select
                id="edge-select"
                bind:value={selectedEdgeId}
                class="w-full rounded bg-guild-base text-guild-text border-guild-border
                       focus:border-guild-gold focus:ring focus:ring-guild-gold focus:ring-opacity-50"
            >
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

        <!-- Button label now shows the cost so the player always knows -->
        <button
            onclick={addEdge}
            disabled={!selectedEdgeId}
            class="w-full sm:w-auto bg-guild-gold text-guild-base font-bold py-[10px] px-8 rounded
                   hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                   whitespace-nowrap"
        >
            Hozzáad (2 pt)
        </button>
    </div>

    <!-- ── Selected edges list ────────────────────────────────────────── -->
    {#if char.selectedEdges.length > 0}
        <div class="space-y-3">
            {#each char.selectedEdges as edge (edge.id)}
                <div class="bg-guild-base p-4 rounded border border-guild-border relative">
                    <button
                        onclick={() => removeEdge(edge.id)}
                        class="absolute top-4 right-4 text-guild-red hover:text-red-400 font-bold
                               px-2 py-1 bg-guild-panel rounded border border-guild-border
                               transition-colors text-xs uppercase"
                        title="Eltávolítás"
                    >
                        X
                    </button>

                    <!-- pr-16 reserves space so long names never overlap the X button -->
                    <h3 class="font-bold text-guild-gold text-lg mb-1 pr-16 leading-tight">
                        {edge.name}
                    </h3>
                    <div class="text-xs font-bold text-guild-muted uppercase tracking-wider mb-2 pb-2 border-b border-guild-border/50">
                        Követelmény: <span class="text-guild-text normal-case">{edge.requirements}</span>
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