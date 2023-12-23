'use client';

import React from 'react';
import styles from './page.module.css';
import { Box } from '@mui/material';
import Affiliated from './affiliated';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PageHero from '@/components/PageHero/PageHero';
import Image from 'next/image';

const LGAffiliated = () => {

   const theme = useTheme();

   return (
      <Box className='pageContainer'>
         <PageHero image='/images/lg/affiliated/affiliated.png' aspectRatio='1920/400' title='Affiliated Companies' 
            message1='We create value for our customers' />

         <Box sx={{ width: '80%', m: 'auto', mt: 'calc( var(--gap-basic)/2 )', [theme.breakpoints.down('md')] : { width: '100%', px: '5px' } }}>
            <Box sx={{ fontSize: '2rem', mb: '1dvh' }}>LG Group</Box>
            <Box sx={{ fontSize: '1rem', lineHeight: '150%' }}>
               LG Group&apos;s business portfolio covers three key areas: Electronics, Chemicals, and Telecommunications & Services, 
               with 71 affiliates, annual revenue of about 150 billion dollars, and 230,000 employees worldwide.
            </Box>
         </Box>

         <Box sx={{ width: '100%', m: 'auto', px: '5px',
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 'var(--gap-basic)', 
            [theme.breakpoints.up('lg')] : { width: '80%' },
            [theme.breakpoints.down('md')] : { flexDirection: 'column', gap: 'calc( var(--gap-basic)/2 )' } }}>
            {Affiliated.map((field, i) => (
               <Box key={i}>
                  <Box sx={{ mb: '5px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                     <Box sx={{ fontSize: '1.5rem', color: 'var(--color-LGred)' }}>{field.fields}</Box>
                     <Image src={field.icon} width={30} height={30} alt='icon' />
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                     {field.companies.map((company, j) => (
                        <Link key={j} href={'/affiliated/company?name='+encodeURIComponent(company.name)} 
                           className={styles.companyBox}>
                           <Box sx={{ mb: '5px' }}>{company.name}</Box>
                           <ArrowForwardIosIcon sx={{ fontSize: '1.5rem' }} />
                        </Link>
                     ))}
                  </Box>
               </Box>
            ))}
         </Box>
      </Box>
   );
};

export default LGAffiliated;