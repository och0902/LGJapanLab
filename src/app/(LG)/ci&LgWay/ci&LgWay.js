const jpn = {
   page: {
      title: 'Corporate Identity',
      desc: [ 
         '私たちは5つの概念と感情を視覚化した;',
         '世界、未来、若さ、人間、技術の象徴',
         '国民が企業経営の中心を成すことを意味する「L」と「G」の文字が円の中に挿入されています。 ロゴは、世界中のお客様と緊密な関係を維持し、顧客満足のために努力するという同社の誓約を表しています。',
      ],
   },
   pageHero: {
      title: 'LG Way', 
      message: [ `LG WayはLG独自の経営哲学であり、`, `LGの全従業員が守り、実践すべき思考と行動の基盤です。` ],
      desc: `LG Wayは経営理念である'顧客のための価値創造'と'人間尊重の経営'をLGの行動方式である「正道経営」で実践することで、LGのビジョンである「一等LG」を達成しようという事です。`,
   },
   LGWay : [
      {
         item: 'ビジョン',
         desc: 'LGの究極の指向点として市場で認められ、市場をリードする大手企業になること',
      },
      {
         item: '行動方式',
         desc: '倫理経営に基づいて着実に実力を培養して正当に勝負するLGだけの行動方式',
      },
      {
         item: '経営理念',
         desc: '企業の存立根拠であり、会社運営の原則',
      },
   ],
};

const eng = {
   page: {
      title: 'Corporate Identity',
      desc: [ 
         'We have visualized 5 concepts and sentiments;',
         'A symbol of the world, future, youth, human, and technology',
         'The letter L and G are inserted inside the circle signifying that the people form the center of corporate management. The logo represents the company’s pledge to maintain a close relationship with its customers around the world and to strive for customer satisfaction.'
      ],
   },
   pageHero: {
      title: 'LG Way', 
      message: [ `The LG Way is LG's unique management philosophy,`, 'which guides the thoughts and actions of all LG associates.' ],
      desc: `The LG Way aims to achieve LG's vision of "No. 1 LG", by practicing "People-oriented Management", and “Creating Values for Customers” through “Jeong-Do Management”.`,
   },
   LGWay : [
      {
         item: 'Vision',
         desc: 'The ultimate goal of LG is to be recognized as the market leader in business performance as well as in management practices',
      },
      {
         item: 'Behavioral Mode',
         desc: 'Ethical management and code of conduct to enable capability development and fair competition',
      },
      {
         item: 'Management Principles',
         desc: 'The fundamental organizational principle guiding LG from beginning as a firm',
      },
   ],
};

const ciLgWay = ( language ) => {
   switch ( language ) {
      case 'Jpn' : return jpn;
      case 'Eng' : return eng;
   };
};

export default ciLgWay;