import QrCodeIcon from '@mui/icons-material/QrCode';

const jpn ={
   pageHero: {
      title: 'LGプロダクト',
      message: "Life's Good",
   },
   products : [
      {  
         category: 'SIGNATURE',
         desc1: 'THE ART OF ESSENCE',
         desc2: 'LG SIGNATURE は、クラフトマンシップ、革新性、信頼性という 3 つの柱に基づいて誕生しました。これらはアートとテクノロジーの調和、アート オブ エッセンスをサポートします。',
         icon:  <QrCodeIcon variant='h5' />,
         videoclips: [
            { title: 'SIGNATURE', url: '/videos/lg/lgProducts/signature/LG_SIGNATURE_The_Villa@IFA2023.mp4', 
               thumbnail: '/images/lg/lgProducts/signature/thumb1.jpg', youtube: 'https://youtu.be/g4U_w-13UJY?si=BT4Fp9QTuPfSkSmA' },
            { title: 'SIGNATURE', url: '/videos/lg/lgProducts/signature/LG_SIGNATURE_BE_IN_THE_MOMENT@CES2023.mp4', 
               thumbnail: '/images/lg/lgProducts/signature/thumb2.jpg', youtube: 'https://youtu.be/Y-xhFvAPl1M?si=k70vemm_v-dI8VLo' },
            { title: 'SIGNATURE', url: '/videos/lg/lgProducts/signature/Into the New LG SIGNATURE in the City.mp4', 
               thumbnail: '/images/lg/lgProducts/signature/thumb3.jpg', youtube: 'https://youtu.be/8T0XQYFElwA?si=OuT481Mq-G0QF1aE' },
            { title: 'SIGNATURE', url: '/videos/lg/lgProducts/signature/LG SIGNATURE - The Art of Essence.mp4', 
               thumbnail: '/images/lg/lgProducts/signature/thumb4.jpg', youtube: 'https://youtu.be/PdqeBSLYH5k?si=w01cypowqTVBDV5d' },
         ],
      },
      {  
         category: 'Gram',
         desc1: `It's your time to shine, LG gram Style.`,
         icon:  <QrCodeIcon variant='h5' />,
         videoclips: [         
            { title: 'Gram', url: '/videos/lg/lgProducts/gram/2023LG_gram_Style_Time_to_Shine_with_NewJeans_LG.mp4', 
               thumbnail: '/images/lg/lgProducts/gram/thumb1.jpg', youtube: 'https://youtu.be/fstWNO120tw?si=KSvKLUtKiEYUUrKB' },
            { title: 'Gram', url: '/videos/lg/lgProducts/gram/190121_LG Gram Viral.mp4', 
               thumbnail: '/images/lg/lgProducts/gram/thumb2.jpg', youtube: 'https://youtu.be/HBpTOjitShA?si=PLXk3twf9ffju9xy' },
            { title: 'Gram', url: '/videos/lg/lgProducts/gram/gram2022_ViralMOV.mp4', 
               thumbnail: '/images/lg/lgProducts/gram/thumb3.jpg', youtube: 'https://youtu.be/fstWNO120tw?si=KSvKLUtKiEYUUrKB' },
            { title: 'Gram', url: '/videos/lg/lgProducts/gram/0125_GRAM_Prime_ED.mp4', 
               thumbnail: '/images/lg/lgProducts/gram/thumb4.jpg', youtube: 'https://youtu.be/vVRjsb3fWwI?si=hgUCdwoMl1xstlu2' },
         ],
      },
      {  
         category: 'LG OLED',
         desc1: `10 YEARS | WORLD'S NO.1 OLED TV`,
         icon:  <QrCodeIcon variant='h5' />,
         videoclips: [
            { title: 'LG OLED', url: '/videos/lg/lgProducts/oled/2023_LG_OLED_evo_Why_LG_OLED.mp4', 
               thumbnail: '/images/lg/lgProducts/oled/thumb1.jpg', youtube: 'https://youtu.be/eLGbP2G2HHY?si=hfFTqC8fOOdc02ZQ' },
            { title: 'LG OLED', url: '/videos/lg/lgProducts/oled/LG_OLED_ART_FRIEZE_NEW_YORK_2023_Six_N_Five.mp4', 
               thumbnail: '/images/lg/lgProducts/oled/thumb2.jpg', youtube: 'https://youtu.be/WzQwyPZLZpU?si=Ez86Yib4bQ4vRa_X' },
            { title: 'LG OLED', url: '/videos/lg/lgProducts/oled/LG_UltraGear_OLED_45GR95QE.mp4', 
               thumbnail: '/images/lg/lgProducts/oled/thumb3.jpg', youtube: 'https://youtu.be/0qEaSNqGt_c?si=BMl7FLpqdIvPLuk0' },
            { title: 'LG OLED', url: '/videos/lg/lgProducts/oled/2021 From LG.mp4', 
               thumbnail: '/images/lg/lgProducts/oled/thumb4.jpg', youtube: 'https://youtu.be/SNiT7U1oGjE?si=3R_nPKkq_vJQ46pz' },
         ],
      },
      {  
         category: 'Puricare',
         desc1: 'Get fresher air every day',
         desc2: 'スタイリッシュな空気清浄機は、静かにほこりやペットのフケなどのアレルゲンをしっかりキャッチ、一年中きれいな空気が貴方と共にします。',
         icon:  <QrCodeIcon variant='h5' />,
         videoclips: [
            { title: 'Puricare', url: '/videos/lg/lgProducts/puricare/PuriCare™_AeroFurniture×Chocomoo.mp4', 
               thumbnail: '/images/lg/lgProducts/puricare/thumb1.jpg', youtube: 'https://youtu.be/z6T-fKqUMTE?si=-X4dUWKXqHeoM51h' },
            { title: 'Puricare', url: '/videos/lg/lgProducts/puricare/CES_2023_LG_PuriCare_Aero_Furniture.mp4', 
               thumbnail: '/images/lg/lgProducts/puricare/thumb2.jpg', youtube: 'https://youtu.be/ooq-JrkvrUc?si=UMe9z1StFU_mMZSK' },
            { title: 'Puricare', url: '/videos/lg/lgProducts/puricare/PuriCare™360_PURIFICATION.mp4', 
               thumbnail: '/images/lg/lgProducts/puricare/thumb3.jpg', youtube: 'https://youtu.be/nMBfDfTmRAY?si=e5Cm7c8Xs5pezSP6' },
            { title: 'Puricare', url: '/videos/lg/lgProducts/puricare/PuriCare™360_Full_Version.mp4', 
               thumbnail: '/images/lg/lgProducts/puricare/thumb4.jpg', youtube: 'https://youtu.be/i_NqSfN4hc0?si=_hX3SqgWAAZd2k7d' },
         ],
      },
      {  
         category: 'Styler',
         desc1: 'Keep things clean with steam, Not chemicals',
         desc2: '漂白剤、石鹸、その他の強力な化学物質を使用せずに、花粉、ペットのフケ、ほこりなどの空気中のアレルゲンを除去します。',
         icon:  <QrCodeIcon variant='h5' />,
         videoclips: [
            { title: 'Styler', url: '/videos/lg/lgProducts/styler/Styler_Wear_it_Love_it_Style_it.mp4', 
               thumbnail: '/images/lg/lgProducts/styler/thumb1.jpg', youtube: 'https://youtu.be/urM4U2gl2H8?si=xDwYi3N-VJxmrrMW' },
            { title: 'Styler', url: '/videos/lg/lgProducts/styler/LG Styler_pollen_care.mp4', 
               thumbnail: '/images/lg/lgProducts/styler/thumb3.jpg', youtube: 'https://youtu.be/ZaJSKx2-nps?si=Dz-jrK_Bldushnkq' },
            { title: 'Styler', url: '/videos/lg/lgProducts/styler/Styler_Steam_Closet.mp4', 
               thumbnail: '/images/lg/lgProducts/styler/thumb2.jpg', youtube: 'https://youtu.be/SDwl0bHaPIQ?si=gKeWISqqmrtRo9u1' },
            { title: 'Styler', url: '/videos/lg/lgProducts/styler/LG styler_uniform_care.mp4', 
               thumbnail: '/images/lg/lgProducts/styler/thumb4.jpg', youtube: 'https://youtu.be/YUbAKcrZFTo?si=wcHpICuHzoAf75Ke' },
         ],
      },
   ],
};

