'use client';

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { Typography } from '@mui/material';

const JLHistory = () => {
   return (
      <div className={styles.container}>
         <Typography variant='h5'>LG&apos;s JAPAN AREA R&D ORGANIZATION HISTORY</Typography>
         <div className={styles.affiiiated_1}>
            <Typography variant='h6' sx={{ flex: 3 }} className={styles.affiliated_2}>Electronincs Affiliated</Typography>
            <Typography variant='h6' sx={{ flex: 2 }} className={styles.affiliated_2}>Chemicals Affiliated</Typography>
         </div>
         <div className={styles.company_1}>
            <div className={styles.company_2}>
               <Typography className={styles.company_3}>LG Elctronics</Typography>
               <Typography variant='body2'>1971 LGC Japan Office</Typography>
               <Typography variant='body2'>1981 HITEC Engineering</Typography>
               <Typography variant='body2'>1986 GoldStar Japan</Typography>
               <Typography variant='body2'>1988 GoldStar Tokyo Lab</Typography>
               <Typography variant='body2'>1995 LGE Tokyo Lab</Typography>
            </div>
            <div className={styles.company_2}>
               <Typography className={styles.company_3}>LG Display</Typography>
               <Typography variant='body2'>2004 LGD Japan Lab</Typography>
            </div>
            <div className={styles.company_2}>
               <Typography className={styles.company_3}>LG Innotek</Typography>
               <Typography variant='body2'>2010 LGIT Japan Lab</Typography>
            </div>
            <div className={styles.company_2}>
               <Typography className={styles.company_3}>LG Chem</Typography>
               <Typography variant='body2'>2006-08 LGC Japan Lab</Typography>
               <Typography variant='body2'>2011 LGC Japan Lab</Typography>
            </div>
            <div className={styles.company_2}>
               <Typography className={styles.company_3}>LG Energy Solution</Typography>
               <Typography variant='body2'>2021 LGES Separation</Typography>
            </div>            
         </div>
         <div className={styles.jlab_1}>
            <Typography className={styles.jlab_2}>2017.07 LG Japan Lab Inc.</Typography>
            <Typography variant='body2'>Integrated corporation of five affiliated research institutes @Shinagawa Glass Cube</Typography>
         </div>
         <div className={styles.jlab_1}>
            <Typography className={styles.jlab_2}>2022.02 LG Japan Lab Inc.</Typography>
            <Typography variant='body2'>Laboratory relocation @Yokohama Innovation Center</Typography>
         </div>
      </div>
   );
};

export default JLHistory;