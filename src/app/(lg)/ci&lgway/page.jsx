'use client';

import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import PageHero from '@/components/PageHero/PageHero';

const LGWay = () => {

   const theme = useTheme();

   return (
      <Box className='pageContainer'>

         <Box sx={{ width: '100%', m: 'var(--gap-basic) auto', display: 'flex', flexDirection: 'column', 
            justifyContent: 'center', alignItems: 'center', gap: 'calc( var(--gap-basic)/2 )' }}>
            <Image src='/images/lg/ci&lgway/lgci.jpg' width={340} height={149} loading='lazy' alt='LG CI' />
            <Box sx={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
               {/* <Box variant='h6' sx={{ mb: '2vh' }}>The Meaning of LG Logo</Box> */}
               <Box sx={{ my: 'calc( var(--gap-basic) / 4  )', fontSize: '2rem' }}>Corporate Identity</Box>
               <Box>We have visualized 5 concepts and sentiments;</Box>
               <Box sx={{ my: 'calc( var(--gap-basic) / 4  )', fontSize: '1.5rem' }}>A symbol of the world, future, youth, human, and technology</Box>

               <Box sx={{ fontSize: '0.875rem', lineHeight: '150%' }}>
                  The letter L and G are inserted inside the circle signifying that the people form the center of corporate management. 
                  The logo represents the company’s pledge to maintain a close relationship with its customers around the world and to strive for customer satisfaction.
               </Box>
            </Box>
         </Box>

         <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', 
            justifyContent: 'center', alignItems: 'center', gap: 'calc( var(--gap-basic)/2 )' }}>
            <PageHero image='/images/lg/ci&lgway/LGWay.png' aspectRatio='1920/400' title='LG Way'
               message1="The LG Way is LG's unique management philosophy,"
               message2='which guides the thoughts and actions of all LG associates' />

            <Box sx={{ width: '80%', margin: 'calc( var(--gap-basic) /2 )  auto', textAlign: 'center' }}>
               <Box sx={{ lineHeight: '150%' }}>
                  The LG Way aims to achieve LG&apos;s vision of &quot;No. 1 LG&quot;, by practicing &quot;People-oriented 
                  Management&quot;, and “Creating Values for Customers” through “Jeong-Do Management”.
               </Box>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'var(--color-LGgray-light)', color: 'black',
               [theme.breakpoints.down('md')] : { flexDirection: 'column-reverse', backgroundColor: 'white', color: 'var(--color-LGgray)' } }}>
               <Box sx={{ width: '100%', margin: '40px auto', flexBasis: '55%', display: 'flex', flexDirection: 'column', alignItems: 'end', gap: '5px',
                  [theme.breakpoints.down('lg')] : { flexBasis: '50%' },
                  [theme.breakpoints.down('md')] : { flexBasis: 'auto',  alignItems: 'center', backgroundColor: 'white' } }}>
                  <Box sx={{ width: '80%', height: '157px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '1px solid var(--color-LGgray)',
                     [theme.breakpoints.down('lg')]: { width: '95% '} }}>
                     <Box sx={{ fontSize: '2rem', marginBottom: '10px', 
                        [theme.breakpoints.down('lg')] : {  fontSize: '1.5rem',  } }}>Vision</Box>
                     <Box sx={{ }}>The ultimate goal of LG is to be recognized as the market leader in business performance as well as in management practices</Box>
                  </Box>
                  <Box sx={{ width: '80%', height: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '1px solid var(--color-LGgray)',
                     [theme.breakpoints.down('lg')]: { width: '95% '} }}>
                     <Box sx={{ fontSize: '2rem', marginBottom: '10px', 
                        [theme.breakpoints.down('lg')] : { fontSize: '1.5rem', } }}>Behavioral Mode</Box>       
                     <Box sx={{ }}>Ethical management and code of conduct to enable capability development and fair competition</Box>
                  </Box>
                  <Box sx={{ width: '80%', height: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'center', 
                     [theme.breakpoints.down('lg')]: { width: '95% '} }}>
                     <Box sx={{ fontSize: '2rem', marginBottom: '10px', 
                        [theme.breakpoints.down('lg')] : { fontSize: '1.5rem', } }}>Management Principles</Box>
                     <Box sx={{ }}>The fundamental organizational principle guiding LG from beginning as a firm</Box>
                  </Box>
               </Box>

               <Box sx={{ width: '100%', margin: '40px auto', flexBasis: '45%', display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '5px',
                  [theme.breakpoints.down('lg')] : { flexBasis: '50%' },
                  [theme.breakpoints.down('md')] : { flexBasis: 'auto',  alignItems: 'center', backgroundColor: 'var(--color-LGgray-light)', my: '0', py: '40px' } }}>
                  <Image src='/images/lg/ci&lgway/lgway01_en.png' width={500} height={157} loading='lazy' alt='LG Way' />
                  <Image src='/images/lg/ci&lgway/lgway02_en.png' width={500} height={130} loading='lazy' alt='LG Way' />
                  <Image src='/images/lg/ci&lgway/lgway03_en.png' width={500} height={130} loading='lazy' alt='LG Way'/>
               </Box>
            </Box>

         </Box>         
      </Box>
   );
};

export default LGWay;