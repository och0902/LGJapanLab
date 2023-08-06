'use client';

import React from 'react';
import styles from './page.module.css';
import histories from './history_en';
import { Typography, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Image from 'next/image';

const LGHistory = () => {
   return (
      <div className={styles.container}>
         <Typography variant='h4' className={styles.slogan}>LG, A tale of challenge and ceaseless innovation</Typography>
         {histories.map((genHistory, idx1) => {
            return (
               <div key={idx1} className={styles.histories}>
                  <div className={styles.history}>
                     <div className={styles.title}>
                        <Typography variant='h5'>{genHistory.achievement}</Typography>
                        <Typography variant='h6'>{genHistory.chairman}</Typography>
                     </div>
                     {genHistory.events.map((history, idx2) => (
                        <div key={idx2}>
                           <div className={styles.detail}>
                              <Typography variant='body2' className={styles.date}>{history.date}</Typography>
                              <Typography variant='body2'>{history.history}</Typography>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className={styles.img}>
                     {/* <Image src='/LG-logo.png' width={112} height={60} alt='LG logo' /> */}
                     <ImageList sx={{ width: 600, height: 600 }} cols={3} rowheight={197} >
                        {genHistory.imgs.map((img, idx) => (
                           <ImageListItem key={idx} >
                              <Image src={`${img.url}?w=164&h=164&fit=crop&auto=format&drp=2`} 
                                 width={197} height={197} style={{ objectFit: 'cover', }} alt={img.name} loading='lazy' />
                              <ImageListItemBar title={img.name} />
                           </ImageListItem>
                        )) }
                     </ImageList>
                  </div>
               </div>
            );
         })}
   
      </div>
   );
};

export default LGHistory ;