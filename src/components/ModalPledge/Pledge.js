const jpn = {
   title: '訪問者の誓約',
   desc: '(入/退室同意書兼秘密保持誓約)',
   pledges : [
      '本人は、LG Japan Lab株式会社（以下、LG JLという。）に出入りもしくはLG JLにおいて業務を行うにあたり、本書面を提出した日から起算して1年間又は本書面を提出した時から次回訪問時に再度同書面を提出した時のうち、早い時点（LG JLとの業務関係終了後も含む）までに以下の事項を遵守することを誓約します。 併せて、本書面の有効期間経過後でもLGJLが有する法律上の請求権が放棄されるわけではないことを確認します。',
      '1. LGJLの市場情報、経営情報、営業情報、業務上の秘密、製品及び技術情報等とその他の経済的価値を有するすべての情報（以下秘密情報」という。）及び秘密情報を含む各種資料及び記録媒体等をLGJL内で知り、又は提供された場合、LGJLの事前書面承諾なしに第三者に公開又は漏洩、提供することはなく、これをLGJLとの業務以外の目的で使用しません。',
      '2. 入室時の保安検査（携帯電話カメラ封印、PC端子（USB、LANポート等）封印、記録媒体容量確認、PCシリアル番号確認など）及び退室時の保安検査（封印維持確認、USBメモリ容量増加なし確認、手荷物X線検査、身体金属探知機検査等）の実施に同意し、LGJLの秘密保持に協力します。',
      '3. セキュリティ事故が発生したり発生するおそれがあるとLGJLが判断した場合、LGJLの情報セキュリティ主管部署の要請により内容検査(メール送受信履歴など)に同意し、LGJLの秘密保持に協力します。',
      '4. LGJLの秘密情報」が含まれたものまたはLGJLが提供した物品および発注関連文書、書類など一切をLGJLの要請により返却または廃棄し、廃棄に関する証拠書類を提供します。',
      '5. LGJL内では常に出入証(訪問証)を着用し、LGJL関連部署の事前承認なしにLGJL内移動は一切しません。 承認された場所以外の場所に出入りする場合、LGJLの指示に従って直ちに入退室を中止します。6. 本誓約に違反した場合、不正競争防止法及びその他の関連法に基づき、LGJLに対し損害賠償責任を含む民事/刑事上のすべての責任を負います。',
   ],
};

const eng = {
   title: 'Visitor Pledge',
   desc: '(An Entry/Exit & A Confidentiality Agreement)',
   pledges : [
      `I pledge to comply with the following matters from the date of submission to the date of submission of this document for one year or from the time of submission to the earliest time of submission of this document on the next visit (including after the completion of the business relationship with LGJL). In addition, I confirm that LGJL's legal claim is not waived even after the expiration of the validity of this document.`,
      `1. Where LGJL's market information, management information, business information, business secrets, products and technical information, and other data and recording media, including all other information of economic value (hereinafter referred to as "secret information") and confidential information, are known or provided within LGJL, we will not disclose, divulge, or provide it to a third party without prior written consent of LGJL, and we will not use it for any purpose other than our work with LGJL.`,
      `2. We agree to conduct security inspection (sealing cell phone cameras, sealing PC terminals (USB, LAN ports, etc.), checking recording medium capacity, checking PC serial number, etc.) and security inspection (checking seal retention, no increase in USB memory capacity, baggage X-ray, body metal detector inspection, etc.) when leaving, and we will cooperate with LGJL in confidentiality.`,
      `3. If LGJL determines that a security accident may occur or may occur, we will agree to the content inspection (email transmission and reception history, etc.) at the request of LGJL's information security department and cooperate with LGJL's confidentiality.`,
      `4. We will return or discard all items including LGJL's confidential information or LGJL's order-related documents and documents, and provide supporting documents for disposal at LGJL's request.`,
      `5. In LGJL, we will always wear a pass (visit card) and will not move in LGJL without prior approval from the LGJL related department. If we enter a place other than the approved place, we will immediately stop entering/exit according to LGJL's instructions. 6. In case of violating this pledge, in accordance with the Unfair Competition Prevention Act and other relevant laws, we will be responsible for all civil and criminal liability including liability for damages to LGJL.`,
   ],
};

import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';

const Pledge = () => {
   const { language } = useGlobalContext();
   switch ( language ) {
      case 'Jpn' : return jpn;
      case 'Eng' : return eng;
   };
};

export default Pledge;