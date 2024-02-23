const jpn = {
   pageHero: { title: '会社情報', },
   page: { title : [ '基本情報', 'ロケーション' ], },
   companyInfos : [
      { item: '会社名', contents: ['LG Japan Lab 株式会社'], },
      { item: '代表取締役', contents: ['吳 彰浩'], },
      { item: '設立', contents: ['2010年(平成22年) 9月1日'], },
      { item: 'ビジネス領域', 
         contents: [ 
            '1. 電子・電気、化学、通信・サービス分野等の技術開発及び研究',
            '2. 前号に付帯する一切の事業',
         ],
      },
      { item: '資本金',  contents: ['3億円'], }
   ],
   locations : [
      { 
         office: 'LG Japan Lab Yokohama R&D Center', 
         officeDesc: '(本社)',
         postalCode: '〒220-0011',
         address1: '神奈川県横浜市西区高島 1-2-13',
         address2: 'LG Yokohama Innoavation Center 7階',
         address3: '',
         tel: '045-345-9200(代表)',
         buildingUrl: 'https://www.lgyic.com/',
         buildingName: 'LG YOKOHAMA INNOVATION CENTER',
         map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3249.7372818138992!2d139.6251617!3d35.461298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d93583224a9%3A0xd4ce9aa5d85bfd19!2sLG%20YOKOHAMA%20INNOVATION%20CENTER!5e0!3m2!1sja!2sjp!4v1702962894764!5m2!1sja!2sjp' 
      },
      { 
         office: 'LG Japan Lab Kyoto R&D Center',
         officeDesc: '',
         postalCode: '〒600-8813',
         address1: '京都府京都市下京区中堂寺南町134番地',
         address2: '京都リサーチパーク2号館4階',
         address3: '',
         tel: '075-275-7330(代表)',
         buildingUrl: 'https://www.krp.co.jp/',
         buildingName: 'KYOTO RESEARCH PARK',
         map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.465099190792!2d135.7401799!3d34.9950608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001063b9e415a03%3A0x865e9af3d603c9bc!2z5pel5pys44CB44CSNjAwLTg4MTMg5Lqs6YO95bqc5Lqs6YO95biC5LiL5Lqs5Yy65Lit5aCC5a-65Y2X55S677yR77yT77yU!5e0!3m2!1sja!2s!4v1702962432264!5m2!1sja!2s' 
      },
   ]
};

const eng = {
   pageHero: { title: 'About Us', },
   page: { title : [ 'Information', 'Location' ], },
   companyInfos : [
      { item: 'Company Name', contents: ['LG Japan Lab Inc.'], },
      { item: 'Company Representative', contents: ['OH Chang Ho'], },
      { item: 'Establish', contents: ['September 1, 2010'], },
      { item: 'Business Area', 
         contents: [ 
            '1. Technology development and research in the fields of electronics, electricity, chemistry, communications and services, etc',
            '2. Any business incidental to the previous issue',
         ],
      },
      { item: 'Capital',  contents: ['300 Million Yen'], }
   ],
   locations : [
      { 
         office: 'LG Japan Lab Yokohama R&D Center', 
         officeDesc: '(Head Office)',
         postalCode: '220-0011',
         address1: 'LG Yokohama Innoavation Center 7F',
         address2: '1-2-13, Takashima, Nishi Ward,',
         address3: 'Yokohama City, Kanagawa, Japan',
         tel: '+81-45-345-9200',
         buildingUrl: 'https://www.lgyic.com/',
         buildingName: 'LG YOKOHAMA INNOVATION CENTER',
         map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3249.7372818138992!2d139.6251617!3d35.461298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d93583224a9%3A0xd4ce9aa5d85bfd19!2sLG%20Yokohama%20Innovation%20Center!5e0!3m2!1sen!2sjp!4v1696460865863!5m2!1sen!2sjp'
      },
      { 
         office: 'LG Japan Lab Kyoto R&D Center',
         officeDesc: '',
         postalCode: '600-8813',
         address1: 'Kyoto Research Park No.2-4F',
         address2: '134, Chudoji Minami-cho, Shimogyo Ward,',
         address3: 'Kyoto City, Kyoto, Japan',
         tel: '+81‐75-275-7330',
         buildingUrl: 'https://www.krp.co.jp/',
         buildingName: 'KYOTO RESEARCH PARK',
         map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.465099190792!2d135.7401799!3d34.9950608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001063b9e415a03%3A0x865e9af3d603c9bc!2s134%20Ch%C5%ABd%C5%8Dji%20Minamimachi%2C%20Shimogyo%20Ward%2C%20Kyoto%2C%20600-8813%2C%20Japan!5e0!3m2!1sen!2s!4v1696460947106!5m2!1sen!2s'
      },
   ],
};

const aboutUs = ( language ) => {
   switch ( language ) {
      case 'Jpn' : return jpn;
      case 'Eng' : return eng;
   };
};

export default aboutUs;