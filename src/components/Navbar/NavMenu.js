const jpn = [
   {  
      mains: { title: 'LG', url: '' },
      subs: [
         { title: 'LGヒストリー', url: '/lgHistory/0' },
         { title: 'CI & LG Way', url: '/ci&LgWay' }, 
         { title: '系列会社', url: '/affiliated' },
         { title: 'LGプロダクト', url: '/lgProduct' }
      ],
   },
   {  
      mains: { title: 'LG Japan Lab', url: '' },
      subs: [
         { title: 'LG Japan Labヒストリー', url: '/jlHistory' },
         { title: 'Missionと研究開発課題', url: '/mission&Challenges' },
         { title: '重点研究課題', url: '/keyResearch' },
         { title: '会社情報', url: '/aboutUs' },
         { title: '訪問申請', url: '/visitApplication' },
      ],
   },
   {  
      mains: { title: 'Careers', url: '' },
      subs: [
         { title: '採用情報', url: '/recruitInfo' },
         { title: '募集職種', url: '/jobPosting' },
         { title: 'エントリー', url: '/recruitApplication' },
      ],
   },
];

const eng =  [
   {  
      mains: { title: 'LG', url: '' },
      subs: [
         { title: 'LG History', url: '/lgHistory/0' },
         { title: 'CI & LG Way', url: '/ci&LgWay' }, 
         { title: 'Affiliated Companies', url: '/affiliated' },
         { title: 'LG Products', url: '/lgProduct' }
      ],
   },
   {  
      mains: { title: 'LG Japan Lab', url: '' },
      subs: [
         { title: 'LG Japan Lab History', url: '/jlHistory' },
         { title: 'Mission, R&D Challenges', url: '/mission&Challenges' },
         { title: 'Key Research Issue', url: '/keyResearch' },
         { title: 'About Us', url: '/aboutUs' },
         { title: 'Visiting Application', url: '/visitApplication'},
      ],
   },
   {  
      mains: { title: 'Careers', url: '' },
      subs: [
         { title: 'Recruitment Information', url: '/recruitInfo' },
         { title: 'Job Posting', url: '/jobPosting' },
         { title: 'Recruitment Application', url: '/recruitApplication' },
      ],
   },
];


const NavMenu = ( language ) => {
   switch ( language ) {
      case 'Jpn' : return jpn;
      case 'Eng' : return eng;
   };
};

export default NavMenu;