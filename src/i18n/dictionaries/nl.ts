import type { Dictionary } from "../types";

const nl: Dictionary = {
  nav: {
    features: "Functies",
    faq: "Veelgestelde vragen",
    support: "Support",
    comingSoon: "Binnenkort beschikbaar",
  },
  footer: {
    tagline: "Jouw content. Jouw scherm.",
    features: "Functies",
    privacy: "Privacybeleid",
    support: "Support",
    terms: "Gebruiksvoorwaarden",
    copyright: "© 2026 ITQuotes. Alle rechten voorbehouden.",
    madeBy: "Een itQuotes-product — itquotes.hr",
  },
  home: {
    metaTitle: "Viewaro — Live tv, goed gedaan",
    metaDescription:
      "Viewaro is een snelle, elegante IPTV-speler voor iPhone, iPad, Mac, Apple TV, Android en Android TV. M3U-, Xtream- en handmatige bronnen, live EPG, favorieten en ouderlijk toezicht — binnenkort beschikbaar.",
    eyebrow: "Viewaro Player",
    heroLine1: "Jouw content.",
    heroLine2: "Jouw scherm.",
    heroSub:
      "Een snelle, elegante IPTV-speler voor je telefoon, je Mac en je tv. Breng je eigen playlist mee — Viewaro doet de rest.",
    badge: "Binnenkort in de App Store & Google Play",
    featuresEyebrow: "Functies",
    featuresHeading: "Alles wat een live-tv-app moet zijn.",
    features: [
      {
        title: "Live tv & gids",
        body: "Een ingebouwde programmagids met live voortgang en wat er hierna komt — geen apart scherm nodig.",
      },
      {
        title: "Elke bron",
        body: "Verbind een M3U-playlist, een Xtream Codes-account, of voeg zenders één voor één toe. Combineer meerdere bronnen tegelijk.",
      },
      {
        title: "Favorieten & zoeken",
        body: "Stel een persoonlijke zenderlijst samen en vind direct alles terug, over al je toegevoegde bronnen heen.",
      },
      {
        title: "Cloudsynchronisatie",
        body: "Bronnen, favorieten en instellingen volgen je van telefoon naar tv. Eén keer inloggen, of sla het over — gastmodus werkt ook.",
      },
      {
        title: "Ouderlijk toezicht",
        body: "Vergrendel individuele zenders met een pincode, zodat de afstandsbediening zonder zorgen kan worden doorgegeven.",
      },
      {
        title: "Gemaakt voor elk scherm",
        body: "Een speler die net zo thuis is op je telefoon als op Apple TV en Android TV, met volledige navigatie via de afstandsbediening.",
      },
    ],
    integrationsEyebrow: "Op de routekaart",
    integrationsHeading: "Films & series komen eraan.",
    integrationsSub:
      "Een catalogus met verrijkte metadata bovenop live tv — geplande integraties, nog niet live.",
    integrations: [
      {
        name: "TMDB",
        body: "Poster art, cast en beschrijvingen voor de films- & series-catalogus.",
      },
      {
        name: "Trakt",
        body: "Synchronisatie van kijkgeschiedenis en voortgang, als je daar al bijhoudt.",
      },
    ],
    plannedLabel: "Gepland",
    howEyebrow: "Zo werkt het",
    howHeading: "Binnen een minuut aan de slag.",
    steps: [
      {
        step: "01",
        title: "Installeer Viewaro",
        body: "Op je telefoon, tablet, Mac of tv. Eén app, overal dezelfde ervaring.",
      },
      {
        step: "02",
        title: "Voeg je playlist toe",
        body: "Plak een M3U-link of log in met je Xtream-account. Je zenders verschijnen binnen enkele seconden.",
      },
      {
        step: "03",
        title: "Begin met kijken",
        body: "Live tv met een volledige programmagids, favorieten en direct zenders wisselen. Dat is alles.",
      },
    ],
    faqEyebrow: "Veelgestelde vragen",
    faqHeading: "Goede vragen.",
    faqs: [
      {
        q: "Bevat Viewaro zenders of streams?",
        a: "Nee. Viewaro is een speler — het bevat geen zenders, streams of abonnementen van welke aard dan ook. Je verbindt je eigen playlist van je eigen provider, en Viewaro geeft die een mooi thuis.",
      },
      {
        q: "Welke platforms worden ondersteund?",
        a: "Viewaro wordt ontwikkeld voor iPhone, iPad, Mac, Apple TV, Android en Android TV.",
      },
      {
        q: "Welke playlistformaten kan ik gebruiken?",
        a: "M3U-/M3U8-playlists en Xtream Codes-accounts, plus handmatig toegevoegde zenders. EPG-gegevens worden ondersteund via XMLTV, automatisch herkend vanuit je playlist of handmatig toegevoegd.",
      },
      {
        q: "Heb ik een account nodig?",
        a: "Nee — alles werkt in gastmodus. Een optioneel gratis account voegt cloudsynchronisatie toe, zodat je bronnen, favorieten en instellingen op al je apparaten behouden blijven.",
      },
      {
        q: "Wanneer wordt het gelanceerd?",
        a: "Viewaro wordt momenteel ontwikkeld en getest op alle platforms. Lanceringsdetails verschijnen hier als eerste.",
      },
    ],
    ctaHeading: "Binnenkort beschikbaar.",
    ctaBody:
      "Viewaro wordt momenteel gebouwd en getest op alle vijf platforms. Kom snel terug voor lanceringsdetails.",
  },
  legal: {
    updatedLabel: "Laatst bijgewerkt:",
    privacy: {
      title: "Privacybeleid",
      metaDescription: "Hoe Viewaro met je gegevens omgaat.",
      updated: "30 juli 2026",
      sections: [
        {
          paragraphs: [
            "Viewaro is gebouwd op een eenvoudig principe: **jouw content is jouw zaak.** De app is een speler voor playlists die jij aanlevert — we hebben geen interesse in wat je kijkt, en de app is zo ontworpen dat dat zo blijft.",
          ],
        },
        {
          heading: "Wat Viewaro op je apparaat opslaat",
          list: [
            "**Playlistbronnen** — de M3U-URL's, Xtream Codes-servergegevens en handmatig toegevoegde zenders die je instelt. Inloggegevens worden opgeslagen in de beveiligde opslag van het besturingssysteem (Keychain op Apple-platforms, Keystore-gebaseerde opslag op Android).",
            "**Voorkeuren** — favorieten, recent bekeken zenders, lay-out- en afspeelinstellingen, pincode voor ouderlijk toezicht.",
            "**Programmagidsgegevens** — EPG-gegevens (XMLTV) gedownload van de URL die je instelt, lokaal in cache opgeslagen.",
          ],
        },
        {
          paragraphs: [
            "Afspelen gebeurt rechtstreeks tussen je apparaat en de servers in je playlist. Je streams worden nooit via ons doorgestuurd, opgenomen of aan ons gerapporteerd.",
          ],
        },
        {
          heading: "Optioneel account & cloudsynchronisatie",
          paragraphs: [
            "Viewaro werkt volledig zonder account. Als je er een aanmaakt (om bronnen, favorieten en instellingen op meerdere apparaten te synchroniseren), slaan we op:",
          ],
        },
        {
          list: [
            "je e-mailadres (of de identifier van Inloggen met Apple/Google);",
            "de gesynchroniseerde gegevens zelf: je bronnen, favorieten en instellingen.",
          ],
        },
        {
          paragraphs: [
            "Deze gegevens worden uitsluitend gebruikt om synchronisatie mogelijk te maken. Je kunt je account en alle gesynchroniseerde gegevens op elk moment vanuit de app verwijderen.",
          ],
        },
        {
          heading: "Aankopen",
          paragraphs: [
            "Abonnementen worden verwerkt door Apple (App Store) of Google (Google Play). Wij zien je betaalgegevens nooit. We gebruiken RevenueCat, een dienst voor abonnementsbeheer, om aankooprechten te valideren; deze ontvangt een anonieme app-gebruikers-ID en aankoopbonnen, niet je identiteit.",
          ],
        },
        {
          heading: "Analyse",
          paragraphs: [
            "We kunnen anonieme, geaggregeerde gebruiksstatistieken verzamelen (zoals welke schermen worden gebruikt en of er afspeelfouten optreden) om de app te verbeteren. Deze statistieken bevatten geen persoonlijke gegevens, geen accountgegevens, en niets over de inhoud van je playlists of wat je kijkt.",
          ],
        },
        {
          heading: "Wat we niet doen",
          list: [
            "We verkopen of delen je gegevens niet met derden voor marketingdoeleinden.",
            "We volgen niet wat je kijkt.",
            "We tonen geen advertenties en gebruiken geen advertentie-SDK's.",
            "We verzamelen je locatie niet.",
          ],
        },
        {
          heading: "Bewaring & verwijdering van gegevens",
          paragraphs: [
            "Gegevens op het apparaat blijven op je apparaat en worden verwijderd wanneer je de app verwijdert. Accountgegevens worden alleen bewaard zolang je account bestaat — je account verwijderen vanuit de app verwijdert ze permanent.",
          ],
        },
        {
          heading: "Kinderen",
          paragraphs: [
            "Viewaro is niet gericht op kinderen. Ouderlijk toezicht bestaat zodat volwassenen de toegang tot zenders op gedeelde schermen kunnen beperken.",
          ],
        },
        {
          heading: "Wijzigingen",
          paragraphs: [
            "We zullen dit beleid bijwerken naarmate de app zich ontwikkelt en de datum van de laatste herziening bovenaan deze pagina vermelden.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Vragen over privacy? Bezoek onze [supportpagina](/support) of schrijf ons — de gegevens staan daar vermeld.",
          ],
        },
      ],
    },
    terms: {
      title: "Gebruiksvoorwaarden",
      metaDescription: "Gebruiksvoorwaarden voor de Viewaro-app.",
      updated: "30 juli 2026",
      sections: [
        {
          paragraphs: [
            "Deze voorwaarden gelden voor de Viewaro-applicatie op alle ondersteunde platforms (iPhone, iPad, Mac, Apple TV, Android en Android TV). Door Viewaro te gebruiken, ga je hiermee akkoord.",
          ],
        },
        {
          heading: "1. Viewaro is een speler, geen contentdienst",
          paragraphs: [
            "Viewaro biedt, verkoopt, host of bundelt **geen** televisiezenders, streams, video's of andere mediacontent. De app speelt uitsluitend content af van bronnen die **jij** instelt — je eigen playlists, servers en abonnementen van externe providers.",
            "Jij bent als enige verantwoordelijk voor de bronnen die je toevoegt en ervoor te zorgen dat je het wettelijke recht hebt om die content in jouw land te bekijken. Viewaro en de ontwikkelaar hebben geen banden met enige contentprovider en aanvaarden geen aansprakelijkheid voor content van derden, de rechtmatigheid, beschikbaarheid of kwaliteit ervan.",
          ],
        },
        {
          heading: "2. Licentie",
          paragraphs: [
            "We verlenen je een persoonlijke, niet-exclusieve, niet-overdraagbare licentie om Viewaro te gebruiken op apparaten die je bezit of beheert, zoals toegestaan door de App Store- of Google Play-voorwaarden waaronder je de app hebt verkregen. Op Apple-platforms is Apples standaard [licentieovereenkomst voor eindgebruikers van gelicentieerde toepassingen](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) van toepassing, voor zover niet vervangen door deze voorwaarden.",
          ],
        },
        {
          heading: "3. Abonnementen",
          paragraphs: [
            "Sommige functies vereisen mogelijk een betaald abonnement. Abonnementen worden gefactureerd via je App Store- of Google Play-account, worden automatisch verlengd tenzij minstens 24 uur voor het einde van de huidige periode wordt opgezegd, en kunnen worden beheerd of opgezegd in de accountinstellingen van je store. Prijzen worden in de app getoond vóór aankoop. Terugbetalingen worden afgehandeld door Apple of Google volgens hun beleid.",
          ],
        },
        {
          heading: "4. Aanvaardbaar gebruik",
          list: [
            "Gebruik Viewaro niet om toegang te krijgen tot content waarvoor je wettelijk geen recht hebt.",
            "Probeer de app niet te reverse-engineeren, door te verkopen of te herdistribueren.",
            "Gebruik de app niet op een manier die geldende wetgeving overtreedt.",
          ],
        },
        {
          heading: "5. Vrijwaring & beperking van aansprakelijkheid",
          paragraphs: [
            'Viewaro wordt geleverd "zoals het is", zonder enige garantie. Voor zover wettelijk toegestaan, is de ontwikkelaar niet aansprakelijk voor schade die voortvloeit uit je gebruik van de app, inclusief schade door content van derden of de onbeschikbaarheid van je bronnen.',
          ],
        },
        {
          heading: "6. Wijzigingen",
          paragraphs: [
            "We kunnen deze voorwaarden bijwerken naarmate de app zich ontwikkelt. Voortgezet gebruik na een update geldt als aanvaarding. De herzieningsdatum staat bovenaan deze pagina.",
          ],
        },
        {
          heading: "7. Contact",
          paragraphs: [
            "Vragen over deze voorwaarden? Bezoek onze [supportpagina](/support).",
          ],
        },
      ],
    },
    support: {
      title: "Support",
      metaDescription: "Hulp krijgen bij Viewaro.",
      sections: [
        {
          paragraphs: [
            "Viewaro wordt momenteel ontwikkeld. Zodra de app lanceert, is deze pagina de snelste manier om hulp te krijgen. Veelgestelde vragen worden hieronder beantwoord — neem voor al het andere contact op.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Mail ons op [support@itquotes.hr](mailto:support@itquotes.hr) en vermeld je apparaat, besturingssysteemversie en een korte omschrijving van het probleem. Vermeld nooit je playlist-URL of providergegevens in een e-mail.",
          ],
        },
        {
          heading: "Veelgestelde vragen",
          topics: [
            {
              q: "Mijn playlist laadt niet",
              a: "Controleer de URL bij je provider — deze moet verwijzen naar een M3U-/M3U8-bestand of een geldige Xtream Codes-server. Als de playlist wel in een browser laadt maar niet in de app, blokkeert je provider mogelijk app-toegang; neem contact met hen op.",
            },
            {
              q: "Een zender speelt niet af",
              a: 'De beschikbaarheid van een stream wordt volledig bepaald door je provider. Probeer dezelfde zender later opnieuw, of controleer of deze werkt in het portaal van je provider. De optie "defecte zenders overslaan" in Viewaro kan zenders verbergen die herhaaldelijk mislukken.',
            },
            {
              q: "De programmagids is leeg",
              a: "EPG-gegevens komen van een XMLTV-bron. Als je playlist er geen aangeeft, voeg dan de EPG-URL handmatig toe in de bron-instellingen en vernieuw de gids.",
            },
            {
              q: "Hoe zeg ik mijn abonnement op?",
              a: "Abonnementen worden beheerd door Apple of Google, niet door ons. Op Apple-apparaten: Instellingen → je naam → Abonnementen. Op Android: Play Store → Betalingen & abonnementen.",
            },
            {
              q: "Hoe verwijder ik mijn account?",
              a: "Open in de app het accountgedeelte en kies Account verwijderen. Dit verwijdert je account en alle gesynchroniseerde gegevens permanent.",
            },
          ],
        },
        {
          heading: "Een opmerking over content",
          paragraphs: [
            "Viewaro is uitsluitend een speler — het bevat geen zenders of streams, en we kunnen niet helpen met vragen over de content, prijzen of accounts van een specifieke provider. Neem voor alles wat de zenders zelf betreft contact op met je provider.",
          ],
        },
      ],
    },
  },
};

export default nl;
