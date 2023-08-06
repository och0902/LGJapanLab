'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const videos = [
   '/videos/lg/lg/lg.mp4',
   '/videos/lg/lgc/lgc.mp4',
];

const mediaList = [
   { title: 'LGxGUGGEHEIM AWARD 2023', url: 'https://lgartssponsorship.lg.co.kr', img: '/images/media/guggenheim.jpg' },
   { title: 'LG OLED 10 Year', url: '#', img: '/images/media/oledevo.jpg' },
   { title: 'CES 2023', url: 'https://youtu.be/yZfUtO_SpQM', img: '/images/media/CES2023.jpg' },
];

const relatedList = [
   { company: 'LG Science Park', url: 'https://www.lgsciencepark.com/KR', img: '/images/affiliated/lgsp.jpg' },
   { company: 'LG Electronics', url: 'https://www.lge.co.kr', img: '/images/affiliated/lge.jpg' },
   { company: 'LG Display', url: 'https://www.lgdisplay.com', img: '/images/affiliated/lgd.jpg' },
   { company: 'LG Innotek', url: 'https://www.lginnotek.com', img: '/images/affiliated/lgit.jpg' },
   { company: 'LG Chem', url: 'https://www.lgchem.com', img: '/images/affiliated/lgc.jpg' },
   { company: 'LG Energy Solution', url: 'https://www.lgensol.com', img: '/images/affiliated/lges.jpg' },
];

export default function Home() {

   const randomStart = Math.floor(Math.random() * videos.length);
   const [currentVideo, setCurrentVideo] = useState(randomStart);

   const handleVideoEnd = () => {
      // set the next video index
      const nextVideo = (currentVideo + 1) % videos.length;
      setCurrentVideo(nextVideo);
      // setCurrentVideo(randomVideo());

   };

   return (
      <Box sx={{ margin: '5vh auto', display: 'flex', flexDirection: 'column', gap: '10vh', }}>
         <video src={videos[currentVideo]} 
            width='100%' autoPlay muted onEnded={handleVideoEnd} />
         <Box sx={{ width: '100%' }}>
            <Typography variant='h4' sx={{ mb: 2 }}>MEDIA</Typography>
            <Box sx={{ my: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                        justifyContent: 'space-between', gap: '2vh', }}>
               { mediaList.map((media, idx) => (
                  <Link key={idx} href={media.url} 
                     style={{ width: '32%', aspectRatio: '33/23', position: 'relative', cursor: 'pointer', }} >
                     <Image src={media.img} fill className={styles.img} alt='Media'/>
                     <Typography variant='h5' 
                        sx={{ position: 'absolute', top: '65%', left: '7%', color: 'white', fontWeight: 'bolder', }}>{media.title}</Typography>
                  </Link>
               ))}
            </Box>
         </Box>
         <Box sx={{ width: '100%' }}>
            <Typography variant='h4' sx={{ mb: 2 }}>LG GROUP CHANNEL</Typography>
            <Box sx={{ margin: '0 auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                        justifyContent: 'space-between', gap: '2vh', }}>
               { relatedList.map((related, idx) => (
                  <Link key={idx} href={related.url} 
                     style={{ width: '32%', aspectRatio: '33/23', position: 'relative', cursor: 'pointer' }}>
                     <Image src={related.img} fill className={styles.img} alt='LG Group Subsidiary' />
                     <Typography variant='h5' 
                        sx={{ position: 'absolute', top: '65%', left: '7%', color: 'white', fontWeight: 'bolder', }}>{related.company}</Typography>
                  </Link>
               ))}
            </Box>
         </Box>
      </Box>
   );
};