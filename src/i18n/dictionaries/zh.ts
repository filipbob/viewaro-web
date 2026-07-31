import type { Dictionary } from "../types";

const zh: Dictionary = {
  nav: {
    features: "功能",
    faq: "常见问题",
    support: "支持",
    comingSoon: "即将推出",
  },
  footer: {
    tagline: "你的内容,你的屏幕。",
    features: "功能",
    privacy: "隐私政策",
    support: "支持",
    terms: "使用条款",
    copyright: "© 2026 ITQuotes。保留所有权利。",
    madeBy: "itQuotes 出品 — itquotes.hr",
  },
  home: {
    metaTitle: "Viewaro — 好好做直播电视",
    metaDescription:
      "Viewaro 是一款适用于 iPhone、iPad、Mac、Apple TV、Android 和 Android TV 的快速、优雅的 IPTV 播放器。支持 M3U、Xtream 及手动添加源,提供实时节目单、收藏和家长控制 — 即将推出。",
    eyebrow: "Viewaro Player",
    heroLine1: "你的内容,",
    heroLine2: "你的屏幕。",
    heroSub:
      "为你的手机、Mac 和电视打造的快速、优雅的 IPTV 播放器。带上你自己的播放列表 — 剩下的交给 Viewaro。",
    badge: "即将登陆 App Store 和 Google Play",
    featuresEyebrow: "功能",
    featuresHeading: "直播电视应用应有的一切。",
    features: [
      {
        title: "直播电视与节目单",
        body: "内嵌节目单,实时显示播放进度和下一个节目 — 无需切换到单独的页面查看。",
      },
      {
        title: "任意源",
        body: "连接 M3U 播放列表、Xtream Codes 账户,或逐一手动添加频道。可同时混用多个源。",
      },
      {
        title: "收藏与搜索",
        body: "建立个人频道列表,在你添加的所有源中即时找到任何内容。",
      },
      {
        title: "云同步",
        body: "源、收藏和设置会随你从手机同步到电视。登录一次即可,或者跳过登录 — 访客模式同样可用。",
      },
      {
        title: "家长控制",
        body: "用 PIN 码锁定单个频道,遥控器可以放心交给他人。",
      },
      {
        title: "为每一块屏幕而生",
        body: "在手机上得心应手,在 Apple TV 和 Android TV 上同样出色,支持完整的遥控器导航。",
      },
    ],
    integrationsEyebrow: "规划中",
    integrationsHeading: "电影与剧集即将到来。",
    integrationsSub: "在直播电视之上,打造一个元数据丰富的内容库 — 计划中的整合,尚未上线。",
    integrations: [
      {
        name: "TMDB",
        body: "为电影与剧集库提供海报、演员阵容和简介。",
      },
      {
        name: "Trakt",
        body: "如果你已经在使用它记录观看历史和进度,可与之同步。",
      },
    ],
    plannedLabel: "规划中",
    howEyebrow: "使用方法",
    howHeading: "一分钟即可上手。",
    steps: [
      {
        step: "01",
        title: "安装 Viewaro",
        body: "在手机、平板、Mac 或电视上安装。一个应用,处处一致的体验。",
      },
      {
        step: "02",
        title: "添加你的播放列表",
        body: "粘贴 M3U 链接,或用你的 Xtream 账户登录。几秒钟内频道即会出现。",
      },
      {
        step: "03",
        title: "开始观看",
        body: "完整的节目单、收藏功能和即时换台的直播电视体验。就是这么简单。",
      },
    ],
    faqEyebrow: "常见问题",
    faqHeading: "好问题。",
    faqs: [
      {
        q: "Viewaro 包含频道或直播源吗?",
        a: "不包含。Viewaro 是一个播放器 — 它不含任何频道、直播源或订阅内容。你连接自己从提供商那里获得的播放列表,Viewaro 只负责为它提供一个精美的展示空间。",
      },
      {
        q: "支持哪些平台?",
        a: "Viewaro 正在为 iPhone、iPad、Mac、Apple TV、Android 和 Android TV 开发。",
      },
      {
        q: "可以使用哪些播放列表格式?",
        a: "支持 M3U / M3U8 播放列表和 Xtream Codes 账户,以及手动添加的频道。节目单数据通过 XMLTV 支持,可从播放列表自动识别,也可手动添加。",
      },
      {
        q: "需要账户吗?",
        a: "不需要 — 访客模式下所有功能均可使用。可选的免费账户可开启云同步,让你的源、收藏和设置在各设备间保持一致。",
      },
      {
        q: "什么时候上线?",
        a: "Viewaro 目前正在所有平台上进行开发和测试。上线详情将第一时间在此公布。",
      },
    ],
    ctaHeading: "即将上线。",
    ctaBody: "Viewaro 正在五个平台上同步开发与测试。请稍后回来查看上线详情。",
  },
  legal: {
    updatedLabel: "最后更新:",
    privacy: {
      title: "隐私政策",
      metaDescription: "Viewaro 如何处理你的数据。",
      updated: "2026年7月30日",
      sections: [
        {
          paragraphs: [
            "Viewaro 建立在一个简单的原则之上:**你的内容由你做主。** 这款应用是一个播放你自行提供的播放列表的播放器 — 我们对你看什么不感兴趣,应用的设计初衷正是如此。",
          ],
        },
        {
          heading: "Viewaro 在你设备上存储的内容",
          list: [
            "**播放列表来源** — 你配置的 M3U 链接、Xtream Codes 服务器信息以及手动添加的频道。凭据存储在操作系统的安全存储中(Apple 平台为 Keychain,Android 为基于 Keystore 的存储)。",
            "**偏好设置** — 收藏、最近观看的频道、布局与播放设置、家长控制 PIN 码。",
            "**节目单数据** — 从你配置的地址下载并在本地缓存的 EPG(XMLTV)数据。",
          ],
        },
        {
          paragraphs: [
            "播放过程直接发生在你的设备与播放列表中的服务器之间。你的直播流从不经过我们转发、录制或上报给我们。",
          ],
        },
        {
          heading: "可选账户与云同步",
          paragraphs: [
            "Viewaro 完全无需账户即可使用。如果你选择创建账户(以便在多设备间同步源、收藏和设置),我们会存储:",
          ],
        },
        {
          list: [
            "你的电子邮箱地址(或通过 Apple / Google 登录提供的标识符);",
            "同步数据本身:你的源、收藏和设置。",
          ],
        },
        {
          paragraphs: [
            "这些数据仅用于提供同步功能。你可以随时在应用内删除账户及所有已同步的数据。",
          ],
        },
        {
          heading: "购买",
          paragraphs: [
            "订阅由 Apple(App Store)或 Google(Google Play)处理。我们从不接触你的支付信息。我们使用订阅管理服务 RevenueCat 来验证购买权益;它接收的是匿名的应用用户标识符和购买凭证,而非你的身份信息。",
          ],
        },
        {
          heading: "数据分析",
          paragraphs: [
            "为改进应用,我们可能收集匿名的、聚合的使用统计数据(例如使用了哪些界面、是否发生播放错误)。这些统计数据不包含任何个人信息、账户标识符,也不涉及你播放列表的内容或你观看的内容。",
          ],
        },
        {
          heading: "我们不会做的事",
          list: [
            "不会出于营销目的出售或与第三方分享你的数据。",
            "不会追踪你观看的内容。",
            "不展示广告,也不使用广告 SDK。",
            "不收集你的位置信息。",
          ],
        },
        {
          heading: "数据保留与删除",
          paragraphs: [
            "设备上的数据保留在你的设备中,卸载应用时会被移除。账户数据仅在账户存在期间保留 — 在应用内删除账户会将其永久移除。",
          ],
        },
        {
          heading: "儿童",
          paragraphs: [
            "Viewaro 并非面向儿童设计。家长控制功能的存在,是为了让成年人可以在共用设备上限制对频道的访问。",
          ],
        },
        {
          heading: "变更",
          paragraphs: ["我们会随着应用的发展更新本政策,并在页面顶部标注最新修订日期。"],
        },
        {
          heading: "联系我们",
          paragraphs: [
            "对隐私有疑问?请访问我们的[支持页面](/support),或直接写信给我们 — 联系方式已在该页面列出。",
          ],
        },
      ],
    },
    terms: {
      title: "使用条款",
      metaDescription: "Viewaro 应用的使用条款。",
      updated: "2026年7月30日",
      sections: [
        {
          paragraphs: [
            "本条款适用于 Viewaro 应用在所有支持平台上的使用(iPhone、iPad、Mac、Apple TV、Android 和 Android TV)。使用 Viewaro 即表示你同意本条款。",
          ],
        },
        {
          heading: "1. Viewaro 是一个播放器,而非内容服务",
          paragraphs: [
            "Viewaro **不**提供、销售、托管或捆绑任何电视频道、直播流、视频或其他媒体内容。应用仅播放**你自己**配置的来源中的内容 — 即你自己的播放列表、服务器以及第三方提供商的订阅内容。",
            "你需自行对添加的源负全部责任,并确保你在所在国家/地区拥有合法访问和观看该内容的权利。Viewaro 及其开发者与任何内容提供商均无关联,对第三方内容的合法性、可用性或质量不承担任何责任。",
          ],
        },
        {
          heading: "2. 许可",
          paragraphs: [
            "在你获取 Viewaro 时所适用的 App Store 或 Google Play 条款允许的范围内,我们授予你个人的、非独占的、不可转让的许可,在你拥有或控制的设备上使用 Viewaro。在 Apple 平台上,若未被本条款取代,Apple 标准的[授权应用最终用户许可协议](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)将适用。",
          ],
        },
        {
          heading: "3. 订阅",
          paragraphs: [
            "部分功能可能需要付费订阅。订阅费用通过你的 App Store 或 Google Play 账户结算,除非在当前订阅周期结束前至少 24 小时取消,否则将自动续订,你可以在商店的账户设置中管理或取消订阅。价格会在购买前在应用内显示。退款由 Apple 或 Google 按其各自的政策处理。",
          ],
        },
        {
          heading: "4. 可接受的使用方式",
          list: [
            "不得使用 Viewaro 访问你无合法权利观看的内容。",
            "不得尝试对应用进行逆向工程、转售或再分发。",
            "不得以任何违反适用法律的方式使用本应用。",
          ],
        },
        {
          heading: "5. 免责声明与责任限制",
          paragraphs: [
            "Viewaro 按“现状”提供,不附带任何形式的保证。在法律允许的最大范围内,开发者对因你使用本应用而产生的任何损害不承担责任,包括因第三方内容或你的源不可用而导致的损害。",
          ],
        },
        {
          heading: "6. 变更",
          paragraphs: [
            "我们可能会随着应用的发展更新本条款。更新后继续使用即表示接受更新内容。修订日期会显示在本页顶部。",
          ],
        },
        {
          heading: "7. 联系我们",
          paragraphs: ["对本条款有疑问?请访问我们的[支持页面](/support)。"],
        },
      ],
    },
    support: {
      title: "支持",
      metaDescription: "获取 Viewaro 相关帮助。",
      sections: [
        {
          paragraphs: [
            "Viewaro 目前正在开发中。应用上线后,本页面将是获取帮助最快捷的方式。常见问题的解答见下方 — 其他问题欢迎联系我们。",
          ],
        },
        {
          heading: "联系我们",
          paragraphs: [
            "发送邮件至 [support@itquotes.hr](mailto:support@itquotes.hr),请附上你的设备型号、系统版本以及问题的简要描述。请勿在邮件中包含你的播放列表地址或提供商凭据。",
          ],
        },
        {
          heading: "常见问题",
          topics: [
            {
              q: "我的播放列表无法加载",
              a: "请向你的提供商核实该地址 — 它必须指向一个 M3U/M3U8 文件或有效的 Xtream Codes 服务器。如果播放列表能在浏览器中加载但无法在应用中加载,可能是提供商屏蔽了应用访问,请联系他们。",
            },
            {
              q: "某个频道无法播放",
              a: "直播源的可用性完全由你的提供商控制。请稍后再试同一频道,或在提供商自己的门户中确认它是否可用。Viewaro 的“跳过失效频道”选项可以隐藏反复播放失败的频道。",
            },
            {
              q: "节目单是空的",
              a: "节目单数据来自 XMLTV 源。如果你的播放列表没有提供该地址,请在源设置中手动添加 EPG 地址,然后刷新节目单。",
            },
            {
              q: "如何取消我的订阅?",
              a: "订阅由 Apple 或 Google 管理,而非由我们管理。Apple 设备:设置 → 你的名字 → 订阅。Android 设备:Play 商店 → 付款和订阅。",
            },
            {
              q: "如何删除我的账户?",
              a: "在应用中打开账户部分,选择“删除账户”。这将永久移除你的账户及所有已同步的数据。",
            },
          ],
        },
        {
          heading: "关于内容的说明",
          paragraphs: [
            "Viewaro 仅是一个播放器 — 不包含任何频道或直播源,我们也无法就特定提供商的内容、价格或账户问题提供帮助。有关频道本身的一切问题,请联系你的提供商。",
          ],
        },
      ],
    },
  },
};

export default zh;
