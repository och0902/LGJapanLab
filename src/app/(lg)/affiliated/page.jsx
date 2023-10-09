'use client';

import React from 'react';
import styles from './page.module.css';
import { Box } from '@mui/material';
import Affiliated from './affiliated_en';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PageHero from '@/components/PageHero/PageHero';

const LGAffiliated = () => {

   const theme = useTheme();

   return (
      <Box className='pageContainer'>
         <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--gap-basic)' }}>
            <PageHero image='/images/lg/affiliated/affiliated.png' aspectRatio='1920/400' title='Affiliated Companies' 
               message1='We create value for our customers' />
            <Box sx={{ width: '96%', m: 'auto',
               display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 'var(--gap-basic)', 
               [theme.breakpoints.up('lg')] : { width: '80%' },
               [theme.breakpoints.down('md')] : { flexDirection: 'column' } }}>
               {Affiliated.map((field, i) => (
                  <Box key={i}>
                     <Box sx={{ mb: '30px', fontSize: '1.5rem', color: 'var(--color-LGred)' }}>
                        <Box>{field.fields}{field.icon}</Box>
                     </Box>
                     <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {field.companies.map((company, j) => (
                           <Link key={j} href={'/affiliated/company?name='+company.name} className={styles.companyBox}>
                              <Box>
                                 <Box sx={{ mb: '5px' }}>{company.name}</Box>
                              </Box>
                              <ArrowForwardIosIcon sx={{ fontSize: '1.5rem' }} />
                           </Link>
                        ))}
                     </Box>
                  </Box>
               ))}
            </Box>
         
         </Box>         
      </Box>
   );
};

export default LGAffiliated;