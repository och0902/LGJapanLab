'use client';

import React from 'react';
import styles from './page.module.css';
import { Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import PageHero from '@/components/ja/PageHero/PageHero';
import { useTheme } from '@emotion/react';
import { companyInfos } from './company';

const JLAboutUs= () => {
   
   const theme = useTheme();

   return (
		<Box className='pageContainer'>
         <PageHero image='/images/lgjl/aboutUs.png' aspectRatio='1920/400' title='会社 情報' />
         
         <Box sx={{ width: '80%', m: 'auto', mt: 'calc( var(--gap-basic)/2 )', [theme.breakpoints.down('md')] : { width: '100%', px: '10px' } }}>
            <Box sx={{ fontSize: '2rem' }}>基本情報</Box>
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
            <Box sx={{ width: '80%', m: 'auto', mb: '10px', [theme.breakpoints.down('md')] : { width: '100%', px: '10px' } }}>
               <Box sx={{ fontSize: '2rem' }}>ロケーション</Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
               <Box sx={{ width: '100%', backgroundColor: 'var(--color-LGgray-light)', [theme.breakpoints.down('lg')] : { py: '20px' } }}>
                  <Box sx={{ width: '80%', m: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px',
                     [theme.breakpoints.down('md')] : { width: '100%', px: '10px', flexDirection: 'column', alignItems: 'flex-start' } }} >
                     <Box sx={{ width: '450px', color: 'var(--color-black)', [theme.breakpoints.down('md')] : { width: '100%' } }}>
                        <Box sx={{ fontSize: '1.5rem', color: 'var(--color-LGred)' }}>LG Japan Lab Yokohama R&D Center</Box>
                        <Box sx={{ fontSize: '1.5rem', color: 'var(--color-LGred)' }}></Box>
                        <Box sx={{ pb: '20px', fontSize: '1.5rem', color: 'var(--color-LGred)' }}>(本社)</Box>
                        <Box sx={{ py: '5px' }}>〒220-0011</Box>
                        <Box sx={{ py: '5px' }}>神奈川県横浜市西区高島 1-2-13</Box>
                        <Box sx={{ py: '5px' }}>LG Yokohama Innoavation Center 7階</Box>
                        <Box sx={{ py: '5px' }}>045-345-9200(代表)</Box> 
                        <Link target='_blank' href='https://www.lgyic.com/' className={styles.link}>
                              <Box sx={{ pt: '20px' }}>LG YOKOHAMA INNOVATION CENTER <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Box>
                        </Link>
                     </Box>
                     <Box sx={{ width: '700px', height: '450px', 
                        [theme.breakpoints.down('xl')] : { width: '450px' }, [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                        <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3249.7372818138992!2d139.6251617!3d35.461298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d93583224a9%3A0xd4ce9aa5d85bfd19!2sLG%20YOKOHAMA%20INNOVATION%20CENTER!5e0!3m2!1sja!2sjp!4v1702962894764!5m2!1sja!2sjp'
                           width='100%' height='100%' style={{ border: '0' }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' ></iframe> 
                     </Box>
                  </Box>
               </Box>
               <Box sx={{ width: '100%', backgroundColor: 'var(--color-LGgray-light)',  [theme.breakpoints.down('lg')] : { py: '20px' } }}>
                  <Box sx={{ width: '80%', m: 'auto', display: 'flex',  flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px',
                     [theme.breakpoints.down('md')] : { width: '100%', px: '10px', flexDirection: 'column', alignItems: 'flex-start' } }} >
                     <Box sx={{ width: '450px', color: 'var(--color-black)', [theme.breakpoints.down('md')] : { width: '100%' } }}>
                        <Box sx={{ pb: '20px', fontSize: '1.5rem', color: 'var(--color-LGred)' }}>LG Japan Lab Kyoto R&D Center</Box>
                        <Box sx={{ py: '5px' }}>〒600-8813</Box>
                        <Box sx={{ py: '5px' }}>京都府京都市下京区中堂寺南町134番地</Box>
                        <Box sx={{ py: '5px' }}>京都リサーチパーク2号館4階</Box>
                        <Box sx={{ py: '5px' }}>075-275-7330(代表)</Box>      
                        <Link target='_blank' href='https://www.krp.co.jp/' className={styles.link} >
                           <Box sx={{ pt: '20px' }}>KYOTO RESEARCH PARK <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Box>
                        </Link> 
                     </Box>
                     <Box sx={{ width: '700px', height: '450px', 
                        [theme.breakpoints.down('xl')] : { width: '450px' }, [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.465099190792!2d135.7401799!3d34.9950608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001063b9e415a03%3A0x865e9af3d603c9bc!2z5pel5pys44CB44CSNjAwLTg4MTMg5Lqs6YO95bqc5Lqs6YO95biC5LiL5Lqs5Yy65Lit5aCC5a-65Y2X55S677yR77yT77yU!5e0!3m2!1sja!2s!4v1702962432264!5m2!1sja!2s'
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