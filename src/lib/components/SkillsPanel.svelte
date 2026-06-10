<script lang="ts">
    import { type Character, SKILL_LINK } from '$lib/stores/character.svelte';
    import DieSelect from './DieSelect.svelte';

    let { char }: { char: Character } = $props();

    const optionalSkillsList: { key: keyof typeof char.skills; label: string }[] = [
        { key: 'weirdScience', label: 'Bizarr tudomány'      },
        { key: 'humanities',   label: 'Bölcsészettudomány'   },
        { key: 'electronics',  label: 'Elektrotechnika'       },
        { key: 'performance',  label: 'Előadóművészet'        },
        { key: 'focus',        label: 'Fókusz'                },
        { key: 'taunt',        label: 'Gúnyolódás'            },
        { key: 'healing',      label: 'Gyógyítás'             },
        { key: 'battle',       label: 'Hadvezetés'            },
        { key: 'boating',      label: 'Hajózás'               },
        { key: 'gambling',     label: 'Hazárdjáték'           },
        { key: 'hacking',      label: 'Hekkelés'              },
        { key: 'faith',        label: 'Hit'                   },
        { key: 'driving',      label: 'Járművezetés'          },
        { key: 'repair',       label: 'Javítás'               },
        { key: 'fighting',     label: 'Közelharc'             },
        { key: 'research',     label: 'Kutatómunka'           },
        { key: 'riding',       label: 'Lovaglás'              },
        { key: 'shooting',     label: 'Lövés'                 },
        { key: 'intimidation', label: 'Megfélemlítés'         },
        { key: 'language',     label: 'Nyelv'                 },
        { key: 'occult',       label: 'Okkultizmus'           },
        { key: 'psionics',     label: 'Pszionika'             },
        { key: 'piloting',     label: 'Repülés'               },
        { key: 'science',      label: 'Természettudomány'     },
        { key: 'thievery',     label: 'Tolvajlás'             },
        { key: 'survival',     label: 'Túlélés'               },
        { key: 'spellcasting', label: 'Varázslás'             },
    ];

    /**
     * Returns the highest die index the player can afford to select for a
     * given skill in a single dropdown interaction.
     *
     * The algorithm mirrors the cost formula in Character.skillSpent:
     *   • Each step up to (and including) the linked attribute die costs 1 pt.
     *   • Each step above the linked attribute costs 2 pts.
     *
     * We walk forward from the current value, deducting the cost of each next
     * step from a LOCAL copy of skillPointsRemaining.  The walk stops as soon
     * as we can no longer afford the next step — because costs never decrease
     * as we go higher, no higher step will be affordable either.
     *
     * This correctly prevents multi-step jumps that would collectively exceed
     * the remaining budget (e.g. blocking d12 when only 1 pt remains and the
     * skill is already at its linked attribute die, even though d8→d10 would
     * be a valid single-step purchase).
     *
     * Svelte 5 tracks every reactive read inside this function when it is
     * called from a template expression, so options are re-evaluated
     * automatically whenever any skill, attribute, or budget value changes.
     */
    function maxSkillValue(skillKey: keyof typeof char.skills): number {
        const currentVal = char.skills[skillKey];
        const attrVal    = char.attributes[SKILL_LINK[skillKey]];
        let remaining    = char.skillPointsRemaining;
        let maxVal       = currentVal; // the current die is always selectable

        for (let nextVal = currentVal + 1; nextVal <= 5; nextVal++) {
            const stepCost = nextVal <= attrVal ? 1 : 2;
            if (remaining >= stepCost) {
                remaining -= stepCost;
                maxVal     = nextVal;
            } else {
                // Can't afford this step; higher steps are equally or more
                // expensive so there's no point continuing the loop.
                break;
            }
        }
        return maxVal;
    }
</script>

<section class="bg-guild-panel p-6 rounded shadow-xl border border-guild-border">
    <div class="flex justify-between items-end mb-6 border-b border-guild-border pb-2">
        <h2 class="text-2xl font-bold text-guild-gold">Képzettségek</h2>
        <span class="font-bold text-lg" class:text-guild-red={char.skillPointsRemaining < 0}>
            Pontok: {char.skillPointsRemaining} / 12
        </span>
    </div>

    <!-- ── Core skills ─────────────────────────────────────────────────── -->
    <div class="mb-8">
        <h3 class="text-sm font-bold text-guild-muted uppercase tracking-widest mb-4">
            Alapképzettségek
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-2 bg-guild-base p-4 rounded border border-guild-border">
            <DieSelect
                label="Atlétika"
                bind:value={char.skills.athletics}
                maxValue={maxSkillValue('athletics')}
            />
            <DieSelect
                label="Általános ismeretek"
                bind:value={char.skills.commonKnowledge}
                maxValue={maxSkillValue('commonKnowledge')}
            />
            <DieSelect
                label="Észlelés"
                bind:value={char.skills.notice}
                maxValue={maxSkillValue('notice')}
            />
            <DieSelect
                label="Lopakodás"
                bind:value={char.skills.stealth}
                maxValue={maxSkillValue('stealth')}
            />
            <DieSelect
                label="Meggyőzés"
                bind:value={char.skills.persuasion}
                maxValue={maxSkillValue('persuasion')}
            />
        </div>
    </div>

    <!-- ── Optional skills ─────────────────────────────────────────────── -->
    <div>
        <h3 class="text-sm font-bold text-guild-muted uppercase tracking-widest mb-4">
            Választható Képzettségek
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-1">
            {#each optionalSkillsList as skill (skill.key)}
                <DieSelect
                    label={skill.label}
                    bind:value={char.skills[skill.key]}
                    allowUntrained={true}
                    maxValue={maxSkillValue(skill.key)}
                />
            {/each}
        </div>
    </div>
</section>