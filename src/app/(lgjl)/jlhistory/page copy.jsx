'use client';

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const JLHistory = () => {
   return (
      <div className={styles.container}>
         <div className={styles.imgContainer}>
            <Image src='/images/jlab/jlhistory_en.jpg' width={1083} height={587} className={styles.img} alt='Japan Lab History'/>
         </div>         
      </div>
   );
};

export default JLHistory;