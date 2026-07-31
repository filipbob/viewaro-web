import type { Dictionary } from "../types";

const hr: Dictionary = {
  nav: {
    features: "Značajke",
    faq: "Česta pitanja",
    support: "Podrška",
    comingSoon: "Uskoro",
  },
  footer: {
    tagline: "Tvoj sadržaj. Tvoj ekran.",
    features: "Značajke",
    privacy: "Pravila privatnosti",
    support: "Podrška",
    terms: "Uvjeti korištenja",
    copyright: "© 2026 ITQuotes. Sva prava pridržana.",
    madeBy: "itQuotes proizvod — itquotes.hr",
  },
  home: {
    metaTitle: "Viewaro — Live TV, kako treba",
    metaDescription:
      "Viewaro je brz i elegantan IPTV player za iPhone, iPad, Mac, Apple TV, Android i Android TV. M3U, Xtream i ručni izvori, live EPG, favoriti i roditeljski nadzor — uskoro.",
    eyebrow: "Viewaro Player",
    heroLine1: "Tvoj sadržaj.",
    heroLine2: "Tvoj ekran.",
    heroSub:
      "Brz i elegantan IPTV player za tvoj telefon, Mac i TV. Donesi vlastitu playlistu — Viewaro odradi ostalo.",
    badge: "Uskoro na App Storeu i Google Playu",
    featuresEyebrow: "Značajke",
    featuresHeading: "Sve što live TV aplikacija treba biti.",
    features: [
      {
        title: "Live TV i program",
        body: "Ugrađeni program s prikazom trenutnog napretka i onim što slijedi — bez odvojenog ekrana za pretraživanje.",
      },
      {
        title: "Bilo koji izvor",
        body: "Spoji M3U playlistu, Xtream Codes račun ili dodaj kanale jedan po jedan. Kombiniraj više izvora odjednom.",
      },
      {
        title: "Favoriti i pretraga",
        body: "Napravi osobni popis kanala i pronađi bilo što odmah, kroz sve dodane izvore.",
      },
      {
        title: "Sinkronizacija u oblaku",
        body: "Izvori, favoriti i postavke prate te s telefona na TV. Prijavi se jednom, ili preskoči — gostujući način rada također radi.",
      },
      {
        title: "Roditeljski nadzor",
        body: "Zaključaj pojedine kanale PIN-om, tako da se daljinski upravljač može bez brige dati drugima.",
      },
      {
        title: "Napravljen za svaki ekran",
        body: "Player koji je jednako dobar na telefonu koliko i na Apple TV-u i Android TV-u, s potpunom navigacijom daljinskim upravljačem.",
      },
    ],
    integrationsEyebrow: "Na planu razvoja",
    integrationsHeading: "Filmovi i serije stižu.",
    integrationsSub:
      "Katalog obogaćen metapodacima uz live TV — planirane integracije, još nisu aktivne.",
    integrations: [
      {
        name: "TMDB",
        body: "Plakati, glumačka postava i opisi za katalog filmova i serija.",
      },
      {
        name: "Trakt",
        body: "Sinkronizacija povijesti gledanja i napretka, ako to već pratiš tamo.",
      },
    ],
    plannedLabel: "Planirano",
    howEyebrow: "Kako radi",
    howHeading: "Spreman za minutu.",
    steps: [
      {
        step: "01",
        title: "Instaliraj Viewaro",
        body: "Na telefonu, tabletu, Macu ili TV-u. Jedna aplikacija, isto iskustvo posvuda.",
      },
      {
        step: "02",
        title: "Dodaj svoju playlistu",
        body: "Zalijepi M3U link ili se prijavi svojim Xtream računom. Kanali se pojave za nekoliko sekundi.",
      },
      {
        step: "03",
        title: "Počni gledati",
        body: "Live TV s potpunim programom, favoritima i trenutnom promjenom kanala. To je to.",
      },
    ],
    faqEyebrow: "Česta pitanja",
    faqHeading: "Dobra pitanja.",
    faqs: [
      {
        q: "Sadrži li Viewaro kanale ili streamove?",
        a: "Ne. Viewaro je player — ne sadrži kanale, streamove ni pretplate bilo koje vrste. Spajaš vlastitu playlistu od vlastitog providera, a Viewaro joj daje lijep dom.",
      },
      {
        q: "Koje su platforme podržane?",
        a: "Viewaro se razvija za iPhone, iPad, Mac, Apple TV, Android i Android TV.",
      },
      {
        q: "Koje formate playliste mogu koristiti?",
        a: "M3U/M3U8 playliste i Xtream Codes račune, plus ručno dodane kanale. EPG podaci podržani su preko XMLTV-a, bilo automatski prepoznati iz playliste ili ručno dodani.",
      },
      {
        q: "Trebam li račun?",
        a: "Ne — sve radi u gostujućem načinu rada. Opcionalni besplatni račun dodaje sinkronizaciju u oblaku, tako da tvoji izvori, favoriti i postavke prate te na svim uređajima.",
      },
      {
        q: "Kada izlazi?",
        a: "Viewaro je trenutno u razvoju i testiranju na svim platformama. Detalji o izlasku pojavit će se ovdje prvi.",
      },
    ],
    ctaHeading: "Izlazak uskoro.",
    ctaBody:
      "Viewaro se trenutno gradi i testira na svih pet platformi. Navrati uskoro po detalje o izlasku.",
  },
  legal: {
    updatedLabel: "Zadnje ažurirano:",
    privacy: {
      title: "Pravila privatnosti",
      metaDescription: "Kako Viewaro postupa s tvojim podacima.",
      updated: "30. srpnja 2026.",
      sections: [
        {
          paragraphs: [
            "Viewaro se temelji na jednostavnom načelu: **tvoj sadržaj je tvoja stvar.** Aplikacija je player za playliste koje ti sam osiguravaš — nas ne zanima što gledaš, a aplikacija je dizajnirana da tako i ostane.",
          ],
        },
        {
          heading: "Što Viewaro pohranjuje na tvom uređaju",
          list: [
            "**Izvori playliste** — M3U URL-ovi, podaci Xtream Codes servera i ručno dodani kanali koje konfiguriraš. Vjerodajnice se pohranjuju u sigurnoj pohrani operacijskog sustava (Keychain na Apple platformama, Keystore pohrana na Androidu).",
            "**Postavke** — favoriti, nedavno gledani kanali, postavke izgleda i reprodukcije, PIN za roditeljski nadzor.",
            "**Podaci programa** — EPG (XMLTV) podaci preuzeti s URL-a koji konfiguriraš, spremljeni lokalno u predmemoriju.",
          ],
        },
        {
          paragraphs: [
            "Reprodukcija se odvija izravno između tvog uređaja i servera u tvojoj playlisti. Tvoji streamovi nikad ne prolaze kroz nas, ne snimamo ih niti nam se prijavljuju.",
          ],
        },
        {
          heading: "Opcionalni račun i sinkronizacija u oblaku",
          paragraphs: [
            "Viewaro potpuno radi bez računa. Ako odlučiš napraviti račun (za sinkronizaciju izvora, favorita i postavki na više uređaja), pohranjujemo:",
          ],
        },
        {
          list: [
            "tvoju email adresu (ili identifikator koji daje Prijava putem Applea/Googlea);",
            "same sinkronizirane podatke: tvoje izvore, favorite i postavke.",
          ],
        },
        {
          paragraphs: [
            "Ovi podaci koriste se isključivo za omogućavanje sinkronizacije. Račun i sve sinkronizirane podatke možeš izbrisati u bilo kojem trenutku unutar aplikacije.",
          ],
        },
        {
          heading: "Kupnje",
          paragraphs: [
            "Pretplate obrađuje Apple (App Store) ili Google (Google Play). Nikad ne vidimo tvoje podatke o plaćanju. Koristimo RevenueCat, uslugu za upravljanje pretplatama, za provjeru prava iz kupnje; on prima anonimni identifikator korisnika aplikacije i račune o kupnji, ne tvoj identitet.",
          ],
        },
        {
          heading: "Analitika",
          paragraphs: [
            "Možemo prikupljati anonimnu, agregiranu statistiku korištenja (poput toga koji se ekrani koriste i dolazi li do pogrešaka u reprodukciji) radi poboljšanja aplikacije. Ta statistika ne sadrži osobne podatke, identifikatore računa niti bilo što o sadržaju tvojih playlista ili onome što gledaš.",
          ],
        },
        {
          heading: "Što ne radimo",
          list: [
            "Ne prodajemo niti dijelimo tvoje podatke s trećim stranama u marketinške svrhe.",
            "Ne pratimo što gledaš.",
            "Ne prikazujemo oglase i ne koristimo oglašivačke SDK-ove.",
            "Ne prikupljamo tvoju lokaciju.",
          ],
        },
        {
          heading: "Zadržavanje i brisanje podataka",
          paragraphs: [
            "Podaci na uređaju ostaju na tvom uređaju i uklanjaju se kad izbrišeš aplikaciju. Podaci računa čuvaju se samo dok račun postoji — brisanjem računa unutar aplikacije trajno se uklanjaju.",
          ],
        },
        {
          heading: "Djeca",
          paragraphs: [
            "Viewaro nije namijenjen djeci. Značajka roditeljskog nadzora postoji kako bi odrasli mogli ograničiti pristup kanalima na zajedničkim ekranima.",
          ],
        },
        {
          heading: "Izmjene",
          paragraphs: [
            "Ova pravila ažurirat ćemo kako se aplikacija razvija, uz naznaku datuma zadnje revizije na vrhu ove stranice.",
          ],
        },
        {
          heading: "Kontakt",
          paragraphs: [
            "Pitanja o privatnosti? Posjeti našu [stranicu podrške](/support) ili nam piši — detalji su navedeni tamo.",
          ],
        },
      ],
    },
    terms: {
      title: "Uvjeti korištenja",
      metaDescription: "Uvjeti korištenja aplikacije Viewaro.",
      updated: "30. srpnja 2026.",
      sections: [
        {
          paragraphs: [
            "Ovi uvjeti primjenjuju se na aplikaciju Viewaro na svim podržanim platformama (iPhone, iPad, Mac, Apple TV, Android i Android TV). Korištenjem Viewara prihvaćaš ove uvjete.",
          ],
        },
        {
          heading: "1. Viewaro je player, ne usluga sadržaja",
          paragraphs: [
            "Viewaro **ne** pruža, ne prodaje, ne hostira niti pakira nikakve televizijske kanale, streamove, videozapise ili drugi medijski sadržaj. Aplikacija reproducira sadržaj isključivo iz izvora koje **ti** konfiguriraš — vlastitih playlista, servera i pretplata trećih strana.",
            "Isključivo si odgovoran za izvore koje dodaješ i za osiguravanje da imaš zakonsko pravo pristupa i gledanja tog sadržaja u svojoj zemlji. Viewaro i njegov razvijatelj nemaju nikakvu povezanost s bilo kojim davateljem sadržaja i ne preuzimaju odgovornost za sadržaj trećih strana, njegovu zakonitost, dostupnost ili kvalitetu.",
          ],
        },
        {
          heading: "2. Licenca",
          paragraphs: [
            "Dajemo ti osobnu, neisključivu, neprenosivu licencu za korištenje Viewara na uređajima koje posjeduješ ili kontroliraš, u skladu s uvjetima App Storea ili Google Playa putem kojih si ga nabavio. Na Apple platformama primjenjuje se Appleov standardni [Ugovor o licenci za krajnjeg korisnika licenciranih aplikacija](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) tamo gdje nije zamijenjen ovim uvjetima.",
          ],
        },
        {
          heading: "3. Pretplate",
          paragraphs: [
            "Neke značajke mogu zahtijevati plaćenu pretplatu. Pretplate se naplaćuju putem tvog App Store ili Google Play računa, automatski se obnavljaju osim ako se ne otkažu najmanje 24 sata prije kraja tekućeg razdoblja, i mogu se upravljati ili otkazati u postavkama tvog trgovinskog računa. Cijene se prikazuju u aplikaciji prije kupnje. Povrate obrađuje Apple ili Google prema svojim pravilima.",
          ],
        },
        {
          heading: "4. Prihvatljivo korištenje",
          list: [
            "Ne koristi Viewaro za pristup sadržaju koji nemaš zakonsko pravo gledati.",
            "Ne pokušavaj obrnuti inženjering, preprodavati ili redistribuirati aplikaciju.",
            "Ne koristi aplikaciju na način koji krši važeće zakone.",
          ],
        },
        {
          heading: "5. Odricanje od odgovornosti i ograničenje odgovornosti",
          paragraphs: [
            'Viewaro se pruža "takav kakav jest" bez ikakvih jamstava. U mjeri dopuštenoj zakonom, razvijatelj nije odgovoran za bilo kakvu štetu proizašlu iz tvog korištenja aplikacije, uključujući onu uzrokovanu sadržajem trećih strana ili nedostupnošću tvojih izvora.',
          ],
        },
        {
          heading: "6. Izmjene",
          paragraphs: [
            "Ove uvjete možemo ažurirati kako se aplikacija razvija. Daljnje korištenje nakon ažuriranja predstavlja prihvaćanje. Datum revizije prikazan je na vrhu ove stranice.",
          ],
        },
        {
          heading: "7. Kontakt",
          paragraphs: [
            "Pitanja o ovim uvjetima? Posjeti našu [stranicu podrške](/support).",
          ],
        },
      ],
    },
    support: {
      title: "Podrška",
      metaDescription: "Dobij pomoć oko Viewara.",
      sections: [
        {
          paragraphs: [
            "Viewaro je trenutno u razvoju. Nakon izlaska, ova stranica bit će najbrži način za dobivanje pomoći. Česta pitanja odgovorena su niže — za sve ostalo, javi nam se.",
          ],
        },
        {
          heading: "Kontakt",
          paragraphs: [
            "Piši nam na [support@itquotes.hr](mailto:support@itquotes.hr) i navedi svoj uređaj, verziju OS-a i kratak opis problema. Nikad u emailu ne navodi URL svoje playliste ili vjerodajnice providera.",
          ],
        },
        {
          heading: "Česta pitanja",
          topics: [
            {
              q: "Moja playlista se ne učitava",
              a: "Provjeri URL kod svog providera — mora upućivati na M3U/M3U8 datoteku ili valjani Xtream Codes server. Ako se playlista učitava u pregledniku ali ne u aplikaciji, provider možda blokira pristup aplikaciji; kontaktiraj ga.",
            },
            {
              q: "Kanal se ne reproducira",
              a: 'Dostupnost streama u potpunosti kontrolira tvoj provider. Pokušaj isti kanal kasnije, ili provjeri radi li u portalu tvog providera. Viewarova opcija "preskoči neispravne kanale" može sakriti kanale koji stalno ne uspijevaju.',
            },
            {
              q: "Program je prazan",
              a: "EPG podaci dolaze iz XMLTV izvora. Ako tvoja playlista ne oglašava jedan, dodaj EPG URL ručno u postavkama izvora, zatim osvježi program.",
            },
            {
              q: "Kako otkazati pretplatu?",
              a: "Pretplatama upravlja Apple ili Google, ne mi. Na Apple uređajima: Postavke → tvoje ime → Pretplate. Na Androidu: Play Store → Plaćanja i pretplate.",
            },
            {
              q: "Kako izbrisati svoj račun?",
              a: "U aplikaciji otvori odjeljak računa i odaberi Izbriši račun. Time se trajno uklanjaju tvoj račun i svi sinkronizirani podaci.",
            },
          ],
        },
        {
          heading: "Napomena o sadržaju",
          paragraphs: [
            "Viewaro je samo player — ne uključuje kanale ni streamove, i ne možemo pomoći s pitanjima o sadržaju, cijenama ili računu bilo kojeg pojedinog providera. Za sve što se tiče samih kanala, kontaktiraj svog providera.",
          ],
        },
      ],
    },
  },
};

export default hr;
