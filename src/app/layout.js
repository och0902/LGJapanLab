import './globals.css';
import { Inter } from 'next/font/google';
import ContextProvider from '@/context/ContextProvider';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Box } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'LG Japan Lab Inc.',
   description: 'LG의 일본지역 연구개발 거점 LG Japan Lab',
};

const RootLayout = ({ children }) => {
   return (
      <html lang='ko'>
         <body className={inter.className}>
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

export default RootLayout;