import { Language } from './translations';

export type ActivityCategory = 'all' | 'csr' | 'literasi' | 'operasional' | 'event';

export interface LocalizedText {
  id: string;
  en: string;
  zh: string;
}

export interface ActivityArticle {
  id: string;
  slug: string;
  title: string;
  titleI18n?: LocalizedText;
  date: string;
  dateI18n?: LocalizedText;
  category: ActivityCategory;
  categoryLabel: string;
  categoryLabelI18n?: LocalizedText;
  readTime: string;
  readTimeI18n?: LocalizedText;
  author: string;
  authorI18n?: LocalizedText;
  image: string;
  excerpt: string;
  excerptI18n?: LocalizedText;
  content: string[];
  contentI18n?: {
    id: string[];
    en: string[];
    zh: string[];
  };
  tags: string[];
}

export const activitiesData: ActivityArticle[] = [
  {
    id: 'csr-tjsl-jelambar-baru',
    slug: 'program-tjsl-bri-peduli-revitalisasi-taman-jelambar',
    title: 'Program TJSL BRI Peduli: Revitalisasi Taman Hijau & Sarana Sanitasi Warga Jelambar Baru',
    titleI18n: {
      id: 'Program TJSL BRI Peduli: Revitalisasi Taman Hijau & Sarana Sanitasi Warga Jelambar Baru',
      en: 'BRI Peduli CSR Program: Revitalizing Public Green Parks & Sanitation Facilities in Jelambar Baru',
      zh: 'BRI Peduli 社区关怀计划：西雅加达 Jelambar Baru 社区绿色公园与公共卫生设施改造项目'
    },
    date: '18 Agustus 2026',
    dateI18n: {
      id: '18 Agustus 2026',
      en: 'August 18, 2026',
      zh: '2026年8月18日'
    },
    category: 'csr',
    categoryLabel: 'CSR BRI Peduli',
    categoryLabelI18n: {
      id: 'CSR BRI Peduli',
      en: 'BRI Peduli CSR',
      zh: 'BRI Peduli 社区关怀'
    },
    readTime: '4 Menit',
    readTimeI18n: {
      id: '4 Menit',
      en: '4 Mins Read',
      zh: '4 分钟阅读'
    },
    author: 'Humas BRI KC Jakarta Jelambar',
    authorI18n: {
      id: 'Humas BRI KC Jakarta Jelambar',
      en: 'Public Relations BRI KC Jakarta Jelambar',
      zh: 'BRI 雅加达 Jelambar 支行公关部'
    },
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Sebagai wujud Tanggung Jawab Sosial dan Lingkungan (TJSL), BRI Kantor Cabang Jakarta Jelambar meresmikan penataan ruang terbuka hijau serta bantuan fasilitas sanitasi terpadu bagi warga sekitar.',
    excerptI18n: {
      id: 'Sebagai wujud Tanggung Jawab Sosial dan Lingkungan (TJSL), BRI Kantor Cabang Jakarta Jelambar meresmikan penataan ruang terbuka hijau serta bantuan fasilitas sanitasi terpadu bagi warga sekitar.',
      en: 'As part of its Corporate Social & Environmental Responsibility (TJSL), BRI Branch Office Jakarta Jelambar inaugurated public green open space upgrades and integrated community sanitation facilities for local residents.',
      zh: '作为企业社会与环境责任（TJSL）的重要践行，BRI 雅加达 Jelambar 支行正式交付了为周边社区居民改造的绿色公共休闲公园与一体化卫生排污设施。'
    },
    content: [
      'JAKARTA BARAT — PT Bank Rakyat Indonesia (Persero) Tbk Kantor Cabang Jakarta Jelambar kembali menunjukkan komitmen nyatanya dalam mendukung keberlanjutan lingkungan dan kesejahteraan masyarakat perkotaan. Melalui program Tanggung Jawab Sosial dan Lingkungan (TJSL) BRI Peduli, BRI KC Jakarta Jelambar secara resmi menyerahkan bantuan revitalisasi taman publik ramah anak dan fasilitas sanitasi warga di kawasan RW 05 Jelambar Baru, Grogol Petamburan.',
      'Kegiatan peresmian ini dihadiri langsung oleh Pemimpin Cabang BRI KC Jakarta Jelambar, jajaran aparatur kelurahan setempat, tokoh masyarakat, serta warga sekitar. Bantuan yang disalurkan mencakup penanaman 200 bibit pohon pelindung, perbaikan paving block ramah resapan air, pembangunan arena bermain anak, serta renovasi fasilitas MCK terpadu dengan sistem bio-septic tank modern.',
      'Dalam sambutannya, Pemimpin Cabang BRI KC Jakarta Jelambar menyampaikan bahwa keberadaan Bank BRI di tengah masyarakat tidak hanya berorientasi pada aspek bisnis dan profit, namun juga senantiasa memberikan dampak sosial yang bermakna bagi lingkungan operasional.',
      '“Melalui pilar BRI Peduli Lingkungan dan Sosial, kami ingin memastikan bahwa pertumbuhan kinerja perbankan berjalan selaras dengan peningkatan kualitas hidup masyarakat sekitar. Semoga sarana taman hijau dan fasilitas sanitasi ini dapat dirawat bersama demi kenyamanan seluruh warga,” ungkapnya.',
      'Warga setempat menyambut gembira inisiatif ini. Dengan hadirnya ruang terbuka hijau yang tertata rapi, anak-anak memiliki area bermain yang aman dan asri, sementara para lansia memiliki ruang yang nyaman untuk beraktivitas pagi hari.'
    ],
    contentI18n: {
      id: [
        'JAKARTA BARAT — PT Bank Rakyat Indonesia (Persero) Tbk Kantor Cabang Jakarta Jelambar kembali menunjukkan komitmen nyatanya dalam mendukung keberlanjutan lingkungan dan kesejahteraan masyarakat perkotaan. Melalui program Tanggung Jawab Sosial dan Lingkungan (TJSL) BRI Peduli, BRI KC Jakarta Jelambar secara resmi menyerahkan bantuan revitalisasi taman publik ramah anak dan fasilitas sanitasi warga di kawasan RW 05 Jelambar Baru, Grogol Petamburan.',
        'Kegiatan peresmian ini dihadiri langsung oleh Pemimpin Cabang BRI KC Jakarta Jelambar, jajaran aparatur kelurahan setempat, tokoh masyarakat, serta warga sekitar. Bantuan yang disalurkan mencakup penanaman 200 bibit pohon pelindung, perbaikan paving block ramah resapan air, pembangunan arena bermain anak, serta renovasi fasilitas MCK terpadu dengan sistem bio-septic tank modern.',
        'Dalam sambutannya, Pemimpin Cabang BRI KC Jakarta Jelambar menyampaikan bahwa keberadaan Bank BRI di tengah masyarakat tidak hanya berorientasi pada aspek bisnis dan profit, namun juga senantiasa memberikan dampak sosial yang bermakna bagi lingkungan operasional.',
        '“Melalui pilar BRI Peduli Lingkungan dan Sosial, kami ingin memastikan bahwa pertumbuhan kinerja perbankan berjalan selaras dengan peningkatan kualitas hidup masyarakat sekitar. Semoga sarana taman hijau dan fasilitas sanitasi ini dapat dirawat bersama demi kenyamanan seluruh warga,” ungkapnya.',
        'Warga setempat menyambut gembira inisiatif ini. Dengan hadirnya ruang terbuka hijau yang tertata rapi, anak-anak memiliki area bermain yang aman dan asri, sementara para lansia memiliki ruang yang nyaman untuk beraktivitas pagi hari.'
      ],
      en: [
        'WEST JAKARTA — PT Bank Rakyat Indonesia (Persero) Tbk Branch Office Jakarta Jelambar has once again demonstrated its tangible commitment to environmental sustainability and urban community welfare. Through the BRI Peduli Corporate Social & Environmental Responsibility (TJSL) program, BRI KC Jakarta Jelambar officially handed over revitalized child-friendly public parks and integrated sanitation infrastructure for residents in Jelambar Baru, Grogol Petamburan.',
        'The inauguration ceremony was attended by the Branch Office Head of BRI KC Jakarta Jelambar, local district government officials, community leaders, and neighborhood residents. The aid package included planting 200 shading tree seedlings, installing water-absorbent paving blocks, constructing a children’s playground, and modernizing community sanitation facilities equipped with advanced bio-septic systems.',
        'During the address, the Branch Office Head emphasized that Bank BRI’s presence in the community extends far beyond financial metrics, continuously fostering sustainable social impact within its operational ecosystem.',
        '“Through the pillars of BRI Peduli for Environment and Community, we ensure that our banking growth is aligned with enhancing the quality of life of our neighbors. We hope this green park and sanitation facility will be cared for together for the comfort of all residents,” he stated.',
        'Local residents warmly appreciated the initiative, noting that the revitalized green open space offers children a safe playground and provides seniors with a serene environment for morning leisure.'
      ],
      zh: [
        '西雅加达讯 — 印尼人民银行（PT Bank Rakyat Indonesia (Persero) Tbk）雅加达 Jelambar 支行再次以实际行动践行企业社会与环境责任（TJSL）。通过 BRI Peduli 关怀基金，Jelambar 支行正式向 Grogol Petamburan 镇 Jelambar Baru 社区交付了儿童友好型绿色公共公园改造工程与一体化现代化卫生公共设施。',
        '竣工交付仪式由 BRI 雅加达 Jelambar 支行行长、当地街道办行政官员、社区长老及广大居民代表共同出席。本次公益援助包括种植 200 株绿化遮荫树木、铺设透水环保路砖、修建儿童游乐设施、以及升级安装带有先进生物环保化粪系统的公共卫生设施。',
        '支行行长在致辞中强调，Bank BRI 扎根社区不仅追求商业稳健发展，更时刻致力于为辖区群众创造切实的社会福祉与环境价值。',
        '“通过 BRI Peduli 绿色环保与社区关怀支柱，我们力求让银行业务的成长与周边居民生活品质的提升并驾齐驱。希望这座绿意盎然的公园和整洁的卫生设施能为居民带来更宜居的生活环境，”行长表示。',
        '当地社区居民对 Bank BRI 的善举表示热烈欢迎与由衷感谢，称赞改造后的公园为孩子们提供了安全活泼的活动空间，也为老年人晨练提供了舒适优美的环境。'
      ]
    },
    tags: ['CSR', 'BRI Peduli', 'Jelambar Baru', 'Lingkungan', 'TJSL']
  },
  {
    id: 'literasi-qris-pasar-jelambar',
    slug: 'akselerasi-transaksi-cashless-qris-soundbox-pasar-jelambar',
    title: 'Akselerasi Transaksi Cashless: Edukasi 200+ Pedagang dengan QRIS Dinamis & Soundbox',
    titleI18n: {
      id: 'Akselerasi Transaksi Cashless: Edukasi 200+ Pedagang dengan QRIS Dinamis & Soundbox',
      en: 'Accelerating Cashless Transactions: Educating 200+ Market Traders with Dynamic QRIS & Soundbox',
      zh: '加速无现金数字化转型：BRI Jelambar 支行为 200 余家集贸市场商户普及动态 QRIS 与语音播报音箱'
    },
    date: '10 Agustus 2026',
    dateI18n: {
      id: '10 Agustus 2026',
      en: 'August 10, 2026',
      zh: '2026年8月10日'
    },
    category: 'literasi',
    categoryLabel: 'Literasi Finansial',
    categoryLabelI18n: {
      id: 'Literasi Finansial',
      en: 'Financial Literacy',
      zh: '金融数字普惠'
    },
    readTime: '5 Menit',
    readTimeI18n: {
      id: '5 Menit',
      en: '5 Mins Read',
      zh: '5 分钟阅读'
    },
    author: 'Tim Bisnis Mikro & Merchant BRI',
    authorI18n: {
      id: 'Tim Bisnis Mikro & Merchant BRI',
      en: 'BRI Micro & Merchant Business Team',
      zh: 'BRI 微型金融与商户拓展团队'
    },
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Pendampingan intensif bagi pedagang pasar tradisional di wilayah Jelambar & Grogol guna mempercepat adopsi pembayaran digital aman dengan teknologi audio notifikasi anti-fraud.',
    excerptI18n: {
      id: 'Pendampingan intensif bagi pedagang pasar tradisional di wilayah Jelambar & Grogol guna mempercepat adopsi pembayaran digital aman dengan teknologi audio notifikasi anti-fraud.',
      en: 'Intensive on-site training for traditional market traders across Jelambar & Grogol to accelerate safe digital payments using anti-fraud audio alert technology.',
      zh: '深入 Jelambar 和 Grogol 传统集贸市场开展驻点培训，通过防逃单实时语音播报音箱与动态 QRIS，全面普及安全高效的数字化收银。'
    },
    content: [
      'JAKARTA BARAT — Dalam rangka mempercepat inklusi keuangan digital dan memperkuat ekosistem pasar rakyat, BRI KC Jakarta Jelambar menggelar program pelatihan dan pembagian perangkat "BRI Soundbox QRIS Merchant" kepada lebih dari 200 pedagang pasar tradisional di kawasan Jelambar, Duta Mas, dan Grogol.',
      'Program ini diinisiasi untuk menjawab kekhawatiran para pedagang terkait resiko penipuan bukti transfer palsu (fake payment proof). Dengan perangkat BRI Soundbox yang terhubung ke jaringan seluler 4G, setiap transaksi QRIS yang berhasil akan langsung memicu notifikasi suara berbahasa Indonesia secara instan yang menyebutkan nominal dana yang masuk secara akurat.',
      'Tim Relationship Manager (RM) Mikro dan Mantri BRI terjun langsung mendampingi para pedagang di kios masing-masing. Selain memfasilitasi pemasangan stiker QRIS resmi dan Soundbox, para pedagang juga dibantu membuka rekening tabungan BritAma Bisnis dan aktivasi aplikasi BRI Merchant untuk memantau rekap omzet harian langsung dari ponsel pintar.',
      '“Dahulu kami sering ragu saat pembeli ramai menunjukkan bukti transfer di HP. Sekarang setelah pakai BRI Soundbox, begitu pembeli scan QRIS, mesin langsung berbunyi ‘Pembayaran Tiga Puluh Ribu Rupiah Berhasil’. Kami jadi tenang melayani pembeli berikutnya tanpa takut tertipu,” tutur Ibu Sulastri, pedagang sembako Pasar Jelambar.',
      'BRI KC Jakarta Jelambar menargetkan seluruh sentra niaga mikro dan UMKM kuliner di 8 unit kerja supervisi telah terdigitalisasi penuh dengan settlement dana cepat di hari berikutnya.'
    ],
    contentI18n: {
      id: [
        'JAKARTA BARAT — Dalam rangka mempercepat inklusi keuangan digital dan memperkuat ekosistem pasar rakyat, BRI KC Jakarta Jelambar menggelar program pelatihan dan pembagian perangkat "BRI Soundbox QRIS Merchant" kepada lebih dari 200 pedagang pasar tradisional di kawasan Jelambar, Duta Mas, dan Grogol.',
        'Program ini diinisiasi untuk menjawab kekhawatiran para pedagang terkait resiko penipuan bukti transfer palsu (fake payment proof). Dengan perangkat BRI Soundbox yang terhubung ke jaringan seluler 4G, setiap transaksi QRIS yang berhasil akan langsung memicu notifikasi suara berbahasa Indonesia secara instan yang menyebutkan nominal dana yang masuk secara akurat.',
        'Tim Relationship Manager (RM) Mikro dan Mantri BRI terjun langsung mendampingi para pedagang di kios masing-masing. Selain memfasilitasi pemasangan stiker QRIS resmi dan Soundbox, para pedagang juga dibantu membuka rekening tabungan BritAma Bisnis dan aktivasi aplikasi BRI Merchant untuk memantau rekap omzet harian langsung dari ponsel pintar.',
        '“Dahulu kami sering ragu saat pembeli ramai menunjukkan bukti transfer di HP. Sekarang setelah pakai BRI Soundbox, begitu pembeli scan QRIS, mesin langsung berbunyi ‘Pembayaran Tiga Puluh Ribu Rupiah Berhasil’. Kami jadi tenang melayani pembeli berikutnya tanpa takut tertipu,” tutur Ibu Sulastri, pedagang sembako Pasar Jelambar.',
        'BRI KC Jakarta Jelambar menargetkan seluruh sentra niaga mikro dan UMKM kuliner di 8 unit kerja supervisi telah terdigitalisasi penuh dengan settlement dana cepat di hari berikutnya.'
      ],
      en: [
        'WEST JAKARTA — To accelerate digital financial inclusion and modernize traditional market ecosystems, BRI Branch Office Jakarta Jelambar conducted hands-on workshops and deployed "BRI Soundbox QRIS" terminals to over 200 merchant stalls across Jelambar, Duta Mas, and Grogol commercial areas.',
        'This initiative directly addresses merchant concerns regarding counterfeit transfer screenshots. Equipped with built-in 4G SIM connectivity, the BRI Soundbox triggers an immediate, loud Indonesian voice notification declaring the exact paid amount upon every successful QRIS transaction.',
        'Dedicated Micro Relationship Managers and BRI Loan Officers visited merchants directly at their stalls. Beyond installing official QRIS stickers and Soundboxes, officers onboarded traders to BritAma Business savings accounts and configured the BRI Merchant mobile app for real-time daily turnover analytics.',
        '“Previously, during rush hours, we were anxious when customers flashed transfer screens. Now with the BRI Soundbox, as soon as a customer scans, the device clearly announces ‘Payment of Thirty Thousand Rupiah Successful’. We serve subsequent buyers with total peace of mind,” said Mrs. Sulastri, a local grocery vendor.',
        'BRI KC Jakarta Jelambar aims to fully digitize retail food and trade stalls across its 8 supervised unit branches with seamless next-day fund settlements.'
      ],
      zh: [
        '西雅加达讯 — 为加速数字普惠金融普及并助力传统集贸市场升级，BRI 雅加达 Jelambar 支行深入 Jelambar、Duta Mas 及 Grogol 商业街区，开展现场培训并为 200 余家集贸市场摊主免费配发并安装“BRI Soundbox 智能语音播报音箱”。',
        '该项目旨在彻底消除小微商户对“虚假转账截图”逃单现象的担忧。BRI 智能音箱内置 4G 蜂窝网络，一旦顾客通过 QRIS 二维码扫码支付成功，音箱便会以清晰响亮的印尼语语音实时播报入账金额，确保收款万无一失。',
        '支行微型客户经理及普惠信贷专员走进各个商户摊位，现场张贴官方认证的 QRIS 码牌，协助开立 BritAma 商务储蓄账户，并指导安装 BRI Merchant 手机端以实时查看每日流水营收。',
        '“以前客流高峰期顾客出示手机转账截图，我们常常没有时间核实。现在有了 BRI 语音音箱，顾客一扫码，音箱立刻播报‘成功收款三万印尼盾’，让我们做生意既放心又省心！”Jelambar 市场的粮油摊主 Sulastri 女士高兴地表示。',
        'BRI Jelambar 支行计划持续推进辖区 8 家营业所所属商圈的全面数字化收单覆盖，为商户提供次日极速自动结算到账服务。'
      ]
    },
    tags: ['QRIS', 'Soundbox', 'Literasi Keuangan', 'UMKM', 'Pasar Rakyat']
  },
  {
    id: 'sosialisasi-qita-digital-banking',
    slug: 'sosialisasi-platform-generasi-baru-qita-universal-banker-jelambar',
    title: 'Transformasi Perbankan Masa Depan: Sosialisasi Ekosistem Generasi Baru Qita di Banking Hall',
    titleI18n: {
      id: 'Transformasi Perbankan Masa Depan: Sosialisasi Ekosistem Generasi Baru Qita di Banking Hall',
      en: 'Future Banking Transformation: Showcasing the Next-Gen Qita Ecosystem at Banking Hall',
      zh: '面向未来的数字化转型：Jelambar 支行营业大厅全面开展新一代 Qita 平台客户宣讲与辅导'
    },
    date: '02 Agustus 2026',
    dateI18n: {
      id: '02 Agustus 2026',
      en: 'August 02, 2026',
      zh: '2026年8月2日'
    },
    category: 'event',
    categoryLabel: 'Event & Sosialisasi',
    categoryLabelI18n: {
      id: 'Event & Sosialisasi',
      en: 'Events & Workshops',
      zh: '重大活动与宣讲'
    },
    readTime: '4 Menit',
    readTimeI18n: {
      id: '4 Menit',
      en: '4 Mins Read',
      zh: '4 分钟阅读'
    },
    author: 'Tim Universal Banker KC Jelambar',
    authorI18n: {
      id: 'Tim Universal Banker KC Jelambar',
      en: 'Universal Banker Team KC Jelambar',
      zh: 'Jelambar 支行全能银行家团队'
    },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Pengenalan terpadu ekosistem digital Qita bersama BRImo oleh jajaran Universal Banker (UB) bagi nasabah personal, pebisnis, dan korporasi di Banking Hall KC Jakarta Jelambar.',
    excerptI18n: {
      id: 'Pengenalan terpadu ekosistem digital Qita bersama BRImo oleh jajaran Universal Banker (UB) bagi nasabah personal, pebisnis, dan korporasi di Banking Hall KC Jakarta Jelambar.',
      en: 'Comprehensive showcase of the Qita next-gen digital ecosystem alongside BRImo, led by Universal Bankers (UB) for personal, retail, and corporate banking clients in the Banking Hall.',
      zh: '由全能银行家（UB）团队在 Jelambar 支行营业大厅为个人、中小微商户及企业客户提供 Qita 与 BRImo 双轨数字化新体验宣讲。'
    },
    content: [
      'JAKARTA BARAT — Mengukuhkan posisinya sebagai pionir perbankan digital di wilayah Jakarta Barat, BRI Kantor Cabang Jakarta Jelambar menggelar sesi edukasi dan sosialisasi eksklusif mengenai platform generasi baru "Qita" yang beroperasi berdampingan dengan super app BRImo.',
      'Bertempat di Banking Hall lantai 1 BRI KC Jakarta Jelambar, jajaran Universal Banker (Sri Mulyani, Erina Rebecca Sinaga, dan Nabilah Putri Asry Adisti) menyambut para nasabah yang hadir dengan booth konsultasi interaktif. Nasabah dipandu secara langsung untuk memahami integrasi fitur multi-rekening, otentikasi biometrik tercanggih, kemudahan transfer valas instan, serta pemisahan akun operasional usaha.',
      'Layanan Universal Banker (UB) ini dirancang sebagai model layanan perbankan satu pintu (one-stop service). Nasabah tidak hanya dilayani untuk urusan transaksi kasir teller, namun juga sekaligus memperoleh konsultasi produk tabungan, kartu debit, hingga aktivasi kanal digital tanpa perlu berpindah meja.',
      '“Evolusi menuju platform Qita merupakan langkah besar dalam memberikan pengalaman perbankan yang semakin cepat, aman, dan intuitif. Kami di KC Jakarta Jelambar siap mendampingi seluruh nasabah dari berbagai segmen agar dapat memanfaatkan kemudahan teknologi ini secara optimal,” jelas Sri Mulyani, koordinator Universal Banker.',
      'Bagi masyarakat dan nasabah yang ingin berkonsultasi mengenai aktivasi fitur digital perbankan, Banking Hall BRI KC Jakarta Jelambar membuka layanan tatap muka setiap hari kerja pukul 08.00 - 15.00 WIB atau melalui konsultasi WhatsApp resmi.'
    ],
    contentI18n: {
      id: [
        'JAKARTA BARAT — Mengukuhkan posisinya sebagai pionir perbankan digital di wilayah Jakarta Barat, BRI Kantor Cabang Jakarta Jelambar menggelar sesi edukasi dan sosialisasi eksklusif mengenai platform generasi baru "Qita" yang beroperasi berdampingan dengan super app BRImo.',
        'Bertempat di Banking Hall lantai 1 BRI KC Jakarta Jelambar, jajaran Universal Banker (Sri Mulyani, Erina Rebecca Sinaga, dan Nabilah Putri Asry Adisti) menyambut para nasabah yang hadir dengan booth konsultasi interaktif. Nasabah dipandu secara langsung untuk memahami integrasi fitur multi-rekening, otentikasi biometrik tercanggih, kemudahan transfer valas instan, serta pemisahan akun operasional usaha.',
        'Layanan Universal Banker (UB) ini dirancang sebagai model layanan perbankan satu pintu (one-stop service). Nasabah tidak hanya dilayani untuk urusan transaksi kasir teller, namun juga sekaligus memperoleh konsultasi produk tabungan, kartu debit, hingga aktivasi kanal digital tanpa perlu berpindah meja.',
        '“Evolusi menuju platform Qita merupakan langkah besar dalam memberikan pengalaman perbankan yang semakin cepat, aman, dan intuitif. Kami di KC Jakarta Jelambar siap mendampingi seluruh nasabah dari berbagai segmen agar dapat memanfaatkan kemudahan teknologi ini secara optimal,” jelas Sri Mulyani, koordinator Universal Banker.',
        'Bagi masyarakat dan nasabah yang ingin berkonsultasi mengenai aktivasi fitur digital perbankan, Banking Hall BRI KC Jakarta Jelambar membuka layanan tatap muka setiap hari kerja pukul 08.00 - 15.00 WIB atau melalui konsultasi WhatsApp resmi.'
      ],
      en: [
        'WEST JAKARTA — Solidifying its leadership in digital banking innovation across West Jakarta, BRI Branch Office Jakarta Jelambar hosted dedicated advisory sessions on the next-generation "Qita" platform operating alongside the acclaimed BRImo super app.',
        'Held at the 1st Floor Banking Hall of BRI KC Jakarta Jelambar, the Universal Banker team (Sri Mulyani, Erina Rebecca Sinaga, and Nabilah Putri Asry Adisti) welcomed walk-in clients with interactive digital consultation desks. Customers received personalized demonstrations of multi-account aggregation, state-of-the-art biometric security, instant foreign currency remittances, and segregated business ledger capabilities.',
        'The Universal Banker (UB) model operates as an all-in-one counter service. Clients manage routine teller cash operations while simultaneously receiving financial advice on deposit solutions, debit cards, and digital channel setups without moving between desks.',
        '“The transition towards the Qita platform marks a landmark leap forward in providing an intuitive, lightning-fast, and secure banking journey. Our team at KC Jakarta Jelambar is fully equipped to assist every client segment,” explained Sri Mulyani, Universal Banker Lead.',
        'Banking Hall BRI KC Jakarta Jelambar invites customers for walk-in advisory sessions Monday through Friday, 08:00 - 15:00 WIB, or via dedicated official WhatsApp channels.'
      ],
      zh: [
        '西雅加达讯 — 为巩固在数字化银行领域的引领地位，BRI 雅加达 Jelambar 支行在营业大厅举行了新一代“Qita”数字化综合金融平台与 BRImo 超级应用协同服务的专题推介辅导会。',
        '在 Jelambar 支行一楼营业大厅，全能银行家专员团队（Sri Mulyani、Erina Rebecca Sinaga 与 Nabilah Putri）设立了互动体验咨询台，一对一向客户展示多币种子母账户归集、尖端生物识别防护、外汇秒级跨境汇款及企业独立收支核算等前沿功能。',
        '全能银行家（UB）创新服务模式采用一站式柜面理念。客户在办理存取款柜面业务的同时，即可同步办理储蓄开户、卡片升级与电子渠道激活，无需在不同窗口间往返。',
        '“升级至 Qita 平台是为客户打造更流畅、安全、直观金融体验的里程碑。Jelambar 支行全员已做好充分准备，确保广大客户轻松上手并畅享数字化便利，”全能银行家代表 Sri Mulyani 表示。',
        'BRI 雅加达 Jelambar 支行营业大厅周一至周五 08:00 - 15:00 持续提供现场专业咨询，客户亦可通过 WhatsApp 官方渠道进行预约与指导。'
      ]
    },
    tags: ['Qita', 'BRImo', 'Universal Banker', 'Banking Hall', 'Digital Banking']
  },
  {
    id: 'penyaluran-kur-klaster-2026',
    slug: 'penyaluran-kur-mikro-45-miliar-umkm-jelambar',
    title: 'Dukung Ketahanan Ekonomi Rakyat: Penyaluran KUR Mikro Tembus Rp 45 Miliar di KC Jelambar',
    titleI18n: {
      id: 'Dukung Ketahanan Ekonomi Rakyat: Penyaluran KUR Mikro Tembus Rp 45 Miliar di KC Jelambar',
      en: 'Bolstering Micro Economies: Subsidized KUR Loans Reach IDR 45 Billion at KC Jelambar',
      zh: '赋能实体经济底盘：BRI Jelambar 支行微型普惠贷款（KUR）累计投放突破 450 亿印尼盾'
    },
    date: '25 Juli 2026',
    dateI18n: {
      id: '25 Juli 2026',
      en: 'July 25, 2026',
      zh: '2026年7月25日'
    },
    category: 'operasional',
    categoryLabel: 'Operasional Cabang',
    categoryLabelI18n: {
      id: 'Operasional Cabang',
      en: 'Branch Operations',
      zh: '支行业务运营'
    },
    readTime: '5 Menit',
    readTimeI18n: {
      id: '5 Menit',
      en: '5 Mins Read',
      zh: '5 分钟阅读'
    },
    author: 'Divisi Bisnis Mikro & Komersial',
    authorI18n: {
      id: 'Divisi Bisnis Mikro & Komersial',
      en: 'Micro & Commercial Lending Division',
      zh: '微型普惠与商业信贷部'
    },
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Capaian akselerasi pembiayaan modal kerja bunga ringan subsidi pemerintah bagi ratusan pelaku usaha mikro dan klaster industri rumahan di 8 kantor unit supervisi Jakarta Barat.',
    excerptI18n: {
      id: 'Capaian akselerasi pembiayaan modal kerja bunga ringan subsidi pemerintah bagi ratusan pelaku usaha mikro dan klaster industri rumahan di 8 kantor unit supervisi Jakarta Barat.',
      en: 'Achievement in accelerating subsidized low-interest working capital credit for hundreds of micro-enterprises and home manufacturing clusters across 8 supervised unit branches.',
      zh: 'BRI Jelambar 支行下辖 8 家基层营业所全力推动政府贴息低息普惠贷款，精准扶持辖区内数百家微型商户及家庭手工业作坊。'
    },
    content: [
      'JAKARTA BARAT — Sebagai garda terdepan penggerak ekonomi kerakyatan, BRI Kantor Cabang Jakarta Jelambar bersama 8 kantor unit supervisinya berhasil membukukan penyaluran Kredit Usaha Rakyat (KUR) Mikro mencapai lebih dari Rp 45 Miliar sepanjang semester berjalan.',
      'Penyaluran pembiayaan bersubsidi ini diserap secara produktif oleh pelaku usaha di berbagai sektor unggulan Jakarta Barat, termasuk perdagangan tekstil dan konveksi di Tambora, klaster kuliner malam di Grogol, sentra percetakan dan aksesoris di Jelambar, serta pergudangan logistik di Cengkareng dan Kapuk Raya.',
      'Sinergi yang solid antara Relationship Manager (RM) Mikro di kantor cabang dengan para Mantri di kantor unit memungkinkan proses pengajuan kredit berlangsung cepat, transparan, dan tanpa hambatan birokrasi yang rumit.',
      '“BRI senantiasa berkomitmen memastikan bahwa pelaku usaha mikro yang produktif dan layak (feasible) namun belum memiliki agunan berlebih (non-bankable) dapat tetap memperoleh akses permodalan formal dengan suku bunga sangat terjangkau 6% p.a.,” tegas Manajer Bisnis Mikro BRI KC Jakarta Jelambar.',
      'Bagi para wirausaha dan pedagang yang memerlukan modal tambahan untuk ekspansi stok barang atau peremajaan alat usaha, silakan berkonsultasi langsung dengan tim RM Mikro kami.'
    ],
    contentI18n: {
      id: [
        'JAKARTA BARAT — Sebagai garda terdepan penggerak ekonomi kerakyatan, BRI Kantor Cabang Jakarta Jelambar bersama 8 kantor unit supervisinya berhasil membukukan penyaluran Kredit Usaha Rakyat (KUR) Mikro mencapai lebih dari Rp 45 Miliar sepanjang semester berjalan.',
        'Penyaluran pembiayaan bersubsidi ini diserap secara produktif oleh pelaku usaha di berbagai sektor unggulan Jakarta Barat, termasuk perdagangan tekstil dan konveksi di Tambora, klaster kuliner malam di Grogol, sentra percetakan dan aksesoris di Jelambar, serta pergudangan logistik di Cengkareng dan Kapuk Raya.',
        'Sinergi yang solid antara Relationship Manager (RM) Mikro di kantor cabang dengan para Mantri di kantor unit memungkinkan proses pengajuan kredit berlangsung cepat, transparan, dan tanpa hambatan birokrasi yang rumit.',
        '“BRI senantiasa berkomitmen memastikan bahwa pelaku usaha mikro yang produktif dan layak (feasible) namun belum memiliki agunan berlebih (non-bankable) dapat tetap memperoleh akses permodalan formal dengan suku bunga sangat terjangkau 6% p.a.,” tegas Manajer Bisnis Mikro BRI KC Jakarta Jelambar.',
        'Bagi para wirausaha dan pedagang yang memerlukan modal tambahan untuk ekspansi stok barang atau peremajaan alat usaha, silakan berkonsultasi langsung dengan tim RM Mikro kami.'
      ],
      en: [
        'WEST JAKARTA — Standing at the forefront of grassroots economic empowerment, BRI Branch Office Jakarta Jelambar together with its 8 supervised unit branches has successfully disbursed over IDR 45 Billion in subsidized Micro People’s Business Loans (KUR) during the current term.',
        'These funds have been deployed into productive sectors across West Jakarta, including textile apparel workshops in Tambora, culinary night clusters in Grogol, printing and craft businesses in Jelambar, and logistics supply hubs in Cengkareng and Kapuk Raya.',
        'Seamless collaboration between Branch Micro Relationship Managers and Field Credit Officers across the 8 unit offices has streamlined application processing with transparent, swift verification.',
        '“Bank BRI is committed to ensuring that productive, viable micro-entrepreneurs who lack surplus collateral can still access formal banking financing with government-subsidized rates of only 6% per annum,” affirmed the Micro Business Manager of BRI KC Jakarta Jelambar.',
        'Entrepreneurs seeking working capital for inventory expansion or equipment acquisition are encouraged to connect with our verified Micro RM team.'
      ],
      zh: [
        '西雅加达讯 — 作为印尼普惠金融与民生经济的中流砥柱，BRI 雅加达 Jelambar 支行与其下辖的 8 家直属基层营业所协同发力，在本财年上半年累计发放政府贴息微型普惠贷款（KUR）突破 450 亿印尼盾。',
        '此批普惠信贷资金精准流向西雅加达实体经济重点领域，包括 Tambora 纺织服装加工、Grogol 美食夜市商圈、Jelambar 印刷与广告装潢实体，以及 Cengkareng 和 Kapuk Raya 物流集散节点。',
        '支行信贷客户经理与基层营业所外勤信贷员的高效协同，实现了普惠信贷审批的“短、平、快”，手续简便透明。',
        '“Bank BRI 始终致力于让有真实经营需求、发展潜力良好但缺乏大额抵押物的小微创业者，能够以年化仅 6% 的超低优惠利率获得正规银行周转资金，”Jelambar 支行微贷负责人强调。',
        '欢迎有备货采购或设备更新资金需求的小微商户，随时联系支行微型信贷客户经理专属团队。'
      ]
    },
    tags: ['KUR Mikro', 'UMKM', 'Kredit Usaha', 'Jakarta Barat', 'Penyaluran Kredit']
  }
];

