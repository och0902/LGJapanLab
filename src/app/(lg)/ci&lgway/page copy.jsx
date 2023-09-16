import React from 'react';
import styles from './page.module.css';
import { Typography } from '@mui/material';
import Image from 'next/image';

const LGWay = () => {

   return (
      <div className={styles.container}>
         <div className={styles.lgwayContainer}>
            <div className={styles.title}>
               <Typography variant='h5' sx={{ mb: 2 }}>LG Way</Typography>
               <Typography variant='h5'>The LG Way is LG&apos;s unique management philosophy,</Typography>
               <Typography variant='h5'>which guides the thoughts and actions of all LG associates.</Typography>
            </div>
            <div className={styles.lgwayDesc_1}>
               <div className={styles.lgwayDesc_2}>
                  <Typography variant='h5' className={styles.desc_3}>Vision</Typography>
                  <Image src='/images/lg/lgway/lgway01_en.jpg' width={500} height={157} alt='lgway' />
                  <Typography className={styles.desc_4}>The ultimate goal of LG is to be recognized as the market leader in business performance as well as in management practices</Typography>
               </div>
               <div className={styles.lgwayDesc_2}>
                  <Typography variant='h5' className={styles.desc_3}>Behavioral Mode</Typography>               
                  <Image src='/images/lg/lgway/lgway02_en.jpg' width={500} height={130} alt='lgway' />
                  <Typography className={styles.desc_4}>Ethical management and code of conduct to enable capability development and fair competition</Typography>
               </div>
               <div className={styles.lgwayDesc_2}>
                  <Typography variant='h5' className={styles.desc_3}>Management Principles</Typography>
                  <Image src='/images/lg/lgway/lgway03_en.jpg' width={500} height={130} alt='lgway' />
                  <Typography className={styles.desc_4}>The fundamental organizational principle guiding LG from beginning as a firm</Typography>
               </div>
            </div>
            <div className={styles.title}>
               <Typography variant='h6'>The LG Way aims to achieve LG&apos;s vision of &quot;No. 1 LG&quot;, by practicing &quot;People-oriented Management&quot;,</Typography>
               <Typography variant='h6'>and “Creating Values for Customers” through “Jeong-Do Management”.</Typography>
            </div>
         </div>
      </div>
   );
};

export default LGWay;