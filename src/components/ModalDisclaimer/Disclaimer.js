const jpn = { 
   title: '免責事項について',
   desc: 'このページは、他の所有者の通知及び著作権情報を含んでいる可能性があります。',
   disclaimers : [
      { 
         title: '著作権', 
         content: 'このサイトの使用者は、個人または非商業的な使用目的の場合にのみサイト上のコンテンツをダウンロードまたはコピー（一回に限る）することが許可されています。また、製品の変更や著作権・商標の悪用等は禁止されています。このサイト上のすべての資料は、合法的な目的の場合にのみ提供されます。このサイトに関する情報は、LG Japan Lab株式会社（以下、「当社」といいます）の書面による承諾がないかぎり、コピー、配布及び商用目的で送信することは禁止されています。当社がこのサイトのダウンロードその他全ての所有権を有します。',
      },
      { 
         title: '当社へのご意見', 
         content: '当社のサイトでは、当社以外の機密情報や当社以外の方が所有権または知的財産権を有する情報は一切受け付けておりません。それでも送られてきたすべての情報もしくは資料は、機密として取り扱われないことをご了承下さい。送られた情報は、当社が使用、再生、表示、実行し、送信する権利があるとみなします。さらに、当社がそのアイディア、コンセプト、ノウハウ、技術などを使用することができるものとみなします。',
      },
      { 
         title: '責任', 
         content: 'このサイトで提供される情報は、そのままの状態で提供されるものであり、明確な表現の有無に関わらず、不可侵の特定の目的に対する適合性、市場性の暗黙の保証などについての一切の責任は負いません。 サイト上の情報は、技術的に不正確な内容または誤字を含んでいる場合があります。当社は、製品及びプログラム情報の説明を予告なく変更したり更新したりする場合があります。また、リンク先に行く場合は、一旦当社のサイト(www.lgjlab.com)の外に出ます。当社では、リンク先のサイトの内容に関しては管理せず、また、リンク先のサイトに関する内容には一切の責任を負いません。',
      },
      { 
         title: '法的棄権', 
         content: '当社のサイトに記載されている内容には、不正確な部分や誤字等が含まれている場合があります。当社は、サイトを通じて表示または配布されたいかなる助言、意見、陳述、あるいはその他の情報、内容の正確性や完全性、あるいは信頼性に関して、弊社では一切の責任は負いませんのでご了承下さい。当社では、サイト上に記載されている製品やプログラム、サービスや価格等の説明を予告なしに変更する場合があります。当社のサイトで提供される情報、素材、ソフトウェアは、陳述、保証、表現、意図の有無に関わらず、そのままの状態で提供されるものであり、市場性、非侵害または特定の目的への適合性について保証するものではありません。',
      },
   ],
};

const eng = {
   title: 'Disclaimer',
   desc: 'This page may contain notifications from other owners and copyright information.',
   disclaimers : [
      { 
         title: 'Copyright', 
         content: 'Users of this site are permitted to download or copy (one time only) content on the site for personal or non-commercial use only. Also, it is prohibited to change the product or abuse copyrights and trademarks.All materials on this site are provided for legitimate purposes only. Information about this site is prohibited from being copied, distributed or sent for commercial purposes without the written consent of LG Japan Lab Inc. ("Company") We own the download and all other rights to this site.',
      },
      { 
         title: 'Opinions about Our Company', 
         content: 'We do not accept any confidential or intellectual property rights other than ours. Please understand that all information or materials sent will not be treated as confidential. The information sent is deemed to be the right of our company to use, play, view, execute and transmit. Furthermore, we assume that our company can use such ideas, concepts, know-how and technology.',
      },
      { 
         title: 'Responsibility', 
         content: 'The information provided on this site is provided as is and will not be held responsible for any unspoken assurance of suitability or marketability for a specific non-aggression purpose, with or without clear representation. The information on the site may contain technical inaccuracies or typographical errors.We may change or update the description of our products and program information without notice. Also, if you want to go to the link, please go out of our website (www.lgjlab.com ). We do not manage the content of the linked site and are not responsible for any content related to the linked site.',
      },
      { 
         title: 'Legal Abstention', 
         content: 'The information on our website may contain inaccuracies, typographical errors, etc. Please note that we are not responsible for the accuracy, completeness or reliability of any advice, opinions, statements or other information, content displayed or distributed through the Site. Our company may change the description of products, programs, services and prices listed on our site without notice. The information, materials and software provided on our site, with or without statements, warranties, representations or intentions, is provided as is and does not guarantee marketability, non-infringement or suitability for a particular purpose.',
      },
   ],
}; 

import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';

const Disclaimer = () => {
   const { language } = useGlobalContext();
   switch ( language ) {
      case 'Jpn' : return jpn;
      case 'Eng' : return eng;
   };
};

export default Disclaimer;