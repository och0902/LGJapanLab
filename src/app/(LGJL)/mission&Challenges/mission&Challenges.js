const jpn = {
   pageHero: {
      title: 'Missionと研究開発課題'
   },
   page: {
      title: [ 'Mission Statement', '研究開発課題', 'オープンイノベーション' ],
      desc: [ 
         `日本の強み技術(素材/部品など)を早期センシングして、早い検証および技術確保を通じ、系列社事業競争力向上と未来準備を主導する。`,
         `LGの事業領域に合わせて電子·化学分野の研究開発を進め、製品技術開発から素材研究まで多様な活動を展開しています。 特に未来に備えるためにクリーン技術分野に多くの努力を傾けており、水素技術を主要研究分野として選定し育成しています。`,
         `LGグループは1995年からグローバル主要拠点に有望技術のオープンイノベーション専担組織である「技術センター」を設立·運営している。 2018年にLG Technology Ventures(CVC)を設立して北米のスタートアップに投資した後、 2019年には日本にも技術センタージャパン(TCJ)を設立し、有望企業との事業協力と投資力量を拡大した。`,
      ],
      subTitle: 'Technology Center Japan',
      subDesc: `(TCJ, オープンイノベーションに専念する組織)`,
   },
   RNDFields: [
      {
         field: '電子分野',
         icon: '/images/lgjl/mission&Challenges/electrons.jpg',
         roles: [
            {
               main: '日本市場向け製品技術開発',
               sub: [
                  { category: 'Home Appliances :', desc: '洗濯機、冷蔵庫、エアコン、空気清浄機等の技術開発', },
                  { category: 'Home Entertainments :', desc: 'テレビの画質改善、ソフトウェア開発、周辺機器評価', }
               ],
            },
            {  main: '量子コンピュータ応用', sub: [], },
            {  main: 'OLED材料およびディスプレイ用機能材料の開発', sub: [], },
            {  main: 'Camera Moduleの光学設計技術', sub: [], },
            {  main: '半導体パッケージング技術', sub: [], },
         ],
      },
      {
         field: '化学分野',
         icon: '/images/lgjl/mission&Challenges/chemical.jpg',
         roles: [
            {  main: '充電池の材料および製造プロセスの開発', sub: [], },
            {
               main: '持続可能性のための技術 (CT : Clean Technology)',
               sub: [
                  { category: '', desc: 'Bio-based, Recycled', },
                  { category: '', desc: '特に水素技術に力を入れています。', }
               ],
            },
            {  main: 'Material Informatics (MI) を活用した材料設計技術', sub: [], },
         ],
      },
   ],
   openInnovations: [
      {
         title: '主な役割',
         titleDesc: '',
         roles: [
            'LG系列会社の事業領域に対するオープンイノベーション活動の実施',
            '投資機会を特定し、有望なスタートアップのための協力モデルを構築する。（特に素材·部品事業分野）',
            'J/V、M&A、株式投資、共同開発、ライセンシング、ネットワーキングなど多様なパートナーシップ。',
         ],
      },
      {
         title: '主な関心分野',
         titleDesc: '(材料及び部品 等)',
         roles: [
            'EVバッテリー : シリコン陰極材、銅箔、安全関連材料(放熱など)、品質検査装備及び次世代材料開発、Licensing、Networkingなど。',
            '持続可能性 : 水素、環境にやさしい材料（バイオプラスチックなど）改質剤および加工装置、CCUS、発酵原料など',
            'IT部品 :カメラモジュール、次世代ディスプレイ、XR、電子部品、半導体材料など',

         ],
      },
      {
         title: '業績',
         titleDesc: '(コラボレーション事例)',
         roles: [
            '投資 : バイオワーク（エコモディファイヤ株式投資）、KELP（マイクロバイオーム研究所J/V）、GINZA STEFANY/EVERMERE（化粧品関連M&A）、ソフトバンクベンチャーズアジア（LP投資）',
            '※ 終了案件 : 燃焼合成糸（無機材料）、FJ複合材（放熱材料）',
            '事業展開 : MI-6（材料情報学）、クロスコンパス（スマートファクトリー）、Qbit Robotics（商用ロボティクス）、Qunasys（量子コンピューティング）等',
         ],
      },
   ],
};

