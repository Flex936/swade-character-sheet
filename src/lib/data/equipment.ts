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
    { id: 'diszes_nyereg', category: 'Állatok és szerszám', name: 'Díszes nyereg', price: 50, weight: 10 },
    
    // Élelem
    { id: 'gyorsetkezdei_etel', category: 'Élelem', name: 'Gyorsétkezdei étel', price: 8, weight: 1 },
    { id: 'jo_minosegu_etel', category: 'Élelem', name: 'Jó minőségű étel (éttermi)', price: 15, weight: 0 },
    { id: 'uti_ellatmany', category: 'Élelem', name: 'Úti ellátmány', price: 10, weight: 5 },
    { id: 'mre', category: 'Élelem', name: 'MRE (Katonai készétel)', price: 10, weight: 1 },
    
    // Kalandozófelszerelés
    { id: 'bilincs', category: 'Kalandozófelszerelés', name: 'Bilincs (béklyó)', price: 15, weight: 2 },
    { id: 'csajka', category: 'Kalandozófelszerelés', name: 'Csajka (vizestömlő)', price: 5, weight: 1 },
    { id: 'csaklya', category: 'Kalandozófelszerelés', name: 'Csáklya', price: 100, weight: 2 },
    { id: 'elemlampa', category: 'Kalandozófelszerelés', name: 'Elemlámpa (10" fénypászma)', price: 20, weight: 3 },
    { id: 'esernyo', category: 'Kalandozófelszerelés', name: 'Esernyő', price: 5, weight: 2 },
    { id: 'hatizsak', category: 'Kalandozófelszerelés', name: 'Hátizsák', price: 50, weight: 2 },
    { id: 'faklya', category: 'Kalandozófelszerelés', name: 'Fáklya', price: 5, weight: 1 },
    { id: 'kotel_kender', category: 'Kalandozófelszerelés', name: 'Kötél (kender, 20m)', price: 10, weight: 15 },
    { id: 'elsosegely', category: 'Kalandozófelszerelés', name: 'Elsősegély-felszerelés (3 alk.)', price: 10, weight: 1 },
    { id: 'tolvajkulcs', category: 'Kalandozófelszerelés', name: 'Tolvajkulcsok', price: 200, weight: 1 },
    { id: 'halozsak', category: 'Kalandozófelszerelés', name: 'Hálózsák (téliesített)', price: 25, weight: 4 },
    
    // Ókori és középkori vértek
    { id: 'kabat_1', category: 'Ókori és középkori vértek', name: 'Kabát (+1, felsőtest/karok)', price: 20, weight: 5, notes: 'Min Erő: d4' },
    { id: 'kopeny_1', category: 'Ókori és középkori vértek', name: 'Köpeny (+1, felsőtest/karok/lábak)', price: 30, weight: 8, notes: 'Min Erő: d4' },
    { id: 'nadrag_1', category: 'Ókori és középkori vértek', name: 'Nadrág (+1, lábak)', price: 20, weight: 5, notes: 'Min Erő: d4' },
    { id: 'sapka_1', category: 'Ókori és középkori vértek', name: 'Sapka (+1, fej)', price: 5, weight: 1, notes: 'Min Erő: d4' },
    { id: 'kabat_2', category: 'Ókori és középkori vértek', name: 'Vastag Kabát (+2, felsőtest/karok)', price: 80, weight: 8, notes: 'Min Erő: d6' },
    { id: 'nadrag_2', category: 'Ókori és középkori vértek', name: 'Vastag Nadrág (+2, lábak)', price: 40, weight: 7, notes: 'Min Erő: d6' },
    { id: 'sapka_2', category: 'Ókori és középkori vértek', name: 'Vastag Sapka (+2, fej)', price: 20, weight: 2, notes: 'Min Erő: d6' },
    { id: 'felsuresz_3', category: 'Ókori és középkori vértek', name: 'Felsőrész/Láncing (+3, felsőtest/karok)', price: 300, weight: 25, notes: 'Min Erő: d8' },
    { id: 'nadrag_3', category: 'Ókori és középkori vértek', name: 'Láncnadrág (+3, lábak)', price: 150, weight: 10, notes: 'Min Erő: d8' },
    { id: 'sodrony_sisak_3', category: 'Ókori és középkori vértek', name: 'Sodronycsuklya / Sisak (+3, fej)', price: 25, weight: 4, notes: 'Min Erő: d8' },
    { id: 'bronz_lovert_3', category: 'Ókori és középkori vértek', name: 'Bronz lóvért (+3, ló)', price: 1500, weight: 50, notes: 'Min Erő: d10' },
    { id: 'bronz_sisak_3', category: 'Ókori és középkori vértek', name: 'Bronz sisak (+3, fej)', price: 25, weight: 6, notes: 'Min Erő: d8' },
    { id: 'bronz_vert_3', category: 'Ókori és középkori vértek', name: 'Bronz vért (+3, felsőtest)', price: 80, weight: 13, notes: 'Min Erő: d8' },
    { id: 'karvert_3', category: 'Ókori és középkori vértek', name: 'Karvért (+3, karok)', price: 40, weight: 6, notes: 'Min Erő: d8' },
    { id: 'labvert_3', category: 'Ókori és középkori vértek', name: 'Lábvért (+3, lábak)', price: 50, weight: 6, notes: 'Min Erő: d8' },
    { id: 'fazeksisak_4', category: 'Ókori és középkori vértek', name: 'Fazéksisak (+4, fej)', price: 100, weight: 4, notes: 'Min Erő: d10' },
    { id: 'karvas_4', category: 'Ókori és középkori vértek', name: 'Karvas (+4, karok)', price: 200, weight: 10, notes: 'Min Erő: d10' },
    { id: 'labvas_4', category: 'Ókori és középkori vértek', name: 'Lábvas (+4, lábak)', price: 200, weight: 10, notes: 'Min Erő: d10' },
    { id: 'lemezes_lovert_4', category: 'Ókori és középkori vértek', name: 'Lemezes lóvért (+4, ló)', price: 1500, weight: 50, notes: 'Min Erő: d10' },
    { id: 'mellvert_4', category: 'Ókori és középkori vértek', name: 'Mellvért (+4, felsőtest)', price: 500, weight: 30, notes: 'Min Erő: d10' },
    { id: 'zart_sisak_4', category: 'Ókori és középkori vértek', name: 'Zárt sisak (+4, fej)', price: 200, weight: 8, notes: 'Min Erő: d10. –1 a látáson alapuló észleléspróbákra.' },

    // Modern páncélok
    { id: 'vastag_teli_ruha', category: 'Modern páncélok', name: 'Vastag téli ruházat (+1)', price: 70, weight: 5, notes: 'Min Erő: d4. Bőrkabát, bőrnadrág, motorosnadrág is idetartozik.' },
    { id: 'bor_motorosnadrag', category: 'Modern páncélok', name: 'Bőr motorosnadrág (+2, lábak)', price: 350, weight: 8, notes: 'Min Erő: d4' },
    { id: 'kevlar_motoroskabat', category: 'Modern páncélok', name: 'Kevlár motoroskabát (+2*, felsőtest/karok)', price: 175, weight: 4, notes: 'Min Erő: d4' },
    { id: 'kevlar_motorosnadrag', category: 'Modern páncélok', name: 'Kevlár motorosnadrág (+2*, lábak)', price: 175, weight: 4, notes: 'Min Erő: d4' },
    { id: 'motorossisak_nyitott', category: 'Modern páncélok', name: 'Motorossisak, nyitott (+2, fej)', price: 100, weight: 3, notes: 'Min Erő: d4' },
    { id: 'motorossisak_zart', category: 'Modern páncélok', name: 'Motorossisak, zárt (+3, fej)', price: 200, weight: 5, notes: 'Min Erő: d4' },
    { id: 'vastag_kabat', category: 'Modern páncélok', name: 'Vastag kabát/bőrkabát (+1, felsőtest/karok)', price: 100, weight: 5, notes: 'Min Erő: d4' },
    { id: 'kevlarfelso', category: 'Modern páncélok', name: 'Kevlárfelső (+2*, felsőtest)', price: 500, weight: 5, notes: 'Min Erő: d6' },
    { id: 'kevlarfelso_keramia', category: 'Modern páncélok', name: 'Kevlárfelső kerámialap betétekkel (+4*, felsőtest)', price: 500, weight: 17, notes: 'Min Erő: d8' },
    { id: 'kevlarsisark', category: 'Modern páncélok', name: 'Kevlársisak (+4*, fej)', price: 80, weight: 5, notes: 'Min Erő: d4' },
    { id: 'repeszallo_melleny', category: 'Modern páncélok', name: 'Repeszálló mellény (+2, felsőtest)', price: 100, weight: 10, notes: 'Min Erő: d6. (Vietnámi háború időszaka)' },
    { id: 'tuzszereszruha', category: 'Modern páncélok', name: 'Tűzszerészruha (+10, teljes test)', price: 25000, weight: 80, notes: 'Min Erő: d12. Iram -2, mozgás/kézügyesség próbák max d6. A karok fedetlenek.' },

    // Futurisztikus páncélok
    { id: 'energiabor', category: 'Futurisztikus páncélok', name: 'Energíabőr (+4*)', price: 200, weight: 4, notes: 'Min Erő: d6. 4-gyel csökkenti a lézerfegyverek sebzését. -2 észlelés/lopakodás (csillog).' },
    { id: 'arcnyi_fejvedo', category: 'Futurisztikus páncélok', name: 'Arcnyi fejvédő (+6*, ló/teljes arc)', price: 1000, weight: 6, notes: 'Min Erő: d6' },
    { id: 'golyoallo_harci_oltozet', category: 'Futurisztikus páncélok', name: 'Golyóálló harci öltözet (+6*, test/kar/láb)', price: 2000, weight: 20, notes: 'Min Erő: d6. Teljes testpáncél bakanccsal és kesztyűvel.' },

    // Pajzsok
    { id: 'pajzs_kicsi', category: 'Pajzsok', name: 'Kicsi pajzs (+1 Hárítás)', price: 50, weight: 4, notes: 'Min Erő: d4. Szilárdság: 10, +2 páncélt biztosít. Ütés: Erő+d4 sebzés.' },
    { id: 'pajzs_kozepes', category: 'Pajzsok', name: 'Közepes pajzs (+2 Hárítás)', price: 100, weight: 8, notes: 'Min Erő: d6. Fedezék: -2. Szilárdság: 10, +2 páncélt biztosít. Ütés: Erő+d4 sebzés.' },
    { id: 'pajzs_nagy', category: 'Pajzsok', name: 'Nagy pajzs (+3 Hárítás)', price: 200, weight: 12, notes: 'Min Erő: d8. Fedezék: -4. Szilárdság: 10, +2 páncélt biztosít. Ütés: Erő+d4 sebzés.' },
    { id: 'pajzs_golyoundlo', category: 'Pajzsok', name: 'Golyóálló pajzs (+3 Hárítás)', price: 80, weight: 5, notes: 'Min Erő: d4. Fedezék: -4. Modern pajzs: Szilárdság: 12, +2 páncélt ad. Ütés: Erő+d4 sebzés.' },
    { id: 'pajzs_rendorsegi', category: 'Pajzsok', name: 'Rendőrségi pajzs (+3 Hárítás)', price: 25, weight: 9, notes: 'Min Erő: d6. Fedezék: -4. Keresztüllövési kísérletnél 4-gyel csökkenti a tűzfegyverek sebzését. Modern pajzs: Szilárdság: 12, +2 páncélt ad.' },
    { id: 'pajzs_muanyag_kicsi', category: 'Pajzsok', name: 'Műanyag pajzs, kicsi (+1 Hárítás)', price: 200, weight: 2, notes: 'Min Erő: d4. Futurisztikus: Szilárdság: 10, +4-et ad a páncélhoz. Ütés: Erő+d4 sebzés.' },
    { id: 'pajzs_muanyag_kozepes', category: 'Pajzsok', name: 'Műanyag pajzs, közepes (+2 Hárítás)', price: 300, weight: 4, notes: 'Min Erő: d4. Fedezék: -2. Futurisztikus: Szilárdság: 10, +4-et ad a páncélhoz. Ütés: Erő+d4 sebzés.' },
    { id: 'pajzs_muanyag_nagy', category: 'Pajzsok', name: 'Műanyag pajzs, nagy (+3 Hárítás)', price: 400, weight: 6, notes: 'Min Erő: d6. Fedezék: -4. Futurisztikus: Szilárdság: 10, +4-et ad a páncélhoz. Ütés: Erő+d4 sebzés.' },

    // Középkori közelharci fegyverek
    { id: 'alabard', category: 'Középkori közelharci fegyverek', name: 'Alabárd (Erő+d8)', price: 250, weight: 6, notes: 'Min Erő: d8. Hatótáv: 1, Kétkezes.' },
    { id: 'balta', category: 'Középkori közelharci fegyverek', name: 'Balta (Erő+d6)', price: 100, weight: 2, notes: 'Min Erő: d6.' },
    { id: 'bard_ketkezes', category: 'Középkori közelharci fegyverek', name: 'Bárd, kétkezes (Erő+d10)', price: 400, weight: 7, notes: 'Min Erő: d10. PT: 2, Hárítás -1, Kétkezes.' },
    { id: 'bot', category: 'Középkori közelharci fegyverek', name: 'Bot (Erő+d4)', price: 25, weight: 2, notes: 'Min Erő: d4. Hárítás +1, Hatótáv: 1, Kétkezes.' },
    { id: 'bunko_konnyu', category: 'Középkori közelharci fegyverek', name: 'Bunkó, könnyű (Erő+d4)', price: 25, weight: 2, notes: 'Min Erő: d4. Alacsony társadalmi helyzet, banditák jele.' },
    { id: 'bunko_nehez', category: 'Középkori közelharci fegyverek', name: 'Bunkó, nehéz (Erő+d6)', price: 50, weight: 5, notes: 'Min Erő: d6. Alacsony társadalmi helyzet, banditák jele.' },
    { id: 'buzogany', category: 'Középkori közelharci fegyverek', name: 'Buzogány (Erő+d6)', price: 100, weight: 2, notes: 'Min Erő: d6.' },
    { id: 'csatabard', category: 'Középkori közelharci fegyverek', name: 'Csatabárd (Erő+d8)', price: 200, weight: 4, notes: 'Min Erő: d8.' },
    { id: 'csatacsakany', category: 'Középkori közelharci fegyverek', name: 'Csatacsákány (Erő+d6)', price: 250, weight: 2, notes: 'Min Erő: d6. Tüskés, PT: 1.' },
    { id: 'hosszukard', category: 'Középkori közelharci fegyverek', name: 'Hosszúkard (Erő+d8)', price: 300, weight: 3, notes: 'Min Erő: d8. Alapvető kardok és szablyák.' },
    { id: 'kard_ketkezes', category: 'Középkori közelharci fegyverek', name: 'Kard, kétkezes (Erő+d10)', price: 400, weight: 5, notes: 'Min Erő: d10. Kétkezes.' },
    { id: 'katana', category: 'Középkori közelharci fegyverek', name: 'Katana (Erő+d6+1)', price: 1000, weight: 3, notes: 'Min Erő: d6. Kétkezes.' },
    { id: 'kopja', category: 'Középkori közelharci fegyverek', name: 'Kopja (Erő+d8)', price: 300, weight: 6, notes: 'Min Erő: d8. PT: 2 rohamozásnál, Hatótáv: 2, csak lóháton használható.' },
    { id: 'lanc_buzogany', category: 'Középkori közelharci fegyverek', name: 'Láncos buzogány (Erő+d6)', price: 200, weight: 3, notes: 'Min Erő: d6. A pajzs bónusza ellene nem érvényes.' },
    { id: 'landsza', category: 'Középkori közelharci fegyverek', name: 'Lándzsa (Erő+d6)', price: 100, weight: 3, notes: 'Min Erő: d6. Hatótáv: 1. Hárítás +1, ha kétkezesként használják.' },
    { id: 'pika', category: 'Középkori közelharci fegyverek', name: 'Pika (Erő+d8)', price: 400, weight: 18, notes: 'Min Erő: d8. Hatótáv: 2, Kétkezes.' },
    { id: 'poroly', category: 'Középkori közelharci fegyverek', name: 'Pöröly (Erő+d10)', price: 400, weight: 10, notes: 'Min Erő: d10. Kétkezes. +2 sebzés tárgyak rongálásánál.' },
    { id: 'rovidkard', category: 'Középkori közelharci fegyverek', name: 'Rövidkard (Erő+d6)', price: 100, weight: 2, notes: 'Min Erő: d6. Idetartoznak a lovassági szablyák is.' },
    { id: 'tor_kes', category: 'Középkori közelharci fegyverek', name: 'Tőr/Kés (Erő+d4)', price: 20, weight: 1, notes: 'Min Erő: d4.' },
    { id: 'torkard', category: 'Középkori közelharci fegyverek', name: 'Tőrkard (Erő+d4)', price: 150, weight: 2, notes: 'Min Erő: d4. Hárítás +1.' },

    // Modern közelharci fegyverek
    { id: 'boxer', category: 'Modern közelharci fegyverek', name: 'Bokszer (Erő+d4)', price: 20, weight: 1, notes: 'Min Erő: d4. Fegyvertelen védőnél nem számít fegyvernek.' },
    { id: 'gumibot', category: 'Modern közelharci fegyverek', name: 'Gumibot (Erő+d4)', price: 10, weight: 1, notes: 'Min Erő: d4. Gyakorta megtalálható rendfenntartó erőknél.' },
    { id: 'lancfuresz', category: 'Modern közelharci fegyverek', name: 'Láncfűrész (2d6+4)', price: 200, weight: 20, notes: 'Min Erő: d6. Kritikus kudarcnál a használóját találja el.' },
    { id: 'pillangokes', category: 'Modern közelharci fegyverek', name: 'Pillangókés (Erő+d4)', price: 10, weight: 0.5, notes: 'Min Erő: d4. -2 az észlelésre, ha rejtve van.' },
    { id: 'szurony', category: 'Modern közelharci fegyverek', name: 'Szurony (Erő+d6)', price: 25, weight: 1, notes: 'Min Erő: d4. Karabélyra szerelhető (Hatótáv: 1, Kétkezes, Hárítás +1).' },
    { id: 'taglopisztoly', category: 'Modern közelharci fegyverek', name: 'Taglópisztoly (3d6)', price: 5, weight: 2, notes: 'Min Erő: d4. Botra szerelt sörétes lőszer, közelharcban használható. Újratöltéshez lőszer kell.' },
    { id: 'tulelokes', category: 'Modern közelharci fegyverek', name: 'Túlélőkés (Erő+d4)', price: 50, weight: 1, notes: 'Min Erő: d4. A nyélben lévő egyszerű eszközök +1-et adnak a túléléspróbához.' },

    // Futurisztikus közelharci fegyverek
    { id: 'lezerkard', category: 'Futurisztikus közelharci fegyverek', name: 'Lézerkard (Erő+d6+8)', price: 1000, weight: 2, notes: 'Min Erő: d4. PT: 12.' },
    { id: 'molekularis_kard', category: 'Futurisztikus közelharci fegyverek', name: 'Molekuláris pengéjű kard (Erő+d8+2)', price: 500, weight: 2, notes: 'Min Erő: d6. PT: 4.' },
    { id: 'molekularis_kes', category: 'Futurisztikus közelharci fegyverek', name: 'Molekuláris pengéjű kés (Erő+d4+2)', price: 250, weight: 0.25, notes: 'Min Erő: d4. PT: 2, nem dobható.' },

    // Középkori távolsági fegyverek
    { id: 'dobobalta', category: 'Középkori távolsági fegyverek', name: 'Dobóbalta (Erő+d6 | 3/6/12)', price: 100, weight: 3, notes: 'Min Erő: d6. TGY: 1.' },
    { id: 'halo_sulyozott', category: 'Középkori távolsági fegyverek', name: 'Háló, súlyozott (Erő+d4 | 3/6/12)', price: 50, weight: 8, notes: 'Min Erő: d4. TGY: 1. Találatnál a célpont akadályoztatott. Szilárdság: 10 (csak vágófegyver sebzi).' },
    { id: 'hosszuij', category: 'Középkori távolsági fegyverek', name: 'Hosszúíj (2d6 | 15/30/60)', price: 300, weight: 3, notes: 'Min Erő: d8. PT: 1, TGY: 1.' },
    { id: 'ij', category: 'Középkori távolsági fegyverek', name: 'Íj (2d6 | 12/24/48)', price: 250, weight: 3, notes: 'Min Erő: d6. TGY: 1.' },
    { id: 'gerely', category: 'Középkori távolsági fegyverek', name: 'Lándzsa/Gerely (Erő+d6 | 3/6/12)', price: 100, weight: 3, notes: 'Min Erő: d6. TGY: 1.' },
    { id: 'parittya', category: 'Középkori távolsági fegyverek', name: 'Parittya (Erő+d4 | 4/8/16)', price: 10, weight: 1, notes: 'Min Erő: d4. TGY: 1. Atlétika (dobás) képzettséggel használható.' },
    { id: 'szamszerij_kozepkori', category: 'Középkori távolsági fegyverek', name: 'Számszeríj (2d6 | 10/20/40)', price: 250, weight: 5, notes: 'Min Erő: d6. PT: 2, TGY: 1. Kézzel felhúzott.' },
    { id: 'szamszerij_nehez', category: 'Középkori távolsági fegyverek', name: 'Nehéz számszeríj (2d8 | 15/30/60)', price: 400, weight: 8, notes: 'Min Erő: d6. PT: 2, TGY: 1. Motolla kell hozzá. Újratöltés: 2.' },
    { id: 'torkes_dobas', category: 'Középkori távolsági fegyverek', name: 'Tőr/Kés dobva (Erő+d4 | 3/6/12)', price: 25, weight: 1, notes: 'Min Erő: d4. TGY: 1.' },

    // Modern távolsági fegyverek
    { id: 'osszetett_ij', category: 'Modern távolsági fegyverek', name: 'Összetett íj (Erő+d6 | 12/24/48)', price: 200, weight: 3, notes: 'Min Erő: d6. PT: 1, TGY: 1.' },
    { id: 'szamszerij_modern', category: 'Modern távolsági fegyverek', name: 'Modern számszeríj (2d6 | 15/30/60)', price: 300, weight: 7, notes: 'Min Erő: d6. PT: 2, TGY: 1.' },
    
    // Előtöltős lőfegyverek
    { id: 'kovas_pisztoly', category: 'Elöltöltős lőfegyverek', name: 'Kovás pisztoly (2d6+1 | 5/10/20)', price: 150, weight: 3, notes: 'Min Erő: d4. TGY: 1. Újratöltés: 3.' },
    { id: 'musketa', category: 'Elöltöltős lőfegyverek', name: 'Muskéta (pl. Brown Bess) (2d8 | 10/20/40)', price: 300, weight: 15, notes: 'Min Erő: d6. TGY: 1. Újratöltés: 3.' },
    { id: 'mordaly', category: 'Elöltöltős lőfegyverek', name: 'Mordály (1-3d6 | 10/20/40)', price: 300, weight: 12, notes: 'Min Erő: d6. TGY: 1. Újratöltés: 3. Sörétes fegyverként kezelendő.' },
    { id: 'csappantyus_puska', category: 'Elöltöltős lőfegyverek', name: 'Csappantyús puska (2d8 | 15/30/60)', price: 250, weight: 11, notes: 'Min Erő: d6. TGY: 1. Újratöltés: 4 (Huzagolt cső).' },
    { id: 'kentucky_puska', category: 'Elöltöltős lőfegyverek', name: 'Hosszú puska / Kentucky (2d8 | 15/30/60)', price: 300, weight: 8, notes: 'Min Erő: d6. PT: 2, TGY: 1. Újratöltés: 4 (Huzagolt cső).' },

    // Revolverek
    { id: 'derringer_41', category: 'Revolverek', name: 'Derringer .41 (2d4 | 3/6/12)', price: 100, weight: 1, notes: 'Min Erő: d4. TGY: 1, Tár: 2. -2 az észlelésre, ha rejtve van. (Egyesével töltendő)' },
    { id: 'rendorsegi_revolver_38', category: 'Revolverek', name: 'Rendőrségi revolver .38 (2d6 | 10/20/40)', price: 150, weight: 2, notes: 'Min Erő: d4. TGY: 1, Tár: 6. (Egyesével tölt. Gyorstöltő: 15$)' },
    { id: 'colt_peacemaker_45', category: 'Revolverek', name: 'Colt Peacemaker .45 (2d6+1 | 12/24/48)', price: 200, weight: 4, notes: 'Min Erő: d4. PT: 1, TGY: 1, Tár: 6. (Egyesével tölt. Gyorstöltő: 20$)' },
    { id: 'smith_wesson_357', category: 'Revolverek', name: 'Smith & Wesson .357 (2d6+1 | 12/24/48)', price: 250, weight: 5, notes: 'Min Erő: d4. PT: 1, TGY: 1, Tár: 6. (Egyesével tölt. Gyorstöltő: 25$)' },

    // Félautomata modern fegyverek
    { id: 'colt_1911_45', category: 'Félautomata modern fegyverek', name: 'Colt 1911 .45 (2d6+1 | 12/24/48)', price: 200, weight: 4, notes: 'Min Erő: d4. PT: 1, TGY: 1, Tár: 7. Szekrénytáras (Póttár: 20$, 1 font).' },
    { id: 'desert_eagle_50', category: 'Félautomata modern fegyverek', name: 'Desert Eagle .50 (2d8 | 15/30/60)', price: 300, weight: 8, notes: 'Min Erő: d6. PT: 2, TGY: 1, Tár: 7. Szekrénytáras (Póttár: 30$, 1 font).' },
    { id: 'glock_9mm', category: 'Félautomata modern fegyverek', name: 'Glock 9mm (2d6 | 12/24/48)', price: 200, weight: 3, notes: 'Min Erő: d4. PT: 1, TGY: 1, Tár: 17. Szekrénytáras (Póttár: 20$, 1 font).' },
    { id: 'ruger_22', category: 'Félautomata modern fegyverek', name: 'Ruger .22 (2d4 | 10/20/40)', price: 100, weight: 2, notes: 'Min Erő: d4. PT: 1, TGY: 1, Tár: 9. Szekrénytáras (Póttár: 10$, 1 font).' },

    // Géppisztolyok
    { id: 'hk_mp5', category: 'Géppisztolyok', name: 'H&K MP5 9mm (2d6 | 12/24/48)', price: 300, weight: 10, notes: 'Min Erő: d6. PT: 1, TGY: 3, Tár: 30. (Póttár: 30$, 1 font).' },
    { id: 'thompson', category: 'Géppisztolyok', name: 'Thompson .45 (2d6+1 | 12/24/48)', price: 350, weight: 13, notes: 'Min Erő: d6. PT: 1, TGY: 3, Tár: 20. (Póttár: 35$, 1 font. 50-es dobtár is felszerelhető: +50$, +2 font).' },
    { id: 'uzi', category: 'Géppisztolyok', name: 'Uzi 9mm (2d6 | 12/24/48)', price: 300, weight: 9, notes: 'Min Erő: d4. PT: 1, TGY: 3, Tár: 32. (Póttár: 30$, 1 font).' },

    // Sörétes puskák
    { id: 'soretes_duplacsovu', category: 'Sörétes puskák', name: 'Duplacsövű sörétes (1-3d6 | 12/24/48)', price: 150, weight: 11, notes: 'Min Erő: d6. TGY: 1, Tár: 2. Sörétes puska szabályok (pusztító közelről).' },
    { id: 'soretes_eloagyszanas', category: 'Sörétes puskák', name: 'Előágyszánas sörétes (1-3d6 | 12/24/48)', price: 200, weight: 8, notes: 'Min Erő: d6. TGY: 1, Tár: 5. Sörétes puska szabályok (pusztító közelről).' },
    { id: 'soretes_lefureszelt', category: 'Sörétes puskák', name: 'Lefűrészelt duplacsövű (1-3d6 | 5/10/20)', price: 150, weight: 6, notes: 'Min Erő: d4. TGY: 1, Tár: 2. Sörétes puska szabályok (pusztító közelről).' },
    { id: 'soretes_streetsweeper', category: 'Sörétes puskák', name: 'Streetsweeper (1-3d6 | 12/24/48)', price: 300, weight: 12, notes: 'Min Erő: d6. TGY: 1, Tár: 12. Sörétes puska szabályok (pusztító közelről).' },

    // Tolózáras és Kengyelkulcsos gépkarabélyok
    { id: 'barrett_50', category: 'Tolózáras és Kengyelkulcsos gépkarabélyok', name: 'Barrett .50 (2d10 | 50/100/200)', price: 750, weight: 35, notes: 'Min Erő: d8. PT: 4, TGY: 1, Tár: 10. Nehézfegyver, kapáslövéses. Szinte mindig van rajta távcső. A töltött póttár 2 font.' },
    { id: 'm1_garand', category: 'Tolózáras és Kengyelkulcsos gépkarabélyok', name: 'M1 Garand .30-06 (2d8 | 24/48/96)', price: 300, weight: 10, notes: 'Min Erő: d6. PT: 2, TGY: 1, Tár: 8.' },
    { id: 'sharps_50', category: 'Tolózáras és Kengyelkulcsos gépkarabélyok', name: 'Sharps 50 .50 (2d10 | 30/60/120)', price: 400, weight: 11, notes: 'Min Erő: d8. PT: 2, TGY: 1, Tár: 1. Kapáslövéses (Snapfire).' },
    { id: 'spencer_karabely', category: 'Tolózáras és Kengyelkulcsos gépkarabélyok', name: 'Spencer karabély .52 (2d8 | 20/40/80)', price: 250, weight: 8, notes: 'Min Erő: d4. PT: 2, TGY: 1, Tár: 7. Kapáslövéses.' },
    { id: 'vadaszpuska_308', category: 'Tolózáras és Kengyelkulcsos gépkarabélyok', name: 'Vadászpuska .308 (2d8 | 24/48/96)', price: 350, weight: 8, notes: 'Min Erő: d6. PT: 2, TGY: 1, Tár: 5. Kapáslövéses.' },
    { id: 'winchester_73', category: 'Tolózáras és Kengyelkulcsos gépkarabélyok', name: "Winchester '73 .44-40 (2d6-1 | 24/48/96)", price: 300, weight: 10, notes: 'Min Erő: d6. PT: 2, TGY: 1, Tár: 15.' },

    // Gépkarabélyok
    { id: 'ak_47', category: 'Gépkarabélyok', name: 'AK-47 7.62mm (2d8+1 | 24/48/96)', price: 450, weight: 10, notes: 'Min Erő: d6. PT: 2, TGY: 3, Tár: 30. Szekrénytáras (Póttár: 45$, 1 font).' },
    { id: 'm16_556', category: 'Gépkarabélyok', name: 'M-16 5.56mm (2d8 | 24/48/96)', price: 400, weight: 8, notes: 'Min Erő: d6. PT: 2, TGY: 3, Tár: 20/30. Képes hármas sorozatot lőni (A-2 változat). (Póttár: 40$, 1 font).' },
    { id: 'steyr_aug', category: 'Gépkarabélyok', name: 'Steyr AUG 5.56mm (2d8 | 24/48/96)', price: 400, weight: 8, notes: 'Min Erő: d6. PT: 2, TGY: 3, Tár: 30. Képes hármas sorozatot lőni. (Póttár: 40$, 1 font).' },

    // Géppuskák
    { id: 'browning_bar', category: 'Géppuskák', name: 'Browning BAR .30-06 (2d8 | 20/40/60)', price: 300, weight: 17, notes: 'Min Erő: d8. PT: 2, TGY: 1-3, Tár: 20. Szekrénytáras, így az újratöltés 2 helyett csak 1 cselekedet.' },
    { id: 'gatling_45', category: 'Géppuskák', name: 'Gatling .45 (2d8 | 24/48/96)', price: 500, weight: 170, notes: 'Min Erő: NÉ (Állványt igényel). PT: 2, TGY: 2-3, Tár: 100. Újratöltés: 2.' },
    { id: 'minigun_762', category: 'Géppuskák', name: 'Minigun 7.62mm (2d8+1 | 30/60/120)', price: 100000, weight: 85, notes: 'Min Erő: d10. PT: 2, TGY: 3-5, Tár: 4000. Hátizsákos hám kell hozzá (+85 font töltve). Újratöltés: 2.' },
    { id: 'm2_browning', category: 'Géppuskák', name: 'M2 Browning .50 (2d10 | 50/100/200)', price: 1500, weight: 84, notes: 'Min Erő: NÉ (Állványt igényel). PT: 2, TGY: 2-3, Tár: 200. Nehézfegyver. Újratöltés: 2.' },
    { id: 'm60_762', category: 'Géppuskák', name: 'M60 7.62mm (2d8+1 | 30/60/120)', price: 6000, weight: 33, notes: 'Min Erő: d8. PT: 2, TGY: 2-3, Tár: 100. Csípőből (állvány nélkül) kapáslövéses és van visszarúgás. Újratöltés: 2.' },
    { id: 'mg42_792', category: 'Géppuskák', name: 'MG42 7.92mm (2d8+1 | 30/60/120)', price: 750, weight: 26, notes: 'Min Erő: d10. PT: 2, TGY: 2-4, Tár: 200. Csípőből (állvány nélkül) kapáslövéses és van visszarúgás. Újratöltés: 2.' },
    { id: 'saw_556', category: 'Géppuskák', name: 'SAW 5.56mm (2d8 | 30/60/120)', price: 4000, weight: 20, notes: 'Min Erő: d8. PT: 2, TGY: 2-3, Tár: 200. Csípőből (állvány nélkül) kapáslövéses és van visszarúgás. Újratöltés: 2.' },

    // Lézerek
    { id: 'lezer_gatling', category: 'Lézerek', name: 'Gatling lézer (3d6+4 | 50/100/200)', price: 1000, weight: 20, notes: 'Min Erő: d8. PT: 2, TGY: 4, Tár: 800. Kauterizál (+2 elvérzés dobásra). Túltölthető (+d6 sebzés, 1-es dobásnál 1 kör hűlés). Ennél VAN visszarúgás.' },
    { id: 'lezer_geppisztoly', category: 'Lézerek', name: 'Lézer géppisztoly (2d6 | 15/30/60)', price: 500, weight: 4, notes: 'Min Erő: d4. PT: 2, TGY: 4, Tár: 100. Kauterizál (+2 elvérzés dobásra). Túltölthető (+d6 sebzés, 1-es dobásnál 1 kör hűlés). Nincs visszarúgás.' },
    { id: 'lezer_karabely', category: 'Lézerek', name: 'Lézer karabély (3d6 | 30/60/120)', price: 700, weight: 8, notes: 'Min Erő: d6. PT: 2, TGY: 3, Tár: 100. Kauterizál (+2 elvérzés dobásra). Túltölthető (+d6 sebzés, 1-es dobásnál 1 kör hűlés). Nincs visszarúgás.' },
    { id: 'lezer_pisztoly', category: 'Lézerek', name: 'Lézer pisztoly (2d6 | 15/30/60)', price: 250, weight: 2, notes: 'Min Erő: d4. PT: 2, TGY: 1, Tár: 50. Kauterizál (+2 elvérzés dobásra). Túltölthető (+d6 sebzés, 1-es dobásnál 1 kör hűlés). Nincs visszarúgás.' },

    // Ostromgépek és Ágyúk
    { id: 'agyu_12_font', category: 'Ostromgépek és Ágyúk', name: 'Ágyú (12 font)', price: 10000, weight: 1200, notes: 'Sebzés/Lőtáv a betöltött lőszertől függ. Újratöltés: 8. Bombázás szabály: -4 próba, kudarc esetén dupla eltérés. Nehézfegyver.' },
    { id: 'katapult', category: 'Ostromgépek és Ágyúk', name: 'Katapult (3d6 | 24/48/96)', price: 10000, weight: 0, notes: 'Min Erő: NÉ. PT: 1, TGY: 4. Robbanás: Különleges. Újratöltés: 5 perc (4 fővel). Nehézfegyver.' },
    { id: 'trebuchet', category: 'Ostromgépek és Ágyúk', name: 'Trebuchet (3d6+2 | 30/60/120)', price: 25000, weight: 0, notes: 'Min Erő: NÉ. PT: 1, TGY: 4. Robbanás: Különleges. Újratöltés: 5 perc (4 fővel). Nehézfegyver.' },

    // Lőszer
    { id: 'golyo_loporral', category: 'Lőszer', name: 'Golyó lőporral (10 db)', price: 1, weight: 0.5, notes: 'Elöltöltős fegyverekhez' },
    { id: 'lezertelep_gatling', category: 'Lőszer', name: 'Lézertelep - Gatling (1 tár)', price: 50, weight: 4, notes: 'Egy teljes tár a megnevezett fegyverhez' },
    { id: 'lezertelep_karabely', category: 'Lőszer', name: 'Lézertelep - Karabély/Géppisztoly (1 tár)', price: 20, weight: 0.5, notes: 'Egy teljes tár a megnevezett fegyverhez' },
    { id: 'lezertelep_pisztoly', category: 'Lőszer', name: 'Lézertelep - Pisztoly (1 tár)', price: 20, weight: 0.25, notes: 'Egy teljes tár a megnevezett fegyverhez' },
    { id: 'loszer_kicsi', category: 'Lőszer', name: 'Lőszer - Kicsi (50 db)', price: 10, weight: 1, notes: '.22-estől .32-es kaliberig' },
    { id: 'loszer_kozepes', category: 'Lőszer', name: 'Lőszer - Közepes (50 db)', price: 20, weight: 2, notes: '9 mm-től .45-ös kaliberig' },
    { id: 'loszer_nagy', category: 'Lőszer', name: 'Lőszer - Nagy (50 db)', price: 50, weight: 15, notes: '.50-es kaliber és fölötte' },
    { id: 'nyilvesszo', category: 'Lőszer', name: 'Nyílvessző / Számszeríjlövedék (2 db)', price: 1, weight: 0.2, notes: 'A nyílvessző az íjakhoz, a lövedék a számszeríjakhoz.' },
    { id: 'parittyako', category: 'Lőszer', name: 'Parittyakő (20 db)', price: 2, weight: 1 },
    { id: 'soretes_gyongygolyo', category: 'Lőszer', name: 'Sörétes lőszer - Gyöngygolyó (25 db)', price: 20, weight: 1.5 },
    { id: 'soretes_soret', category: 'Lőszer', name: 'Sörétes lőszer - Sörét (25 db)', price: 15, weight: 1.5, notes: 'Őzsörét' }
];