import type { Dictionary } from "../types";

const pt: Dictionary = {
  nav: {
    features: "Funcionalidades",
    faq: "Perguntas frequentes",
    support: "Suporte",
    comingSoon: "Brevemente",
  },
  footer: {
    tagline: "O teu conteúdo. O teu ecrã.",
    features: "Funcionalidades",
    privacy: "Política de privacidade",
    support: "Suporte",
    terms: "Termos de utilização",
    copyright: "© 2026 ITQuotes. Todos os direitos reservados.",
    madeBy: "Um produto itQuotes — itquotes.hr",
  },
  home: {
    metaTitle: "Viewaro — TV em direto, feito bem",
    metaDescription:
      "Viewaro é um leitor IPTV rápido e elegante para iPhone, iPad, Mac, Apple TV, Android e Android TV. Fontes M3U, Xtream e manuais, EPG em direto, favoritos e controlo parental — brevemente.",
    eyebrow: "Viewaro Player",
    heroLine1: "O teu conteúdo.",
    heroLine2: "O teu ecrã.",
    heroSub:
      "Um leitor IPTV rápido e elegante para o teu telemóvel, Mac e TV. Traz a tua própria playlist — o Viewaro trata do resto.",
    badge: "Brevemente na App Store e Google Play",
    featuresEyebrow: "Funcionalidades",
    featuresHeading: "Tudo o que uma app de TV em direto deve ser.",
    features: [
      {
        title: "TV em direto e guia",
        body: "Um guia de programação integrado com progresso em direto e o que vem a seguir — sem precisar de um ecrã separado.",
      },
      {
        title: "Qualquer fonte",
        body: "Liga uma playlist M3U, uma conta Xtream Codes, ou adiciona canais um a um. Combina várias fontes ao mesmo tempo.",
      },
      {
        title: "Favoritos e pesquisa",
        body: "Cria uma lista de canais pessoal e encontra qualquer coisa instantaneamente, em todas as fontes que adicionaste.",
      },
      {
        title: "Sincronização na nuvem",
        body: "Fontes, favoritos e definições seguem-te do telemóvel para a TV. Inicia sessão uma vez, ou salta esse passo — o modo convidado também funciona.",
      },
      {
        title: "Controlo parental",
        body: "Bloqueia canais individuais com um PIN, para que o comando possa ser entregue sem preocupações.",
      },
      {
        title: "Feito para cada ecrã",
        body: "Um leitor tão à vontade no telemóvel como na Apple TV e Android TV, com navegação completa por comando incluída.",
      },
    ],
    integrationsEyebrow: "No roteiro",
    integrationsHeading: "Filmes e séries estão a chegar.",
    integrationsSub:
      "Um catálogo enriquecido com metadados sobre a TV em direto — integrações planeadas, ainda não disponíveis.",
    integrations: [
      {
        name: "TMDB",
        body: "Cartazes, elenco e descrições para o catálogo de filmes e séries.",
      },
      {
        name: "Trakt",
        body: "Sincronização de histórico e progresso de visualização, caso já uses lá.",
      },
    ],
    plannedLabel: "Planeado",
    howEyebrow: "Como funciona",
    howHeading: "Pronto num minuto.",
    steps: [
      {
        step: "01",
        title: "Instala o Viewaro",
        body: "No telemóvel, tablet, Mac ou TV. Uma app, a mesma experiência em todo o lado.",
      },
      {
        step: "02",
        title: "Adiciona a tua playlist",
        body: "Cola um link M3U ou inicia sessão com a tua conta Xtream. Os teus canais aparecem em segundos.",
      },
      {
        step: "03",
        title: "Começa a ver",
        body: "TV em direto com guia de programação completo, favoritos e mudança de canal instantânea. É tudo.",
      },
    ],
    faqEyebrow: "Perguntas frequentes",
    faqHeading: "Boas perguntas.",
    faqs: [
      {
        q: "O Viewaro inclui canais ou streams?",
        a: "Não. O Viewaro é um leitor — não contém canais, streams ou subscrições de qualquer tipo. Ligas a tua própria playlist do teu próprio fornecedor, e o Viewaro dá-lhe um lar bonito.",
      },
      {
        q: "Que plataformas são suportadas?",
        a: "O Viewaro está a ser desenvolvido para iPhone, iPad, Mac, Apple TV, Android e Android TV.",
      },
      {
        q: "Que formatos de playlist posso usar?",
        a: "Playlists M3U/M3U8 e contas Xtream Codes, além de canais adicionados manualmente. Os dados EPG são suportados via XMLTV, detetados automaticamente a partir da playlist ou adicionados manualmente.",
      },
      {
        q: "Preciso de uma conta?",
        a: "Não — tudo funciona em modo convidado. Uma conta gratuita opcional adiciona sincronização na nuvem, para que as tuas fontes, favoritos e definições te sigam entre dispositivos.",
      },
      {
        q: "Quando é lançado?",
        a: "O Viewaro está atualmente em desenvolvimento e testes em todas as plataformas. Os detalhes do lançamento aparecerão aqui primeiro.",
      },
    ],
    ctaHeading: "Lançamento em breve.",
    ctaBody:
      "O Viewaro está a ser construído e testado nas cinco plataformas. Volta em breve para detalhes do lançamento.",
  },
  legal: {
    updatedLabel: "Última atualização:",
    privacy: {
      title: "Política de privacidade",
      metaDescription: "Como o Viewaro trata os teus dados.",
      updated: "30 de julho de 2026",
      sections: [
        {
          paragraphs: [
            "O Viewaro é construído sobre um princípio simples: **o teu conteúdo é da tua responsabilidade.** A app é um leitor de playlists que tu forneces — não temos interesse no que vês, e a app é concebida para que assim se mantenha.",
          ],
        },
        {
          heading: "O que o Viewaro guarda no teu dispositivo",
          list: [
            "**Fontes de playlist** — os URLs M3U, dados do servidor Xtream Codes e canais adicionados manualmente que configuras. As credenciais são guardadas no armazenamento seguro do sistema operativo (Keychain nas plataformas Apple, armazenamento baseado em Keystore no Android).",
            "**Preferências** — favoritos, canais vistos recentemente, definições de layout e reprodução, PIN do controlo parental.",
            "**Dados do guia de programação** — dados EPG (XMLTV) transferidos do URL que configuras, guardados localmente em cache.",
          ],
        },
        {
          paragraphs: [
            "A reprodução acontece diretamente entre o teu dispositivo e os servidores da tua playlist. Os teus streams nunca passam por nós, nem são gravados ou reportados a nós.",
          ],
        },
        {
          heading: "Conta opcional e sincronização na nuvem",
          paragraphs: [
            "O Viewaro funciona totalmente sem conta. Se optares por criar uma (para sincronizar fontes, favoritos e definições entre dispositivos), guardamos:",
          ],
        },
        {
          list: [
            "o teu endereço de email (ou o identificador fornecido pelo Iniciar sessão com Apple/Google);",
            "os dados sincronizados em si: as tuas fontes, favoritos e definições.",
          ],
        },
        {
          paragraphs: [
            "Estes dados são usados exclusivamente para fornecer a sincronização. Podes eliminar a tua conta e todos os dados sincronizados a qualquer momento a partir da app.",
          ],
        },
        {
          heading: "Compras",
          paragraphs: [
            "As subscrições são processadas pela Apple (App Store) ou Google (Google Play). Nunca vemos os teus dados de pagamento. Usamos o RevenueCat, um serviço de gestão de subscrições, para validar direitos de compra; este recebe um identificador de utilizador anónimo da app e recibos de compra, não a tua identidade.",
          ],
        },
        {
          heading: "Análise",
          paragraphs: [
            "Podemos recolher estatísticas de uso anónimas e agregadas (como que ecrãs são usados ou se ocorrem erros de reprodução) para melhorar a app. Estas estatísticas não contêm informação pessoal, identificadores de conta, nem nada sobre o conteúdo das tuas playlists ou o que vês.",
          ],
        },
        {
          heading: "O que não fazemos",
          list: [
            "Não vendemos nem partilhamos os teus dados com terceiros para fins de marketing.",
            "Não rastreamos o que vês.",
            "Não mostramos anúncios nem usamos SDKs de publicidade.",
            "Não recolhemos a tua localização.",
          ],
        },
        {
          heading: "Retenção e eliminação de dados",
          paragraphs: [
            "Os dados no dispositivo permanecem no teu dispositivo e são removidos quando eliminas a app. Os dados da conta são mantidos apenas enquanto a tua conta existir — eliminar a tua conta a partir da app remove-os permanentemente.",
          ],
        },
        {
          heading: "Crianças",
          paragraphs: [
            "O Viewaro não é dirigido a crianças. A funcionalidade de controlo parental existe para que os adultos possam restringir o acesso a canais em ecrãs partilhados.",
          ],
        },
        {
          heading: "Alterações",
          paragraphs: [
            "Iremos atualizar esta política à medida que a app evolui, indicando a data da última revisão no topo desta página.",
          ],
        },
        {
          heading: "Contacto",
          paragraphs: [
            "Perguntas sobre privacidade? Visita a nossa [página de suporte](/support) ou escreve-nos — os detalhes estão lá.",
          ],
        },
      ],
    },
    terms: {
      title: "Termos de utilização",
      metaDescription: "Termos de utilização da app Viewaro.",
      updated: "30 de julho de 2026",
      sections: [
        {
          paragraphs: [
            "Estes termos aplicam-se à aplicação Viewaro em todas as plataformas suportadas (iPhone, iPad, Mac, Apple TV, Android e Android TV). Ao usar o Viewaro, aceitas estes termos.",
          ],
        },
        {
          heading: "1. O Viewaro é um leitor, não um serviço de conteúdo",
          paragraphs: [
            "O Viewaro **não** fornece, vende, aloja ou inclui quaisquer canais de televisão, streams, vídeos ou outro conteúdo multimédia. A app reproduz conteúdo exclusivamente a partir de fontes que **tu** configuras — as tuas próprias playlists, servidores e subscrições de fornecedores terceiros.",
            "És o único responsável pelas fontes que adicionas e por garantir que tens o direito legal de aceder e ver esse conteúdo no teu país. O Viewaro e o seu criador não têm qualquer afiliação com nenhum fornecedor de conteúdo e não aceitam responsabilidade por conteúdo de terceiros, a sua legalidade, disponibilidade ou qualidade.",
          ],
        },
        {
          heading: "2. Licença",
          paragraphs: [
            "Concedemos-te uma licença pessoal, não exclusiva e intransmissível para usar o Viewaro em dispositivos que possuis ou controlas, conforme permitido pelos termos da App Store ou Google Play através dos quais o obtiveste. Nas plataformas Apple, aplica-se o [Contrato de Licença de Utilizador Final de Aplicações Licenciadas](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) padrão da Apple, onde não substituído por estes termos.",
          ],
        },
        {
          heading: "3. Subscrições",
          paragraphs: [
            "Algumas funcionalidades podem exigir uma subscrição paga. As subscrições são cobradas através da tua conta App Store ou Google Play, renovam-se automaticamente a menos que canceladas pelo menos 24 horas antes do fim do período atual, e podem ser geridas ou canceladas nas definições de conta da tua loja. Os preços são apresentados na app antes da compra. Os reembolsos são geridos pela Apple ou Google de acordo com as respetivas políticas.",
          ],
        },
        {
          heading: "4. Utilização aceitável",
          list: [
            "Não uses o Viewaro para aceder a conteúdo que não tens o direito legal de ver.",
            "Não tentes fazer engenharia inversa, revender ou redistribuir a app.",
            "Não uses a app de forma alguma que viole a lei aplicável.",
          ],
        },
        {
          heading: "5. Isenção de garantia e limitação de responsabilidade",
          paragraphs: [
            'O Viewaro é fornecido "tal como está" sem garantias de qualquer tipo. Na medida máxima permitida por lei, o criador não é responsável por quaisquer danos decorrentes da tua utilização da app, incluindo os causados por conteúdo de terceiros ou pela indisponibilidade das tuas fontes.',
          ],
        },
        {
          heading: "6. Alterações",
          paragraphs: [
            "Podemos atualizar estes termos à medida que a app evolui. A utilização continuada após uma atualização constitui aceitação. A data de revisão é apresentada no topo desta página.",
          ],
        },
        {
          heading: "7. Contacto",
          paragraphs: [
            "Perguntas sobre estes termos? Visita a nossa [página de suporte](/support).",
          ],
        },
      ],
    },
    support: {
      title: "Suporte",
      metaDescription: "Obtém ajuda com o Viewaro.",
      sections: [
        {
          paragraphs: [
            "O Viewaro está atualmente em desenvolvimento. Assim que for lançado, esta página será a forma mais rápida de obter ajuda. As perguntas mais comuns são respondidas abaixo — para qualquer outra coisa, contacta-nos.",
          ],
        },
        {
          heading: "Contacto",
          paragraphs: [
            "Envia-nos um email para [support@itquotes.hr](mailto:support@itquotes.hr) e inclui o teu dispositivo, versão do sistema operativo e uma breve descrição do problema. Nunca incluas o URL da tua playlist ou credenciais do fornecedor num email.",
          ],
        },
        {
          heading: "Perguntas comuns",
          topics: [
            {
              q: "A minha playlist não carrega",
              a: "Confirma o URL com o teu fornecedor — deve apontar para um ficheiro M3U/M3U8 ou um servidor Xtream Codes válido. Se a playlist carregar no browser mas não na app, o teu fornecedor pode estar a bloquear o acesso a partir de apps; contacta-o.",
            },
            {
              q: "Um canal não reproduz",
              a: 'A disponibilidade do stream é controlada inteiramente pelo teu fornecedor. Tenta o mesmo canal mais tarde, ou verifica se funciona no portal do teu fornecedor. A opção "saltar canais avariados" do Viewaro pode ocultar canais que falham repetidamente.',
            },
            {
              q: "O guia de programação está vazio",
              a: "Os dados EPG vêm de uma fonte XMLTV. Se a tua playlist não indicar uma, adiciona o URL EPG manualmente nas definições da fonte e depois atualiza o guia.",
            },
            {
              q: "Como cancelo a minha subscrição?",
              a: "As subscrições são geridas pela Apple ou Google, não por nós. Em dispositivos Apple: Definições → o teu nome → Subscrições. No Android: Play Store → Pagamentos e subscrições.",
            },
            {
              q: "Como elimino a minha conta?",
              a: "Na app, abre a secção de conta e escolhe Eliminar conta. Isto remove permanentemente a tua conta e todos os dados sincronizados.",
            },
          ],
        },
        {
          heading: "Uma nota sobre conteúdo",
          paragraphs: [
            "O Viewaro é apenas um leitor — não inclui canais ou streams, e não podemos ajudar com perguntas sobre o conteúdo, preços ou conta de qualquer fornecedor específico. Para tudo relacionado com os próprios canais, contacta o teu fornecedor.",
          ],
        },
      ],
    },
  },
};

export default pt;
