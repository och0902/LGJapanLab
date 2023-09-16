'use client';

import React, { useState } from 'react';
import './globals.css';
import styles from './page.module.css';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const videos = [
   '/videos/lg/lg.mp4',
   "/videos/lg/Life's Good.mp4",
   '/videos/lg/lgc.mp4',
];

const mediaList = [
   // { id: 1, title: 'LGxGUGGEHEIM AWARD', url: 'https://lgartssponsorship.lg.co.kr', thumbnail: '/images/root/media/guggenheim.jpg' },
   { id: 1, title: 'LG SUPERSTART', url: 'https://youtu.be/DG8FYSMyEKM?si=fDpiZM64FnWyYbDc', thumbnail: '/images/root/media/SuperStart.png' },
   { id: 2, title: 'LG OLED 10 Year', url: 'https://youtu.be/7FzMEtMG8hA?si=rqju8cRSgZeb89Kn', thumbnail: '/images/root/media/OLED10thAnniversary.jpg' },
   { id: 3, title: 'CES 2023', url: 'https://youtu.be/yZfUtO_SpQM', thumbnail: '/images/root/media/CES2023.jpg' },
];

const relatedList = [
   { id: 1, company: 'LG Science Park', url: 'https://www.lgsciencepark.com/EN', thumbnail: '/images/root/channel/lgsp.jpg' },
   { id: 2, company: 'LG Electronics', url: 'https://www.lg.com/global', thumbnail: '/images/root/channel/lge.jpg' },
   { id: 3, company: 'LG Display', url: 'https://www.lgdisplay.com/eng', thumbnail: '/images/root/channel/lgd.jpg' },
   { id: 4, company: 'LG Innotek', url: 'https://www.lginnotek.com/main/main.do?locale=en', thumbnail: '/images/root/channel/lgit.jpg' },
   { id: 5, company: 'LG Chem', url: 'https://www.lgchem.com', thumbnail: '/images/root/channel/lgc.jpg' },
   { id: 6, company: 'LG Energy Solution', url: 'https://www.lgensol.com/en', thumbnail: '/images/root/channel/lges.jpg' },
];

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
         <video src={videos[currentVideo]} width='100%' autoPlay muted preload='auto' onEnded={handleVideoEnd} />
         <Box sx={{ width: '100%' }}>
            <Typography variant='h5' sx={{ mb: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
               <NewspaperOutlinedIcon sx={{ mb: '-3px' }}/>Media
            </Typography>
            <Grid container>
               { mediaList.map((media, idx) => (
                  <Grid key={idx} item xs={12} sm={4} md={4} sx={{ p: '3px' }}>
                     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Link key={idx} href={media.url} 
                           style={{ width: '100%', aspectRatio: '33/23', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                           <Image src={media.thumbnail} fill className={styles.thumbnail} loading='lazy' alt='Media'/>
                           <Typography variant='h6' 
                              sx={{ position: 'absolute', top: '65%', left: '7%', color: 'white', fontWeight: 'bolder' }}>{media.title}</Typography>
                        </Link>
                     </Box>
                  </Grid>
               ))}
            </Grid>
         </Box>

         <Box sx={{ width: '100%' }}>
            <Typography variant='h5' sx={{ mb: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
               <GroupOutlinedIcon sx={{ mb: '-3px' }}/>LG Group Channel
            </Typography>
            <Grid container>
               { relatedList.map((related, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={4} sx={{ p: '3px' }}>
                     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Link href={related.url} style={{ width: '100%', aspectRatio: '33/23', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                           <Image src={related.thumbnail} fill className={styles.thumbnail} loading='lazy' alt='LG Group Subsidiary' />
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