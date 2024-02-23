import './globals.css';
import { M_PLUS_2 } from 'next/font/google';
import ContextProvider from '@/ContextProvider/ContextProvider';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const mPlus2 = M_PLUS_2({ subsets: ['latin'] });

export const metadata = {
   title: 'LG Japan Lab Inc.',
   description: `LGの日本地域研究開発(R&D)拠点、LG Japan Lab, LG's Research and Development (R&D) Base in Japan, LG Japan Lab`,
   keyword: 
      `LG, Life's Good, LG Japan Lab, 研究, 開発, R&amp;D, 研究者, 技術,エンジニア, 
      電子, ディスプレイ, Innotek, 化学, Chem, Energy Solution, 
      材料, 素材, 水素, 冷蔵庫, 洗濯機, 空気清浄機, テレビ, ノートパソコン, モニター, 
      OLEDディスプレイ, カメラモジュール, 半導体基板材料, バッテリー, 二次電池,
      LG, Life's Good, LG Japan Lab, Research, Development, R&amp;D, Researcher, Technology, Engineer, 
      Electonic, Display, Innotek, Chemical, Chem, Energy Solution, LGE, LGD, LGIT, LGC, LGES,
      Material, Equipment, Hydrogen, Electrolysis, Refrigerator, Washing Machine, Air Purifier, TV, Laptop, Notebook PC, Monitor, OLED Display, 
      Camera Module, Semiconductor Substrate Material, battery, secondary battery`,
   meta: [
      {
         'http-equiv': 'Content-Security-Policy',
         content: 
            `default-src 'self'; img-src https://*; child-src 'none'; frame-ancestors 'self';`,
      },
      {
         name: 'google-site-verification',
         content: '',
      },
   ],
};

export default function RootLayout({ children }) {
   return (
      <html>
         <body className={mPlus2.className}>
            <ContextProvider>
               <div className='globalContainer'>
                  <Navbar />
                  {children}
                  <Footer />
               </div>
            </ContextProvider>
         </body>
      </html>
   );
};
