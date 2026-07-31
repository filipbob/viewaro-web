import type { Dictionary } from "../types";

const fr: Dictionary = {
  nav: {
    features: "Fonctionnalités",
    faq: "FAQ",
    support: "Assistance",
    comingSoon: "Bientôt disponible",
  },
  footer: {
    tagline: "Votre contenu. Votre écran.",
    features: "Fonctionnalités",
    privacy: "Politique de confidentialité",
    support: "Assistance",
    terms: "Conditions d'utilisation",
    copyright: "© 2026 ITQuotes. Tous droits réservés.",
    madeBy: "Un produit itQuotes — itquotes.hr",
  },
  home: {
    metaTitle: "Viewaro — La TV en direct, bien faite",
    metaDescription:
      "Viewaro est un lecteur IPTV rapide et élégant pour iPhone, iPad, Mac, Apple TV, Android et Android TV. Sources M3U, Xtream et manuelles, EPG en direct, favoris et contrôle parental — bientôt disponible.",
    eyebrow: "Viewaro Player",
    heroLine1: "Votre contenu.",
    heroLine2: "Votre écran.",
    heroSub:
      "Un lecteur IPTV rapide et élégant pour votre téléphone, votre Mac et votre téléviseur. Apportez votre propre playlist — Viewaro s'occupe du reste.",
    badge: "Bientôt sur l'App Store et Google Play",
    featuresEyebrow: "Fonctionnalités",
    featuresHeading: "Tout ce qu'une application de TV en direct doit être.",
    features: [
      {
        title: "TV en direct et guide",
        body: "Un guide des programmes intégré avec progression en direct et aperçu du programme suivant — pas besoin d'un écran séparé.",
      },
      {
        title: "N'importe quelle source",
        body: "Connectez une playlist M3U, un compte Xtream Codes, ou ajoutez des chaînes une par une. Combinez plusieurs sources à la fois.",
      },
      {
        title: "Favoris et recherche",
        body: "Créez une liste de chaînes personnelle et trouvez instantanément n'importe quoi, dans toutes les sources que vous avez ajoutées.",
      },
      {
        title: "Synchronisation cloud",
        body: "Sources, favoris et paramètres vous suivent du téléphone au téléviseur. Connectez-vous une fois, ou passez cette étape — le mode invité fonctionne aussi.",
      },
      {
        title: "Contrôle parental",
        body: "Verrouillez des chaînes individuelles avec un code PIN, pour que la télécommande puisse être confiée sans souci.",
      },
      {
        title: "Conçu pour chaque écran",
        body: "Un lecteur aussi à l'aise sur téléphone que sur Apple TV et Android TV, avec navigation complète à la télécommande incluse.",
      },
    ],
    integrationsEyebrow: "Sur la feuille de route",
    integrationsHeading: "Films et séries arrivent.",
    integrationsSub:
      "Un catalogue enrichi de métadonnées en plus de la TV en direct — intégrations prévues, pas encore disponibles.",
    integrations: [
      {
        name: "TMDB",
        body: "Affiches, casting et descriptions pour le catalogue de films et séries.",
      },
      {
        name: "Trakt",
        body: "Synchronisation de l'historique et de la progression de visionnage, si vous l'utilisez déjà.",
      },
    ],
    plannedLabel: "Prévu",
    howEyebrow: "Comment ça marche",
    howHeading: "Prêt en une minute.",
    steps: [
      {
        step: "01",
        title: "Installez Viewaro",
        body: "Sur votre téléphone, tablette, Mac ou téléviseur. Une seule app, la même expérience partout.",
      },
      {
        step: "02",
        title: "Ajoutez votre playlist",
        body: "Collez un lien M3U ou connectez-vous avec votre compte Xtream. Vos chaînes apparaissent en quelques secondes.",
      },
      {
        step: "03",
        title: "Commencez à regarder",
        body: "TV en direct avec guide des programmes complet, favoris et changement de chaîne instantané. C'est tout.",
      },
    ],
    faqEyebrow: "FAQ",
    faqHeading: "Bonnes questions.",
    faqs: [
      {
        q: "Viewaro inclut-il des chaînes ou des flux ?",
        a: "Non. Viewaro est un lecteur — il ne contient aucune chaîne, flux ou abonnement d'aucune sorte. Vous connectez votre propre playlist depuis votre propre fournisseur, et Viewaro lui offre un bel écrin.",
      },
      {
        q: "Quelles plateformes sont prises en charge ?",
        a: "Viewaro est développé pour iPhone, iPad, Mac, Apple TV, Android et Android TV.",
      },
      {
        q: "Quels formats de playlist puis-je utiliser ?",
        a: "Les playlists M3U/M3U8 et les comptes Xtream Codes, ainsi que les chaînes ajoutées manuellement. Les données EPG sont prises en charge via XMLTV, détectées automatiquement depuis votre playlist ou ajoutées manuellement.",
      },
      {
        q: "Ai-je besoin d'un compte ?",
        a: "Non — tout fonctionne en mode invité. Un compte gratuit optionnel ajoute la synchronisation cloud, afin que vos sources, favoris et paramètres vous suivent sur tous vos appareils.",
      },
      {
        q: "Quand sera-t-il lancé ?",
        a: "Viewaro est actuellement en développement et en test sur toutes les plateformes. Les détails du lancement apparaîtront ici en premier.",
      },
    ],
    ctaHeading: "Lancement bientôt.",
    ctaBody:
      "Viewaro est en cours de développement et de test sur les cinq plateformes. Revenez bientôt pour les détails du lancement.",
  },
  legal: {
    updatedLabel: "Dernière mise à jour :",
    privacy: {
      title: "Politique de confidentialité",
      metaDescription: "Comment Viewaro traite vos données.",
      updated: "30 juillet 2026",
      sections: [
        {
          paragraphs: [
            "Viewaro repose sur un principe simple : **votre contenu vous appartient.** L'application est un lecteur pour des playlists que vous fournissez — ce que vous regardez ne nous intéresse pas, et l'application est conçue pour que cela reste ainsi.",
          ],
        },
        {
          heading: "Ce que Viewaro stocke sur votre appareil",
          list: [
            "**Sources de playlist** — les URL M3U, les informations de serveur Xtream Codes et les chaînes ajoutées manuellement que vous configurez. Les identifiants sont stockés dans le stockage sécurisé du système d'exploitation (Trousseau sur les plateformes Apple, stockage basé sur Keystore sous Android).",
            "**Préférences** — favoris, chaînes récemment regardées, paramètres de mise en page et de lecture, code PIN du contrôle parental.",
            "**Données du guide des programmes** — données EPG (XMLTV) téléchargées depuis l'URL que vous configurez, mises en cache localement.",
          ],
        },
        {
          paragraphs: [
            "La lecture se fait directement entre votre appareil et les serveurs de votre playlist. Vos flux ne transitent jamais par nous, ne sont ni enregistrés ni signalés.",
          ],
        },
        {
          heading: "Compte optionnel et synchronisation cloud",
          paragraphs: [
            "Viewaro fonctionne entièrement sans compte. Si vous choisissez d'en créer un (pour synchroniser sources, favoris et paramètres entre appareils), nous stockons :",
          ],
        },
        {
          list: [
            "votre adresse e-mail (ou l'identifiant fourni par Connexion avec Apple/Google) ;",
            "les données synchronisées elles-mêmes : vos sources, favoris et paramètres.",
          ],
        },
        {
          paragraphs: [
            "Ces données servent uniquement à assurer la synchronisation. Vous pouvez supprimer votre compte et toutes les données synchronisées à tout moment depuis l'application.",
          ],
        },
        {
          heading: "Achats",
          paragraphs: [
            "Les abonnements sont traités par Apple (App Store) ou Google (Google Play). Nous ne voyons jamais vos informations de paiement. Nous utilisons RevenueCat, un service de gestion d'abonnements, pour valider les droits d'achat ; il reçoit un identifiant utilisateur anonyme de l'app et des reçus d'achat, pas votre identité.",
          ],
        },
        {
          heading: "Analytique",
          paragraphs: [
            "Nous pouvons collecter des statistiques d'utilisation anonymes et agrégées (comme les écrans utilisés ou la survenue d'erreurs de lecture) pour améliorer l'application. Ces statistiques ne contiennent aucune information personnelle, aucun identifiant de compte, ni rien sur le contenu de vos playlists ou ce que vous regardez.",
          ],
        },
        {
          heading: "Ce que nous ne faisons pas",
          list: [
            "Nous ne vendons ni ne partageons vos données avec des tiers à des fins marketing.",
            "Nous ne suivons pas ce que vous regardez.",
            "Nous n'affichons pas de publicités et n'utilisons pas de SDK publicitaires.",
            "Nous ne collectons pas votre localisation.",
          ],
        },
        {
          heading: "Conservation et suppression des données",
          paragraphs: [
            "Les données sur l'appareil restent sur votre appareil et sont supprimées lorsque vous désinstallez l'application. Les données de compte ne sont conservées que tant que votre compte existe — supprimer votre compte depuis l'application les supprime définitivement.",
          ],
        },
        {
          heading: "Enfants",
          paragraphs: [
            "Viewaro ne s'adresse pas aux enfants. La fonction de contrôle parental existe pour permettre aux adultes de restreindre l'accès aux chaînes sur des écrans partagés.",
          ],
        },
        {
          heading: "Modifications",
          paragraphs: [
            "Nous mettrons à jour cette politique au fil de l'évolution de l'application, en indiquant la date de la dernière révision en haut de cette page.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Des questions sur la confidentialité ? Visitez notre [page d'assistance](/support) ou écrivez-nous — les détails y figurent.",
          ],
        },
      ],
    },
    terms: {
      title: "Conditions d'utilisation",
      metaDescription: "Conditions d'utilisation de l'application Viewaro.",
      updated: "30 juillet 2026",
      sections: [
        {
          paragraphs: [
            "Ces conditions s'appliquent à l'application Viewaro sur toutes les plateformes prises en charge (iPhone, iPad, Mac, Apple TV, Android et Android TV). En utilisant Viewaro, vous les acceptez.",
          ],
        },
        {
          heading: "1. Viewaro est un lecteur, pas un service de contenu",
          paragraphs: [
            "Viewaro **ne** fournit, ne vend, n'héberge ni ne regroupe aucune chaîne de télévision, flux, vidéo ou autre contenu multimédia. L'application lit exclusivement du contenu provenant de sources que **vous** configurez — vos propres playlists, serveurs et abonnements de fournisseurs tiers.",
            "Vous êtes seul responsable des sources que vous ajoutez et devez vous assurer d'avoir le droit légal d'accéder à ce contenu et de le visionner dans votre pays. Viewaro et son développeur n'ont aucune affiliation avec un quelconque fournisseur de contenu et déclinent toute responsabilité concernant le contenu de tiers, sa légalité, sa disponibilité ou sa qualité.",
          ],
        },
        {
          heading: "2. Licence",
          paragraphs: [
            "Nous vous accordons une licence personnelle, non exclusive et non transférable pour utiliser Viewaro sur des appareils que vous possédez ou contrôlez, dans les limites permises par les conditions de l'App Store ou de Google Play par lesquelles vous l'avez obtenue. Sur les plateformes Apple, le [Contrat de licence de l'utilisateur final d'application sous licence](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) standard d'Apple s'applique dans la mesure où il n'est pas remplacé par les présentes conditions.",
          ],
        },
        {
          heading: "3. Abonnements",
          paragraphs: [
            "Certaines fonctionnalités peuvent nécessiter un abonnement payant. Les abonnements sont facturés via votre compte App Store ou Google Play, se renouvellent automatiquement sauf annulation au moins 24 heures avant la fin de la période en cours, et peuvent être gérés ou annulés dans les paramètres de compte de votre store. Les prix sont affichés dans l'application avant l'achat. Les remboursements sont gérés par Apple ou Google selon leurs politiques respectives.",
          ],
        },
        {
          heading: "4. Utilisation acceptable",
          list: [
            "N'utilisez pas Viewaro pour accéder à du contenu que vous n'avez pas le droit légal de visionner.",
            "N'essayez pas de rétro-concevoir, revendre ou redistribuer l'application.",
            "N'utilisez pas l'application d'une manière qui enfreint la loi applicable.",
          ],
        },
        {
          heading: "5. Exclusion de garantie et limitation de responsabilité",
          paragraphs: [
            'Viewaro est fourni "tel quel", sans garantie d\'aucune sorte. Dans toute la mesure permise par la loi, le développeur n\'est pas responsable des dommages découlant de votre utilisation de l\'application, y compris ceux causés par du contenu tiers ou l\'indisponibilité de vos sources.',
          ],
        },
        {
          heading: "6. Modifications",
          paragraphs: [
            "Nous pouvons mettre à jour ces conditions au fil de l'évolution de l'application. L'utilisation continue après une mise à jour vaut acceptation. La date de révision est affichée en haut de cette page.",
          ],
        },
        {
          heading: "7. Contact",
          paragraphs: [
            "Des questions sur ces conditions ? Visitez notre [page d'assistance](/support).",
          ],
        },
      ],
    },
    support: {
      title: "Assistance",
      metaDescription: "Obtenez de l'aide avec Viewaro.",
      sections: [
        {
          paragraphs: [
            "Viewaro est actuellement en développement. Une fois lancée, cette page sera le moyen le plus rapide d'obtenir de l'aide. Les questions courantes sont répondues ci-dessous — pour tout le reste, contactez-nous.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Écrivez-nous à [support@itquotes.hr](mailto:support@itquotes.hr) en indiquant votre appareil, la version du système et une brève description du problème. N'incluez jamais l'URL de votre playlist ou vos identifiants de fournisseur dans un e-mail.",
          ],
        },
        {
          heading: "Questions courantes",
          topics: [
            {
              q: "Ma playlist ne se charge pas",
              a: "Vérifiez l'URL auprès de votre fournisseur — elle doit pointer vers un fichier M3U/M3U8 ou un serveur Xtream Codes valide. Si la playlist se charge dans un navigateur mais pas dans l'application, votre fournisseur bloque peut-être l'accès depuis les apps ; contactez-le.",
            },
            {
              q: "Une chaîne ne se lit pas",
              a: 'La disponibilité du flux dépend entièrement de votre fournisseur. Réessayez la même chaîne plus tard, ou vérifiez qu\'elle fonctionne sur le portail de votre fournisseur. L\'option « ignorer les chaînes défectueuses » de Viewaro peut masquer les chaînes qui échouent de manière répétée.',
            },
            {
              q: "Le guide des programmes est vide",
              a: "Les données EPG proviennent d'une source XMLTV. Si votre playlist n'en indique pas, ajoutez l'URL EPG manuellement dans les paramètres de la source, puis actualisez le guide.",
            },
            {
              q: "Comment annuler mon abonnement ?",
              a: "Les abonnements sont gérés par Apple ou Google, pas par nous. Sur appareils Apple : Réglages → votre nom → Abonnements. Sur Android : Play Store → Paiements et abonnements.",
            },
            {
              q: "Comment supprimer mon compte ?",
              a: "Dans l'application, ouvrez la section compte et choisissez Supprimer le compte. Cela supprime définitivement votre compte et toutes les données synchronisées.",
            },
          ],
        },
        {
          heading: "Une remarque sur le contenu",
          paragraphs: [
            "Viewaro n'est qu'un lecteur — il n'inclut aucune chaîne ni flux, et nous ne pouvons pas répondre aux questions concernant le contenu, les prix ou le compte d'un fournisseur spécifique. Pour tout ce qui concerne les chaînes elles-mêmes, contactez votre fournisseur.",
          ],
        },
      ],
    },
  },
};

export default fr;
