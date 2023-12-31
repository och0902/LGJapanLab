import './globals.css';
import localFont from 'next/font/local';
import ContextProvider from '@/context/ContextProvider';
import Navbar from '@/components/ja/Navbar/Navbar';
import Footer from '@/components/ja/Footer/Footer';
import { Box } from '@mui/material';

const local = localFont({ src: './MPLUS1p-Regular.ttf' });

export const metadata = {
   title: 'LG Japan Lab Inc.',
   keyword: `LG, Life's Good, LG Japan Lab, 研究, 開発, R&amp;D, 研究者, 技術,エンジニア, 電子, ディスプレイ, Innotek, 化学, Chem, Energy Solution, 
   材料, 素材, 水素, 冷蔵庫, 洗濯機, 空気清浄機, テレビ, ノートパソコン, モニター, OLEDディスプレイ, カメラモジュール, 半導体基板材料, バッテリー, 二次電池`,
};

export default function RootLayout({ children }) {
   return (
      <html lang='ja'>
         <body className={local.className}>
            <ContextProvider>
               <Box className='globalContainer'>
                  <Navbar />
                  {children}
                  <Footer />
               </Box>
            </ContextProvider>
         </body>
      </html>
   );
};
