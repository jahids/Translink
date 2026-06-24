export type Language = "en" | "jp";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      workWithUs: "Work with us",
      homeDesc: "Return to homepage",
      aboutDesc: "Learn more about our company",
      blogDesc: "Read our latest insights and research",
      contactDesc: "Get in touch with TransLink",
    },
    hero: {
      badge: "Software Agency",
      heading: "Global Software Transformation Partner for Businesses",
      description:
        "We design, build, and deploy Corporate Websites, E-commerce Platforms, iOS & Android Apps, and Custom High-Tech Solutions at scale — trusted by international clients across 15+ countries.",
      talkBtn: "Talk to our founder",
      caseStudiesBtn: "View Case Studies",
      clientsLabel: "Companies We've Helped Transform",
      caseStudiesLabel: "Featured Case Studies",
    },
    caseStudies: {
      badge: "Designs That Drive Growth",
      heading: "Recent case studies",
      description:
        "Explore our latest projects featuring enterprise-grade web platforms, e-commerce solutions, and mobile applications that have driven measurable growth for our global clients.",
      viewCaseStudy: "View case study",
    },
    process: {
      badge: "Our Proven Process",
      heading: "How We Bring Ideas to Life",
      description:
        "Our agile engineering process is built for speed, quality, and international scalability — from strategy to launch.",
      steps: [
        {
          title: "Discovery & Strategy",
          tagline: "Understanding Your Business Goals",
          description:
            "We start by deeply understanding your business, your users, and the problem you're solving. Through stakeholder interviews, competitive research, and technical scoping, we define the right architecture and tech stack for your goals — ensuring every decision is grounded in data and long-term scalability.",
          deliverables: [
            { item: "Technical scope & architecture plan" },
            { item: "Competitor & market analysis" },
            { item: "Tailored tech-stack strategy" },
          ],
          bg_image:
            "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
        },
        {
          title: "Planning & Architecture",
          tagline: "Engineering Blueprint for Success",
          description:
            "With strategy confirmed, we architect the full system. Detailed wireframes, database schemas, API contracts, and sprint plans ensure every stakeholder is aligned before a single line of code is written — eliminating rework and keeping projects on time and on budget.",
          deliverables: [
            { item: "System architecture & DB schema" },
            { item: "API contracts & high-fidelity wireframes" },
            { item: "Agile sprint roadmap" },
          ],
          bg_image:
            "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
        },
        {
          title: "Design & Development",
          tagline: "Pixel-Perfect. Production-Ready.",
          description:
            "Our designers and engineers work in tight cycles to build your product. Every UI is crafted for conversion and delight, while our backend engineers build robust, scalable infrastructure. We write clean, tested code and ship iteratively — giving you full visibility at every step.",
          deliverables: [
            { item: "Responsive, accessible UI/UX design" },
            { item: "Scalable backend & API development" },
            { item: "QA-tested, production-ready build" },
          ],
          bg_image:
            "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804376/fasimage_skodum.png",
        },
        {
          title: "Launch & Growth",
          tagline: "Ship Fast, Scale Globally",
          description:
            "We handle the full deployment pipeline — from CI/CD setup to infrastructure auto-scaling — so your product launches without friction. Post-launch, we provide performance monitoring, ongoing support, and growth-focused iteration to ensure your software thrives in any global market.",
          deliverables: [
            { item: "CI/CD pipeline & cloud deployment" },
            { item: "Performance monitoring & analytics" },
            { item: "Post-launch support & iteration" },
          ],
          bg_image:
            "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
        },
      ],
    },
    testimonials: {
      badge: "Testimonials",
      heading: "Meet our happy clients",
      description: "Read what our clients say about working with TransLink.",
      stats: {
        projects: { value: "120+", label: "Software Solutions Delivered" },
        clients: { value: "50+", label: "Global Clients Served" },
        revenue: { value: "$2M+", label: "Revenue Generated for Clients" },
      },
    },
    contact: {
      badge: "Contact Us",
      heading: "Get in Touch",
      description: "Contact TransLink to discuss your software development needs.",
      form: {
        name: "Name",
        namePlaceholder: "Enter your name",
        email: "Email",
        emailPlaceholder: "Enter your email",
        message: "Message",
        messagePlaceholder: "Tell us about your project...",
        termsPrefix: "I accept the",
        termsLink: "Terms",
        submit: "Submit",
        submitting: "Sending...",
        successMsg: "Thanks! We'll be in touch shortly.",
        errorMsg: "Something went wrong. Please try again.",
        srTitle: "Contact us form",
        srDesc: "Use this form to contact TransLink. All fields are required.",
      },
    },
    footer: {
      company: "TransLink",
      copyright: "Copyrights © All Rights Reserved by TransLink",
      resources: "Resources",
      connect: "Connect",
      workWithUs: "Work with us",
      blogs: "Blogs",
      about: "About",
    },
    about: {
      heading: "Our Story",
      subtitle: "We are driven by people and powered by software innovation",
      description:
        "At TransLink, we believe great software starts with great people. Our team brings together designers, engineers, and strategists who thrive on turning complex business challenges into elegant digital solutions. We partner with clients across 15+ countries, delivering premium software that scales globally.",
      workplaceHeading: "Our Workplace",
      workplaceSubtitle: "Our culture is built on excellence, trust, and global collaboration",
      workplaceDescription:
        "At TransLink, we foster an environment where innovation thrives through cross-cultural collaboration and continuous engineering excellence. Our global team bridges time zones to deliver world-class software — from enterprise web platforms to consumer mobile apps. The best digital products are built when talented people work together with a shared passion for craft.",
      statsHeading: "We excel in our field, but skill isn't everything we offer.",
      stats: [
        { value: "5M+", label: "End Users Served Globally", id: "stat-1", ariaLabel: "5 million plus" },
        { value: "8+", label: "Years of Expertise", id: "stat-2", ariaLabel: "8 plus years" },
        { value: "120+", label: "Projects Completed", id: "stat-3", ariaLabel: "120 plus projects" },
        { value: "50+", label: "Global Clients", id: "stat-4", ariaLabel: "50 plus" },
        { value: "15+", label: "Countries Served", id: "stat-5", ariaLabel: "15 plus countries" },
      ],
    },
    blog: {
      badge: "Tech Insights & Updates",
      heading: "Latest Software Engineering Insights",
      description:
        "Stay updated with the latest trends in web development, mobile engineering, e-commerce architecture, and modern software delivery shaping the future of global business.",
      topPicks: "Top Picks",
      researchBlogs: "Research / Blogs",
      tags: ["All", "Web Development", "Mobile Apps", "E-commerce", "Engineering"],
      noResults: "No blog posts found for the selected category.",
      showAll: "Show All Posts",
      tagMap: {
        "Web Development": "Web Development",
        "Mobile Apps": "Mobile Apps",
        "E-commerce": "E-commerce",
        Engineering: "Engineering",
      } as Record<string, string>,
    },
    caseStudiesData: [
      {
        project_title: "High-converting E-commerce platform serving 300k+ monthly active shoppers.",
        description:
          "We designed, architected, and deployed a full-stack e-commerce platform from discovery to launch in 12 weeks — scalable to millions of SKUs with sub-second load times globally.",
        features: [
          "Built a custom checkout & payments pipeline integrated with Stripe & PayPal, reducing cart abandonment by 38%.",
          "Implemented intelligent search with ElasticSearch and personalised recommendations, boosting average order value by 2.4×.",
          "Scaled to 300k+ MAU with 99.98% uptime using auto-scaling AWS infrastructure and global edge caching.",
        ],
        testimonial:
          '"TransLink delivered a world-class e-commerce platform on time and within budget. Our conversion rate increased by 42% in the first month after launch."',
        position: "CEO & Co-Founder",
      },
      {
        project_title:
          "Premium corporate website overhaul that tripled organic traffic and global engagement.",
        description:
          "A complete digital transformation for a global corporate brand — rebuilding their web presence, CMS architecture, and performance stack to serve 40+ international markets.",
        features: [
          "Rebuilt the entire site with Next.js + headless CMS, achieving a 98 Lighthouse performance score across all pages.",
          "Tripled organic search traffic in 6 months through technical SEO and Core Web Vitals optimisation.",
          "Delivered multilingual support for 8 languages with localised content management for 40+ global markets.",
        ],
        testimonial:
          '"Even though we are a global company working with a remote team, TransLink made the collaboration seamless and the results speak for themselves."',
        position: "VP of Digital",
      },
      {
        project_title:
          "Cross-platform iOS & Android app scaled internationally to 200k+ users across 12 markets.",
        description:
          "We built a feature-rich cross-platform mobile application from scratch using React Native — shipped to both app stores in 14 weeks, then scaled across 12 international markets.",
        features: [
          "Shipped a pixel-perfect, 60fps experience across iOS 14+ and Android 10+ from a single shared codebase.",
          "Integrated real-time push notifications, in-app payments, and offline-first sync — achieving 74% Day-30 retention.",
          "Scaled to 200k+ users across 12 countries with localisation, multi-currency support, and regional compliance.",
        ],
        testimonial:
          '"TransLink\'s international experience helped us navigate compliance and localisation challenges that would have taken us months to figure out alone."',
        position: "Founder & CPO",
      },
      {
        project_title:
          "Custom SaaS dashboard unifying data from 12 enterprise integrations in real time.",
        description:
          "We designed and developed a highly customised B2B SaaS platform with complex data pipelines, role-based access control, and real-time analytics dashboards — delivered in 10 weeks.",
        features: [
          "Built 12 enterprise API integrations (Salesforce, HubSpot, Slack, Jira, and more) behind a unified data layer.",
          "Implemented granular RBAC for enterprise teams and sub-organisations with SSO via SAML 2.0.",
          "Achieved sub-2-second load times across all dashboard views with intelligent query caching and data pagination.",
        ],
        testimonial:
          '"TransLink was professional and delivered exactly what they promised. The platform handles our complex data needs flawlessly."',
        position: "CTO",
      },
      {
        project_title:
          "High-performance landing page system generating $120k+ in new pipeline monthly.",
        description:
          "We designed and built a modular, high-conversion landing page system with A/B testing, CRO optimisation, and marketing automation integrations — deployed across 8 product lines.",
        features: [
          "Achieved 99 Lighthouse performance scores across all pages, improving paid ad quality scores by 57%.",
          "Built a no-code page builder allowing the marketing team to ship new pages in minutes without developer help.",
          "Integrated with HubSpot, Intercom, and Segment — directly attributing $120k+ in new monthly pipeline.",
        ],
        testimonial:
          '"TransLink\'s team understood our conversion goals from day one. The landing pages they built have become our highest-performing marketing assets."',
        position: "Head of Growth",
      },
    ],
    blogPostsData: [
      {
        title: "How We Built a 300k MAU E-commerce Platform in 12 Weeks",
        excerpt:
          "A deep-dive into the architecture decisions, tech stack, and engineering trade-offs that allowed us to ship a production-grade e-commerce platform at record speed.",
      },
      {
        title: "Cross-Platform Mobile in 2025: React Native vs Flutter",
        excerpt:
          "After building 20+ cross-platform apps, here's our honest breakdown of when to choose React Native and when Flutter is the right call for your project.",
      },
      {
        title: "Why Your Corporate Website Is Losing You Enterprise Clients",
        excerpt:
          "Slow load times, poor Core Web Vitals, and outdated UX are silently costing enterprise businesses millions in lost deals. Here's how to fix it.",
      },
      {
        title: "The Modern Tech Stack for High-Performance E-commerce",
        excerpt:
          "From Next.js + headless CMS to ElasticSearch and edge caching — our recommended 2025 e-commerce stack for teams that need to scale fast.",
      },
      {
        title: "Building for Global Scale: Lessons from 15+ International Projects",
        excerpt:
          "Localisation, multi-currency, regional compliance, time zone sync — what we've learned shipping software across 15+ countries.",
      },
      {
        title: "How We Achieve 99 Lighthouse Scores Without Sacrificing Features",
        excerpt:
          "A practical guide to Core Web Vitals, image optimisation, bundle splitting, and server-side rendering that gets you to a 99 Lighthouse score in production.",
      },
      {
        title: "Mobile App Retention: Why 74% of Our Users Stay Past Day 30",
        excerpt:
          "The onboarding flow, push notification strategy, and offline-first sync patterns we use to keep mobile users engaged long after install.",
      },
      {
        title: "The Hidden Costs of a Bad Software Agency: What to Look For",
        excerpt:
          "Technical debt, missed deadlines, and poor handoffs can cost 3–5× the original project budget. Here's how to evaluate a software agency before you sign.",
      },
    ],
  },
  jp: {
    nav: {
      home: "ホーム",
      about: "会社情報",
      blog: "ブログ",
      contact: "お問い合わせ",
      workWithUs: "ご依頼はこちら",
      homeDesc: "ホームページに戻る",
      aboutDesc: "会社についてもっと知る",
      blogDesc: "最新のインサイトをご覧ください",
      contactDesc: "TransLinkにお問い合わせ",
    },
    hero: {
      badge: "ソフトウェアエージェンシー",
      heading: "ビジネスのためのグローバルソフトウェア変革パートナー",
      description:
        "コーポレートサイト、ECプラットフォーム、iOS・Androidアプリ、カスタムハイテクソリューションを、世界15カ国以上のクライアントに提供しています。",
      talkBtn: "創業者に相談する",
      caseStudiesBtn: "事例を見る",
      clientsLabel: "変革をお手伝いした企業",
      caseStudiesLabel: "注目の事例",
    },
    caseStudies: {
      badge: "成長を促すデザイン",
      heading: "最近の事例",
      description:
        "エンタープライズWebプラットフォーム、ECソリューション、モバイルアプリなど、グローバルクライアントの成長を促した最新プロジェクトをご紹介します。",
      viewCaseStudy: "事例を見る",
    },
    process: {
      badge: "実証済みのプロセス",
      heading: "アイデアを実現する方法",
      description:
        "私たちのアジャイルエンジニアリングプロセスは、スピード、品質、国際的なスケーラビリティのために設計されています。",
      steps: [
        {
          title: "ディスカバリー＆戦略",
          tagline: "ビジネス目標の深い理解",
          description:
            "ビジネス、ユーザー、解決すべき課題を深く理解することから始めます。ステークホルダーインタビュー、競合調査、技術スコーピングを通じて、長期的なスケーラビリティを考慮した最適なアーキテクチャと技術スタックを定義します。",
          deliverables: [
            { item: "技術スコープ＆アーキテクチャ計画" },
            { item: "競合・市場分析" },
            { item: "カスタム技術スタック戦略" },
          ],
          bg_image:
            "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
        },
        {
          title: "プランニング＆アーキテクチャ",
          tagline: "成功のためのエンジニアリングブループリント",
          description:
            "戦略が確定したら、システム全体を設計します。詳細なワイヤーフレーム、データベーススキーマ、API仕様、スプリント計画を作成し、コードを一行も書く前にすべてのステークホルダーが一致した状態にします。",
          deliverables: [
            { item: "システムアーキテクチャ＆DBスキーマ" },
            { item: "API仕様＆高精度ワイヤーフレーム" },
            { item: "アジャイルスプリントロードマップ" },
          ],
          bg_image:
            "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
        },
        {
          title: "デザイン＆開発",
          tagline: "ピクセルパーフェクト。本番対応。",
          description:
            "デザイナーとエンジニアが緊密に連携してプロダクトを構築します。すべてのUIはコンバージョンと使いやすさのために設計され、バックエンドエンジニアは堅牢でスケーラブルなインフラを構築します。クリーンでテスト済みのコードを段階的にリリースします。",
          deliverables: [
            { item: "レスポンシブ＆アクセシブルUI/UXデザイン" },
            { item: "スケーラブルなバックエンド＆API開発" },
            { item: "QAテスト済み本番対応ビルド" },
          ],
          bg_image:
            "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804376/fasimage_skodum.png",
        },
        {
          title: "ローンチ＆成長",
          tagline: "素早くリリース、グローバルにスケール",
          description:
            "CI/CDセットアップからインフラのオートスケーリングまで、完全なデプロイメントパイプラインを管理します。ローンチ後は、パフォーマンスモニタリング、継続的なサポート、成長に向けた改善を提供し、どのグローバル市場でもソフトウェアが成功するよう支援します。",
          deliverables: [
            { item: "CI/CDパイプライン＆クラウドデプロイ" },
            { item: "パフォーマンスモニタリング＆分析" },
            { item: "ローンチ後サポート＆継続改善" },
          ],
          bg_image:
            "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png",
        },
      ],
    },
    testimonials: {
      badge: "お客様の声",
      heading: "お客様の喜びの声",
      description: "TransLinkとの取り組みについて、お客様の声をお聞きください。",
      stats: {
        projects: { value: "120件+", label: "ソフトウェアソリューション納品数" },
        clients: { value: "50社+", label: "グローバルクライアント数" },
        revenue: { value: "$200万+", label: "クライアントへの売上貢献額" },
      },
    },
    contact: {
      badge: "お問い合わせ",
      heading: "お気軽にご連絡ください",
      description: "ソフトウェア開発のご要件について、TransLinkにご連絡ください。",
      form: {
        name: "お名前",
        namePlaceholder: "お名前を入力してください",
        email: "メールアドレス",
        emailPlaceholder: "メールアドレスを入力してください",
        message: "メッセージ",
        messagePlaceholder: "プロジェクトの詳細をお聞かせください...",
        termsPrefix: "利用規約に同意する",
        termsLink: "利用規約",
        submit: "送信する",
        submitting: "送信中...",
        successMsg: "ありがとうございます！近日中にご連絡いたします。",
        errorMsg: "エラーが発生しました。もう一度お試しください。",
        srTitle: "お問い合わせフォーム",
        srDesc: "TransLinkへのお問い合わせフォームです。すべての項目が必須です。",
      },
    },
    footer: {
      company: "TransLink",
      copyright: "Copyrights © All Rights Reserved by TransLink",
      resources: "リソース",
      connect: "コネクト",
      workWithUs: "ご依頼はこちら",
      blogs: "ブログ",
      about: "会社情報",
    },
    about: {
      heading: "私たちのストーリー",
      subtitle: "人材と革新的なソフトウェアで世界を変える",
      description:
        "TransLinkでは、優れたソフトウェアは優れた人材から生まれると信じています。私たちのチームはデザイナー、エンジニア、ストラテジストが一体となり、複雑なビジネス課題をエレガントなデジタルソリューションに変えます。15カ国以上のクライアントと協力し、グローバルにスケールするプレミアムソフトウェアを提供しています。",
      workplaceHeading: "私たちの職場",
      workplaceSubtitle: "卓越性、信頼、グローバル協力を基盤とした文化",
      workplaceDescription:
        "TransLinkでは、異文化間のコラボレーションと継続的なエンジニアリングの卓越性を通じてイノベーションが育まれる環境を大切にしています。グローバルチームがタイムゾーンを超えて連携し、エンタープライズプラットフォームからコンシューマーモバイルアプリまで、世界クラスのソフトウェアを提供します。",
      statsHeading: "私たちはスキルだけでなく、それ以上のものを提供します。",
      stats: [
        { value: "500万人+", label: "グローバルエンドユーザー数", id: "stat-1", ariaLabel: "500万人以上" },
        { value: "8年+", label: "専門知識の年数", id: "stat-2", ariaLabel: "8年以上" },
        { value: "120件+", label: "プロジェクト完了数", id: "stat-3", ariaLabel: "120件以上" },
        { value: "50社+", label: "グローバルクライアント数", id: "stat-4", ariaLabel: "50社以上" },
        { value: "15カ国+", label: "サービス対応国数", id: "stat-5", ariaLabel: "15カ国以上" },
      ],
    },
    blog: {
      badge: "テックインサイト＆アップデート",
      heading: "最新のソフトウェアエンジニアリングインサイト",
      description:
        "Web開発、モバイルエンジニアリング、ECアーキテクチャ、モダンソフトウェアデリバリーの最新トレンドをお届けします。",
      topPicks: "おすすめ記事",
      researchBlogs: "リサーチ / ブログ",
      tags: ["すべて", "Web開発", "モバイルアプリ", "ECサイト", "エンジニアリング"],
      noResults: "選択されたカテゴリの記事が見つかりませんでした。",
      showAll: "すべての記事を表示",
      tagMap: {
        "Web Development": "Web開発",
        "Mobile Apps": "モバイルアプリ",
        "E-commerce": "ECサイト",
        Engineering: "エンジニアリング",
      } as Record<string, string>,
    },
    caseStudiesData: [
      {
        project_title: "月間30万人以上のアクティブユーザーを誇る高コンバージョンECプラットフォーム",
        description:
          "フルスタックECプラットフォームをディスカバリーからローンチまで12週間で設計・構築・デプロイ。世界中でサブセカンドの読み込み速度を実現し、数百万のSKUにスケール対応。",
        features: [
          "Stripe＆PayPal連携のカスタムチェックアウト＆決済パイプラインを構築し、カート離脱率を38%削減。",
          "ElasticSearchによるインテリジェント検索と個別レコメンデーションにより、平均注文額を2.4倍に向上。",
          "オートスケーリングAWSインフラとグローバルエッジキャッシングで30万MAU・稼働率99.98%を達成。",
        ],
        testimonial:
          "「TransLinkは予算内・スケジュール通りに世界水準のECプラットフォームを提供してくれました。ローンチ後初月でコンバージョン率が42%向上しました。」",
        position: "CEO & 共同創業者",
      },
      {
        project_title:
          "オーガニックトラフィックとエンゲージメントを3倍にしたプレミアムコーポレートサイト刷新",
        description:
          "グローバル企業ブランドの完全デジタル変革 — Webプレゼンス、CMSアーキテクチャ、パフォーマンススタックを40以上の国際市場向けに再構築しました。",
        features: [
          "Next.js＋ヘッドレスCMSでサイト全体を再構築し、全ページでLighthouseスコア98を達成。",
          "技術的SEOとCore Web Vitalsの最適化により、6ヶ月でオーガニック検索トラフィックを3倍に拡大。",
          "8言語に対応したローカライズコンテンツ管理で40以上のグローバル市場をサポート。",
        ],
        testimonial:
          "「グローバル企業でありながらリモートチームとの協業でしたが、TransLinkはシームレスな体験を提供してくれました。結果は言葉が必要ないほど明らかです。」",
        position: "デジタル担当VP",
      },
      {
        project_title:
          "12市場・20万人以上のユーザーに国際展開したiOS＆Androidクロスプラットフォームアプリ",
        description:
          "React Nativeを使ったクロスプラットフォームモバイルアプリをゼロから構築 — 14週間で両アプリストアにリリースし、その後12の国際市場へ展開しました。",
        features: [
          "単一の共有コードベースでiOS 14以降・Android 10以降に対応したピクセルパーフェクト・60fpsの体験を提供。",
          "リアルタイムプッシュ通知、アプリ内決済、オフラインファースト同期を統合し、30日後のリテンション率74%を達成。",
          "ローカライズ、多通貨対応、地域別コンプライアンスにより12カ国・20万人以上のユーザーへスケール展開。",
        ],
        testimonial:
          "「TransLinkの国際的な経験のおかげで、一人で解決するのに数ヶ月かかるはずだったコンプライアンスとローカライズの課題を乗り越えることができました。」",
        position: "創業者 & CPO",
      },
      {
        project_title: "12のエンタープライズ統合をリアルタイムで統合するカスタムSaaSダッシュボード",
        description:
          "複雑なデータパイプライン、ロールベースアクセス制御、リアルタイム分析ダッシュボードを備えたB2B SaaSプラットフォームを10週間で設計・開発しました。",
        features: [
          "統一データレイヤーで12のエンタープライズAPI連携（Salesforce、HubSpot、Slack、Jiraなど）を構築。",
          "企業チームとサブ組織向けにSAML 2.0によるSSOを含む細粒度のRBACを実装。",
          "インテリジェントクエリキャッシングとデータページネーションで全ダッシュボードの表示速度2秒未満を達成。",
        ],
        testimonial:
          "「TransLinkはプロフェッショナルで、約束通りのものを届けてくれました。プラットフォームは私たちの複雑なデータ要件を完璧にこなしています。」",
        position: "CTO",
      },
      {
        project_title: "月間1.2億円超の新規パイプラインを生み出す高パフォーマンスランディングページシステム",
        description:
          "A/Bテスト、CRO最適化、マーケティングオートメーション連携を備えたモジュール式高コンバージョンランディングページシステムを設計・構築し、8製品ラインに展開しました。",
        features: [
          "全ページでLighthouseスコア99を達成し、広告品質スコアを57%改善。",
          "開発者不要でマーケティングチームが数分で新ページを公開できるノーコードページビルダーを構築。",
          "HubSpot、Intercom、Segmentと連携し、月間1.2億円超の新規パイプラインを直接創出。",
        ],
        testimonial:
          "「TransLinkのチームは初日から私たちのコンバージョン目標を理解していました。彼らが構築したランディングページは、最もパフォーマンスの高いマーケティング資産になっています。」",
        position: "グロースヘッド",
      },
    ],
    blogPostsData: [
      {
        title: "12週間で月間30万MAUのECプラットフォームを構築した方法",
        excerpt:
          "本番グレードのECプラットフォームを記録的な速度で出荷するために行ったアーキテクチャ決断、技術スタック選定、エンジニアリングのトレードオフを詳しく解説します。",
      },
      {
        title: "2025年のクロスプラットフォームモバイル開発：React NativeとFlutter比較",
        excerpt:
          "20以上のクロスプラットフォームアプリを構築してきた経験から、React NativeとFlutterをいつ選ぶべきかを正直にまとめました。",
      },
      {
        title: "コーポレートサイトがエンタープライズクライアントを失っている理由",
        excerpt:
          "遅い読み込み速度、低いCore Web Vitals、時代遅れのUXが静かに企業ビジネスから数百万ドルの商談を奪っています。その解決方法をご紹介します。",
      },
      {
        title: "ハイパフォーマンスECのためのモダン技術スタック",
        excerpt:
          "Next.js＋ヘッドレスCMSからElasticSearchとエッジキャッシングまで — 素早いスケールアップが必要なチームへの2025年ECスタックの推奨。",
      },
      {
        title: "グローバルスケールのための構築：15以上の国際プロジェクトから学んだこと",
        excerpt:
          "ローカライズ、多通貨対応、地域別コンプライアンス、タイムゾーン同期 — 15カ国以上でソフトウェアを展開して学んだ教訓。",
      },
      {
        title: "機能を犠牲にせずLighthouseスコア99を達成する方法",
        excerpt:
          "本番環境でLighthouseスコア99を達成するためのCore Web Vitals、画像最適化、バンドル分割、サーバーサイドレンダリングの実践ガイド。",
      },
      {
        title: "モバイルアプリのリテンション：なぜ74%のユーザーが30日後も継続するのか",
        excerpt:
          "インストール後もモバイルユーザーを継続的に引きつけるオンボーディングフロー、プッシュ通知戦略、オフラインファーストの同期パターンを紹介します。",
      },
      {
        title: "悪いソフトウェアエージェンシーの隠れたコスト：注意すべきポイント",
        excerpt:
          "技術的負債、遅延、不十分な引き継ぎは当初のプロジェクト予算の3〜5倍のコストをかける可能性があります。契約前にソフトウェアエージェンシーを評価する方法。",
      },
    ],
  },
};

export type Translations = typeof translations.en;
