'use client';

import React from 'react';
import styles from './page.module.css';
import LGHistories from './lghistory_en';
import { ImageListItemBar, Grid, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@emotion/react';
import PageHero from '@/components/PageHero/PageHero';

const LGHistory = ({ params }) => {

   let { gen } = params;
   if ( gen == '0' ) { gen = Math.floor(Math.random() * LGHistories.length) + 1;  };

   const theme = useTheme();

   return (
      <Box className='pageContainer'>
         <Box sx={{ width: '100%', mb: 'var(--gap-basic)' }}>
            <PageHero image='/images/lg/lghistory/LGHistory.png' aspectRatio='1920/400' title='LG History'
               message1='LG, A tale of challenge and ceaseless innovation' />
            <Box sx={{ width: '100%', p: '30px 15px', display: 'flex', flexDirection: 'row',
               justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'var(--color-LGgray-light)' }}>
               { LGHistories.map((history, i) => (
                  <Link key={i} href={'/lghistory/'+(++i)} className={styles.genBtn}>
                     <Box sx={{ height: '60px'  }}>
                        {history.generation == gen ? (
                           <>
                              <Box sx={{ fontSize: '2rem', color: 'var(--color-LGred)',
                                 [theme.breakpoints.down('md')] : { fontSize: '1.5rem' },
                                 [theme.breakpoints.down('sm')] : { fontSize: '1.15rem' },
                              }}>{history.period}</Box>
                              <Box sx={{ fontSize: '0.875rem', [theme.breakpoints.down('lg')] : { fontSize: '0.75rem' },
                                 color: 'var(--color-LGred)' }}>{history.achievement}</Box>
                           </>
                        ) : (
                           <>
                              <Box sx={{ fontSize: '2rem', 
                                 [theme.breakpoints.down('md')] : { fontSize: '1.5rem' },
                                 [theme.breakpoints.down('sm')] : { fontSize: '1.15rem' },
                              }}>{history.period}</Box>
                              <Box sx={{ fontSize: '0.875rem', [theme.breakpoints.down('lg')] : { fontSize: '0.75rem' } }}>{history.achievement}</Box>
                           </>
                        )}
                     </Box>
                     <Box sx={{ width: '100%', aspectRatio: '280/350', position: 'relative', overflow: 'hidden' }}>
                        <Image src={history.mainImg} fill sizes='width: 100%' className={styles.mainImg} alt='LG Generation Thumbnail' loading='lazy'/>
                     </Box>
                  </Link>
               ))}
            </Box>
         </Box>

         {LGHistories.map((genHistory, i) => 
            ( genHistory.generation == gen && ( 
               <Box key={i} sx={{ width: '100%' }}>
                  <Box sx={{ mx: 'auto', textAlign: 'center' }}>
                     <Box sx={{ mx: 'auto', mb: '20px', fontSize: '1.5rem' }}>
                        <span> {genHistory.chairman} : </span>
                        <span style={{ color: 'var(--color-LGred)' }}>{genHistory.period}</span>
                     </Box>
                     <Box sx={{ mx: 'auto', mb: '20px' }}>{genHistory.meaning}</Box>
                     <Box sx={{ mx: 'auto', mb: '70px', fontSize: '2rem' }}>
                        <span style={{ color: 'var(--color-black)' }} >{genHistory.introTitle1}</span>
                        <span style={{ color: 'var(--color-LGred)' }}> {genHistory.introTitle2}</span>
                     </Box>
                  </Box>
                  <Grid container sx={{ width: '100%', m: '0px auto', p: '50px 10px', 
                     flexDirection: 'row', alignItems: 'center', color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)' }} >
                  <Grid item xs={12} md={5} sx={{ px: '15px' }}>
                        <Grid container sx={{ alignItems: 'center' }}>
                           {genHistory.imgs.map((img, j) => (
                              <Grid item key={j} xs={4} sm={2} md={6} lg={4} sx={{ p: '1px' }}>
                                 <Box sx={{ aspectRatio: '1/1', position: 'relative' }}>
                                    <Image src={img.url} fill sizes='width: 100%' style={{ objectFit: 'contain' }} alt={img.name} loading='lazy' />
                                    <ImageListItemBar title={img.name} />
                                 </Box>
                              </Grid>
                           ))}
                        </Grid>
                     </Grid>
                     <Grid item xs={12} md={7} sx={{ p: '15px' }}>
                        {genHistory.events.map((history, j) => (
                           (history.selected === true) ? 
                              (
                                 <Box key={j} sx={{ py: '5px', display: 'flex', flexDirection: 'row', gap: '5px', 
                                    fontSize: '0.875rem', fontWeight: 'var(--weight-bold)', color: 'var(--color-LGred)', }}>
                                    <Box sx={{ mr: '15px', display: 'flex', justifyContent: 'space-evenly' }}>
                                       {history.date.split('').map((character, k) => (
                                          <Box key={k} style={{ width: '10px', textAlign: 'center' }}>{character}</Box>
                                       ))}
                                    </Box>
                                    <Box>{history.history}</Box>
                                 </Box>
                              ) : (
                                 <Box key={j} sx={{ py: '5px', display: 'flex', flexDirection: 'row', gap: '5px', fontSize: '0.875rem' }}>
                                    <Box sx={{ mr: '15px', display: 'flex', justifyContent: 'space-evenly' }}>
                                       {history.date.split('').map((character, k) => (
                                          <Box key={k} style={{ width: '10px', textAlign: 'center' }}>{character}</Box>
                                       ))}
                                    </Box>
                                    <Box>{history.history}</Box>
                                 </Box>
                              )

                        ))}
                     </Grid>
                  </Grid>
               </Box>
            ))
         )}
      </Box>
   );
};

export default LGHistory ;