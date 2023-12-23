'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { videos, mediaList, relatedList } from './pageData';
import { useTheme } from '@emotion/react';

const Root = () =>  {

   const theme = useTheme();

   const randomStart = Math.floor(Math.random() * videos.length);
   const [currentVideo, setCurrentVideo] = useState(randomStart);
   // const [currentVideo, setCurrentVideo] = useState(0);

   const handleVideoEnd = () => {
      // set the next video index
      const nextVideo = (currentVideo + 1) % videos.length;
      setCurrentVideo(nextVideo);
      // setCurrentVideo(randomVideo());
   };

   return (
      <Box className='pageContainer'>
         <video src={videos[currentVideo]} width='100%' priority='high' autoPlay muted preload='auto' suppressHydrationWarning onEnded={handleVideoEnd} />
         <Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%'} }}>
            <Box sx={{ mb: '10px', fontSize: '2.5rem', [theme.breakpoints.down('md')] : { fontSize: '2rem' } }}>メディア</Box>
            <Grid container>
               { mediaList.map((media, i) => (
                  <Grid key={i} item xs={6} sm={6} md={3} sx={{ p: '3px' }}>
                     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Link target='_blank' href={media.url} 
                           style={{ width: '100%', aspectRatio: '16/9', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                           <Image src={media.thumbnail} fill sizes='width: 100%' className={styles.thumbnail} alt='Media'/>
                        </Link>
                        <Box sx={{fontSize: '1.25rem', color: 'var(--color-LGgray)',
                           [theme.breakpoints.down('sm')] : {  fontSize: '1rem' } }} >
                           {media.title}
                        </Box>
                     </Box>
                  </Grid>
               ))}
            </Grid>
         </Box>

         <Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%'} }}>
            <Box sx={{ mb: '10px', fontSize: '2.5rem',  [theme.breakpoints.down('md')] : { fontSize: '2rem' } }}>LGグループ チャンネル</Box>
            <Grid container>
               { relatedList.map((related, i) => (
                  <Grid key={i} item xs={6} sm={6} md={4} sx={{ p: '3px' }}>
                     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Link target='_blank' href={related.url} 
                           style={{ width: '100%', aspectRatio: '16/9', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                           <Image src={related.thumbnail} fill sizes='width: 100%' className={styles.thumbnail} alt='LG Group Subsidiary' />
                           <Box sx={{ position: 'absolute', top: '65%', left: '7%', 
                              fontSize: '1.5rem', color: 'white', fontWeight: 'bolder',
                              [theme.breakpoints.down('sm')] : { fontSize: '1.2rem' } }}>
                              {related.company}
                           </Box>
                        </Link>
                     </Box>
                  </Grid>
               ))}
            </Grid>
         </Box>
      </Box>
   );
};

export default Root;