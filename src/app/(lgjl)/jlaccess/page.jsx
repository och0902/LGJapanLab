'use client';

import React from 'react';
import styles from './page.module.css';
import { Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const JLAccess = () => {
   return (
      <div className={styles.container}>
         <div className={styles.site_1}>
            <div className={styles.site_2}>
               <Typography variant='h5' sx={{ mb: 2 }}>LG JAPAN LAB YOKOHAMA SITE</Typography>
               <Typography>LG Yokohama Innoavation Center 7F</Typography>
               <Typography>1-2-13, Takashima, Nishi-ku, Yokohama-shi, Kanagawa 220-0011</Typography>
               <Typography sx={{ mb: 1 }}>+81-45-345-9200</Typography> 
               <Link href='https://goo.gl/maps/mXY743xbUauLgeq28' className={styles.link}>
                  <Typography>SITE Map <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Typography>
               </Link>
               <Link href='https://www.lgyic.com/' className={styles.link}>
                     <Typography>LG YOKOHAMA INNOVATION CENTER <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Typography>
               </Link>
               
            </div>
         </div>
         <div className={styles.site_1}>
            <div className={styles.site_2}>
               <Typography variant='h5' sx={{ mb: 2 }}>LG JAPAN LAB KYOTO SITE</Typography>
               <Typography>KYOTO REASEARCH PARK NO.2-4F</Typography>
               <Typography>134, Chudoji Minami-cho, Shimogyo-ku, Kyoto-shi, Kyoto 600-8813</Typography>
               <Typography sx={{ mb: 1 }}>+81‐75-275-7330</Typography>      
               <Link href='https://goo.gl/maps/K4aRwRyqdkk' className={styles.link}>
                  <Typography>SITE Map <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Typography>
               </Link>
               <Link href='https://www.krp.co.jp/' className={styles.link}>
                  <Typography>KYOTO RESEARCH PARK <ArrowForwardIcon fontSize='small' sx={{ mb: -0.5 }}/></Typography>
               </Link>
            </div>
         </div>


         {/* <Image src='/images/jlab/jlaccess.png' width={754} height={522} alt='' /> */}



         {/* <Typography>JR「横浜」駅より</Typography>
         <Typography>・JR「新横浜」駅 - 14 min. JR「横浜」駅より横浜線利用。</Typography>
         <Typography>京急「羽田空港第1、2ターミナル」駅 - 28 min.「横浜」駅より京急線利用。「京急蒲田」駅軽油。</Typography>
         <Typography>JR「東京」駅 - 26 min. JR「横浜」駅より上野東京ライン利用。</Typography>
         <Typography>みなとみらい線</Typography>
         <Typography>新高島駅[2番出口] 徒歩 1分</Typography>
         <Typography>みなとみらい駅[1番出口] 徒歩 8分</Typography>
         <Typography>横浜市営地下鉄ブルーライン</Typography>
         <Typography>高島町駅[2番出口] 徒歩 7分</Typography>
         <Typography>JR線・東急線・京浜急行線・相鉄線</Typography>
         <Typography>横浜駅[東口] 徒歩10分</Typography>
         <Typography>※お車でお越しの際は近隣の駐車場をご利用ください。</Typography> */}



         {/* <Typography>JR線・近鉄線京都駅より、JR山陰線</Typography>
         <Typography>丹波口駅下車 徒歩5分</Typography>
         <Typography>阪急京都線・大宮駅より、市バス32系統</Typography>
         <Typography>「京都外大前」行き約5分</Typography>
         <Typography>「京都リサーチパーク前」下車 徒歩5分</Typography>
         <Typography>京阪電車・五条駅より、市バス80系統</Typography>
         <Typography>「京都外大前」行き約15分</Typography>
         <Typography>「京都リサーチパーク前」下車 徒歩5分</Typography> */}




      </div>
   );
};

export default JLAccess;