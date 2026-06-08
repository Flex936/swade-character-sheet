export interface EquipmentItem {
    id: string;
    category: string;
    name: string;
    price: number;
    weight: number;
    notes?: string;
}

export const equipmentList: EquipmentItem[] = [
    // Állatok és szerszám
    { id: 'lo', category: 'Állatok és szerszám', name: 'Ló', price: 300, weight: 0 },
    { id: 'csatalo', category: 'Állatok és szerszám', name: 'Csataló', price: 750, weight: 0 },
    { id: 'nyereg', category: 'Állatok és szerszám', name: 'Nyereg', price: 10, weight: 10 },
    
    // Élelem
    { id: 'uti_ellatmany', category: 'Élelem', name: 'Úti ellátmány (1 hét)', price: 10, weight: 5 },
    { id: 'mre', category: 'Élelem', name: 'MRE (Katonai készétel)', price: 10, weight: 1 },
    
    // Kalandozófelszerelés
    { id: 'hatizsak', category: 'Kalandozófelszerelés', name: 'Hátizsák', price: 50, weight: 2 },
    { id: 'faklya', category: 'Kalandozófelszerelés', name: 'Fáklya', price: 5, weight: 1 },
    { id: 'kotel_kender', category: 'Kalandozófelszerelés', name: 'Kötél (kender, 20m)', price: 10, weight: 15 },
    { id: 'elsosegely', category: 'Kalandozófelszerelés', name: 'Elsősegély-felszerelés (3 alk.)', price: 10, weight: 1 },
    { id: 'tolvajkulcs', category: 'Kalandozófelszerelés', name: 'Tolvajkulcsok', price: 200, weight: 1 },
    { id: 'halozsak', category: 'Kalandozófelszerelés', name: 'Hálózsák (téliesített)', price: 25, weight: 4 },
    
    // Páncélok és Pajzsok
    { id: 'bor_kabat', category: 'Páncélok és Pajzsok', name: 'Bőrkabát (+1 Páncél)', price: 20, weight: 5, notes: 'Min Erő: d4' },
    { id: 'lanc_ing', category: 'Páncélok és Pajzsok', name: 'Láncing felső (+3 Páncél)', price: 300, weight: 25, notes: 'Min Erő: d8' },
    { id: 'kevlarmelleny', category: 'Páncélok és Pajzsok', name: 'Kevlárfelső (+2* Páncél)', price: 500, weight: 5, notes: 'Min Erő: d6' },
    { id: 'pajzs_kozepes', category: 'Páncélok és Pajzsok', name: 'Közepes pajzs (+2 Hárítás)', price: 100, weight: 8, notes: 'Min Erő: d6, Fedezék: -2' },

    // Fegyverek - Közelharci
    { id: 'tor', category: 'Közelharci fegyverek', name: 'Tőr/Kés (Erő+d4)', price: 20, weight: 1 },
    { id: 'hosszukard', category: 'Közelharci fegyverek', name: 'Hosszúkard (Erő+d8)', price: 300, weight: 3, notes: 'Min Erő: d8' },
    { id: 'csatabard', category: 'Közelharci fegyverek', name: 'Csatabárd (Erő+d8)', price: 200, weight: 4, notes: 'Min Erő: d8' },
    { id: 'kard_ketkezes', category: 'Közelharci fegyverek', name: 'Kétkezes kard (Erő+d10)', price: 400, weight: 5, notes: 'Min Erő: d10, Kétkezes' },

    // Fegyverek - Távolsági
    { id: 'hosszuij', category: 'Távolsági fegyverek', name: 'Hosszúíj (2d6, Lőtáv: 15/30/60)', price: 300, weight: 3, notes: 'Min Erő: d8, PT: 1' },
    { id: 'colt_1911', category: 'Távolsági fegyverek', name: 'Colt 1911 .45 (2d6+1, Lőtáv: 12/24/48)', price: 200, weight: 4, notes: 'Min Erő: d4, Tár: 7, PT: 1' },
    { id: 'ak_47', category: 'Távolsági fegyverek', name: 'AK-47 (2d8+1, Lőtáv: 24/48/96)', price: 450, weight: 10, notes: 'Min Erő: d6, Tár: 30, PT: 2' },
    { id: 'soretes_duplacsovu', category: 'Távolsági fegyverek', name: 'Duplacsövű Sörétes (1-3d6)', price: 150, weight: 11, notes: 'Min Erő: d6, Tár: 2' },

    // Lőszer
    { id: 'loszer_kozepes', category: 'Lőszer', name: 'Lőszer - Közepes (50 db)', price: 20, weight: 2 },
    { id: 'nyilvesszo', category: 'Lőszer', name: 'Nyílvessző/Számszeríj lövedék (5 db)', price: 1, weight: 1 }
];