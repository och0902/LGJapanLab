import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import SatelliteAltOutlinedIcon from '@mui/icons-material/SatelliteAltOutlined';

import QrCodeIcon from '@mui/icons-material/QrCode';

const products = [
   {  
      category: 'SIGNATURE',
      icon:  <QrCodeIcon variant='h5' />,
      videoclips: [
         { title: 'SIGNATURE', url: '/signature/LG_SIGNATURE_The_Villa@IFA2023.mp4', thumbnail: '/images/products/signature/thumb1.png' },
         { title: 'SIGNATURE', url: '/signature/LG_SIGNATURE_BE_IN_THE_MOMENT@CES2023.mp4', thumbnail: '/images/products/signature/thumb2.png' },
         { title: 'SIGNATURE', url: '/signature/LG_SIGNATURE_in_the_City.mp4', thumbnail: '/images/products/signature/thumb3.jpg' },
         { title: 'SIGNATURE', url: '/signature/2018-12-17_Signature_BrandMovie.mp4', thumbnail: '/images/products/signature/thumb4.jpg' },
      ],
   },
   {  
      category: 'Gram',
      icon:  <QrCodeIcon variant='h5' />,
      videoclips: [         
         { title: 'Gram', url: '/gram/2023LG_gram_Style_Time_to_Shine_with_NewJeans_LG.mp4', thumbnail: '/images/products/gram/thumb1.png' },
         { title: 'Gram', url: '/gram/190121_LG Gram Viral.mp4', thumbnail: '/images/products/gram/thumb2.png' },
         { title: 'Gram', url: '/gram/gram2022_ViralMOV.mp4', thumbnail: '/images/products/gram/thumb3.png' },
         { title: 'Gram', url: '/gram/0125_GRAM_Prime_ED.mp4', thumbnail: '/images/products/gram/thumb4.png' },
      ],
   },
   {  
      category: 'LG OLED',
      icon:  <QrCodeIcon variant='h5' />,
      videoclips: [
         { title: 'LG OLED', url: '/oled/2023_LG_OLED_evo_Why_LG_OLED.mp4', thumbnail: '/images/products/oled/thumb1.png' },
         { title: 'LG OLED', url: '/oled/LG_OLED_ART_FRIEZE_NEW_YORK_2023_Six_N_Five.mp4', thumbnail: '/images/products/oled/thumb2.png' },
         { title: 'LG OLED', url: '/oled/LG_UltraGear_OLED_45GR95QE.mp4', thumbnail: '/images/products/oled/thumb3.png' },
         { title: 'LG OLED', url: '/oled/2018_04_11_TVC_viral_subtitle.mp4', thumbnail: '/images/products/oled/thumb4.png' },
      ],
   },
   {  
      category: 'Puricare',
      icon:  <QrCodeIcon variant='h5' />,
      videoclips: [
         { title: 'Puricare', url: '/puricare/PuriCare™_AeroFurniture×Chocomoo.mp4', thumbnail: '/images/products/puricare/thumb1.png' },
         { title: 'Puricare', url: '/puricare/CES_2023_LG_PuriCare_Aero_Furniture.mp4', thumbnail: '/images/products/puricare/thumb2.png' },
         { title: 'Puricare', url: '/puricare/PuriCare™360_PURIFICATION.mp4', thumbnail: '/images/products/puricare/thumb3.png' },
         { title: 'Puricare', url: '/puricare/PuriCare™360_Full_Version.mp4', thumbnail: '/images/products/puricare/thumb4.png' },
      ],
   },
   {  
      category: 'Styler',
      icon:  <QrCodeIcon variant='h5' />,
      videoclips: [
         { title: 'Styler', url: '/styler/Styler_Wear_it_Love_it_Style_it.mp4', thumbnail: '/images/products/styler/thumb1.png' },
         { title: 'Styler', url: '/styler/Styler_Steam_Closet.mp4', thumbnail: '/images/products/styler/thumb2.png' },
         { title: 'Styler', url: '/styler/Styler_01_16-9.mp4', thumbnail: '/images/products/styler/thumb3.png' },
         { title: 'Styler', url: '/styler/Styler_Blue_Light_Child_Jacket_220728.mp4', thumbnail: '/images/products/styler/thumb4.png' },
      ],
   },
]

export default products;