<script lang="ts">
    let { value = $bindable(), label, allowUntrained = false } = $props();

    const diceOptions = [
        { num: 1, label: 'd4' },
        { num: 2, label: 'd6' },
        { num: 3, label: 'd8' },
        { num: 4, label: 'd10' },
        { num: 5, label: 'd12' }
    ];
    
    let options = $derived(
        allowUntrained ? [{ num: 0, label: 'Képzetlen' }, ...diceOptions] : diceOptions
    );
</script>

<div class="flex flex-row items-center justify-between py-2 border-b border-guild-border last:border-0 gap-2">
    <label 
        for="die-{label}" 
        title={label}
        class="font-medium text-guild-text text-sm truncate flex-1 min-w-0"
    >
        {label}
    </label>
    
    <select 
        bind:value={value}
        id="die-{label}"
        class="shrink-0 rounded bg-guild-base text-guild-text border-guild-border focus:border-guild-gold focus:ring focus:ring-guild-gold focus:ring-opacity-50 transition-colors cursor-pointer py-1.5 pl-2 pr-8 text-sm"
    >
        {#each options as die (die.num)}
            <option value={die.num}>{die.label}</option>
        {/each}
    </select>
</div>