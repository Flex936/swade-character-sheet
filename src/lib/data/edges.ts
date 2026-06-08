export interface Edge {
    id: string;
    category: string;
    name: string;
    requirements: string;
    description: string;
}

export const edgesList: Edge[] = [
    // --- HARCI ELŐNYÖK ---
    { id: 'azonnali_tamadas', category: 'Harci Előnyök', name: 'Azonnali támadás', requirements: 'K, Ügy d8', description: 'Amikor az ellenfél hatókörön belül ér, a hős körönként egyszer ingyen dobhat közelharci támadást.' },
    { id: 'biztos_kezu', category: 'Harci Előnyök', name: 'Biztos kezű', requirements: 'K, Ügy d8', description: 'A bizonytalanságból eredő levonás nem érvényesül, a futásból eredő levonás 1-gyel csökken.' },
    { id: 'bunyos', category: 'Harci Előnyök', name: 'Bunyós', requirements: 'K, Él d8, Er d8', description: 'Szívósság +1, fegyvertelen támadásnál (ököl, rúgás) a sebzés d4-gyel nő.' },
    { id: 'csel', category: 'Harci Előnyök', name: 'Csel', requirements: 'K, Közelharc d8', description: 'Közelharcot használó próbátételnél a hős eldöntheti, hogy ellenfele Ügyességgel vagy Ésszel álljon ellen.' },
    { id: 'ellentamadas', category: 'Harci Előnyök', name: 'Ellentámadás', requirements: 'Har, Közelharc d8', description: 'Amikor a hősön a sor, ingyenes támadás egy közelharci dobást elvétő ellenfél ellen.' },
    { id: 'kétöklü', category: 'Harci Előnyök', name: 'Kétöklű', requirements: 'K, Ügy d8', description: 'Többszöri cselekedetből eredő levonás nélkül hajthat végre támadást az ügyetlen kézben lévő fegyverrel.' },
    { id: 'kétpisztolyos', category: 'Harci Előnyök', name: 'Kétpisztolyos', requirements: 'K, Ügy d8', description: 'Többszöri cselekedetből eredő levonás nélkül hajthat végre lövést az ügyetlen kézben lévő fegyverrel.' },
    { id: 'vedjegyfegyver', category: 'Harci Előnyök', name: 'Védjegyfegyver', requirements: 'K, d8 vonatkozó képzettség', description: '+1 egy bizonyos fegyverrel a támadásdobásokra, és +1 hárítás, ha előkészített.' },

    // --- HÁTTÉRBŐL SZÁRMAZÓ ELŐNYÖK ---
    { id: 'arisztokrata', category: 'Háttérből származó Előnyök', name: 'Arisztokrata', requirements: 'K', description: '+2 általános ismeretekre és a felső rétegbeli ismeretségekre.' },
    { id: 'bator', category: 'Háttérből származó Előnyök', name: 'Bátor', requirements: 'K, L d6', description: '+2 félelempróbákra és -2-vel dob a félelemtáblán.' },
    { id: 'eber', category: 'Háttérből származó Előnyök', name: 'Éber', requirements: 'K', description: '+2 észleléspróbákra.' },
    { id: 'gazdag', category: 'Háttérből származó Előnyök', name: 'Gazdag', requirements: 'K', description: 'A kezdőösszeg háromszorosa és 150K éves bevétel.' },
    { id: 'szerencses', category: 'Háttérből származó Előnyök', name: 'Szerencsés', requirements: 'K', description: '+1 jóság minden játékalkalom elején.' },

    // --- KAPCSOLATI ELŐNYÖK ---
    { id: 'alvilagi', category: 'Kapcsolati Előnyök', name: 'Alvilági', requirements: 'K, Ész d6', description: '+2 általános ismeretekre és a bűnözők közötti ismeretségekre.' },
    { id: 'eroskaratu', category: 'Kapcsolati Előnyök', name: 'Erőskaratu', requirements: 'K, L d8', description: '+2 az ész és lélek alapú próbátételekkel szembeni ellenállásra.' },
    { id: 'megbizhato', category: 'Kapcsolati Előnyök', name: 'Megbízható', requirements: 'K, L d8', description: 'Támogatáspróbák dobásainál ingyenes újradobás.' },

    // --- SZAKMAI ELŐNYÖK ---
    { id: 'akrobata', category: 'Szakmai Előnyök', name: 'Akrobata', requirements: 'K, F d8, Atlétika d8', description: 'A hős ingyen újradobhatja az akrobatikus atlétikapróbákat.' },
    { id: 'ezermester', category: 'Szakmai Előnyök', name: 'Ezermester', requirements: 'K, Javítás d8', description: '+2 javításdobásokra, emeléssel feleannyi időt vesz igénybe.' },
    { id: 'nyomozo', category: 'Szakmai Előnyök', name: 'Nyomozó', requirements: 'K, Ész d8, Kutatómunka d8', description: '+2 a kutatómunkára és egyes észleléspróbákra.' },
    { id: 'orgyilkos', category: 'Szakmai Előnyök', name: 'Orgyilkos', requirements: 'K, F d8, Közelharc d6, Lopakodás d8', description: '+2 a sebezhető ellenfelek elleni sebzéshez, vagy amikor készületlenül éri ellenfelét.' },
    { id: 'tolvaj', category: 'Szakmai Előnyök', name: 'Tolvaj', requirements: 'K, F d8, Lopakodás d6, Tolvajlás d6', description: '+1 tolvajlásra, mászásra és városi lopakodásra.' },

    // --- VEZETŐI ELŐNYÖK ---
    { id: 'parancsnok', category: 'Vezetői Előnyök', name: 'Parancsnok', requirements: 'K, Ész d6', description: 'A statiszták +1-gyel próbálhatnak magukhoz térni zavarodott vagy kába állapotból (Hatótáv 5").' },

    // --- ERŐBŐL SZÁRMAZÓ ELŐNYÖK ---
    { id: 'mentalista', category: 'Erőből származó Előnyök', name: 'Mentalista', requirements: 'Har, MH (Pszionika), Pszionika d6', description: '+2 a pszionika ellendobásaira.' },
    
    // --- KÜLÖNÖS ELŐNYÖK ---
    { id: 'allatok_ura', category: 'Különös Előnyök', name: 'Állatok ura', requirements: 'K, L d8', description: 'Az állatok kedvelik a hőst, van állati társa.' },
    { id: 'veszelyerzet', category: 'Különös Előnyök', name: 'Veszélyérzet', requirements: 'K', description: 'Észleléspróba +2-vel helyzetek és események megérzésére.' }
];