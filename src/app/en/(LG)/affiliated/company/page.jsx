'use client';

import React from 'react';
import styles from '../page.module.css';
import { useSearchParams } from 'next/navigation';
import affiliated from '../affiliated';
import { Box, Grid, useTheme } from '@mui/material';
import Link from 'next/link';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Image from 'next/image';

const Company = () => {

   const theme = useTheme();

   const searchParams = useSearchParams();
   const companyName = searchParams.get('name');

   return (
      <Box className='pageContainer'>
         { affiliated.map((field, i) =>             
            ( field.companies.map((company, j) => 
               ( company.name === companyName && (
                  <React.Fragment key={j}>
                     <Link target='_blank' href={company.url} className={styles.companyDesc}>
                        <Box sx={{ width: '80%', m: 'auto', my: 'calc( var(--gap-basic)/2 )', 
                           display: 'flex', alignItems: 'end', gap: '20px',
                           [theme.breakpoints.down('lg')] : { width: '100%', px: '10px' } }}>
                           <Box sx={{ fontSize: '2rem' }}>{company.name}</Box>
                           <Box>
                              <KeyboardDoubleArrowRightIcon sx={{ mb: '-6px' }}/> To Company Home
                           </Box>
                        </Box>
                        <Box sx={{ width: '100%', backgroundColor: 'var(--color-LGgray-light)' }}>
                           <Box sx={{ width: '80%', m: 'auto', py: '30px', lineHeight: '150%',
                              [theme.breakpoints.down('lg')] : { width: '100%', px: '10px' } }}>
                              {company.desc}
                           </Box>
                        </Box>
                     </Link>
                     <Grid container sx={{ width: '80%', m: 'auto', mt: 'calc( -1*var(--gap-basic)/2 )',
                        [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                        { company.videoclips && company.videoclips.map((videoclip, k) => (
                           <Grid key={k} item xs={6} sm={6} md={3} sx={{ p: '3px' }}>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                 <Link target='_blank' href={videoclip.url} style={{ width: '100%', aspectRatio: '16/9', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                                    <Image src={videoclip.thumbnail} fill 
                                       style={{ objectFit: 'contain', transition: 'all 0.3s ease' }} alt='Affiliated' />
                                    <Box sx={{ position: 'absolute', top: '65%', left: '7%', 
                                       fontSize: '1rem', color: 'white', fontWeight: 'bolder' }}>
                                       {videoclip.title}
                                    </Box>
                                 </Link>
                              </Box>
                           </Grid>
                        ))} 
                     </Grid>
                  </React.Fragment>
               ))
            ))
         )}
      </Box>   
   );
};

export default Company;