'use client';

import React from 'react';
import styles from './page.module.css';
import { Box, Divider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';


const LGWay = () => {

   const theme = useTheme();

   return (
      <Box className='pageContainer'>
         <Box className={styles.lgciContainer}>
            <Box sx={{ textAlign: 'center' }}>
               <Typography variant='h5' sx={{ mb: '2dvh' }}>Corporate Identity</Typography>
               <Typography variant='h6'>A symbol of the world, future, youth, human, and technology</Typography>
            </Box>
            <Image src='/images/lg/lgci&lgway/lgci.jpg' width={340} height={149} alt='LG CI' />
            <Box sx={{ mb: '5dvh', textAlign: 'center' }}>
               {/* <Typography variant='h6' sx={{ mb: '2vh' }}>The Meaning of LG Logo</Typography> */}
               <Typography variant='subtitle1' sx={{ }}>We have visualized 5 concepts and sentiments; 
                  World, Future, Youth, Human, and Technology. The letter L and G are inserted inside the circle signifying 
                  that the people form the center of corporate management. The logo represents the company’s pledge 
                  to maintain a close relationship with its customers around the world and to strive for customer satisfaction.</Typography>
            </Box>
         </Box>
         <Box className={styles.lgwayContainer}>
            <Box sx={{ textAlign: 'center' }}>
               <Typography variant='h5' sx={{ mb: '2dvh' }}>LG Way</Typography>
               <Typography variant='h6'>The LG Way is LG&apos;s unique management philosophy, which guides the thoughts and actions of all LG associates.</Typography>
            </Box>
            <Box sx={{ position: 'initial', [theme.breakpoints.up('md')] : { width: '100%', position: 'relative' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', gap: '20px' }}>
               <Box sx={{ position: 'initial', [theme.breakpoints.up('md')] : { position: 'absolute', left: '50%', transform: 'translate(-60%)' }, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <Image src='/images/lg/lgci&lgway/lgway01_en.jpg' width={500} height={157} alt='LG Way' />
                  <Image src='/images/lg/lgci&lgway/lgway02_en.jpg' width={500} height={130} alt='LG Way' />
                  <Image src='/images/lg/lgci&lgway/lgway03_en.jpg' width={500} height={130} alt='LG Way'/>
                  {/* <Image src='/images/lg/lgci&lgway/lgway01_en.jpg' width={400} height={125} alt='LG Way' />
                  <Image src='/images/lg/lgci&lgway/lgway02_en.jpg' width={400} height={104} alt='LG Way' />
                  <Image src='/images/lg/lgci&lgway/lgway03_en.jpg' width={400} height={103} alt='LG Way'/>  */}
               </Box>
               <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', [theme.breakpoints.up('lg')] : { p: '0 10%' } , gap: '5px' }}>
                  <Box sx={{ width: '100%', height: '157px', display: 'flex', justifyContent: 'center', [theme.breakpoints.up('md')] : { justifyContent: 'space-between' }, alignItems: 'center', gap: '10px' }}>
                     <Typography variant='h6' sx={{ width: '130px', textAlign: 'center' }}>Vision</Typography>
                     <Typography sx={{ width: '220px' }}>The ultimate goal of LG is to be recognized as the market leader in business performance as well as in management practices</Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ width: '100%', height: '130px', display: 'flex', justifyContent: 'center', [theme.breakpoints.up('md')] : { justifyContent: 'space-between' }, alignItems: 'center', gap: '10px' }}>
                     <Typography variant='h6' sx={{ width: '130px', textAlign: 'center' }}>Behavioral Mode</Typography>       
                     <Typography sx={{ width: '220px' }}>Ethical management and code of conduct to enable capability development and fair competition</Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ width: '100%', height: '130px', display: 'flex', justifyContent: 'center', [theme.breakpoints.up('md')] : { justifyContent: 'space-between' }, alignItems: 'center', gap: '10px' }}>
                     <Typography variant='h6' sx={{ width: '130px', textAlign: 'center' }}>Management Principles</Typography>
                     <Typography sx={{ width: '220px' }}>The fundamental organizational principle guiding LG from beginning as a firm</Typography>
               </Box>
            </Box>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
               <Typography variant='subtitle1'>The LG Way aims to achieve LG&apos;s vision of &quot;No. 1 LG&quot;, by practicing &quot;People-oriented Management&quot;, and “Creating Values for Customers” through “Jeong-Do Management”.</Typography>
            </Box>
         </Box>
      </Box>
   );
};

export default LGWay;