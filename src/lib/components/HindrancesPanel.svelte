<script lang="ts">
    import type { Character } from '$lib/stores/character.svelte';
    import { hindrances } from '$lib/data/hindrances';

    let { char }: { char: Character } = $props();

    let selectedHindranceId = $state('');
    let selectedSeverity    = $state<'kisebb' | 'jelentős'>('kisebb');

    let activeHindranceTemplate = $derived(
        hindrances.find(h => h.id === selectedHindranceId)
    );

    function addHindrance() {
        if (!activeHindranceTemplate) return;

        const actualSeverity =
            activeHindranceTemplate.severity === 'kisebb/jelentős'
                ? selectedSeverity
                : activeHindranceTemplate.severity;

        const cost     = actualSeverity === 'jelentős' ? 2 : 1;
        const fullName =
            activeHindranceTemplate.severity === 'kisebb/jelentős'
                ? `${activeHindranceTemplate.name} (${actualSeverity === 'jelentős' ? 'Jelentős' : 'Kisebb'})`
                : activeHindranceTemplate.name;

        // Guard: prevent adding the same hindrance twice.
        if (!char.selectedHindrances.find(h => h.id === activeHindranceTemplate!.id)) {
            char.selectedHindrances = [
                ...char.selectedHindrances,
                { id: activeHindranceTemplate!.id, name: fullName, cost },
            ];
        }
        selectedHindranceId = '';
    }

    function removeHindrance(id: string) {
        char.selectedHindrances = char.selectedHindrances.filter(h => h.id !== id);
    }
</script>

