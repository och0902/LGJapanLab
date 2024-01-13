'use client';

import React from 'react';
import styles from './page.module.css';
import { Box } from '@mui/material';
import Affiliated from './affiliated';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PageHero from '@/components/ja/PageHero/PageHero';
import Image from 'next/image';

const LGAffiliated = () => {

   const theme = useTheme();

   return (
      <Box className='pageContainer'>
         <PageHero image='/images/lg/affiliated/affiliated.jpg' aspectRatio='1920/400' title='系列会社' 
            message1='私たちはお客様のために価値を創造します。' />

         <Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
            <Box sx={{ fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', mb: '1dvh' }}>LGグループ</Box>
            <Box sx={{ fontSize: '1rem', lineHeight: '150%' }}>
               LGグループのビジネスポートフォリオは、3つの主要分野をカバーしています: 電子·化学·通信·サービスは71の系列会社を擁し、年間売上高は約1500億ドルで、世界中に23万人の従業員がいます。
            </Box>
         </Box>

         <Box sx={{ width: '100%', m: 'auto', px: '5px',
            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 'calc( var(--gap-basic)/2 )', 
            [theme.breakpoints.up('lg')] : { width: '80%' },
            [theme.breakpoints.down('md')] : { flexDirection: 'column', gap: 'calc( var(--gap-basic)/2 )' } }}>
            {Affiliated.map((field, i) => (
               <Box key={i}>
                  <Box sx={{ mb: '5px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                     <Box sx={{ fontSize: '1.5rem', fontWeight: 'var(--weight-bold)', color: 'var(--color-LGred)' }}>{field.fields}</Box>
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