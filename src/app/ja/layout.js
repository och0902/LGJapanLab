import './globals.css';
import localFont from 'next/font/local';
import ContextProvider from '@/context/ContextProvider';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Box } from '@mui/material';

const local = localFont({ src: './MPLUS1p-Regular.ttf' });

export const metadata = {
   title: 'LG Japan Lab Inc.',
   description: "LG's Research and Development (R&D) Base in Japan, LG Japan Lab",
   keyword: "LG, Life's Good, LG Japan Lab, Research, Development, R&amp;D, Technology, Researcher, Engineer, Electonic, Display, Innotek, Chem, Energy Solution, Hidrogen" 
};

const RootLayout = ({ children }) => {
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

export default RootLayout;