<section class="bg-guild-panel p-6 rounded shadow-xl border border-guild-border">
    <!-- ── Header ─────────────────────────────────────────────────────── -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-guild-border pb-4 gap-4">
        <h2 class="text-2xl font-bold text-guild-red">Hátrányok</h2>
        <div class="flex items-center gap-4 bg-guild-base px-4 py-2 rounded border border-guild-border">
            <span class="font-medium text-guild-muted">
                Szerzett Pont:
                <span class="text-guild-text font-bold text-lg">{char.hindrancePointsEarned}</span>
                <span class="text-guild-muted"> / 4</span>
            </span>
            <span
                class="font-bold text-lg border-l border-guild-border pl-4"
                class:text-guild-red={char.hindrancePointsRemaining < 0}
                class:text-guild-gold={char.hindrancePointsRemaining >= 0}
            >
                Elkölthető: {char.hindrancePointsRemaining}
            </span>
        </div>
    </div>

    <!-- ── Hindrance picker ───────────────────────────────────────────── -->
    <div class="mb-6 flex flex-col sm:flex-row gap-4 items-end">
        <div class="flex-1 w-full">
            <label for="hindrance-select" class="block text-sm font-bold text-guild-muted uppercase tracking-widest mb-2">
                Válassz egy hátrányt
            </label>
            <select
                id="hindrance-select"
                bind:value={selectedHindranceId}
                class="w-full rounded bg-guild-base text-guild-text border-guild-border
                       focus:border-guild-gold focus:ring focus:ring-guild-gold focus:ring-opacity-50"
            >
                <option value="">-- Keresés a listában --</option>
                {#each hindrances as h (h.id)}
                    <option value={h.id}>{h.name}</option>
                {/each}
            </select>
        </div>

        <!-- Severity selector — only shown when the hindrance is 'kisebb/jelentős' -->
        {#if activeHindranceTemplate?.severity === 'kisebb/jelentős'}
            <div class="w-full sm:w-48">
                <label for="severity-select" class="block text-sm font-bold text-guild-muted uppercase tracking-widest mb-2">
                    Súlyosság
                </label>
                <select
                    id="severity-select"
                    bind:value={selectedSeverity}
                    class="w-full rounded bg-guild-base text-guild-text border-guild-border
                           focus:border-guild-gold focus:ring focus:ring-guild-gold focus:ring-opacity-50"
                >
                    <option value="kisebb">Kisebb (1 pt)</option>
                    <option value="jelentős">Jelentős (2 pt)</option>
                </select>
            </div>
        {:else if activeHindranceTemplate}
            <div class="w-full sm:w-48">
                <label for="static-severity-display" class="block text-sm font-bold text-guild-muted uppercase tracking-widest mb-2">
                    Súlyosság
                </label>
                <div
                    id="static-severity-display"
                    class="flex items-center h-[42px] px-4 bg-guild-base rounded border border-guild-border
                           text-guild-muted select-none"
                >
                    {activeHindranceTemplate.severity === 'jelentős' ? 'Jelentős (2 pt)' : 'Kisebb (1 pt)'}
                </div>
            </div>
        {/if}

        <button
            onclick={addHindrance}
            disabled={!activeHindranceTemplate}
            class="w-full sm:w-auto bg-guild-gold text-guild-base font-bold py-[10px] px-8 rounded
                   hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Hozzáad
        </button>
    </div>

    <!-- ── Selected hindrances list ───────────────────────────────────── -->
    {#if char.selectedHindrances.length > 0}
        <ul class="mb-6 space-y-2">
            {#each char.selectedHindrances as h (h.id)}
                <li class="flex justify-between items-center bg-guild-base px-4 py-2 rounded border border-guild-border">
                    <span>
                        <span class="font-bold text-guild-red">{h.name}</span>
                        <span class="text-guild-muted text-sm ml-2">({h.cost} pt)</span>
                    </span>
                    <button
                        onclick={() => removeHindrance(h.id)}
                        class="text-guild-red hover:text-red-400 font-bold px-3 py-1 bg-guild-panel
                               rounded border border-guild-border transition-colors"
                    >
                        Eltávolít
                    </button>
                </li>
            {/each}
        </ul>
    {/if}

    <!-- ── Spend options ──────────────────────────────────────────────── -->
    <!--
        FIX (Bug #1): The "+1 Előny (2 pt)" input has been REMOVED from here.
        Edges are now managed exclusively in EdgesPanel below, where selectedEdges.length * 2
        is automatically deducted from hindrancePointsSpent in the Character class.
        This grid is therefore 3 columns (was 4).
    -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 border-t border-guild-border pt-6">
        <label class="bg-guild-base p-4 rounded border border-guild-border flex flex-col items-center cursor-pointer">
            <span class="text-guild-muted text-sm text-center mb-2 uppercase tracking-wide leading-tight">
                +1 Tulajdonság (2 pt)
            </span>
            <input
                type="number"
                bind:value={char.bonusAttributesBought}
                min="0"
                class="w-full rounded bg-guild-panel border-guild-border text-center text-guild-text"
            />
        </label>
        <label class="bg-guild-base p-4 rounded border border-guild-border flex flex-col items-center cursor-pointer">
            <span class="text-guild-muted text-sm text-center mb-2 uppercase tracking-wide leading-tight">
                +1 Képzettség (1 pt)
            </span>
            <input
                type="number"
                bind:value={char.bonusSkillsBought}
                min="0"
                class="w-full rounded bg-guild-panel border-guild-border text-center text-guild-text"
            />
        </label>
        <label class="bg-guild-base p-4 rounded border border-guild-border flex flex-col items-center cursor-pointer">
            <span class="text-guild-muted text-sm text-center mb-2 uppercase tracking-wide leading-tight">
                +500$ Pénz (1 pt)
            </span>
            <input
                type="number"
                bind:value={char.bonusFundsBought}
                min="0"
                class="w-full rounded bg-guild-panel border-guild-border text-center text-guild-text"
            />
        </label>
    </div>

    <!-- Hint about edge purchases -->
    <p class="text-guild-muted text-xs italic text-center mt-4">
        Előnyök (Edges) vásárlásához (2 pt / db) az alábbi <span class="text-guild-gold not-italic">Előnyök</span> szekciót használd.
    </p>
</section>