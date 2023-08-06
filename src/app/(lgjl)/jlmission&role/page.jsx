'use client';

import React from 'react';
import styles from './page.module.css';
import { Typography } from '@mui/material';

const JLMissionRole = () => {
   return (
      <div className={styles.container}>
         <div className={styles.mission_1}>
            <Typography variant='h5'>MISSION STATEMENT</Typography>
            <div className={styles.mission_2}>
               <Typography className={styles.mission_3}>Through early detection, verification and securing of Japan&apos;s strengths in technology (materials/parts, etc.), 
               Japan Laboratory will contribute the improvement of business competitiveness and competence preparation for the future of affiliated companies.</Typography>
            </div>
         </div>
         <div className={styles.slogan_1}>
            <Typography variant='h5'>SLOGAN</Typography>
            <div className={styles.slogan_2}>
               <Typography variant='h6' className={styles.slogan_3}>Future Life, With Our Technology !</Typography>
            </div>
         </div>
         <div className={styles.fields_1}>
            <Typography variant='h5'>R&D FIELDS</Typography>
            <div className={styles.fields_2}>
               <div className={styles.fields_3}>
                  <Typography variant='h6' className={styles.fields_4}>Electronics Field</Typography>
                  <div className={styles.fields_5}>
                     <Typography>Product Development (Home Appliances & Home Entertainments) for Japan Market</Typography>
                     <Typography>- Technologies Development for Washing Machines, Refrigerators, Air Conditioners, Air Purifiers, etc.</Typography>
                     <Typography>- Picture Quality Improvement, Software Development, and Peripheral Device Evaluation for TVs</Typography>
                     <Typography>Quantum Computer Application</Typography>
                     <Typography>OLED Materials & Functional Materials Develoment for Displays</Typography>
                     <Typography>Optical Design Technologies for Camera Module</Typography>
                     <Typography>Semiconductor Packaging Technologies</Typography>
                  </div>
               </div>
               <div className={styles.fields_3}>
                  <Typography variant='h6' className={styles.fields_4}>Chemicals Field</Typography>
                  <div className={styles.fields_5}>
                     <Typography>Material & Manufacturing Processes Development for Rechargeable Battery</Typography>
                     <Typography>Technologies for Sustainability (Bio-based, Recycled, and Carbon Neutrality)</Typography>
                     <Typography>Material Design Technologies using Material Informatics</Typography>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.oi_1}>
            <Typography variant='h5'>OPEN INNOVATION</Typography>
            <Typography className={styles.oi_2}>
               To contribute to the group&apos;s future technology preparation and creation of new business opportunities,
               Technology Center Japan (Organization for Open Innovations in Japan Laboratory) conducts
               technology information researches of companies, research institutes, universities, etc. in Japan,
               and, as a result, proposes and implements various forms of cooperation models.
            </Typography>
         </div>
      </div>
   );
};

export default JLMissionRole;