import React from 'react';
import styles from './page.module.css';
import { Box, Divider, Typography } from '@mui/material';

const JLMissionRole = () => {
   return (
		<Box className='pageContainer'>
         <Box className={styles.mission_1}>
            <Typography variant='h5'>Mission Statement</Typography>
            <Typography className={styles.mission_2}>Through early detection, verification and securing of Japan&apos;s strengths in technology (materials/parts, etc.), 
               Japan Laboratory will contribute the improvement of business competitiveness and competence preparation for the future of affiliated companies.</Typography>
         </Box>
         <Divider />
         <Box className={styles.slogan_1}>
            <Typography variant='h5'>Slogan</Typography>
            <Typography variant='h6' className={styles.slogan_2}>Future Life, With Our Technology !</Typography>
         </Box>
         <Divider />
         <Box className={styles.fields_1}>
            <Typography variant='h5'>R&D Fields</Typography>
            <Box sx={{ width: '100%', m: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'calc( var(--gap-basic) - 3dvh )' }}>
               <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3%' }}>
                  <Typography variant='h6' sx={{ flex: '1', textAlign: 'right' }}>Electronics Field</Typography>
                  <Box sx={{ flex: '4' }}>
                     <Typography>Product Development (Home Appliances & Home Entertainments) for Japan Market</Typography>
                     <Typography>- Technologies Development for Washing Machines, Refrigerators, Air Conditioners, Air Purifiers, etc.</Typography>
                     <Typography>- Picture Quality Improvement, Software Development, and Peripheral Device Evaluation for TVs</Typography>
                     <Typography>Quantum Computer Application</Typography>
                     <Typography>OLED Materials & Functional Materials Develoment for Displays</Typography>
                     <Typography>Optical Design Technologies for Camera Module</Typography>
                     <Typography>Semiconductor Packaging Technologies</Typography>
                  </Box>
               </Box>
               <Box sx={{ display: 'flex', flexDirection: 'row', gap: '3%' }}>
                  <Typography variant='h6' sx={{ flex: '1', textAlign: 'right' }}>Chemicals Field</Typography>
                  <Box sx={{ flex: '4' }}>
                     <Typography>Material & Manufacturing Processes Development for Rechargeable Battery</Typography>
                     <Typography>Technologies for Sustainability (Bio-based, Recycled, and Carbon Neutrality)</Typography>
                     <Typography>Material Design Technologies using Material Informatics</Typography>
                  </Box>
               </Box>
            </Box>
         </Box>
         <Divider />
         <Box className={styles.oi_1}>
            <Typography variant='h5'>Open Innovation</Typography>
            <Typography className={styles.oi_2}>
               To contribute to the group&apos;s future technology preparation and creation of new business opportunities,
               Technology Center Japan (Organization for Open Innovations in Japan Laboratory) conducts
               technology information researches of companies, research institutes, universities, etc. in Japan,
               and, as a result, proposes and implements various forms of cooperation models.
            </Typography>
         </Box>
         <Divider />
      </Box>
   );
};

export default JLMissionRole;