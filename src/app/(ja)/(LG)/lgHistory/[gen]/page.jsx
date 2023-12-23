'use client';

import React from 'react';
import styles from './page.module.css';
import LGHistories from './lgHistory';
import { ImageListItemBar, Grid, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@emotion/react';
import PageHero from '@/components/en/PageHero/PageHero';

const LGHistory = ({ params }) => {

   let { gen } = params;
   if ( gen == '0' ) { gen = Math.floor(Math.random() * LGHistories.length) + 1;  };

   const theme = useTheme();

   return (
      <Box className='pageContainer'>
         <PageHero image='/images/lg/lgHistory/LGHistory.png' aspectRatio='1920/400' title='LG ヒストリー'
            message1='LG, イノベーションと挑戦の歴史' />
         <Box sx={{ width: '100%', mt: 'calc( -1*var(--gap-basic) )', mb: 'calc( var(--gap-basic)/2 )', pt: '30px', pl: '5%', 
            display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
            backgroundColor: 'var(--color-LGgray-light)',
            [theme.breakpoints.down('md')] : {  mt: 'calc( -1*var(--gap-basic)/2 )', mb: 'calc( var(--gap-basic)/3 )', pl: '2%' } }}>
            { LGHistories.map((history, i) => (
               <Link key={i} href={'/lgHistory/'+(++i)} className={styles.genBtn} >
                  <Box sx={{ width: '100%', height: '70px', [theme.breakpoints.down('lg')] : { height: '55px' }}}>
                     {history.generation == gen ? (
                        <React.Fragment>
                           <Box sx={{ fontSize: '2rem', color: 'var(--color-LGred)',
                              [theme.breakpoints.down('lg')] : { fontSize: '1.5rem' }, [theme.breakpoints.down('sm')] : { fontSize: '1rem' },
                           }}>{history.period}</Box>
                           <Box sx={{ fontSize: '0.85rem', color: 'var(--color-LGred)',
                              [theme.breakpoints.down('lg')] : { fontSize: '0.75rem' }, [theme.breakpoints.down('md')] : { fontSize: '0.65rem' } 
                           }}>{history.achievement}</Box>
                        </React.Fragment>
                     ) : (
                        <React.Fragment>
                           <Box sx={{ fontSize: '2rem', 
                              [theme.breakpoints.down('lg')] : { fontSize: '1.5rem' }, [theme.breakpoints.down('sm')] : { fontSize: '1rem' },
                           }}>{history.period}</Box>
                           <Box sx={{ fontSize: '0.875rem', 
                              [theme.breakpoints.down('lg')] : { fontSize: '0.75rem' }, [theme.breakpoints.down('md')] : { fontSize: '0.65rem' } 
                           }}>{history.achievement}</Box>
                        </React.Fragment>
                     )}
                  </Box>
                  <Box sx={{ width: '50%', aspectRatio: '280/350', position: 'relative', overflow: 'hidden',
                     [theme.breakpoints.down('md')] : { width : '75%' } }}>
                     <Image src={history.mainImg} fill sizes='100%' className={styles.mainImg} alt='LG Generation Thumbnail' />
                  </Box>
               </Link>
            ))}
         </Box>

         {LGHistories.map((genHistory, i) => 
            ( genHistory.generation == gen && ( 
               <Box key={i} sx={{ width: '100%', m: 'auto' }}>
                  <Box sx={{ width: '80%', m: 'auto', textAlign: 'center', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                     <Box sx={{ mb: '20px', fontSize: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Box> {genHistory.chairman} : </Box>
                        <Box sx={{ pl: '10px', color: 'var(--color-LGred)' }}>{genHistory.period}</Box>
                     </Box>
                     <Box sx={{ mb: '20px' }}>{genHistory.meaning}</Box>
                     <Box sx={{ mb: '70px', fontSize: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Box sx={{ color: 'var(--color-LGred)' }}>{genHistory.introTitle1}</Box>
                        <Box sx={{ pl: '10px',  color: 'var(--color-black)' }}> {genHistory.introTitle2}</Box>
                     </Box>
                  </Box>
                  <Box sx={{ width: '100%', m: 'auto', backgroundColor: 'var(--color-LGgray-light)' }}>
                     <Grid container sx={{ width: '80%', m: 'auto', p: '30px 0px', 
                        flexDirection: 'row', alignItems: 'center', color: 'var(--color-black)',
                        [theme.breakpoints.down('lg')] : { width: '100%' } }} >
                        <Grid item xs={12} md={5} sx={{ px: '10px' }}>
                           <Grid container sx={{ pr: '10px', alignItems: 'center' }}>
                              {genHistory.imgs.map((img, j) => (
                                 <Grid item key={j} xs={4} sm={2} md={6} lg={6} xl={4} sx={{ p: '1px' }}>
                                    <Box sx={{ aspectRatio: '1/1', position: 'relative' }}>
                                       <Image src={img.url} fill sizes='width: 100%' style={{ objectFit: 'contain' }} alt={img.name} />
                                       <ImageListItemBar title={img.name} />
                                    </Box>
                                 </Grid>
                              ))}
                           </Grid>
                        </Grid>
                        <Grid item xs={12} md={7} sx={{ px: '10px', py: '30px' }}>
                           {genHistory.events.map((history, j) => (
                              (history.selected === true) ? 
                                 (
                                    <Box key={j} sx={{ py: '5px', display: 'flex', flexDirection: 'row', gap: '5px', 
                                       fontSize: '0.875rem', fontWeight: 'var(--weight-bold)', color: 'var(--color-LGred)', }}>
                                       <Box sx={{ mr: '10px', display: 'flex', justifyContent: 'space-evenly' }}>
                                          {history.date.split('').map((character, k) => (
                                             <Box key={k} sx={{ width: '9px', textAlign: 'center', [theme.breakpoints.down('md')] : { width: '7px' } }}>
                                                {character}
                                             </Box>
                                          ))}
                                       </Box>
                                       <Box>{history.history}</Box>
                                    </Box>
                                 ) : (
                                    <Box key={j} sx={{ py: '5px', display: 'flex', flexDirection: 'row', gap: '5px', fontSize: '0.875rem' }}>
                                       <Box sx={{ mr: '10px', display: 'flex', justifyContent: 'space-evenly' }}>
                                          {history.date.split('').map((character, k) => (
                                             <Box key={k} sx={{ width: '9px', textAlign: 'center', [theme.breakpoints.down('md')] : { width: '7px' }}}>
                                                {character}
                                             </Box>
                                          ))}
                                       </Box>
                                       <Box>{history.history}</Box>
                                    </Box>
                                 )
                           ))}
                        </Grid>
                     </Grid> 
                  </Box>
               </Box>
            ))
         )}
      </Box>
   );
};

export default LGHistory ;