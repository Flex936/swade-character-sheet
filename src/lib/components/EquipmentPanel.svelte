<script lang="ts">
    import type { Character } from '$lib/stores/character.svelte';
    import { equipmentList } from '$lib/data/equipment';

    let { char }: { char: Character } = $props();
    
    let selectedEquipmentId = $state('');

    let groupedEquipment = $derived.by(() => {
        const groups: Record<string, typeof equipmentList> = {};
        equipmentList.forEach(item => {
            if (!groups[item.category]) groups[item.category] = [];
            groups[item.category].push(item);
        });
        return groups;
    });

    function addEquipment() {
        if (!selectedEquipmentId) return;
        const item = equipmentList.find(e => e.id === selectedEquipmentId);
        if (!item) return;

        const existing = char.inventory.find(i => i.id === item.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            char.inventory = [...char.inventory, { ...item, quantity: 1 }];
        }
        selectedEquipmentId = '';
    }

    function updateQuantity(id: string, delta: number) {
        const item = char.inventory.find(i => i.id === id);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                char.inventory = char.inventory.filter(i => i.id !== id);
            }
        }
    }
</script>

<section class="bg-guild-panel p-6 rounded shadow-xl border border-guild-border">
    <div class="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-guild-border pb-4 gap-4">
        <h2 class="text-2xl font-bold text-guild-gold">Felszerelés és Vagyon</h2>
        <div class="flex flex-wrap gap-4">
            <div class="bg-guild-base px-4 py-2 rounded border border-guild-border">
                <span class="font-medium text-guild-muted">Súly: </span>
                <span class="font-bold text-lg" class:text-guild-red={char.currentWeight > char.maxWeight} class:text-guild-text={char.currentWeight <= char.maxWeight}>
                    {char.currentWeight}
                </span>
                <span class="text-guild-muted"> / {char.maxWeight} font</span>
            </div>
            <div class="bg-guild-base px-4 py-2 rounded border border-guild-border">
                <span class="font-medium text-guild-muted">Vagyon: </span>
                <span class="font-bold text-lg" class:text-guild-red={char.remainingFunds < 0} class:text-guild-green={char.remainingFunds >= 0}>
                    ${char.remainingFunds}
                </span>
                <span class="text-guild-muted"> (Kezdő: ${char.startingFunds})</span>
            </div>
        </div>
    </div>

    <div class="mb-6 flex flex-col sm:flex-row gap-4 items-end">
        <div class="flex-1 w-full">
            <label for="eq-select" class="block text-sm font-bold text-guild-muted uppercase tracking-widest mb-2">Tárgy vásárlása</label>
            <select id="eq-select" bind:value={selectedEquipmentId} class="w-full rounded bg-guild-base text-guild-text border-guild-border focus:border-guild-gold focus:ring focus:ring-guild-gold focus:ring-opacity-50">
                <option value="">-- Böngészés a boltban --</option>
                {#each Object.entries(groupedEquipment) as [category, items] (category)}
                    <optgroup label={category} class="bg-guild-panel font-bold text-guild-gold">
                        {#each items as item (item.id)}
                            <option value={item.id} class="text-guild-text font-normal">
                                {item.name} (${item.price} | {item.weight} font)
                            </option>
                        {/each}
                    </optgroup>
                {/each}
            </select>
        </div>
        <button onclick={addEquipment} disabled={!selectedEquipmentId} class="w-full sm:w-auto bg-guild-green text-guild-base font-bold py-[10px] px-8 rounded hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            Megvesz
        </button>
    </div>

    {#if char.inventory.length > 0}
        <div class="bg-guild-base rounded border border-guild-border overflow-hidden">
            <table class="w-full text-left text-sm">
                <thead class="bg-guild-border text-guild-gold uppercase tracking-wider">
                    <tr>
                        <th class="p-3">Tárgy</th>
                        <th class="p-3 text-center">Mennyiség</th>
                        <th class="p-3 text-right">Súly (Össz)</th>
                        <th class="p-3 text-right">Ár (Össz)</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-guild-border">
                    {#each char.inventory as item (item.id)}
                        <tr class="hover:bg-[#231d1a] transition-colors">
                            <td class="p-3 font-medium text-guild-text">{item.name}</td>
                            <td class="p-3 text-center">
                                <div class="flex justify-center items-center gap-3">
                                    <button onclick={() => updateQuantity(item.id, -1)} class="text-guild-red hover:text-red-400 font-bold px-2 py-0.5 bg-guild-panel rounded border border-guild-border">-</button>
                                    <span class="w-4">{item.quantity}</span>
                                    <button onclick={() => updateQuantity(item.id, 1)} class="text-guild-green hover:text-green-400 font-bold px-2 py-0.5 bg-guild-panel rounded border border-guild-border">+</button>
                                </div>
                            </td>
                            <td class="p-3 text-right text-guild-muted">{item.weight * item.quantity} font</td>
                            <td class="p-3 text-right text-guild-red font-medium">-${item.price * item.quantity}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {:else}
        <div class="text-center p-8 border-2 border-dashed border-guild-border rounded text-guild-muted">
            A hátizsákod üres. Vásárolj felszerelést a fenti listából!
        </div>
    {/if}
    
    {#if char.currentWeight > char.maxWeight}
        <div class="mt-4 p-3 bg-guild-red/20 border border-guild-red rounded text-guild-red text-sm font-bold text-center">
            Túlterhelt! A karaktered több súlyt cipel, mint amit az Ereje (d{char.attributes.strength * 2 + 2}) elbír. -1 vagy -2 levonást kaphat az Erő és Ügyesség alapú próbákra!
        </div>
    {/if}
</section>