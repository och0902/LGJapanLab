const jpn = {
   pageHero : { 
      message: [ '現在、5つの求人情報が公開されています。', '経歴採用4件を含む' ], 
   },
   btn: '募集職種',
   page: {
      desc:  [ 'LG Japan Labでは、自律的でクリエイティブな人材を募集いたします。', 'LGと共に明るい未来を創って行きませんか。' ],
      title : [ '私たちは', '成長ビジョン', '募集職種', '福利厚生', '採用プロセス' ],
   },
   weAre : [
      { 
         policy: 'R&D focused', 
         desc: 'LG Japan Labは、研究開発に特化したR&D組織です。' 
      },
      { 
         policy: 'Best Experts', 
         desc: 'あなたの知識や経験をベースに、関連分野におけるスペシャリストとして成長できるようにサポートします。' 
      },
      { 
         policy: 'Collaborating Globally', 
         desc: '日本、韓国を含む世界の研究開発拠点とコミュニケーション·連携し、研究開発成果を創出しています。' 
      }, 
   ],
   aboutRND : {
      title: '研究開発業務について',
      desc: [
         '研究開発の課題は、LG本社との連携ミッションとLG Japan Lab主体のミッションに大きく分けられ、プロジェクトベースで進行、評価されます。',
         'そのため、国内外(日本、韓国、グローバル)の研究者と緊密にコミュニケーションをとりながら目標を達成して行きます。',
         'また、当社は外部の大学、研究機関、関連企業とのオープンイノベーション活動を積極的に行っております。',
      ]
   },
   videos : [
      { url: '/videos/careers/2023LifesGoodCampaign.mp4', thumbnail: '/images/careers/careers1.jpg', youtube: 'https://youtu.be/8JSOj4a3Sgk?si=RHahkKR1-0GB5TmS'  },
      { url: '/videos/careers/LGTechConference2023.mp4', thumbnail: '/images/careers/careers2.jpg', youtube: 'https://youtu.be/JSlbjf_jYbo?si=G_IBoT4XBZuAp_xK' },
      { url: '/videos/careers/2023LGSPPeople.mp4', thumbnail: '/images/careers/careers3.jpg', youtube: 'https://youtu.be/8PDuQreM1xo?si=y9dIv_RUU5oWChic' },
      { url: '/videos/careers/LG75thAnniversary.mp4', thumbnail: '/images/careers/careers4.jpg', youtube: 'https://youtu.be/gz4hzA7A0RM?si=4_w2xtLfBaS97lzj' },
   ],
   growthPaths : [
      {
         specialties:  [ '研究員', '先任研究員', '責任研究員', '首席研究員' ],
         path: '研究職',
         desc: '自身の経験、知識、能力、成果に応じて、研究者から首席研究者へと成長します。'
      },
      {
         specialties: [ 'Team (Project) Leader', 'Executive' ],
         path: '管理職',
         desc: '基本的にTeam (Project) Leaderが権限を持って人材マネジメントと進捗管理を行います。リーダーシップがあり、個人のビジョンを達成した人材がTeam (Project) Leaderへと成長します。'
      }
   ],
   recruitmentFields : [
      { 
         url: '/images/lgjl/mission&Challenges/electrons.jpg',
         researchArea: '製品技術開発',
         icon: 'electrons',
         contents: [ 
            'Home Appliances : 冷蔵庫、洗濯機、エアコン、空気清浄機など家電機器の核心技術',
            'Home Entertainments : TVの画質改善、ソフトウェア開発、周辺機器評価',
            '量子コンピュータ応用技術',
            '半導体パッケージング技術',
         ],
      },
      { 
         url: '/images/lgjl/mission&Challenges/chemical.jpg',
         researchArea: '材料研究開発',
         icon: 'chemical Information',
         contents: [
            'OLED材料およびディスプレイ用機能材料の開発',
            '充電池の材料および製造プロセスの開発',
            '持続可能性のための技術 (CT: Clean Technology - 水素、Bio Plastic)',
         ],
      },
   ],
   employeesWelfare : [
      { 
         item: '勤務地',
         url: '/images/careers/office.png',
         contents: [
            '横浜 R&D Center (本社 横浜市西区)',
            '京都 R&D Center (京都市下京区)',
         ]
      },
      { 
         item: '勤務時間',
         url: '/images/careers/clock.png',
         contents: [
            '9:00~18:00 (勤務時間 8時間 休憩1時間)',
            '※時差出勤制度 (事前申請制) 有り',
         ]
      },
      { 
         item: '休日・休暇',
         url: '/images/careers/vacation.png',
         contents: [
            '完全週休2日制 (土日祝)',
            '夏季休暇 (5日間)',
            '年末年始 (会社指定日)',
            '特別休暇 (創立記念日、永年勤続、慶弔)',
            '産前・産後休暇・介護休暇',
            '年間休日122日 (2023年度) ※休日日数は年度により異なります。'
         ],
      },
      {      
         item: '給与', 
         url: '/images/careers/payment.png',
         contents: [
            '年俸制・12分割', 
            '経験・能力を考慮の上、当社規程により優遇いたします。' 
         ],
      },
      { 
         item: '福利厚生', 
         url: '/images/careers/benefit.png',
         contents: [
            '自社製品購入補助 (購入金額の50%を補助 ※年間上限金額有り)',
            '自社製品団体社割 (特定家電製品の社割金額による社内販売 ※不定期)',
            '福利厚生クラブ (宿泊施設などを割引きで利用可能)',
            '慶弔見舞金 (結婚、出産、入学など)',
            '永年勤続表彰',
            '産業医面談',
            'ストレスチェック',
            '各種教育研修支援 (階層別、グローバル、外部研修)',
            '展示会/学会/セミナー参加費支援',
            '語学レッスン費用補助 (韓国語 - 対面, 英語 - オンライン)',
            '※テキスト代除く',
            '社内クラブ活動費補助 (登⼭、フットサル、バスケットボール、など)',
            '組織活性化の為の社内懇親会費用支援',
         ],
      },
      { 
         item: '語学',
         url: '/images/careers/language.png',
         contents: [
            `日本語 : ビジネスレベル以上必須 (社内公用語が日本語の為)`,
            '英語 : 論⽂を読めるレベル (必須ではありません。)',
            '韓国語 : 習得意欲がある⽅は⼤歓迎です。',
         ]
      },
   ],
   recruitmentProcess : {
      desc: '面接回数は変更となる場合がございます。最初の面接はオンラインで可能で筆記試験はありませんが、最終面接前にウェブ適性検査を行います。',
      processes: [
         { process: '書類選考', },
         { process: `1次面接`, },
         { process: '本社面接', desc: 'プレゼンテーション' },
         { process: '適性検査', desc: '15分,WEBで実施' },
         { process: '最終面接', desc: 'プレゼンテーション' },
         { process: '内定', },
      ],
   },
};

