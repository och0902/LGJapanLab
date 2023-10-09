'use client';

import React, { useState } from 'react';
import './globals.css';
import styles from './page.module.css';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { videos, mediaList, relatedList } from './pageData';

const Root = () =>  {

   const randomStart = Math.floor(Math.random() * videos.length);
   const [currentVideo, setCurrentVideo] = useState(randomStart);

   const handleVideoEnd = () => {
      // set the next video index
      const nextVideo = (currentVideo + 1) % videos.length;
      setCurrentVideo(nextVideo);
      // setCurrentVideo(randomVideo());
   };

   return (
      <Box className='pageContainer'>
         <video src={videos[currentVideo]} width='100%' autoPlay muted preload='auto' suppressHydrationWarning onEnded={handleVideoEnd} />
         <Box sx={{ width: '100%' }}>
            <Box sx={{ mb: '10px', fontSize: '2.5rem' }}>Media</Box>
            <Grid container>
               { mediaList.map((media, idx) => (
                  <Grid key={idx} item xs={12} sm={4} md={4} sx={{ p: '3px' }}>
                     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Link key={idx} href={media.url} 
                           style={{ width: '100%', aspectRatio: '33/23', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                           <Image src={media.thumbnail} fill sizes='width: 100%' className={styles.thumbnail} loading='lazy' alt='Media'/>
                           <Typography variant='h6' 
                              sx={{ position: 'absolute', top: '65%', left: '7%', color: 'white', fontWeight: 'bolder' }}>{media.title}</Typography>
                        </Link>
                     </Box>
                  </Grid>
               ))}
            </Grid>
         </Box>

         <Box sx={{ width: '100%' }}>
            <Box sx={{ mb: '10px', fontSize: '2.5rem' }}>LG Group Channel</Box>
            <Grid container>
               { relatedList.map((related, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={4} sx={{ p: '3px' }}>
                     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Link href={related.url} style={{ width: '100%', aspectRatio: '33/23', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                           <Image src={related.thumbnail} fill sizes='width: 100%' className={styles.thumbnail} loading='lazy' alt='LG Group Subsidiary' />
                           <Typography variant='h6' sx={{ position: 'absolute', top: '65%', left: '7%', color: 'white', fontWeight: 'bolder' }}>
                              {related.company}
                           </Typography>
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