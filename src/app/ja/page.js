'use client';

import React, { useState } from 'react';
import './globals.css';
import styles from './page.module.css';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { videos, mediaList, relatedList } from '../(en)/pageData';
import { useTheme } from '@emotion/react';
import { Diversity1 } from '@mui/icons-material';

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
         <video src={videos[currentVideo]} width='100%' style={{ marginTop: '-40px' }} autoPlay muted preload='auto' suppressHydrationWarning onEnded={handleVideoEnd} />
         <Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%'} }}>
            <Box sx={{ mb: '10px', fontSize: '2.5rem', [theme.breakpoints.down('md')] : { fontSize: '2rem' } }}>Media</Box>
            <Grid container>
               { mediaList.map((media, i) => (
                  <Grid key={i} item xs={6} sm={6} md={3} sx={{ p: '3px' }}>
                     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Link target='_blank' href={media.url} 
                           style={{ width: '100%', aspectRatio: '16/9', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                           <Image src={media.thumbnail} fill sizes='width: 100%' className={styles.thumbnail} loading='lazy' alt='Media'/>
                           {/* <Box sx={{ position: 'absolute', top: '65%', left: '7%', 
                              fontSize: '1.5rem', color: 'white', fontWeight: 'bolder' }}>
                              {media.title}
                           </Box> */}
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
         <div style={{ fontSize: '2rem' }}>夜空にながれ星</div>
         <div style={{ fontSize: '1rem' }}>Google Fonts は、デザイナー ウェブフォントを直感的にご利用いただける、安定したオープンソース ディレクトリです。
            膨大な数の文字のデザインに要する時間や、大容量のフォント ファイルをウェブフォントとして提供する際に必要な技術的
            インフラストラクチャなど、日本語の書体デザインやフォント開発にはさまざまな課題が立ちふさがります。
            そこで、規格や技術の開発を進めると同時に、Google Fonts を通じてデザイナーやデベロッパーの皆様に日本語のウェブフォントを
            お試しいただけるようにしました。</div>
            <Box sx={{ mb: '10px', fontSize: '2.5rem',  [theme.breakpoints.down('md')] : { fontSize: '2rem' } }}>LG Group Channel</Box>
            <Grid container>
               { relatedList.map((related, i) => (
                  <Grid key={i} item xs={6} sm={6} md={4} sx={{ p: '3px' }}>
                     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Link target='_blank' href={related.url} 
                           style={{ width: '100%', aspectRatio: '16/9', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                           <Image src={related.thumbnail} fill sizes='width: 100%' className={styles.thumbnail} loading='lazy' alt='LG Group Subsidiary' />
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