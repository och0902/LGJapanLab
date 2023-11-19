'use client';

import React from 'react';
import styles from './page.module.css';
import { Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import PageHero from '@/components/PageHero/PageHero';
import { useTheme } from '@emotion/react';
import { companyInfos } from './company';

const JLAboutUs= () => {
   
   const theme = useTheme();

   return (
		<Box className='pageContainer'>
         <PageHero image='/images/lgjl/JLAboutUs.png' aspectRatio='1920/400' title='About Us' />
         
         <Box sx={{ width: '80%', m: 'auto', mt: 'calc( var(--gap-basic)/2 )', [theme.breakpoints.down('md')] : { width: '100%', px: '10px' } }}>
            <Box sx={{ fontSize: '2rem' }}>Information</Box>
            { companyInfos.map((info, i) => (
               <Box key={i} sx={{ p: '10px 5px', lineHeight: '150%', 
                  display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--color-LGgray-light)' }}>
                  <Box sx={{ flexBasis: '25%' }}>{info.item}</Box>
                  <Box sx={{ flexBasis: '75%', pl: '10px', color: 'var(--color-black)' }}>
                     { info.contents.map((content, j) => (
                        <Box key={j}>{content}</Box>
                     ))}
                  </Box>
               </Box>
            ))}
         </Box>

         <Box sx={{ width: '100%' }}>
            <Box sx={{ width: '80%', m: 'auto', mb: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
               [theme.breakpoints.down('md')] : { width: '100%', px: '10px' } }}>
               <Box sx={{ fontSize: '2rem' }}>Location</Box>
               <Box sx={{  p: '10px 20px', backgroundColor: 'var(--color-LGred)', color: 'var(--color-white)',
                  borderRadius: '26px', boxShadow: '3px 3px 3px var(--color-LGgray)' }}>
                  <Link href='/applyToVisit' className={styles.buttonRed}>Apply to Visit</Link>
               </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
               <Box sx={{ width: '100%', backgroundColor: 'var(--color-LGgray-light)', [theme.breakpoints.down('lg')] : { py: '20px' } }}>
                  <Box sx={{ width: '80%', m: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px',
                     [theme.breakpoints.down('md')] : { width: '100%', px: '10px', flexDirection: 'column', alignItems: 'flex-start' } }} >
                     <Box sx={{ width: '450px', color: 'var(--color-black)', [theme.breakpoints.down('md')] : { width: '100%' } }}>
                        <Box sx={{ fontSize: '1.5rem', color: 'var(--color-LGred)' }}>LG Japan Lab Yokohama R&D Center</Box>
                        <Box sx={{ fontSize: '1.5rem', color: 'var(--color-LGred)' }}></Box>
                        <Box sx={{ pb: '20px', fontSize: '1.5rem', color: 'var(--color-LGred)' }}>(Head Office)</Box>
                        <Box sx={{ py: '5px' }}>LG Yokohama Innoavation Center 7F</Box>
                        <Box sx={{ py: '5px' }}>1-2-13, Takashima, Nishi Ward,</Box>
                        <Box sx={{ py: '5px' }}>Yokohama City, Kanagawa 220-0011</Box>
                        <Box sx={{ py: '5px' }}>+81-45-345-9200</Box> 
                        <Link target='_blank' href='https://www.lgyic.com/' className={styles.link}>
                              <Box sx={{ pt: '20px' }}>LG YOKOHAMA INNOVATION CENTER <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Box>
                        </Link>
                     </Box>
                     <Box sx={{ width: '700px', height: '450px', 
                              [theme.breakpoints.down('xl')] : { width: '450px' }, [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                        <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3249.7372818138992!2d139.6251617!3d35.461298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d93583224a9%3A0xd4ce9aa5d85bfd19!2sLG%20Yokohama%20Innovation%20Center!5e0!3m2!1sen!2sjp!4v1696460865863!5m2!1sen!2sjp' 
                                 width='100%' height='100%' style={{ border: '0' }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' ></iframe> 
                     </Box>
                  </Box>
               </Box>
               <Box sx={{ width: '100%', backgroundColor: 'var(--color-LGgray-light)',  [theme.breakpoints.down('lg')] : { py: '20px' } }}>
                  <Box sx={{ width: '80%', m: 'auto', display: 'flex',  flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px',
                     [theme.breakpoints.down('md')] : { width: '100%', px: '10px', flexDirection: 'column', alignItems: 'flex-start' } }} >
                     <Box sx={{ width: '450px', color: 'var(--color-black)', [theme.breakpoints.down('md')] : { width: '100%' } }}>
                        <Box sx={{ pb: '20px', fontSize: '1.5rem', color: 'var(--color-LGred)' }}>LG Japan Lab Kyoto R&D Center</Box>
                        <Box sx={{ py: '5px' }}>Kyoto Research Park No.2-4F</Box>
                        <Box sx={{ py: '5px' }}>134, Chudoji Minami-cho, Shimogyo Ward,</Box>
                        <Box sx={{ py: '5px' }}>Kyoto City, Kyoto 600-8813</Box>
                        <Box sx={{ py: '5px' }}>+81‐75-275-7330</Box>      
                        <Link target='_blank' href='https://www.krp.co.jp/' className={styles.link} >
                           <Box sx={{ pt: '20px' }}>KYOTO RESEARCH PARK <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Box>
                        </Link> 
                     </Box>
                     <Box sx={{ width: '700px', height: '450px', 
                              [theme.breakpoints.down('xl')] : { width: '450px' }, [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.465099190792!2d135.7401799!3d34.9950608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001063b9e415a03%3A0x865e9af3d603c9bc!2s134%20Ch%C5%ABd%C5%8Dji%20Minamimachi%2C%20Shimogyo%20Ward%2C%20Kyoto%2C%20600-8813%2C%20Japan!5e0!3m2!1sen!2s!4v1696460947106!5m2!1sen!2s'
                           width='100%' height='100%' style={{ border: '0' }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' ></iframe>
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Box>

      </Box>
   );
};

export default JLAboutUs;