const eng = {
   pageHero: {
      title: 'Mission, R&D Challenges'
   },
   page: {
      title: [ 'Mission Statement', 'R&D Fields', 'Open Innovation' ],
      desc: [ 
         `Through early detection, verification and securing of Japan's strengths in technology (materials/parts, etc.), LG Japan Laboratory will contribute the improvement of business competitiveness and competence preparation for the future of LG affiliated companies.`,
         `LGの事In line with LG's business areas, we are conducting research and development in the electronics and chemical fields, and are engaged in a variety of activities ranging from product technology development to materials research. In particular, we are concentrating a lot of effort on the clean technology field to prepare for the future, and we have selected and are cultivating hydrogen technology as our main research field.`,
         `Since 1995, LG Group has established and operated the Technology Center, a dedicated organization for open innovation of promising technologies in major global bases. Since establishing LG Technology Ventures (CVC) to invest in startups in North America in 2018, it has also created a Technology Center Japan (TCJ) in Japan in 2019 to expand business cooperation and investment capabilities with promising companies.`,
      ],
      subTitle: 'Technology Center Japan',
      subDesc: `(TCJ, Organization dedicated to Open Innovation)`,
   },
   RNDFields: [
      {
         field: 'Electronics Field',
         icon: '/images/lgjl/mission&Challenges/electrons.jpg',
         roles: [
            {
               main: 'Product Technology Development for Japan Market',
               sub: [
                  { category: 'Home Appliances :', desc: 'Technologies Development for Washing Machines, Refrigerators, Air Conditioners, Air Purifiers, etc.', },
                  { category: 'Home Entertainments :', desc: 'Picture Quality Improvement, Software Development, and Peripheral Device Evaluation for TVs', }
               ],
            },
            {  main: 'Quantum Computer Application', sub: [], },
            {  main: 'OLED Materials & Functional Materials Develoment for Displays', sub: [], },
            {  main: 'Optical Design Technologies for Camera Module', sub: [], },
            {  main: 'Semiconductor Packaging Technologies', sub: [], },
         ],
      },
      {
         field: 'Chemical Field',
         icon: '/images/lgjl/mission&Challenges/chemical.jpg',
         roles: [
            {  main: 'Material & Manufacturing Processes Development for Rechargeable Battery', sub: [], },
            {
               main: 'Technologies for Sustainability (CT: Clean Technology)',
               sub: [
                  { category: '', desc: 'Bio-based, Recycled', },
                  { category: '', desc: 'In particular, we are focusing on hydrogen technology.', }
               ],
            },
            {  main: 'Material Design Technologies using Material Informatics', sub: [], },
         ],
      },
   ],
   openInnovations: [
      {
         title: 'Key Roles',
         titleDesc: '',
         roles: [
            `Performing open innovation activities for LG affiliates' business areas`,
            `Identify investment opportunities and build cooperative models for promising start-ups (especially in materials and parts business areas)`,
            `Various partnerships such as J/V, M&A, Equity investment, Joint development, Licensing, Networking, etc.`,
         ],
      },
      {
         title: 'Key areas of Interest',
         titleDesc: '(Materials and Components, etc.)',
         roles: [
            `EV Battery : Silicon cathode material, copper foil, safety-related materials (heat dissipation, etc.), quality inspection equipment, and next-generation materials`,
            `Sustainability: Hydrogen, eco-friendly materials (such as bioplastic) modifiers and processing equipment, CCUS, fermented raw materials, etc`,
            `IT Parts: Camera Module, Next Generation Display, XR, Electronic Components, Semiconductor Materials, etc`,

         ],
      },
      {
         title: 'Achievements',
         titleDesc: '(Collaboration Cases)',
         roles: [
            `Investment : Biowork (Eco-friendly Modifier Equity Investment), KELP (Microbiome Research Institute J/V), GINZA STEFANY/EVERMERE (Cosmetics Related M&A), SoftBank Ventures Asia (LP Investment)`,
            `*Exit agenda : Combustion synthetic yarn (inorganic material), FJ composite (heat dissipation material)`,
            `Business development : MI-6 (Materials Informatics), Cross Compass (Smart Factory), Qbit Robotics (Commercial Robotics), Qunasys (Quantum Computing), etc`,
         ],
      },
   ],
};


const missionChallenges = ( language ) => {
   switch ( language ) {
      case 'Jpn' : return jpn;
      case 'Eng' : return eng;
   };
};

export default missionChallenges;