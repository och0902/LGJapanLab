import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { ThemeContextProvider } from '@/context/ThemeContextProvider';
import AuthProvider from '@/context/AuthProvider';
import ToasterContextProvider from '@/context/ToasterContextProvider';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'LG Japan Lab Inc.',
   description: 'LG의 일본지역 연구거점 LG Japan Lab',
};

export default function RootLayout({ children }) {
   return (
      <html lang='ko'>
         {/* <Head>
            <link rel="stylesheet" href="https://lgsmartworld.com/lgfont/lgsmartfont.css"/> 
         </Head> */}
         <body className={inter.className}>
            <ThemeContextProvider>
               <AuthProvider>
                  <ToasterContextProvider />
                  <div className='container'>
                     <Navbar />
                     {children}
                     <Footer />
                  </div>
               </AuthProvider>
            </ThemeContextProvider>
         </body>
      </html>
   );
};
