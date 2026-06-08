<script lang="ts">
    import type { Character } from '$lib/stores/character.svelte';

    let { char }: { char: Character } = $props();
</script>

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