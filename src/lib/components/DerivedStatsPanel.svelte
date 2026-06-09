<script lang="ts">
    import type { Character } from '$lib/stores/character.svelte';

    let { char }: { char: Character } = $props();
</script>

<!--
    FIX (Bug #4): `armor` and `pace` were `$state` variables in the Character
    class but were never exposed anywhere in the UI, making them permanently
    stuck at their default values (0 and 6). This meant:
      • Toughness never reflected equipped armor (chainmail, kevlar, etc.)
      • Pace could not be reduced for hindrances like Lassú, Kövér, or Idős.
    
    Solution: add two small editable inputs below the three derived stat boxes.
    The big display numbers (Iram, Hárítás, Szívósság) always show the computed
    values, while the inputs give the player a direct way to adjust the two
    underlying mutable fields.
-->
<section class="bg-guild-panel p-6 rounded shadow-xl border border-guild-border h-fit">
    <h2 class="text-2xl font-bold text-guild-gold mb-6 border-b border-guild-border pb-2">
        Származtatott Adatok
    </h2>

    <!-- ── Primary derived stats (read-only display) ─────────────────── -->
    <div class="grid grid-cols-3 gap-4 text-center mb-6">
        <div class="bg-guild-base p-4 rounded border border-guild-border">
            <span class="block text-xs text-guild-muted uppercase tracking-widest mb-1">Iram</span>
            <span class="block text-4xl font-bold text-guild-text">{char.pace}</span>
        </div>
        <div class="bg-guild-base p-4 rounded border border-guild-border">
            <span class="block text-xs text-guild-muted uppercase tracking-widest mb-1">Hárítás</span>
            <span class="block text-4xl font-bold text-guild-text">{char.parry}</span>
        </div>
        <div class="bg-guild-base p-4 rounded border border-guild-border">
            <span class="block text-xs text-guild-muted uppercase tracking-widest mb-1">Szívósság</span>
            <span class="block text-4xl font-bold text-guild-text">{char.toughness}</span>
        </div>
    </div>

    <!-- ── Manual modifier inputs ─────────────────────────────────────── -->
    <div class="border-t border-guild-border pt-4">
        <p class="text-xs text-guild-muted uppercase tracking-widest mb-3">Módosítók</p>
        <div class="grid grid-cols-2 gap-4">
            <!-- Pace: default 6; reduced by Lassú, Kövér, Idős hindrances, etc. -->
            <label class="bg-guild-base p-3 rounded border border-guild-border flex flex-col items-center cursor-pointer">
                <span class="text-guild-muted text-xs mb-2 uppercase tracking-wide text-center leading-tight">
                    Iram alap
                </span>
                <input
                    type="number"
                    bind:value={char.pace}
                    min="1"
                    class="w-full rounded bg-guild-panel border-guild-border text-center text-guild-text"
                />
            </label>

            <!-- Armor: manually set to match the armor item(s) the character is wearing.
                 Affects Szívósság: Toughness = 2 + half(Vigor) + armor. -->
            <label class="bg-guild-base p-3 rounded border border-guild-border flex flex-col items-center cursor-pointer">
                <span class="text-guild-muted text-xs mb-2 uppercase tracking-wide text-center leading-tight">
                    Páncél értéke
                </span>
                <input
                    type="number"
                    bind:value={char.armor}
                    min="0"
                    class="w-full rounded bg-guild-panel border-guild-border text-center text-guild-text"
                />
            </label>
        </div>
    </div>
</section>