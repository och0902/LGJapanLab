'use client';

import React from 'react';
import styles from './page.module.css';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import PageHero from '@/components/PageHero/PageHero';
import { useTheme } from '@emotion/react';

const JLAboutUs= () => {
   
   const theme = useTheme();

   return (
		<Box className='pageContainer'>
         <PageHero image='/images/lgjl/JLAboutUs.png' aspectRatio='1920/400' title='About Us' />

         <Box sx={{ width: '80%', m: 'auto', mt: '5dvh' }}>
            <Box sx={{ fontSize: '2rem' }}>Information</Box>
            <TableContainer sx={{ mt: '30px', overflow: 'hidden' }}>
               <Table stickyHeader size='small' aria-label='sticky table'>
                  <TableHead></TableHead>
                  <TableBody>
                     <TableRow><TableCell>Company Name</TableCell><TableCell sx={{ fontWeight: 'var(--weight-bold)' }}>LG Japan Lab Inc.</TableCell></TableRow>
                     <TableRow><TableCell>Company Representative</TableCell><TableCell sx={{ fontWeight: 'var(--weight-bold)' }}>OH Chang Ho</TableCell></TableRow>
                     <TableRow><TableCell>Establish</TableCell><TableCell sx={{ fontWeight: 'var(--weight-bold)' }}>September 1, 2010</TableCell></TableRow>
                     <TableRow><TableCell>Business Area</TableCell><TableCell sx={{ fontWeight: 'var(--weight-bold)' }}>
                        <Box>1. Technology development and research in the fields of electronics, electricity, chemistry, communications and services, etc.</Box>
                        <Box>2. Any business incidental to the previous issue</Box>
                     </TableCell></TableRow>
                     <TableRow><TableCell>Capital</TableCell><TableCell sx={{ fontWeight: 'var(--weight-bold)' }}>300 Million Yen</TableCell></TableRow>
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>

         <Box sx={{ width: '100%' }}>
            <Box sx={{ width: '80%', m: 'auto', mb: '10px', fontSize: '2rem'  }}>Location</Box>
            <Box sx={{ width: '100%', py: '30px', backgroundColor: 'var(--color-LGgray-light)' }}>
               <Box sx={{ width: '80%', m: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px',
                  [theme.breakpoints.down('md')] : { flexDirection: 'column', alignItems: 'flex-start' }, }} >
                  <Box sx={{ width: '450px', color: 'var(--color-black)', [theme.breakpoints.down('md')] : { width: '100%' } }}>
                     <Box sx={{ fontSize: '1.5rem', color: 'var(--color-LGred)' }}>LG Japan Lab Yokohama R&D Center</Box>
                     <Box sx={{ fontSize: '1.5rem', color: 'var(--color-LGred)' }}></Box>
                     <Box sx={{ pb: '20px', fontSize: '1.5rem', color: 'var(--color-LGred)' }}>(Head Office)</Box>
                     <Box sx={{ py: '5px' }}>LG Yokohama Innoavation Center 7F</Box>
                     <Box sx={{ py: '5px' }}>1-2-13, Takashima, Nishi-ku,</Box>
                     <Box sx={{ py: '5px' }}>Yokohama-shi, Kanagawa 220-0011</Box>
                     <Box sx={{ py: '5px' }}>+81-45-345-9200</Box> 
                     <Link href='https://www.lgyic.com/' className={styles.link}>
                           <Box sx={{ pt: '20px' }}>LG YOKOHAMA INNOVATION CENTER <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Box>
                     </Link>
                  </Box>
                  <Box sx={{ width: '700px', height: '450px', 
                           [theme.breakpoints.down('xl')] : { width: '450px' }, [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                     <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3249.7372818138992!2d139.6251617!3d35.461298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d93583224a9%3A0xd4ce9aa5d85bfd19!2sLG%20Yokohama%20Innovation%20Center!5e0!3m2!1sen!2sjp!4v1696460865863!5m2!1sen!2sjp' 
                        width='100%' height='100%' style={{ border: '0' }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' ></iframe>
                  </Box>
               </Box>
               <Box sx={{ width: '80%', m: 'auto', mt: '10dvh', display: 'flex',  flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '30px',
                  [theme.breakpoints.down('md')] : { flexDirection: 'column', alignItems: 'flex-start' }, }} >
                  <Box sx={{ width: '450px', color: 'var(--color-black)', [theme.breakpoints.down('md')] : { width: '100%' } }}>
                     <Box sx={{ pb: '20px', fontSize: '1.5rem', color: 'var(--color-LGred)' }}>LG Japan Lab Kyoto R&D Center</Box>
                     <Box sx={{ py: '5px' }}>KYOTO REASEARCH PARK NO.2-4F</Box>
                     <Box sx={{ py: '5px' }}>134, Chudoji Minami-cho, Shimogyo-ku,</Box>
                     <Box sx={{ py: '5px' }}>Kyoto-shi, Kyoto 600-8813</Box>
                     <Box sx={{ py: '5px' }}>+81‐75-275-7330</Box>      
                     <Link href='https://www.krp.co.jp/' className={styles.link} >
                        <Box sx={{ pt: '20px' }}>KYOTO RESEARCH PARK <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Box>
                     </Link> 
                  </Box>
                  <Box sx={{ width: '700px', height: '450px', 
                           [theme.breakpoints.down('xl')] : { width: '450px' }, [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                     <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.465099190792!2d135.7401799!3d34.9950608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001063b9e415a03%3A0x865e9af3d603c9bc!2s134%20Ch%C5%ABd%C5%8Dji%20Minamimachi%2C%20Shimogyo%20Ward%2C%20Kyoto%2C%20600-8813%2C%20Japan!5e0!3m2!1sen!2s!4v1696460947106!5m2!1sen!2s'
                        width='100%' height='100%' style={{ border: '0' }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default JLAboutUs;