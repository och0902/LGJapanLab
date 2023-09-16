import React from 'react';
import styles from './page.module.css';
import { Box, Divider, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image';

const JLLocation = () => {
   
   return (
		<Box className='pageContainer'>
         <Typography variant='h5'>Location</Typography>
         <Box className={styles.site}>
            <Box sx={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
               <Image src='/images/jlab/ljyokohama.jpg' width={290} height={300} alt='LG Japan Lab yokohama' />
            </Box>
            <Box sx={{ flex: '1' }}>
               <Typography variant='h5'>LG Japan Lab</Typography>
               <Typography variant='h5'>Yokohama R&D Center</Typography>
               <Typography variant='h6' sx={{ mb: 2 }}>(Head Office)</Typography>
               <Typography>LG Yokohama Innoavation Center 7F</Typography>
               <Typography>1-2-13, Takashima, Nishi-ku,</Typography>
               <Typography>Yokohama-shi, Kanagawa 220-0011</Typography>
               <Typography sx={{ mb: 2 }}>+81-45-345-9200</Typography> 
               <Link href='https://goo.gl/maps/mXY743xbUauLgeq28' className={styles.link}>
                  <Typography>SITE Map <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Typography>
               </Link>
               <Link href='https://www.lgyic.com/' className={styles.link}>
                     <Typography>LG YOKOHAMA INNOVATION CENTER <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Typography>
               </Link>
            </Box>
         </Box>
         <Box className={styles.site}>
            <Box sx={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
               <Image src='/images/jlab/ljkyoto.jpg' width={322} height={200} alt='LG Japan Lab yokohama' />
            </Box>
            <Box sx={{ flex: '1' }}>
               <Typography variant='h5'>LG Japan Lab</Typography>
               <Typography variant='h5' sx={{ mb: 2 }}>Kyoto R&D Center</Typography>
               <Typography>KYOTO REASEARCH PARK NO.2-4F</Typography>
               <Typography>134, Chudoji Minami-cho, Shimogyo-ku,</Typography>
               <Typography>Kyoto-shi, Kyoto 600-8813</Typography>
               <Typography sx={{ mb: 2 }}>+81‐75-275-7330</Typography>      
               <Link href='https://goo.gl/maps/K4aRwRyqdkk' className={styles.link}>
                  <Typography>SITE Map <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Typography>
               </Link>
               <Link href='https://www.krp.co.jp/' className={styles.link}>
                  <Typography>KYOTO RESEARCH PARK <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Typography>
               </Link>
            </Box>
         </Box>

         <Typography variant='h5'>Contact</Typography>

      </Box>
   );
};

export default JLLocation;