'use client';

import React from 'react';
import styles from '../page.module.css';
import { useSearchParams } from 'next/navigation';
import affiliated from '../affiliated_en';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Image from 'next/image';

const Company = () => {

   const searchParams = useSearchParams();
   const companyName = searchParams.get('name');

   // var decoded = decodeURIComponent(params);

   return (
      <Box className='pageContainer'>
         { affiliated.map((field, i) =>             
            ( field.companies.map((company, j) => 
               ( company.name === companyName && (
                  <>
                     <Link href={company.url} className={styles.companyDesc}>
                        <Box sx={{ my: 'calc( var(--gap-basic)/2 )', px: '10px', 
                           display: 'flex', alignItems: 'end', gap: '20px' }}>
                           <Box sx={{ fontSize: '2rem' }}>{company.name}</Box>
                           <Box className={styles.toCompanyPage}>
                              <KeyboardDoubleArrowRightIcon sx={{ mb: '-6px' }}/> To Company Home
                           </Box>
                        </Box>
                        <Box sx={{ p: '20px 10px', backgroundColor: 'var(--color-LGgray-light)' }}>{company.desc}</Box>
                     </Link>
                     <Grid container>
                        { company.videoclips && company.videoclips.map((videoclip, k) => (
                           <Grid key={k} item xs={12} sm={6} md={3} sx={{ p: '3px' }}>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                 <Link href={videoclip.url} style={{ width: '100%', aspectRatio: '16/9', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                                    <Image src={videoclip.thumbnail} fill 
                                       style={{ objectFit: 'contain', transition: 'all 0.3s ease' }} loading='lazy' alt='Affiliated' />
                                    <Typography variant='h6' sx={{ position: 'absolute', top: '65%', left: '7%', color: 'white', fontWeight: 'bolder' }}>
                                       {videoclip.title}
                                    </Typography>
                                 </Link>
                              </Box>
                           </Grid>
                        ))} 
                     </Grid>
                  </>
               ))
            ))
         )}
      </Box>   
   );
};

export default Company;