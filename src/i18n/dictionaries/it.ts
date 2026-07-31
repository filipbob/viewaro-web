import type { Dictionary } from "../types";

const it: Dictionary = {
  nav: {
    features: "Funzionalità",
    faq: "FAQ",
    support: "Supporto",
    comingSoon: "Prossimamente",
  },
  footer: {
    tagline: "I tuoi contenuti. Il tuo schermo.",
    features: "Funzionalità",
    privacy: "Informativa sulla privacy",
    support: "Supporto",
    terms: "Termini di utilizzo",
    copyright: "© 2026 ITQuotes. Tutti i diritti riservati.",
    madeBy: "Un prodotto itQuotes — itquotes.hr",
  },
  home: {
    metaTitle: "Viewaro — La TV live fatta bene",
    metaDescription:
      "Viewaro è un player IPTV veloce ed elegante per iPhone, iPad, Mac, Apple TV, Android e Android TV. Sorgenti M3U, Xtream e manuali, EPG live, preferiti e controllo parentale — prossimamente.",
    eyebrow: "Viewaro Player",
    heroLine1: "I tuoi contenuti.",
    heroLine2: "Il tuo schermo.",
    heroSub:
      "Un player IPTV veloce ed elegante per il tuo telefono, il tuo Mac e la tua TV. Porta la tua playlist — a tutto il resto pensa Viewaro.",
    badge: "Prossimamente su App Store e Google Play",
    featuresEyebrow: "Funzionalità",
    featuresHeading: "Tutto quello che un'app di TV live dovrebbe essere.",
    features: [
      {
        title: "TV live e guida",
        body: "Una guida ai programmi integrata con avanzamento in diretta e anteprima del prossimo programma — nessuna schermata separata da consultare.",
      },
      {
        title: "Qualsiasi sorgente",
        body: "Collega una playlist M3U, un account Xtream Codes, o aggiungi i canali uno per uno. Combina più sorgenti contemporaneamente.",
      },
      {
        title: "Preferiti e ricerca",
        body: "Crea una lista canali personale e trova qualsiasi cosa all'istante, in tutte le sorgenti che hai aggiunto.",
      },
      {
        title: "Sincronizzazione cloud",
        body: "Sorgenti, preferiti e impostazioni ti seguono dal telefono alla TV. Accedi una volta, oppure salta il passaggio — la modalità ospite funziona comunque.",
      },
      {
        title: "Controllo parentale",
        body: "Blocca singoli canali con un PIN, così il telecomando può essere passato senza pensieri.",
      },
      {
        title: "Pensato per ogni schermo",
        body: "Un player a suo agio sul telefono quanto su Apple TV e Android TV, con navigazione completa da telecomando.",
      },
    ],
    integrationsEyebrow: "Nella roadmap",
    integrationsHeading: "Film e serie TV in arrivo.",
    integrationsSub:
      "Un catalogo arricchito di metadati sopra la TV live — integrazioni pianificate, non ancora attive.",
    integrations: [
      {
        name: "TMDB",
        body: "Locandine, cast e descrizioni per il catalogo di film e serie TV.",
      },
      {
        name: "Trakt",
        body: "Sincronizzazione di cronologia e progressi di visione, se già li tieni traccia lì.",
      },
    ],
    plannedLabel: "Pianificato",
    howEyebrow: "Come funziona",
    howHeading: "Pronto in un minuto.",
    steps: [
      {
        step: "01",
        title: "Installa Viewaro",
        body: "Su telefono, tablet, Mac o TV. Un'unica app, la stessa esperienza ovunque.",
      },
      {
        step: "02",
        title: "Aggiungi la tua playlist",
        body: "Incolla un link M3U o accedi con il tuo account Xtream. I tuoi canali appaiono in pochi secondi.",
      },
      {
        step: "03",
        title: "Inizia a guardare",
        body: "TV live con guida ai programmi completa, preferiti e cambio canale istantaneo. Tutto qui.",
      },
    ],
    faqEyebrow: "FAQ",
    faqHeading: "Buone domande.",
    faqs: [
      {
        q: "Viewaro include canali o stream?",
        a: "No. Viewaro è un player — non contiene canali, stream o abbonamenti di alcun tipo. Colleghi la tua playlist dal tuo provider, e Viewaro le dà una casa splendida.",
      },
      {
        q: "Quali piattaforme sono supportate?",
        a: "Viewaro è in sviluppo per iPhone, iPad, Mac, Apple TV, Android e Android TV.",
      },
      {
        q: "Quali formati di playlist posso usare?",
        a: "Playlist M3U/M3U8 e account Xtream Codes, oltre a canali aggiunti manualmente. I dati EPG sono supportati tramite XMLTV, rilevati automaticamente dalla playlist o aggiunti manualmente.",
      },
      {
        q: "Serve un account?",
        a: "No — funziona tutto in modalità ospite. Un account gratuito opzionale aggiunge la sincronizzazione cloud, così sorgenti, preferiti e impostazioni ti seguono su tutti i dispositivi.",
      },
      {
        q: "Quando viene lanciato?",
        a: "Viewaro è attualmente in sviluppo e in fase di test su tutte le piattaforme. I dettagli sul lancio appariranno prima qui.",
      },
    ],
    ctaHeading: "In arrivo a breve.",
    ctaBody:
      "Viewaro è in fase di sviluppo e test su tutte e cinque le piattaforme. Torna presto per i dettagli sul lancio.",
  },
  legal: {
    updatedLabel: "Ultimo aggiornamento:",
    privacy: {
      title: "Informativa sulla privacy",
      metaDescription: "Come Viewaro gestisce i tuoi dati.",
      updated: "30 luglio 2026",
      sections: [
        {
          paragraphs: [
            "Viewaro si basa su un principio semplice: **i tuoi contenuti sono affar tuo.** L'app è un player per playlist che fornisci tu — non ci interessa cosa guardi, e l'app è progettata per mantenerlo così.",
          ],
        },
        {
          heading: "Cosa memorizza Viewaro sul tuo dispositivo",
          list: [
            "**Sorgenti playlist** — gli URL M3U, i dati del server Xtream Codes e i canali aggiunti manualmente che configuri. Le credenziali sono conservate nell'archivio sicuro del sistema operativo (Keychain su piattaforme Apple, archivio basato su Keystore su Android).",
            "**Preferenze** — preferiti, canali visti di recente, impostazioni di layout e riproduzione, PIN del controllo parentale.",
            "**Dati della guida programmi** — dati EPG (XMLTV) scaricati dall'URL che configuri, memorizzati localmente in cache.",
          ],
        },
        {
          paragraphs: [
            "La riproduzione avviene direttamente tra il tuo dispositivo e i server della tua playlist. I tuoi stream non passano mai attraverso di noi, né vengono registrati o segnalati a noi.",
          ],
        },
        {
          heading: "Account opzionale e sincronizzazione cloud",
          paragraphs: [
            "Viewaro funziona completamente senza account. Se scegli di crearne uno (per sincronizzare sorgenti, preferiti e impostazioni su più dispositivi), memorizziamo:",
          ],
        },
        {
          list: [
            "il tuo indirizzo email (o l'identificativo fornito da Accedi con Apple/Google);",
            "i dati sincronizzati stessi: le tue sorgenti, preferiti e impostazioni.",
          ],
        },
        {
          paragraphs: [
            "Questi dati vengono utilizzati esclusivamente per fornire la sincronizzazione. Puoi eliminare il tuo account e tutti i dati sincronizzati in qualsiasi momento dall'app.",
          ],
        },
        {
          heading: "Acquisti",
          paragraphs: [
            "Gli abbonamenti sono elaborati da Apple (App Store) o Google (Google Play). Non vediamo mai i tuoi dati di pagamento. Utilizziamo RevenueCat, un servizio di gestione abbonamenti, per validare i diritti d'acquisto; riceve un identificativo utente anonimo dell'app e le ricevute d'acquisto, non la tua identità.",
          ],
        },
        {
          heading: "Analisi",
          paragraphs: [
            "Potremmo raccogliere statistiche d'uso anonime e aggregate (ad esempio quali schermate vengono usate o se si verificano errori di riproduzione) per migliorare l'app. Queste statistiche non contengono informazioni personali, identificativi dell'account, né nulla sul contenuto delle tue playlist o su cosa guardi.",
          ],
        },
        {
          heading: "Cosa non facciamo",
          list: [
            "Non vendiamo né condividiamo i tuoi dati con terze parti per scopi di marketing.",
            "Non tracciamo cosa guardi.",
            "Non mostriamo pubblicità e non usiamo SDK pubblicitari.",
            "Non raccogliamo la tua posizione.",
          ],
        },
        {
          heading: "Conservazione ed eliminazione dei dati",
          paragraphs: [
            "I dati sul dispositivo restano sul tuo dispositivo e vengono rimossi quando elimini l'app. I dati dell'account vengono conservati solo finché l'account esiste — eliminare l'account dall'app li rimuove permanentemente.",
          ],
        },
        {
          heading: "Minori",
          paragraphs: [
            "Viewaro non è rivolto ai minori. La funzione di controllo parentale esiste per consentire agli adulti di limitare l'accesso ai canali su schermi condivisi.",
          ],
        },
        {
          heading: "Modifiche",
          paragraphs: [
            "Aggiorneremo questa informativa man mano che l'app si evolve, indicando la data dell'ultima revisione in cima a questa pagina.",
          ],
        },
        {
          heading: "Contatti",
          paragraphs: [
            "Domande sulla privacy? Visita la nostra [pagina di supporto](/support) o scrivici — i dettagli sono elencati lì.",
          ],
        },
      ],
    },
    terms: {
      title: "Termini di utilizzo",
      metaDescription: "Termini di utilizzo dell'app Viewaro.",
      updated: "30 luglio 2026",
      sections: [
        {
          paragraphs: [
            "Questi termini si applicano all'applicazione Viewaro su tutte le piattaforme supportate (iPhone, iPad, Mac, Apple TV, Android e Android TV). Utilizzando Viewaro accetti questi termini.",
          ],
        },
        {
          heading: "1. Viewaro è un player, non un servizio di contenuti",
          paragraphs: [
            "Viewaro **non** fornisce, vende, ospita o include canali televisivi, stream, video o altri contenuti multimediali. L'app riproduce contenuti esclusivamente da sorgenti che **tu** configuri — le tue playlist, server e abbonamenti di provider terzi.",
            "Sei l'unico responsabile delle sorgenti che aggiungi e nell'assicurarti di avere il diritto legale di accedere e visualizzare quel contenuto nel tuo paese. Viewaro e il suo sviluppatore non hanno alcuna affiliazione con nessun fornitore di contenuti e non si assumono alcuna responsabilità per i contenuti di terzi, la loro legalità, disponibilità o qualità.",
          ],
        },
        {
          heading: "2. Licenza",
          paragraphs: [
            "Ti concediamo una licenza personale, non esclusiva e non trasferibile per usare Viewaro su dispositivi che possiedi o controlli, come consentito dai termini dell'App Store o di Google Play attraverso cui l'hai ottenuta. Sulle piattaforme Apple, si applica il [Contratto di licenza con l'utente finale per applicazioni concesse in licenza](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) standard di Apple, laddove non sostituito da questi termini.",
          ],
        },
        {
          heading: "3. Abbonamenti",
          paragraphs: [
            "Alcune funzionalità potrebbero richiedere un abbonamento a pagamento. Gli abbonamenti sono addebitati tramite il tuo account App Store o Google Play, si rinnovano automaticamente salvo cancellazione almeno 24 ore prima della fine del periodo in corso, e possono essere gestiti o cancellati nelle impostazioni account del tuo store. I prezzi sono mostrati nell'app prima dell'acquisto. I rimborsi sono gestiti da Apple o Google secondo le loro policy.",
          ],
        },
        {
          heading: "4. Uso consentito",
          list: [
            "Non usare Viewaro per accedere a contenuti che non hai il diritto legale di visualizzare.",
            "Non tentare di decompilare, rivendere o ridistribuire l'app.",
            "Non usare l'app in alcun modo che violi le leggi applicabili.",
          ],
        },
        {
          heading: "5. Esclusione di garanzia e limitazione di responsabilità",
          paragraphs: [
            'Viewaro è fornito "così com\'è" senza garanzie di alcun tipo. Nella misura massima consentita dalla legge, lo sviluppatore non è responsabile per eventuali danni derivanti dall\'uso dell\'app, inclusi quelli causati da contenuti di terzi o dall\'indisponibilità delle tue sorgenti.',
          ],
        },
        {
          heading: "6. Modifiche",
          paragraphs: [
            "Potremmo aggiornare questi termini man mano che l'app si evolve. L'uso continuato dopo un aggiornamento costituisce accettazione. La data di revisione è mostrata in cima a questa pagina.",
          ],
        },
        {
          heading: "7. Contatti",
          paragraphs: [
            "Domande su questi termini? Visita la nostra [pagina di supporto](/support).",
          ],
        },
      ],
    },
    support: {
      title: "Supporto",
      metaDescription: "Ottieni assistenza per Viewaro.",
      sections: [
        {
          paragraphs: [
            "Viewaro è attualmente in sviluppo. Una volta lanciata, questa pagina sarà il modo più veloce per ottenere assistenza. Le domande più comuni trovano risposta qui sotto — per qualsiasi altra cosa, contattaci.",
          ],
        },
        {
          heading: "Contatti",
          paragraphs: [
            "Scrivici a [support@itquotes.hr](mailto:support@itquotes.hr) includendo il tuo dispositivo, la versione del sistema operativo e una breve descrizione del problema. Non includere mai l'URL della tua playlist o le credenziali del provider in un'email.",
          ],
        },
        {
          heading: "Domande comuni",
          topics: [
            {
              q: "La mia playlist non si carica",
              a: "Verifica l'URL con il tuo provider — deve puntare a un file M3U/M3U8 o a un server Xtream Codes valido. Se la playlist si carica nel browser ma non nell'app, il tuo provider potrebbe bloccare l'accesso dall'app; contattalo.",
            },
            {
              q: "Un canale non si riproduce",
              a: 'La disponibilità dello stream è controllata interamente dal tuo provider. Riprova lo stesso canale più tardi, oppure verifica che funzioni nel portale del tuo provider. L\'opzione "salta canali non funzionanti" di Viewaro può nascondere i canali che falliscono ripetutamente.',
            },
            {
              q: "La guida programmi è vuota",
              a: "I dati EPG provengono da una sorgente XMLTV. Se la tua playlist non ne indica una, aggiungi manualmente l'URL EPG nelle impostazioni della sorgente, poi aggiorna la guida.",
            },
            {
              q: "Come annullo il mio abbonamento?",
              a: "Gli abbonamenti sono gestiti da Apple o Google, non da noi. Su dispositivi Apple: Impostazioni → il tuo nome → Abbonamenti. Su Android: Play Store → Pagamenti e abbonamenti.",
            },
            {
              q: "Come elimino il mio account?",
              a: "Nell'app, apri la sezione account e scegli Elimina account. Questo rimuove permanentemente il tuo account e tutti i dati sincronizzati.",
            },
          ],
        },
        {
          heading: "Una nota sui contenuti",
          paragraphs: [
            "Viewaro è solo un player — non include canali o stream, e non possiamo aiutare con domande sui contenuti, prezzi o account di uno specifico provider. Per tutto ciò che riguarda i canali stessi, contatta il tuo provider.",
          ],
        },
      ],
    },
  },
};

export default it;