const eng = {
   pageHero : { 
      message: [ 'Now, 5 Job Postings are Open.', 'including 4 Career Postings' ],
   },
   btn: 'Job Posting',
   page: {
      desc: [ 'LG Japan Lab is', 'recruiting autonomous and creative talents', 'who will create a clear and bright future together.' ],
      title : [ 'We are', 'Growth Path', 'Field of Recruitment', 'Employee Welfare', 'Recruitment Process' ],
   },
   weAre : [
      { 
         policy: 'R&D focused', 
         desc: 'LG Japan Lab carries out intensive research and development activities.' 
      },
      { 
         policy: 'Best Experts', 
         desc: 'We use our major knowledge and experience to grow and develop into the best experts in the field.' 
      },
      { 
         policy: 'Collaborating Globally', 
         desc: 'We communicate and collaborate with R&D bases around the world, including Korea and Japan, to create research and development results.' 
      }, 
   ],   
   aboutRND :  {
      title: 'About research & development works',
      desc: [
         'R&D tasks are largely divided into affiliate tasks and laboratory-specific tasks.',
         'The task is progressed and evaluated on the project base.',
         'We will communicate closely with researchers from inside and outside (Japan, Korea, and Global) to achieve our goals.',
         'We value open innovation activities with universities, research institutes, and affiliates outside.',
      ],
   },
   videos : [
      { url: '/videos/careers/2023LifesGoodCampaign.mp4', thumbnail: '/images/careers/careers1.jpg', youtube: 'https://youtu.be/8JSOj4a3Sgk?si=RHahkKR1-0GB5TmS'  },
      { url: '/videos/careers/LGTechConference2023.mp4', thumbnail: '/images/careers/careers2.jpg', youtube: 'https://youtu.be/JSlbjf_jYbo?si=G_IBoT4XBZuAp_xK' },
      { url: '/videos/careers/2023LGSPPeople.mp4', thumbnail: '/images/careers/careers3.jpg', youtube: 'https://youtu.be/8PDuQreM1xo?si=y9dIv_RUU5oWChic' },
      { url: '/videos/careers/LG75thAnniversary.mp4', thumbnail: '/images/careers/careers4.jpg', youtube: 'https://youtu.be/gz4hzA7A0RM?si=4_w2xtLfBaS97lzj' },
   ],
   growthPaths : [
      {
         specialties: [ 'Researcher', 'Senior Researcher' ],
         path: 'Researcher Position',
         desc: 'Depending on your capabilities, you grow from a researcher to a senior researcher.'
      },
      {
         specialties: [ 'Team (Project) Leader', 'Executive' ],
         path: 'Management Position',
         desc: 'In LG Japan Lab, team (project) leaders basically carry out personnel and budget management with a lot of authority, and talented people who have leadership capabilities and meet their personal vision grow into team (project) leaders.'
      }
   ],
   recruitmentFields : [
      { 
         url: '/images/lgjl/mission&Challenges/electrons.jpg',
         researchArea: 'Product Technology Development',
         icon: 'electrons',
         contents: [ 
            'Home Appliances : Key technologies of home appliances such as refrigerators, washing machines, air conditioners, and air purifierss',
            'Home Entertainments : Picture Quality Improvement, Software Development, Peripheral Device Evaluation for TVs',
            'Quantum Computer Application Technologies',
            'Semiconductor Packaging Technologies',
         ],
      },
      { 
         url: '/images/lgjl/mission&Challenges/chemical.jpg',
         researchArea: 'Material Research & Development',
         icon: 'chemical Information',
         contents: [
            'OLED Materials & Functional Materials Develoment for Displays',
            'Material & Manufacturing Processes Development for Rechargeable Battery',
            'Technologies for Sustainability (CT: Clean Technology - Hydrogen, Bio Plastic)',
         ],
      },
   ],   
   employeesWelfare : [
      { 
         item: 'Place of work',
         url: '/images/careers/office.png',
         contents: [
            'Yokohama R&D Center (Head Office : Nishi Ward, Yokohama City)',
            'Kyoto R&D Center (Shimokyo Ward, Kyoto City)',
         ]
      },
      { 
         item: 'Working hours',
         url: '/images/careers/clock.png',
         contents: [
            '9:00~18:00 (working hours : 8 hours, 1 hour break)',
            '*Core time system (advance application system) available',
         ]
      },
      { 
         item: 'Holidays and vacations',
         url: '/images/careers/vacation.png',
         contents: [
            'Full five-day work week (Saturday, Sunday and Holiday)',
            'Summer vacation (5 days)',
            'Year-end and New Year holidays (company-designated date)',
            'Special leave (anniversary of foundation, long service, congratulations and condolences)',
            'Prenatal and postnatal leave/care leave',
            '124 holidays per year (2022) *The number of holidays varies depending on the year.'
         ],
      },
      {      
         item: 'Salary', 
         url: '/images/careers/payment.png',
         contents: [
            'Annual salary system', 
            'We will give you preferential treatment according to our regulations in consideration of experience and ability.' 
         ],
      },
      { 
         item: 'Benefits', 
         url: '/images/careers/benefit.png',
         contents: [
            'In-house product purchase assistance (50% of the purchase price is subsidized *Annual maximum amount is available)',
            'Company allocation of product groups (Internal sales based on company allocation of specific home appliances *Unscheduled)',
            'Benefits club (You can use accommodation at a discount)',
            'Congratulations and condolence money (marriage, childbirth, admission, etc.)',
            'Commendation for long service',
            'Interview with industrial doctors',
            'Stress check',
            'Support for various types of education and external training',
            'Support for participation fees for exhibitions, academic societies, and seminars',
            'Subsidy for language lessons (Korean (face-to-face) and English (online), Exclude text fee)',
            'Subsidies for club activities in the company (attendance, futsal, basketball, etc.)',
            'Support for in-house social gatherings to revitalize the organization',
         ],
      },
      { 
         item: 'Language',
         url: '/images/careers/language.png',
         contents: [
            `Japanese: Business level or higher is required (because the company's official language is Japanese)`,
            'English: The level at which you can read essays (not required)',
            'Korean: We welcome those who are willing to learn.',
         ]
      },
   ],
   recruitmentProcess : {
      desc: 'The entire process may change depending on the case of two to three interviews. The first interview is available online and there is no written test, but a web aptitude test is conducted before the final interview.',
      processes: [
         { process: 'Document Screening',  },
         { process: `1'st Interview`, },
         { process: `2'nd Interview`, desc: 'with Personal Presentation' },
         { process: 'Apitude Test', desc: 'with 15min Web Test' },
         { process: 'Final Interview', desc: 'with Personal Presentation' },
         { process: 'Decision & Notification', },
      ],
   },
};

const recruitInfo = ( language ) => {
   switch ( language ) {
      case 'Jpn' : return jpn;
      case 'Eng' : return eng;
   };
};

export default recruitInfo;