const eng = {
   pageHero: {
      title: 'LG Products',
      message: "Life's Good",
   },
   products : [
      {  
         category: 'SIGNATURE',
         desc1: 'THE ART OF ESSENCE',
         desc2: 'LG SIGNATURE was founded on three pillars: craftsmanship, innovation, and authenticity. These support the Art of Essence, the harmony of art and technology.',
         icon:  <QrCodeIcon variant='h5' />,
         videoclips: [
            { title: 'SIGNATURE', url: '', 
               thumbnail: '/images/lg/lgProducts/signature/thumb1.jpg', youtube: 'https://youtu.be/gp4ZbD2uE0Y?si=2vu3zZM6fT4LXQU7' },
            { title: 'SIGNATURE', url: '/videos/lg/lgProducts/signature/LG_SIGNATURE_The_Villa@IFA2023.mp4', 
               thumbnail: '/images/lg/lgProducts/signature/thumb2.jpg', youtube: 'https://youtu.be/g4U_w-13UJY?si=BT4Fp9QTuPfSkSmA' },
            { title: 'SIGNATURE', url: '/videos/lg/lgProducts/signature/LG_SIGNATURE_BE_IN_THE_MOMENT@CES2023.mp4', 
               thumbnail: '/images/lg/lgProducts/signature/thumb3.jpg', youtube: 'https://youtu.be/Y-xhFvAPl1M?si=k70vemm_v-dI8VLo' },
            { title: 'SIGNATURE', url: '/videos/lg/lgProducts/signature/LG SIGNATURE - The Art of Essence.mp4', 
               thumbnail: '/images/lg/lgProducts/signature/thumb4.jpg', youtube: 'https://youtu.be/PdqeBSLYH5k?si=w01cypowqTVBDV5d' },
         ],
      },
      {  
         category: 'Gram',
         desc1: `It's your time to shine, LG gram Style.`,
         icon:  <QrCodeIcon variant='h5' />,
         videoclips: [         
            { title: 'Gram', url: '/videos/lg/lgProducts/gram/2023LG_gram_Style_Time_to_Shine_with_NewJeans_LG.mp4', 
               thumbnail: '/images/lg/lgProducts/gram/thumb1.jpg', youtube: 'https://youtu.be/fstWNO120tw?si=KSvKLUtKiEYUUrKB' },
            { title: 'Gram', url: '/videos/lg/lgProducts/gram/190121_LG Gram Viral.mp4', 
               thumbnail: '/images/lg/lgProducts/gram/thumb2.jpg', youtube: 'https://youtu.be/HBpTOjitShA?si=PLXk3twf9ffju9xy' },
            { title: 'Gram', url: '/videos/lg/lgProducts/gram/gram2022_ViralMOV.mp4', 
               thumbnail: '/images/lg/lgProducts/gram/thumb3.jpg', youtube: 'https://youtu.be/fstWNO120tw?si=KSvKLUtKiEYUUrKB' },
            { title: 'Gram', url: '/videos/lg/lgProducts/gram/0125_GRAM_Prime_ED.mp4', 
               thumbnail: '/images/lg/lgProducts/gram/thumb4.jpg', youtube: 'https://youtu.be/vVRjsb3fWwI?si=hgUCdwoMl1xstlu2' },
         ],
      },
      {  
         category: 'LG OLED',
         desc1: `10 YEARS | WORLD'S NO.1 OLED TV`,
         icon:  <QrCodeIcon variant='h5' />,
         videoclips: [
            { title: 'LG OLED', url: '/videos/lg/lgProducts/oled/2023_LG_OLED_evo_Why_LG_OLED.mp4', 
               thumbnail: '/images/lg/lgProducts/oled/thumb1.jpg', youtube: 'https://youtu.be/eLGbP2G2HHY?si=hfFTqC8fOOdc02ZQ' },
            { title: 'LG OLED', url: '/videos/lg/lgProducts/oled/LG_OLED_ART_FRIEZE_NEW_YORK_2023_Six_N_Five.mp4', 
               thumbnail: '/images/lg/lgProducts/oled/thumb2.jpg', youtube: 'https://youtu.be/WzQwyPZLZpU?si=Ez86Yib4bQ4vRa_X' },
            { title: 'LG OLED', url: '/videos/lg/lgProducts/oled/LG_UltraGear_OLED_45GR95QE.mp4', 
               thumbnail: '/images/lg/lgProducts/oled/thumb3.jpg', youtube: 'https://youtu.be/0qEaSNqGt_c?si=BMl7FLpqdIvPLuk0' },
            { title: 'LG OLED', url: '/videos/lg/lgProducts/oled/2021 From LG.mp4', 
               thumbnail: '/images/lg/lgProducts/oled/thumb4.jpg', youtube: 'https://youtu.be/SNiT7U1oGjE?si=3R_nPKkq_vJQ46pz' },
         ],
      },
      {  
         category: 'Puricare',
         desc1: 'Get fresher air every day',
         desc2: 'Our stylish air purifiers capture dust and allergens like pet dander with a quiet filtration process so you and your family breathe cleaner air all year round.',
         icon:  <QrCodeIcon variant='h5' />,
         videoclips: [
            { title: 'Puricare', url: '/videos/lg/lgProducts/puricare/PuriCare™_AeroFurniture×Chocomoo.mp4', 
               thumbnail: '/images/lg/lgProducts/puricare/thumb1.jpg', youtube: 'https://youtu.be/z6T-fKqUMTE?si=-X4dUWKXqHeoM51h' },
            { title: 'Puricare', url: '/videos/lg/lgProducts/puricare/CES_2023_LG_PuriCare_Aero_Furniture.mp4', 
               thumbnail: '/images/lg/lgProducts/puricare/thumb2.jpg', youtube: 'https://youtu.be/ooq-JrkvrUc?si=UMe9z1StFU_mMZSK' },
            { title: 'Puricare', url: '/videos/lg/lgProducts/puricare/PuriCare™360_PURIFICATION.mp4', 
               thumbnail: '/images/lg/lgProducts/puricare/thumb3.jpg', youtube: 'https://youtu.be/nMBfDfTmRAY?si=e5Cm7c8Xs5pezSP6' },
            { title: 'Puricare', url: '/videos/lg/lgProducts/puricare/PuriCare™360_Full_Version.mp4', 
               thumbnail: '/images/lg/lgProducts/puricare/thumb4.jpg', youtube: 'https://youtu.be/i_NqSfN4hc0?si=_hX3SqgWAAZd2k7d' },
         ],
      },
      {  
         category: 'Styler',
         desc1: 'Keep things clean with steam, Not chemicals',
         desc2: 'Help Remove airborne allergens like pollen, pet dander and dust without bleach, soaps or other harsh chemicals.',
         icon:  <QrCodeIcon variant='h5' />,
         videoclips: [
            { title: 'Styler', url: '/videos/lg/lgProducts/styler/Styler_Wear_it_Love_it_Style_it.mp4', 
               thumbnail: '/images/lg/lgProducts/styler/thumb1.jpg', youtube: 'https://youtu.be/urM4U2gl2H8?si=xDwYi3N-VJxmrrMW' },
            { title: 'Styler', url: '/videos/lg/lgProducts/styler/LG Styler_pollen_care.mp4', 
               thumbnail: '/images/lg/lgProducts/styler/thumb3.jpg', youtube: 'https://youtu.be/ZaJSKx2-nps?si=Dz-jrK_Bldushnkq' },
            { title: 'Styler', url: '/videos/lg/lgProducts/styler/Styler_Steam_Closet.mp4', 
               thumbnail: '/images/lg/lgProducts/styler/thumb2.jpg', youtube: 'https://youtu.be/SDwl0bHaPIQ?si=gKeWISqqmrtRo9u1' },
            { title: 'Styler', url: '/videos/lg/lgProducts/styler/LG styler_uniform_care.mp4', 
               thumbnail: '/images/lg/lgProducts/styler/thumb4.jpg', youtube: 'https://youtu.be/YUbAKcrZFTo?si=wcHpICuHzoAf75Ke' },
         ],
      },
   ],
};


const lgProducts = ( language ) => {
   switch ( language ) {
      case 'Jpn' : return jpn;
      case 'Eng' : return eng;
   };
};

export default lgProducts;