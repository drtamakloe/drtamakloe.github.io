/*
  TAM Lab website content
  ---------------------------------------------------------------
  This is the ONLY file you need to edit to update the website.
  Add a news item, paper, talk, or lab member below, save, and push.
  News items can have one photo ("img") or several ("imgs": ["a.jpg", "b.jpg"]).
  Newest items go at the TOP of each list.
  Text fields may contain simple HTML such as <a href="...">links</a>.
*/
window.TAMLAB = {
  lastUpdated: "2026-10-28",

  lab: {
    name: "Transportation Analytics & Mobility Lab",
    short: "TAM Lab",
    school: "Graduate School of Automobile and Mobility",
    university: "Kookmin University",
    universityLong: "Kookmin University",
    city: "Seoul",
    email: "drtamakloe@kookmin.ac.kr",
    email2: "drtamakloe@gmail.com",
    phone: "+82 2 910 6852",
    address: ["Graduate School of Automobile and Mobility", "Kookmin University", "Engineering Building, 4th floor, Room 455-2", "77 Jeongneung-ro, Seongbuk-gu", "Seoul 02707, Republic of Korea"],
    mapQuery: "Kookmin University Engineering Building, 77 Jeongneung-ro, Seongbuk-gu, Seoul",
    schoolUrl: "https://gsam.kookmin.ac.kr/mobility-en/"
  },

  pi: {
    name: "Reuben Tamakloe, PhD",
    shortName: "Dr. Reuben Tamakloe",
    role: "Assistant Professor and Lab Director",
    photo: "assets/tamlab/img/pi-portrait.jpg",
    cv: "CV/Reuben%20Tamakloe%20-%20CV.pdf",
    bio: [
      "Reuben Tamakloe is a tenure-track Assistant Professor at the Graduate School of Automobile and Mobility, Kookmin University, in Seoul, where he directs TAM Lab. Before joining Kookmin in September 2026, he was a Research Assistant Professor at the Cho Chun Shik Graduate School of Mobility, KAIST, where he was named a 2025 Jang Young Sil Fellow, and a Research Professor at the University of Seoul. He earned his PhD in Transportation Engineering from the University of Seoul and his BSc in Statistics with Mathematics from the University of Ghana.",
      "His research sits where statistics, machine learning, and transportation engineering meet: crash injury severity and vulnerable road users, the performance of integrated public transport, and how people adopt electric and automated vehicles. His work appears in journals including Accident Analysis &amp; Prevention, Transportation Research Part A, Technological Forecasting and Social Change, Cities, and Transport Policy, and he reviews for over 18 journals.",
      "Before his doctoral studies he worked at Enterprise Life and the Korea International Cooperation Agency (KOICA) in Accra. A first-generation graduate student who arrived in Korea in 2017, he has mentored international students since his own graduate school days in Seoul and welcomes students from every background, including those discovering transportation research for the first time."
    ],
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=2V3gP2EAAAAJ&hl=en" },
      { label: "ORCID", url: "https://orcid.org/0000-0002-9605-8439" },
      { label: "Scopus", url: "https://www.scopus.com/authid/detail.uri?authorId=57206723737" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Reuben-Tamakloe" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/drtamakloe" },
      { label: "X (Twitter)", url: "https://twitter.com/drtamakloe" }
    ],
    // A sequence, newest first
    path: [
      { when: "2026 – present", what: "Assistant Professor (tenure track)", where: "Graduate School of Automobile and Mobility, Kookmin University" },
      { when: "2025", what: "Jang Young Sil Fellow", where: "KAIST" },
      { when: "2024", what: "Visiting researcher, NYU–KAIST Postdoc Collaborative Grant", where: "New York University" },
      { when: "2023 – 2026", what: "Research Assistant Professor", where: "Cho Chun Shik Graduate School of Mobility and Center for Eco-Friendly &amp; Smart Vehicles, KAIST" },
      { when: "2022 – 2023", what: "Research Professor", where: "Department of Transportation Engineering, University of Seoul" },
      { when: "2017 – 2022", what: "PhD, Transportation Engineering (Smart Cities Interdisciplinary)", where: "University of Seoul" },
      { when: "2015 – 2017", what: "Research Assistant and Administrator", where: "Korea International Cooperation Agency (KOICA), Accra" },
      { when: "2014 – 2015", what: "Premium Admin Officer", where: "Enterprise Life (formerly Enterprise Life Assurance Limited), Accra" },
      { when: "2010 – 2014", what: "BSc, Statistics with Mathematics", where: "University of Ghana" }
    ]
  },

  /*
    Lab members. Leave the list empty until students join.
    Example:
    { name: "Jane Doe", role: "PhD student", since: 2027, photo: "assets/tamlab/img/people/jane.jpg",
      topic: "Pedestrian safety near school zones", email: "jane@kookmin.ac.kr", link: "" },
    Roles are grouped in this order: Postdoctoral researcher, PhD student, MS student, Research intern, Visiting researcher
  */
  members: [],

  /* Alumni, same format as members plus "now": "Assistant Professor, XYZ University" */
  alumni: [],

  // The four research lines. Colors are set in index.html (CSS --safety, --data, --urban, --emerging)
  lines: [
    { id: "safety", name: "Traffic safety", long: "Traffic safety and injury severity",
      summary: "Why do some crashes end in serious injury while others don’t? We model crash outcomes with heterogeneity-aware methods, with particular attention to pedestrians, older adults, motorcyclists, and other vulnerable road users.",
      questions: ["Which factors turn a crash into a fatal or severe one, and do those factors shift over time?", "How do risks differ for pedestrians, older adults, and riders of motorcycles and e-scooters?", "Can our models predict injury outcomes on data they have never seen?"],
      methods: ["Random parameters and mixed logit models", "Temporal and spatial instability analysis", "Out-of-sample prediction", "Structural equation modeling"] },
    { id: "data", name: "Data and AI", long: "Data analytics, machine learning, and pattern discovery",
      summary: "Data analytics and AI are the methodological core of the lab and connect every other line. We look for the combinations of conditions that standard regression models miss, and we make machine learning results explainable to engineers and policymakers.",
      questions: ["Which combinations of road, driver, and environment conditions co-occur in the most severe crashes?", "How can machine learning predictions be explained well enough to guide policy?", "What can text mining of the research literature reveal about where a field is heading?"],
      methods: ["Association rule mining and cluster-based techniques", "Explainable AI and crash prediction", "Spatio-temporal hotspot analysis", "Structural topic modeling and text mining"] },
    { id: "urban", name: "Urban mobility", long: "Urban mobility systems, public transport, and infrastructure",
      summary: "We evaluate how efficiently integrated transit stations, shared bicycles, and multimodal networks serve a city, and how streetscape and station-area design shape the safety of the people who use them.",
      questions: ["How efficiently do integrated subway, bus, and shared-bicycle stations perform, and what drives the differences?", "How did transit performance change during the COVID-19 pandemic?", "How should a network route people out of harm’s way in a disaster?"],
      methods: ["Data envelopment analysis and double-bootstrap efficiency models", "Network and topology analysis", "GIS-based system evaluation"] },
    { id: "emerging", name: "Emerging mobility", long: "Emerging mobility technologies, automation, and electric vehicles",
      summary: "Electric vehicles, automated driving, shared autonomous shuttles, drones, and e-scooters are changing streets quickly. We study who adopts them and why, and what new risks appear when people and automation share the road.",
      questions: ["Who adopts electric and shared autonomous vehicles, and what holds people back?", "What happens when drivers take control back from Level 2 automation?", "How can EVs, AVs, and micromobility fit safely into dense cities?"],
      methods: ["Behavioral modeling and survey analysis", "Cross-group and scenario-specific adoption analysis", "Explainable AI for human–technology interaction"] }
  ],

  tools: ["Python", "R", "NLOGIT", "Stata", "SPSS", "ArcGIS Pro", "Gephi"],

  news: [
  {"date": "2026-10-22", "title": "Moderating and presenting at the 2026 ITS World Congress in Gangneung", "imgs": ["news-its-1.jpg", "news-its-2.jpg", "news-its-3.jpg"], "alt": "Photos from the 2026 ITS World Congress in Gangneung: Dr. Tamakloe with session colleagues in front of the Room 306 screen, presenting to the audience, and in discussion after the session", "body": "At the ITS World Congress in Gangneung, Dr. Tamakloe moderated a session on crowd management and presented our research on generational shifts in the factors that shape adoption of self-driving transport for children. Both topics ask how intelligent transport systems can make mobility safer and more responsive to people’s needs. Thanks to the experts from Taiwan, including Dr. Remona Lee, for a valuable exchange on safer mobility."},
  {"date": "2026-09-01", "title": "Dr. Tamakloe joins Kookmin University as Assistant Professor, and TAM Lab moves to Seoul", "imgs": ["news-kookmin-1.jpg", "news-kookmin-2.jpg", "news-kookmin-3.jpg"], "alt": "Photos from Kookmin University’s appointment ceremony for new full-time faculty on 2 September 2026, where Dr. Tamakloe received his letter of appointment", "body": "Dr. Tamakloe has joined the <a href=\"https://gsam.kookmin.ac.kr/mobility-en/\">Graduate School of Automobile and Mobility at Kookmin University</a> as a tenure-track Assistant Professor, and TAM Lab now calls Seoul home. He received his letter of appointment at the university’s ceremony for new full-time faculty on 2 September 2026. The lab’s focus stays the same: artificial intelligence, emerging transportation technologies, and traffic safety. Heartfelt thanks to his mentors, Prof. Dongjoo Park (University of Seoul), Prof. Kitae Jang and Prof. Inhi Kim (KAIST), and Mr. Sangsup Park (DONGIL Global), to collaborators Prof. Subasish Das (Texas State University) and Dr. Emmanuel Kofi Adanu (The University of Alabama), and to colleagues at the Cho Chun Shik Graduate School of Mobility, KAIST."},
  {
    "date": "2026-04-09",
    "title": "Vehicle-to-grid and EV purchase intentions paper published in Technological Forecasting and Social Change",
    "img": "news-tfsc.jpg",
    "body": "Our study of how vehicle-to-grid configurations shape plug-in electric vehicle purchase intentions is now out in <a href=\"https://www.sciencedirect.com/science/article/pii/S0040162526001484\">Technological Forecasting and Social Change</a> (Impact Factor 13.3), the highest-impact venue for the lab so far. Thanks to co-authors Dr. Livingstone Divine Caesar and Prof. Inhi Kim."
  },
  {
    "date": "2025-12-03",
    "title": "Invited talk at the UN ESCAP capacity-building program for Pacific Small Island Developing States",
    "img": "news-tonga.jpg",
    "body": "Dr. Tamakloe presented “Integrating Human-Centered Safety into Sustainable Mobility Systems” at a training program in Daejeon that helps Pacific policymakers plan climate-resilient, sustainable smart mobility. He received a commemorative plaque from the Tongan Ministry of Infrastructure and joined the technical tour at the Korea Expressway Corporation."
  },
  {
    "date": "2025-07-04",
    "title": "Certificate of completion from the DNA+ Joint Education and Research Program in Road Transportation",
    "img": "news-dna.jpg",
    "body": "The program, jointly run by KAIST and Ajou University, focuses on convergence technologies in road transportation. The certificate was awarded by the Cho Chun Shik Graduate School of Mobility."
  },
  {
    "date": "2025-04-09",
    "title": "Dr. Tamakloe selected as a 2025 Jang Young Sil Fellow at KAIST",
    "img": "news-jang.jpg",
    "body": "The Jang Young Sil Fellow Program is a competitive, Korean government–funded program that gives outstanding early-career researchers multi-year support to lead independent, high-impact research. It is named after Jang Young Sil (장영실), the Joseon-era scientist and inventor. Thanks to Prof. Inhi Kim for the recommendation and guidance."
  },
  {
    "date": "2024-07-07",
    "title": "Three weeks at NYU through the NYU–KAIST Postdoc Collaborative Grant",
    "img": "news-nyu.jpg",
    "body": "Selected for the <a href=\"https://www.nyu.edu/research/nyu-kaist/additional-highlights.html#2024\">NYU Postdoc Collaborative Grant Program</a>, Dr. Tamakloe spent three weeks at NYU’s Brooklyn campus with Dr. Hyeongtaek Lee, working with faculty from the joint research groups on turning predictive safety models into actionable transport policy."
  },
  {
    "date": "2024-06-27",
    "title": "Four TRB 2024 papers published in a single month",
    "img": "news-pubs.jpg",
    "body": "Four journal articles first presented at the TRB Annual Meeting 2024 appeared in Cities, Accident Analysis &amp; Prevention, IATSS Research, and Transportation Letters in June. Thank you to all our collaborators."
  },
  {
    "date": "2024-02-21",
    "title": "500 citations",
    "img": "news-500.jpg",
    "body": "Our work passed 500 citations on Google Scholar. Thanks to every collaborator, reviewer, and author who built on these papers."
  },
  {
    "date": "2023-09-01",
    "title": "Dr. Tamakloe appointed Research Assistant Professor at KAIST",
    "img": "",
    "body": "Dr. Tamakloe has been <a href=\"https://mo.kaist.ac.kr/en/news_event/dr-reuben-tamakloe-was-appointed-as-a-research-professor/\">appointed</a> Research Assistant Professor at KAIST, working with researchers and students at the Cho Chun Shik Graduate School of Mobility."
  },
  {
    "date": "2022-10-29",
    "title": "Certificate of Service from the Ghanaian Students in Korea and Associates",
    "img": "news-ghaska.jpg",
    "body": "Recognition for serving as Organizing Secretary of GHASKA during the 2020–2021 term, supporting the community of Ghanaian scholars in Korea. Thanks to the executive team and the Embassy of Ghana."
  },
  {
    "date": "2022-09-30",
    "title": "20th journal article accepted",
    "img": "news-20th.jpg",
    "body": "The 20th article, a core part of Dr. Tamakloe’s doctoral dissertation, was accepted for publication."
  },
  {
    "date": "2022-03-01",
    "title": "First NRF grant as principal investigator",
    "img": "news-sav.jpg",
    "body": "A three-year project funded by the National Research Foundation of Korea (₩210,000,000) began, marking Dr. Tamakloe’s first externally funded project as PI."
  },
  {
    "date": "2022-02-22",
    "title": "Outstanding Paper Award, first half of 2022",
    "img": "news-award-2022.jpg",
    "body": "Recognized with the Outstanding Paper Award for the first half of 2022."
  },
  {
    "date": "2021-11-28",
    "title": "Doctoral dissertation defense",
    "img": "news-defense.jpg",
    "body": "Dr. Tamakloe defended his dissertation, “Understanding risk factors influencing crash consequence metrics of fatal vehicle-involved crashes at hotspot locations,” at the University of Seoul under the supervision of Prof. Dongjoo Park."
  },
  {
    "date": "2021-08-10",
    "title": "Outstanding Paper Award, University of Seoul",
    "img": "news-award-2021.jpg",
    "body": "Recognized with the Outstanding Paper Award at the University of Seoul."
  },
  {
    "date": "2021-08-10",
    "title": "Making Cities Resilient training certificate (UNDRR, UNOSSC, PAHO)",
    "img": "news-undrr.jpg",
    "body": "Completed the joint online training on local disaster risk reduction strategies for COVID-19 and future crises, hosted by UNDRR GETI, UNOSSC, and PAHO."
  }
],

  /*
    Journal articles, newest first.
    lines: any of "safety", "data", "urban", "emerging" (controls the colored dots and filters)
  */
  publications: [
  {
    "authors": "Tamakloe, R., Adanu, E. K., Das, S., & Adoah, B. E.",
    "year": 2026,
    "title": "Fatal distracted driving pedestrian-involved crashes in Ghana: Exploring cluster-specific factor associations using cluster correspondence analysis",
    "journal": "African Transport Studies",
    "details": "4, 100081",
    "url": "https://www.sciencedirect.com/science/article/pii/S2950196226000050",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Tamakloe, R., Zhang, K., Kwon, D., & Kim, I.",
    "year": 2026,
    "title": "Elderly pedestrian safety in silver zones: A temporal instability analysis of injury severity determinants",
    "journal": "Journal of Traffic and Transportation Engineering (English Edition)",
    "details": "",
    "url": "https://jtte.chd.edu.cn/en/article/id/6c6021e7-0142-4642-be0d-8f445c35bbd1",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Chun, G., Zhang, K., Tamakloe, R., Oh, T., & Kim, I.",
    "year": 2026,
    "title": "Built environment determinants of e-scooter route deviations: A macro-and micro-scale analysis",
    "journal": "Cities",
    "details": "107508",
    "url": "",
    "lines": [
      "urban",
      "emerging"
    ]
  },
  {
    "authors": "Tamakloe, R., Caesar, L. D., & Kim, I.",
    "year": 2026,
    "title": "How vehicle-to-grid configurations shape plug-in electric vehicle purchase intentions: Evidence of non-transferable effects",
    "journal": "Technological Forecasting and Social Change",
    "details": "228, 124671",
    "url": "https://www.sciencedirect.com/science/article/pii/S0040162526001484",
    "lines": [
      "emerging"
    ]
  },
  {
    "authors": "Barua, S., Jafari, M., Starewich, M., Tamakloe, R., Alnawmasi, N., & Das, S.",
    "year": 2026,
    "title": "Temporal dynamics in barrier-involved crashes: Determining shifts in driving behavior and injury risk across multi-year periods",
    "journal": "Scientific Reports",
    "details": "16(1), 14561",
    "url": "https://www.nature.com/articles/s41598-026-45273-y",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Tamakloe, R., Caesar, L. D., & Kim, I.",
    "year": 2026,
    "title": "Determinants of battery electric vehicle adoption concerns: insights from commercial fleet owners",
    "journal": "Transportation Research Part A: Policy and Practice",
    "details": "205, 104874",
    "url": "https://www.sciencedirect.com/science/article/pii/S0965856426000157",
    "lines": [
      "emerging"
    ]
  },
  {
    "authors": "Zhang, K., Chen, B., Tamakloe, R., Bai, Y., & Kim, I.",
    "year": 2026,
    "title": "Does the streetscape built environment matter in explaining crash injury severity among older adults?",
    "journal": "Journal of Transport Geography",
    "details": "131, 104540",
    "url": "https://www.sciencedirect.com/science/article/pii/S0966692325004314",
    "lines": [
      "safety",
      "urban"
    ]
  },
  {
    "authors": "Tamakloe, R., & Lee, H.",
    "year": 2026,
    "title": "Variability of factors driving shared autonomous vehicle adoption: A cross-group analysis based on local ride-sharing access and historical experience",
    "journal": "International Journal of Sustainable Transportation",
    "details": "1-18",
    "url": "https://www.tandfonline.com/doi/full/10.1080/15568318.2026.2623149",
    "lines": [
      "emerging"
    ]
  },
  {
    "authors": "Tamakloe, R., & Caesar, L. D.",
    "year": 2026,
    "title": "Factors associated with incentive-prioritizing electric vehicle buyers",
    "journal": "International Journal of Sustainable Transportation",
    "details": "1-20",
    "url": "https://www.tandfonline.com/doi/full/10.1080/15568318.2026.2619508",
    "lines": [
      "emerging"
    ]
  },
  {
    "authors": "Somvanshi, S., Liu, J., Chakraborty, R., Tamakloe, R., & Das, S.",
    "year": 2026,
    "title": "Predicting Crash Severity using Naturalistic Driving Data and Neural Networks",
    "journal": "International Journal of Intelligent Transportation Systems Research",
    "details": "1-18",
    "url": "https://link.springer.com/article/10.1007/s13177-025-00624-3",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Tak, J., Park, D., Jang, J., Ko, C., Byun, S., Kim, H., Tamakloe, R., & Joh, C.",
    "year": 2026,
    "title": "Physics-guided estimation of freight vehicle loading status using digital tachograph data",
    "journal": "Scientific Reports",
    "details": "16(1)",
    "url": "",
    "lines": [
      "data",
      "urban"
    ]
  },
  {
    "authors": "Jafari, M., Starewich, M., Das, S., Barua, S., & Tamakloe, R.",
    "year": 2025,
    "title": "Temporal stability analysis of crash injury severity in school zones: a mixed logit modeling approach",
    "journal": "IATSS Research",
    "details": "49(4), 528-543",
    "url": "https://www.sciencedirect.com/science/article/pii/S0386111225000470",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Barua, S., Mimi, M. S., Javed, S. A., Tamakloe, R., & Das, S.",
    "year": 2025,
    "title": "Impact of temporal, spatial, and roadway factors on driver overrides in Level 2 automation: A bivariate binary probit model analysis",
    "journal": "Transportation Research Part F: Traffic Psychology and Behaviour",
    "details": "115, 103356",
    "url": "https://www.sciencedirect.com/science/article/pii/S1369847825003110",
    "lines": [
      "safety",
      "emerging"
    ]
  },
  {
    "authors": "Jafari, M., Das, S., Tamakloe, R., Khan, M. N., & Hossain, A.",
    "year": 2025,
    "title": "Uncovering individual heterogeneity in pedestrian crash severity with mixed logit models: a Louisiana case study",
    "journal": "Transportation Research Record",
    "details": "2679(8), 647-677",
    "url": "https://journals.sagepub.com/doi/full/10.1177/03611981251336135",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Tamakloe, R., Khorasani, M., Das, S., & Kim, I.",
    "year": 2025,
    "title": "Pattern recognition in crash clusters involving vehicles with advanced driving technologies",
    "journal": "Accident Analysis & Prevention",
    "details": "218, 108072",
    "url": "https://www.sciencedirect.com/science/article/pii/S0001457525001587",
    "lines": [
      "safety",
      "data",
      "emerging"
    ]
  },
  {
    "authors": "Adanu, E. K., Tamakloe, R., Dzinyela, R., & Agyemang, W.",
    "year": 2025,
    "title": "Assessing the factors associated with pedestrian injury severity in hit-and-run crashes in Ghana",
    "journal": "Transportation Letters",
    "details": "17(4), 567-577",
    "url": "https://www.tandfonline.com/doi/abs/10.1080/19427867.2024.2366730",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Kutela, B., Tamakloe, R., Novat, N., Kodi, J. H., Kinero, A., & Shita, H.",
    "year": 2025,
    "title": "Will the widespread driverless passenger vehicles help the elderly and people with disabilities live more independently? Insights from a nationwide survey",
    "journal": "Cities",
    "details": "159, 105755",
    "url": "https://www.sciencedirect.com/science/article/pii/S0264275125000551",
    "lines": [
      "urban",
      "emerging"
    ]
  },
  {
    "authors": "Tamakloe, R., Khorasani, M., & Kim, I.",
    "year": 2025,
    "title": "Differences in injury severities between elderly and non-elderly taxi driver at-fault crashes: Temporal instability and out-of-sample prediction",
    "journal": "Accident Analysis & Prevention",
    "details": "211, 107865",
    "url": "https://www.sciencedirect.com/science/article/pii/S000145752400410X",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Antariksa, G., Tamakloe, R., Liu, J., & Das, S.",
    "year": 2025,
    "title": "Automated and explainable artificial intelligence to enhance prediction of pedestrian injury severity",
    "journal": "IEEE Transactions on Intelligent Transportation Systems",
    "details": "26(4), 5568-5584",
    "url": "https://ieeexplore.ieee.org/abstract/document/10847308",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Tamakloe, R., Das, S., Adanu, E. K., & Park, D.",
    "year": 2025,
    "title": "Key factors affecting motorcycle-barrier crash severity: an innovative cluster-regression technique",
    "journal": "Transportmetrica A: Transport Science",
    "details": "21(1), 2230310",
    "url": "https://www.tandfonline.com/doi/full/10.1080/23249935.2023.2230310",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Zhang, K., Tamakloe, R., Cao, M., & Kim, I.",
    "year": 2024,
    "title": "Exploring fatal/severe pedestrian injury crash frequency at school zone crash hotspots: using interpretable machine learning to assess the micro-level street environment",
    "journal": "Journal of Transport Geography",
    "details": "121, 104034",
    "url": "https://www.sciencedirect.com/science/article/pii/S0966692324002436",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Oh, T., Lim, J., Tamakloe, R., Li, Z., & Kim, I.",
    "year": 2024,
    "title": "Enhancing mutual understanding of e-scooter user’s perspective in overtaking maneuver through replaying own driving trajectory",
    "journal": "Accident Analysis & Prevention",
    "details": "207, 107750",
    "url": "https://www.sciencedirect.com/science/article/pii/S0001457524002951",
    "lines": [
      "safety",
      "emerging"
    ]
  },
  {
    "authors": "Tamakloe, R., & Adanu, E. K.",
    "year": 2024,
    "title": "Critical patterns associated with vehicle-pedestrian hit-and-run casualty injury severity under different weather conditions: An association rule mining approach",
    "journal": "IATSS Research",
    "details": "48(3), 299-318",
    "url": "https://www.sciencedirect.com/science/article/pii/S0386111224000281",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Tamakloe, R., & Caesar, L. D.",
    "year": 2024,
    "title": "Decoding the patterns of critical factor associations driving electric vehicle recommendations",
    "journal": "Transportation Research Part A: Policy and Practice",
    "details": "187, 104171",
    "url": "https://www.sciencedirect.com/science/article/pii/S0965856424002192",
    "lines": [
      "data",
      "emerging"
    ]
  },
  {
    "authors": "Chengula, T. J., Kutela, B., Novat, N., Shita, H., Kinero, A., Tamakloe, R., & Kasomi, S.",
    "year": 2024,
    "title": "Spatial instability of crash prediction models: A case of scooter crashes",
    "journal": "Machine Learning with Applications",
    "details": "17, 100574",
    "url": "https://www.sciencedirect.com/science/article/pii/S2666827024000501",
    "lines": [
      "safety",
      "data",
      "emerging"
    ]
  },
  {
    "authors": "Tamakloe, R., Lee, J., & Park, D.",
    "year": 2024,
    "title": "Efficiency variations of integrated urban transit stations before and during the COVID-19 pandemic: Insights from a Mega-City without pandemic lockdown measures",
    "journal": "Cities",
    "details": "152, 105196",
    "url": "https://www.sciencedirect.com/science/article/pii/S0264275124004104",
    "lines": [
      "urban"
    ]
  },
  {
    "authors": "Tamakloe, R., Zhang, K., & Kim, I.",
    "year": 2024,
    "title": "Temporal instability of the determinants of fatal/severe elderly pedestrian injury outcomes in intersections and non-intersections before, during, and after the COVID-19 pandemic",
    "journal": "Accident Analysis & Prevention",
    "details": "205, 107676",
    "url": "https://www.sciencedirect.com/science/article/pii/S0001457524002215",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Das, S., Dutta, A., Tamakloe, R., & Khan, M. N.",
    "year": 2024,
    "title": "Analyzing the time-varying patterns of contributing factors in work zone-related crashes",
    "journal": "Journal of Transportation Safety & Security",
    "details": "16(6), 655-682",
    "url": "https://www.tandfonline.com/doi/full/10.1080/19439962.2023.2246020",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Caesar, L. D., & Tamakloe, R.",
    "year": 2024,
    "title": "Unraveling the patterns of critical contributory factors and flag-state affiliations linked with maritime incident outcomes",
    "journal": "Marine Policy",
    "details": "163, 106135",
    "url": "https://www.sciencedirect.com/science/article/pii/S0308597X24001337",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Tamakloe, R., Zhang, K., Hossain, A., Kim, I., & Park, S. H.",
    "year": 2024,
    "title": "Critical risk factors associated with fatal/severe crash outcomes in personal mobility device rider at-fault crashes: A two-step inter-cluster rule mining technique",
    "journal": "Accident Analysis & Prevention",
    "details": "199, 107527",
    "url": "https://authors.elsevier.com/a/1igz9LDRCqVH",
    "lines": [
      "safety",
      "data",
      "emerging"
    ]
  },
  {
    "authors": "Tamakloe, R., Zhang, K., Atandzi, J., & Park, D.",
    "year": 2024,
    "title": "Examining urban delivery service user profiles and determinants of drone delivery adoption in Ghana considering usage before and after the COVID-19 pandemic",
    "journal": "Transport Policy",
    "details": "146, 279-294",
    "url": "https://www.sciencedirect.com/science/article/pii/S0967070X23003323",
    "lines": [
      "urban",
      "emerging"
    ]
  },
  {
    "authors": "Tamakloe, R., Adanu, E. K., Atandzi, J., Das, S., Lord, D., & Park, D.",
    "year": 2023,
    "title": "Stability of factors influencing walking-along-the-road pedestrian injury severity outcomes under different lighting conditions: a random parameters logit approach with heterogeneity in means and out-of-sample predictions",
    "journal": "Accident Analysis & Prevention",
    "details": "193, 107333",
    "url": "https://www.sciencedirect.com/science/article/pii/S0001457523003809",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Das, S., Tamakloe, R., Zubaidi, H., Obaid, I., & Rahman, M. A.",
    "year": 2023,
    "title": "Bicyclist injury severity classification using a random parameter logit model",
    "journal": "International Journal of Transportation Science and Technology",
    "details": "12(4), 1093-1108",
    "url": "https://www.sciencedirect.com/science/article/pii/S2046043023000047",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Tamakloe, R., & Park, D.",
    "year": 2023,
    "title": "Discovering latent topics and trends in autonomous vehicle-related research: A structural topic modelling approach",
    "journal": "Transport Policy",
    "details": "139, 1-20",
    "url": "https://www.sciencedirect.com/science/article/pii/S0967070X23001452?via%3Dihub",
    "lines": [
      "data",
      "emerging"
    ]
  },
  {
    "authors": "Tamakloe, R., & Park, D.",
    "year": 2023,
    "title": "Factors influencing fatal vehicle-involved crash consequence metrics at spatio-temporal hotspots in South Korea: application of GIS and machine learning techniques",
    "journal": "International Journal of Urban Sciences",
    "details": "27(3), 483-517",
    "url": "https://www.tandfonline.com/eprint/I2S8UJPREM2CX29HRHMG/full?target=10.1080/12265934.2022.2134182",
    "lines": [
      "safety",
      "data",
      "urban"
    ]
  },
  {
    "authors": "Tamakloe, R., Hong, J., Kim, J., & Park, D.",
    "year": 2023,
    "title": "Factors affecting fatal PTW at-fault crash outcome metrics at intersections and non-intersections in South Korea",
    "journal": "Journal of Transportation Safety & Security",
    "details": "15(7), 681-716",
    "url": "https://www.tandfonline.com/eprint/PFRB5QGMZFZJPNBNNKB3/full?target=10.1080/19439962.2022.2123582",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Das, S., Tamakloe, R., Kutela, B., & Hossain, A.",
    "year": 2023,
    "title": "Pattern recognition from injury severity types of frontage roadway crashes",
    "journal": "Journal of Transportation Safety & Security",
    "details": "15(7), 659-680",
    "url": "https://www.researchgate.net/profile/Subasish-Das/publication/363540242_Pattern_recognition_from_injury_severity_types_of_frontage_roadway_crashes/links/632201c270cc936cd309c572/Pattern-recognition-from-injury-severity-types-of-frontage-roadway-crashes.pdf",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Obaid, I., Alnedawi, A., Aboud, G. M., Tamakloe, R., Zubaidi, H., & Das, S.",
    "year": 2023,
    "title": "Factors associated with driver injury severity of motor vehicle crashes on sealed and unsealed pavements: Random parameter model with heterogeneity in means and variances",
    "journal": "International Journal of Transportation Science and Technology",
    "details": "12(2), 460-475",
    "url": "https://www.sciencedirect.com/science/article/pii/S204604302200034X?via%3Dihub",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Tamakloe, R.",
    "year": 2023,
    "title": "Risk factors influencing fatal powered two-wheeler at-fault and not-at-fault crashes: an application of spatio-temporal hotspot and association rule mining techniques",
    "journal": "Informatics",
    "details": "10(2), 43",
    "url": "https://www.mdpi.com/2227-9709/10/2/43",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Zubaidi, H., Tamakloe, R., Al-Bdairi, N. S. S., Alnedawi, A., & Obaid, I.",
    "year": 2023,
    "title": "Exploring senior motorcyclist injury severity crashes: Random parameter model with heterogeneity in mean and variance",
    "journal": "IATSS Research",
    "details": "47(1), 1-13",
    "url": "https://www.sciencedirect.com/science/article/pii/S0386111222000619",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Tamakloe, R., Park, D., & Chang, H.",
    "year": 2022,
    "title": "Discovering research topics, trends, and perspectives in COVID-19-related transportation journal articles",
    "journal": "International Journal of Urban Sciences",
    "details": "26(4), 710-738",
    "url": "https://www.tandfonline.com/doi/full/10.1080/12265934.2022.2044891",
    "lines": [
      "data",
      "urban"
    ]
  },
  {
    "authors": "Tamakloe, R., Sam, E. F., Bencekri, M., Das, S., & Park, D.",
    "year": 2022,
    "title": "Mining groups of factors influencing bus/minibus crash severities on poor pavement condition roads considering different lighting status",
    "journal": "Traffic Injury Prevention",
    "details": "23(5), 308-314",
    "url": "https://www.tandfonline.com/eprint/89PDTZ7U5PSV6HZ3MFAP/full?target=10.1080/15389588.2022.2066658",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Tamakloe, R., Das, S., Aidoo, E. N., & Park, D.",
    "year": 2022,
    "title": "Factors affecting motorcycle crash casualty severity at signalized and non-signalized intersections in Ghana: Insights from a data mining and binary logit regression approach",
    "journal": "Accident Analysis & Prevention",
    "details": "165, 106517",
    "url": "https://www.sciencedirect.com/science/article/pii/S0001457521005480",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Das, S., Tamakloe, R., Zubaidi, H., Obaid, I., & Alnedawi, A.",
    "year": 2021,
    "title": "Fatal pedestrian crashes at intersections: Trend mining using association rules",
    "journal": "Accident Analysis & Prevention",
    "details": "160, 106306",
    "url": "https://www.sciencedirect.com/science/article/pii/S0001457521003377",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Tamakloe, R., Lim, S., Sam, E. F., Park, S. H., & Park, D.",
    "year": 2021,
    "title": "Investigating factors affecting bus/minibus accident severity in a developing country for different subgroup datasets characterised by time, pavement, and light conditions",
    "journal": "Accident Analysis & Prevention",
    "details": "159, 106268",
    "url": "https://www.sciencedirect.com/science/article/pii/S0001457521002992",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Tamakloe, R., Hong, J., Tak, J., & Park, D.",
    "year": 2021,
    "title": "Finding evacuation routes using traffic and network structure information",
    "journal": "Transportation Research Part D: Transport and Environment",
    "details": "95, 102853",
    "url": "https://www.sciencedirect.com/science/article/pii/S1361920921001565",
    "lines": [
      "urban"
    ]
  },
  {
    "authors": "Tamakloe, R., Hong, J., & Park, D.",
    "year": 2020,
    "title": "A copula-based approach for jointly modeling crash severity and number of vehicles involved in express bus crashes on expressways considering temporal stability of data",
    "journal": "Accident Analysis & Prevention",
    "details": "146, 105736",
    "url": "https://www.sciencedirect.com/science/article/pii/S0001457520309994",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Hong, J., Tamakloe, R., & Park, D.",
    "year": 2020,
    "title": "Application of association rules mining algorithm for hazardous materials transportation crashes on expressway",
    "journal": "Accident Analysis & Prevention",
    "details": "142, 105497",
    "url": "https://www.sciencedirect.com/science/article/pii/S0001457519314587",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Hong, J., Tamakloe, R., Tak, J., & Park, D.",
    "year": 2020,
    "title": "Two-stage double bootstrap data envelopment analysis for efficiency evaluation of shared-bicycle stations in urban cities",
    "journal": "Transportation Research Record",
    "details": "2674(6), 211-224",
    "url": "https://journals.sagepub.com/doi/full/10.1177/0361198120918568",
    "lines": [
      "urban"
    ]
  },
  {
    "authors": "Tamakloe, R., Hong, J., & Tak, J.",
    "year": 2020,
    "title": "Determinants of transit-oriented development efficiency focusing on an integrated subway, bus and shared-bicycle system: Application of Simar-Wilson's two-stage approach",
    "journal": "Cities",
    "details": "108, 102988",
    "url": "https://www.sciencedirect.com/science/article/pii/S0264275120313366",
    "lines": [
      "urban"
    ]
  },
  {
    "authors": "Tamakloe, R., & Hong, J.",
    "year": 2020,
    "title": "Assessing the efficiency of integrated public transit stations based on the concept of transit-oriented development",
    "journal": "Transportmetrica A: Transport Science",
    "details": "16(3), 1459-1489",
    "url": "https://www.sciencedirect.com/org/science/article/pii/S2324993522005103",
    "lines": [
      "urban"
    ]
  },
  {
    "authors": "Hong, J., Tamakloe, R., & Park, D.",
    "year": 2020,
    "title": "Discovering insightful rules among truck crash characteristics using apriori algorithm",
    "journal": "Journal of Advanced Transportation",
    "details": "2020(1), 4323816",
    "url": "https://www.hindawi.com/journals/jat/2020/4323816/",
    "lines": [
      "safety",
      "data"
    ]
  },
  {
    "authors": "Hong, J., Tamakloe, R., Lee, S., & Park, D.",
    "year": 2019,
    "title": "Exploring the topological characteristics of complex public transportation networks: Focus on variations in both single and integrated systems in the Seoul Metropolitan Area",
    "journal": "Sustainability",
    "details": "11(19), 5404",
    "url": "https://www.mdpi.com/2071-1050/11/19/5404",
    "lines": [
      "urban"
    ]
  },
  {
    "authors": "Hong, J., Tamakloe, R., & Park, D.",
    "year": 2019,
    "title": "A comprehensive analysis of multi-vehicle crashes on expressways: a double hurdle approach",
    "journal": "Sustainability",
    "details": "11(10), 2782",
    "url": "https://www.mdpi.com/2071-1050/11/10/2782",
    "lines": [
      "safety"
    ]
  },
  {
    "authors": "Hong, J., Tamakloe, R., Lee, G., & Park, D.",
    "year": 2019,
    "title": "Insight from scientific study in logistics using text mining",
    "journal": "Transportation Research Record",
    "details": "2673(4), 97-107",
    "url": "https://journals.sagepub.com/doi/full/10.1177/0361198119834905",
    "lines": [
      "data",
      "urban"
    ]
  },
  {
    "authors": "Hong, J., Tamakloe, R., Park, D., & Choi, Y.",
    "year": 2019,
    "title": "Estimating incident duration considering the unobserved heterogeneity of risk factors for trucks transporting HAZMAT on expressways",
    "journal": "Transportation Research Record",
    "details": "2673(2), 232-242",
    "url": "https://journals.sagepub.com/doi/full/10.1177/0361198119827925",
    "lines": [
      "safety"
    ]
  }
],

  underReview: [],

  invitedTalks: [
  {
    "date": "2025-12-03",
    "host": "UN ESCAP",
    "place": "Daejeon, South Korea",
    "title": "Integrating human-centered safety into sustainable mobility systems",
    "img": "talk-un.jpg",
    "video": "",
    "read": ""
  },
  {
    "date": "2024-07-25",
    "host": "New York University (C2SMARTER)",
    "place": "New York, USA",
    "title": "Leveraging artificial intelligence to improve safety for personal mobility device users",
    "img": "talk-nyu.jpg",
    "video": "8iZzL8mStLs",
    "read": "https://c2smart.engineering.nyu.edu/event/seminar-leveraging-ai-to-improve-safety-for-personal-mobility-device-usersse/"
  },
  {
    "date": "2024-07-23",
    "host": "New York University",
    "place": "New York, USA",
    "title": "Can we improve the efficiency of public transport systems by integrating shared autonomous shuttles into them?",
    "img": "",
    "video": "",
    "read": ""
  },
  {
    "date": "2023-10-12",
    "host": "KAIST",
    "place": "Daejeon, South Korea",
    "title": "Discovering the factors influencing shared autonomous vehicle adoption: A cross-group analysis considering local ride-sharing access and historical usage experience",
    "img": "talk-kaist.jpg",
    "video": "_DCaLbs5FCA",
    "read": ""
  }
],

  conferences: [
  {"venue": "ITS World Congress", "place": "Gangneung, South Korea", "year": 2026, "title": "Generational shifts in the factors influencing the adoption of self-driving transport for children"},
  {
    "venue": "Transportation Research Board Annual Meeting",
    "place": "Washington, DC, USA",
    "year": 2024,
    "title": "Investigating the performance of integrated transit stations: A comparative study in a mega-city before and during the COVID-19 pandemic"
  },
  {
    "venue": "Transportation Research Board Annual Meeting",
    "place": "Washington, DC, USA",
    "year": 2024,
    "title": "Discovering the factors influencing shared autonomous vehicle adoption: A cross-group analysis considering local ridesharing access and historical experience"
  },
  {
    "venue": "Transportation Research Board Annual Meeting",
    "place": "Washington, DC, USA",
    "year": 2024,
    "title": "Understanding consumers prioritizing incentives in electric vehicle purchases: Identifying patterns for effective policy strategies"
  },
  {
    "venue": "Transportation Research Board Annual Meeting",
    "place": "Washington, DC, USA",
    "year": 2024,
    "title": "Uncovering individual heterogeneity in pedestrian crash severity with mixed logit models"
  },
  {
    "venue": "Transportation Research Board Annual Meeting",
    "place": "Washington, DC, USA",
    "year": 2024,
    "title": "Investigating critical factor associations affecting injury severity outcomes of passengers falling from moving vehicles"
  },
  {
    "venue": "Transportation Research Board Annual Meeting",
    "place": "Washington, DC, USA",
    "year": 2024,
    "title": "Investigating crashes occurred at school zones using random parameter ordered probit model"
  },
  {
    "venue": "Transportation Research Board Annual Meeting",
    "place": "Washington, DC, USA",
    "year": 2024,
    "title": "Patterns of critical factors linked to automated vehicle–involved crashes: A comparative analysis of intersection and non-intersection crash scenarios"
  },
  {
    "venue": "Transportation Research Board Annual Meeting",
    "place": "Washington, DC, USA",
    "year": 2023,
    "title": "Qualitative analysis of urban air mobility as a disruptive technology"
  },
  {
    "venue": "Transportation Research Board Annual Meeting",
    "place": "Washington, DC, USA",
    "year": 2023,
    "title": "Perceptions of drone delivery adoption in Ghana considering online delivery usage before and after the incidence of the COVID-19 pandemic"
  },
  {
    "venue": "Transportation Research Board Annual Meeting",
    "place": "Washington, DC, USA",
    "year": 2023,
    "title": "Risk factors affecting motorcycle-barrier crashes and injury severities: Insights from an innovative cluster-regression technique"
  },
  {
    "venue": "KITS International Conference",
    "place": "ICC Jeju, South Korea",
    "year": 2022,
    "title": "How different are researcher perspectives regarding COVID-19 and transportation?"
  },
  {
    "venue": "Transportation Research Board Annual Meeting",
    "place": "Washington, DC, USA",
    "year": 2022,
    "title": "Investigating chains of risk factors influencing fatal powered two-wheeler crashes at spatio-temporal hotspot locations in South Korea"
  },
  {
    "venue": "Transportation Research Board Annual Meeting",
    "place": "Washington, DC, USA",
    "year": 2022,
    "title": "Investigating chains of factors influencing motorcycle crash casualty severity at signalized and non-signalized intersections in a developing country"
  },
  {
    "venue": "Korean Transportation Conference",
    "place": "Jeju JDC Conference Center, South Korea",
    "year": null,
    "title": "A machine learning approach to identifying factors influencing motorcycle crashes at critical hotspot locations"
  },
  {
    "venue": "Korean Transportation Conference",
    "place": "Online",
    "year": null,
    "title": "Dynamic network topology-based evacuation routing in disaster situations"
  },
  {
    "venue": "Korean Institute of ITS Conference",
    "place": "St. John’s Hotel, Gangneung, South Korea",
    "year": 2019,
    "title": "An application of Simar-Wilson bootstrap data envelopment analysis to investigate the efficiency of shared-bicycle stations in Seoul"
  },
  {
    "venue": "26th ITS World Congress",
    "place": "Suntec Convention Centre, Singapore",
    "year": 2019,
    "title": "Assessing the impacts of land use on subway ridership: Identifying a suitable sustainable transport policy"
  },
  {
    "venue": "Korean Institute of ITS Conference",
    "place": "Cheju Halla University, Jeju, South Korea",
    "year": 2019,
    "title": "Topological analysis of multimodal transportation network in Seoul based on graph-based methods"
  },
  {
    "venue": "Korean Institute of ITS Conference",
    "place": "Kyungsung University, Busan, South Korea",
    "year": 2018,
    "title": "Comparing the characteristics of multivehicle crashes using Cragg’s double-hurdle regression model"
  },
  {
    "venue": "13th UC-US-KU-TU International Joint Seminar",
    "place": "Tongji University, Shanghai, China",
    "year": null,
    "title": ""
  },
  {
    "venue": "Korean Institute of ITS Conference",
    "place": "Cheju Halla University, Jeju, South Korea",
    "year": 2018,
    "title": "A study for conditional mixed process model of bus-related crashes on expressway"
  }
],

  courses: [
    { title: "Logistics Management (compulsory course)", term: "Spring 2023" },
    { title: "Introduction to Transportation Engineering", term: "Spring 2023" },
    { title: "Big Data Analysis in Transportation", term: "Fall 2022" },
    { title: "Advanced Discrete Choice Model I", term: "Fall 2022" }
  ],

  reviewingLabel: "over 18",

  reviewing: ["Accident Analysis and Prevention", "Transport Policy", "Cities", "Transportation Research Part A: Policy and Practice", "Transportation Research Part D: Transport and Environment", "Transportation Research Part E: Logistics and Transportation Review", "Transportation Research Part F: Traffic Psychology and Behaviour", "Journal of Transport Geography", "Travel Behaviour and Society", "Case Studies on Transport Policy", "Transportation Research Interdisciplinary Perspectives", "IATSS Research", "Transportmetrica A: Transport Science", "Traffic Injury Prevention", "Transportation Research Record", "KSCE Journal of Civil Engineering", "International Journal of Urban Sciences", "International Journal of Sustainable Transportation"],

  service: [
    { role: "Session moderator, crowd management", org: "2026 ITS World Congress, Gangneung" },
    { role: "New Student Mentoring Volunteer", org: "International Student Office, University of Seoul" },
    { role: "Organizing Secretary", org: "Ghanaian Students in Korea and Associates (GHASKA)" },
    { role: "University Representative, University of Seoul", org: "Ghanaian Students in Korea and Associates (GHASKA)" },
    { role: "Leader, Program Planning Team", org: "Ghana Association of Statistics Students, University of Ghana" }
  ],

  extras: [
    { title: "Autonomous vehicle research review: interactive topic model", url: "papermaterials/avreview/", note: "Companion materials for our structural topic modeling study in Transport Policy" }
  ]
};
