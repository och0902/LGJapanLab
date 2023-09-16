'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import histories from './history_en';
import { Typography, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Image from 'next/image';

const LGHistory = () => {

   const [ size, setSize ] = useState({ width: 500, height: 500, col: 3, img: 165 });

   const handleResize = () => {
      const width = window.innerWidth;
      console.log('width: ', width);
      if ( width > 1200) {
         setSize({ width: 456, height: 456, col: 3, img: 150});
      } else if ( width > 900 ) {
         setSize({ width: 353, height: 353, col: 2, img: 150});
      } else {
         setSize({ width: 200, height: 200, col: 1, img: 198});
      };
   };
   useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);
   
   return (
      <div className={styles.container}>
         <Typography variant='h4' className={styles.slogan}>LG, A tale of challenge and ceaseless innovation</Typography>
         {histories.map((genHistory, idx1) => (
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
                  <ImageList sx={{ w: size.width, h: size.height }} cols={ size.col } rowheight={ size.img } >
                     {genHistory.imgs.map((img, idx) => (
                        <ImageListItem key={idx} >
                           <Image src={`${img.url}?w=164&h=164&fit=crop&auto=format&drp=2`} 
                              width={ size.img } height={ size.img } style={{ objectFit: 'contain', }} alt={img.name} loading='lazy' />
                           <ImageListItemBar title={img.name} />
                        </ImageListItem>
                     )) }
                  </ImageList>
               </div>
            </div>
         ))}
      </div>
   );
};

export default LGHistory ;