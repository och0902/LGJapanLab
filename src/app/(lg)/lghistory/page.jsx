import React from 'react';
import styles from './page.module.css';
import histories from './history_en';
import { Typography, ImageListItemBar, Grid, Box, Divider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const videoclips = [
   { id: 1, title: 'LG Gr 75 YEAR', url: 'https://youtu.be/gz4hzA7A0RM?si=7YZ4Fbc4YFWwBNDh', thumbnail: '/images/lg/history/LGgr75year.jpg' },
   { id: 2, title: 'Ceaseless Challenges',  url: 'https://youtu.be/J2H6D3Ujp18?si=geiZYcrAgwr8vqWm', thumbnail: '/images/lg/history/CeaselessChallenge.jpg' },
];

const LGHistory = () => {

   return (
      <Box className='pageContainer'>
         <Typography variant='h5' className={styles.slogan}>LG, A tale of challenge and ceaseless innovation</Typography>
         <Grid container sx={{ w: '100%', mb: 'var(--margin-basic)', justifyContent: 'center' }}>
            { videoclips.map((videoclip, idx) => (
               <Grid key={idx} item xs={12} sm={4} md={4} sx={{ p: '3px' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                     <Link href={videoclip.url} 
                        style={{ width: '100%', aspectRatio: '16/9', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                        <Image src={videoclip.thumbnail} fill className={styles.thumbnail} loading='lazy' alt='Media'/>
                        {/* <Typography variant='h6' 
                           sx={{ position: 'absolute', top: '65%', left: '7%', color: 'white', fontWeight: 'bolder' }}>{videoclip.title}</Typography> */}
                     </Link>
                  </Box>
               </Grid>
            ))}
         </Grid>

         {histories.map((genHistory, idx1) => (
            <Grid container key={idx1} sx={{ alignItems: 'center' }} className={styles.histories} >
               <Grid item xs={12} md={7} sx={{ pr: '30px'}}>
                  <Box className={styles.title}>
                     <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center', gap: '5px' }} >
                        {genHistory.icon} {genHistory.achievement}</Typography>
                     <Typography variant='h6'>{genHistory.chairman}</Typography>
                  </Box>
                  {genHistory.events.map((history, idx2) => (
                     <Box key={idx2}>
                        <Box className={styles.detail}>
                           <Typography variant='body2' className={styles.date}>{history.date}</Typography>
                           <Typography variant='body2'>{history.history}</Typography>
                        </Box>
                     </Box>
                  ))}
               </Grid>
               <Grid item xs={12} md={5} sx={{ pr: '30px'}}>
                  <Grid container sx={{ alignItems: 'center' }}>
                     {genHistory.imgs.map((img, idx) => (
                        <Grid item key={idx} xs={4} sm={2} md={6} lg={4} sx={{ p: '1px' }}>
                           <Box sx={{ aspectRatio: '1/1', position: 'relative' }}>
                              <Image src={img.url} fill style={{ objectFit: 'contain' }} alt={img.name} loading='lazy' />
                              <ImageListItemBar title={img.name} />
                           </Box>
                        </Grid>
                     ))}
                  </Grid>
               </Grid>
            </Grid>
         ))}
      </Box>
   );
};

export default LGHistory ;