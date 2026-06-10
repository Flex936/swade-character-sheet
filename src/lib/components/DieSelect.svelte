<script lang="ts">
    /**
     * DieSelect — a die-value picker with an enforced upper bound.
     *
     * Props
     * ─────
     * value         (bindable)  Current die index: 0=Képzetlen … 5=d12
     * label                     Display label shown to the left of the select
     * allowUntrained            When true the "Képzetlen" (0) option is shown
     * maxValue      (default 5) The highest option that is NOT disabled.
     *                           Any option with num > maxValue is rendered as
     *                           disabled, preventing the player from selecting
     *                           a die they cannot afford.
     *
     * Why maxValue instead of a boolean canIncrease?
     * ───────────────────────────────────────────────
     * A plain boolean only distinguishes "can increase at all" from "cannot".
     * With maxValue the parent can express "you can afford d8 but not d10"
     * and the browser will gray out exactly those options that are
     * out-of-budget — including unaffordable multi-step jumps — with zero
     * JavaScript event interception needed.
     */
    let {
        value        = $bindable(),
        label,
        allowUntrained = false,
        maxValue       = 5,
    } = $props();

    // All possible options in one flat array; filtered below via $derived so
    // Svelte only re-evaluates the list when allowUntrained actually changes.
    const ALL_OPTIONS = [
        { num: 0, label: 'Képzetlen' },
        { num: 1, label: 'd4'        },
        { num: 2, label: 'd6'        },
        { num: 3, label: 'd8'        },
        { num: 4, label: 'd10'       },
        { num: 5, label: 'd12'       },
    ];

    let options = $derived(
        allowUntrained ? ALL_OPTIONS : ALL_OPTIONS.filter(d => d.num > 0)
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
        class="shrink-0 rounded bg-guild-base text-guild-text border-guild-border
               focus:border-guild-gold focus:ring focus:ring-guild-gold focus:ring-opacity-50
               transition-colors cursor-pointer py-1.5 pl-2 pr-8 text-sm"
    >
        {#each options as die (die.num)}
            <!--
                The guard lives here: a single reactive expression.
                • die.num > maxValue   → option is beyond budget → disabled + grayed out
                • die.num <= maxValue  → option is selectable   (includes current value
                  and everything below it, so lowering is always possible)
            -->
            <option value={die.num} disabled={die.num > maxValue}>
                {die.label}
            </option>
        {/each}
    </select>
</div>