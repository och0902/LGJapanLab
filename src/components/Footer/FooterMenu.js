const jpn = {
   logo: 'LG Japan Lab Inc.',
   copyright: [ 'Copyright 2024 LG Japan Lab Inc.', 'All Rights Reserved.'],
   menu: [ 'プライバシーポリシー', '免責事項について' ],
   modalBtn: [ 'プライバシーポリシーを閉じる', '免責事項についてを閉じる' ],
};

const eng = {
   logo: 'LG Japan Lab Inc.',
   copyright: [ 'Copyright 2024 LG Japan Lab Inc.', 'All Rights Reserved.'],
   menu: [ 'Privacy Policy', 'Disclaimer' ],
   modalBtn: [ 'Close Privacy Policy', 'Close Disclaimer' ],
};

const FooterMenu = ( language ) => {
   switch ( language ) {
      case 'Jpn' : return jpn;
      case 'Eng' : return eng;
   };
};

export default FooterMenu;