export function getArticleTitle(article: ActivityArticle, lang: Language): string {
  if (article.titleI18n && article.titleI18n[lang]) {
    return article.titleI18n[lang];
  }
  return article.title;
}

export function getArticleDate(article: ActivityArticle, lang: Language): string {
  if (article.dateI18n && article.dateI18n[lang]) {
    return article.dateI18n[lang];
  }
  return article.date;
}

export function getArticleCategory(article: ActivityArticle, lang: Language): string {
  if (article.categoryLabelI18n && article.categoryLabelI18n[lang]) {
    return article.categoryLabelI18n[lang];
  }
  return article.categoryLabel;
}

export function getArticleReadTime(article: ActivityArticle, lang: Language): string {
  if (article.readTimeI18n && article.readTimeI18n[lang]) {
    return article.readTimeI18n[lang];
  }
  return article.readTime;
}

export function getArticleAuthor(article: ActivityArticle, lang: Language): string {
  if (article.authorI18n && article.authorI18n[lang]) {
    return article.authorI18n[lang];
  }
  return article.author;
}

export function getArticleExcerpt(article: ActivityArticle, lang: Language): string {
  if (article.excerptI18n && article.excerptI18n[lang]) {
    return article.excerptI18n[lang];
  }
  return article.excerpt;
}

export function getArticleContent(article: ActivityArticle, lang: Language): string[] {
  if (article.contentI18n && article.contentI18n[lang]) {
    return article.contentI18n[lang];
  }
  return article.content;
}
