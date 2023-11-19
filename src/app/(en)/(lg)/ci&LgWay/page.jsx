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

         <Box sx={{ width: '100%', m: 'calc( var(--gap-basic)/2 ) auto', display: 'flex', flexDirection: 'column', 
            justifyContent: 'center', alignItems: 'center', gap: 'calc( var(--gap-basic)/2 )' }}>
            <Box sx={{ width: '340px', aspectRatio: '340/149', position: 'relative',
               [theme.breakpoints.down('lg')] : { width: '30%' },
               [theme.breakpoints.down('sm')] : { width: '45%' }}}>
               <Image src='/images/lg/ci&LgWay/LGCI.jpg' fill sizes='100%' sx={{ position: 'absolute' }} alt='LG CI' />
            </Box>
            <Box sx={{ width: '80%', margin: '0 auto', textAlign: 'center', [theme.breakpoints.down('md')]: { width: '100%', px: '5px' } }}>
               <Box sx={{ my: 'calc( var(--gap-basic) / 4  )', fontSize: '2rem' }}>Corporate Identity</Box>
               <Box>We have visualized 5 concepts and sentiments;</Box>
               <Box sx={{ my: 'calc( var(--gap-basic) / 4  )', fontSize: '1.5rem' }}>
                  A symbol of the world, future, youth, human, and technology
               </Box>
               <Box sx={{ fontSize: '0.875rem', lineHeight: '150%' }}>
                  The letter L and G are inserted inside the circle signifying that the people form the center of corporate management. 
                  The logo represents the company’s pledge to maintain a close relationship with its customers around the world and to strive for customer satisfaction.
               </Box>
            </Box>
         </Box>

         <Box sx={{ width: '100%', m: 'auto', display: 'flex', flexDirection: 'column', 
            justifyContent: 'center', alignItems: 'center', gap: 'calc( var(--gap-basic)/2 )' }}>
            <PageHero image='/images/lg/ci&LgWay/LGWay.png' aspectRatio='1920/400' title='LG Way'
               message1="The LG Way is LG's unique management philosophy,"
               message2='which guides the thoughts and actions of all LG associates' />
            <Box sx={{ width: '80%', m: 'calc( var(--gap-basic) /2 )  auto', textAlign: 'center',
               [theme.breakpoints.down('md')]: { width: '100% ' } }}>
               <Box sx={{ lineHeight: '150%' }}>
                  The LG Way aims to achieve LG&apos;s vision of &quot;No. 1 LG&quot;, by practicing &quot;People-oriented 
                  Management&quot;, and “Creating Values for Customers” through “Jeong-Do Management”.
               </Box>
            </Box>

            <Box sx={{ width: '100%', m: 'auto', backgroundColor: 'var(--color-LGgray-light)', color: 'black',
               [theme.breakpoints.down('md')] : { backgroundColor: 'white', color: 'var(--color-LGgray)' } }}>
               <Box sx={{ width: '80%', m: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', 
                  [theme.breakpoints.down('md')] : { width: '100%', flexDirection: 'column-reverse' } }}>
                  <Box sx={{ width: '60%', my: '30px', display: 'flex', flexDirection: 'column', 
                     [theme.breakpoints.down('md')]: {  width: '100%', px: '5px', alignItems: 'center', backgroundColor: 'white' } }}>
                     <Box sx={{ width: '100%', height: '118px', 
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '1px solid var(--color-white)',
                        [theme.breakpoints.down('xl')]: { height: '106px' }, [theme.breakpoints.down('lg')]: { height: '95px' } }}>
                        <Box sx={{ fontSize: '2rem', [theme.breakpoints.down('lg')]: {  fontSize: '1.5rem' } }}>
                           Vision
                        </Box>
                        <Box sx={{ fontSize: '1rem', [theme.breakpoints.down('lg')]: { fontSize: '0.9rem' } }}>
                           The ultimate goal of LG is to be recognized as the market leader in business performance as well as in management practices
                        </Box>
                     </Box>
                     <Box sx={{ width: '100%', height: '118px', 
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '1px solid var(--color-white)',
                        [theme.breakpoints.down('xl')]: { height: '106px' }, [theme.breakpoints.down('lg')]: { height: '94px' } }}>
                        <Box sx={{ fontSize: '2rem', [theme.breakpoints.down('lg')]: { fontSize: '1.5rem', } }}>
                           Behavioral Mode
                        </Box>       
                        <Box sx={{ fontSize: '1rem', [theme.breakpoints.down('lg')]: { fontSize: '0.9rem' } }}>
                           Ethical management and code of conduct to enable capability development and fair competition
                        </Box>
                     </Box>
                     <Box sx={{ width: '100%', height: '118px', 
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', 
                        [theme.breakpoints.down('xl')]: { height: '106px' }, [theme.breakpoints.down('lg')]: { height: '95px' } }}>
                        <Box sx={{ fontSize: '2rem', [theme.breakpoints.down('lg')]: { fontSize: '1.5rem', } }}>
                           Management Principles
                        </Box>
                        <Box sx={{ fontSize: '1rem', [theme.breakpoints.down('lg')]: { fontSize: '0.9rem' } }}>
                           The fundamental organizational principle guiding LG from beginning as a firm
                        </Box>
                     </Box>
                  </Box>

                  <Box sx={{ width: '500px', aspectRatio: '600/425', m: 'auto', position: 'relative',
                     [theme.breakpoints.down('xl')] : { width : '450px' },
                     [theme.breakpoints.down('lg')] : { width : '400px' },
                     [theme.breakpoints.down('sm')] : { width : '350px' }, }}>
                     <Image src='/images/lg/ci&LgWay/LGWayDiagram.png' fill sizes='100%' style={{ position: 'absolute' }} alt='LG Way' />
                  </Box>
               </Box>
            </Box>

         </Box>         
      </Box>
   );
};

export default LGWay;