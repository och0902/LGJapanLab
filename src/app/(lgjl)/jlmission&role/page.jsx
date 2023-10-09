'use client';

import React from 'react';
import PageHero from '@/components/PageHero/PageHero';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';

const JLMissionRole = () => {

   const theme = useTheme();

   return (
		<Box className='pageContainer'>
         <PageHero image='/images/lgjl/JLMission&Ci.png' aspectRatio='1920/400' 
            title='Mission & Role'  color='var(--color-black)' />

         <Box sx={{ width: '80%', m: 'auto', mt: '5dvh', fontSize: '4rem', color: 'var(--color-black)', 
               [theme.breakpoints.down('md')] : { fontSize: '2.75rem' },
               [theme.breakpoints.down('sm')] : { fontSize: '2rem' } }}>
            <Box>Future Life<span style={{ color: 'var(--color-LGred)' }}>,</span></Box>
            <Box sx={{ mb: '10px' }}>With Our Technolgies<span style={{ color: 'var(--color-LGred)' }}> !</span></Box>
         </Box>

         <Box sx={{ width: '80%', m: 'auto' }}>
            <Box sx={{ fontSize: '2rem', mb: '10px' }}>Mission Statement</Box>
            <Box sx={{ fontSize: '1rem', lineHeight: '150%' }}>Through early detection, verification and securing of Japan&apos;s strengths in technology (materials/parts, etc.), 
               LG Japan Laboratory will contribute the improvement of business competitiveness and competence preparation for the future of LG affiliated companies.</Box>
         </Box>
         <Box sx={{ width: '100%', mt: '5dvh' }}>
            <Box sx={{ width: '80%', m: 'auto', fontSize: '2rem', mb: '10px', color: 'var(--color-LGred)' }}>R&D Fields</Box>
            <Box sx={{ width: '100%', backgroundColor: 'var(--color-LGgray-light)', color: 'var(--color-black)' }}>
               <Box sx={{ width: '80%', m: 'auto', py: '15px' }}>
                  <Box sx={{ fontSize: '1.5rem', py: '10px' }}>Electronic Field</Box>
                  <Box sx={{ py: '5px' }}>Product Development (Home Appliances & Home Entertainments) for Japan Market</Box>
                  <Box sx={{ pl: '10px' }}>- Technologies Development for Washing Machines, Refrigerators, Air Conditioners, Air Purifiers, etc.</Box>
                  <Box sx={{ pl: '10px',  pb: '5px' }}>- Picture Quality Improvement, Software Development, and Peripheral Device Evaluation for TVs</Box>
                  <Box sx={{ py: '5px' }}>Quantum Computer Application</Box>
                  <Box sx={{ py: '5px' }}>OLED Materials & Functional Materials Develoment for Displays</Box>
                  <Box sx={{ py: '5px' }}>Optical Design Technologies for Camera Module</Box>
                  <Box sx={{ py: '5px' }}>Semiconductor Packaging Technologies</Box>
               </Box>
               <Box sx={{ width: '80%', m: 'auto', py: '15px' }}>
                  <Box sx={{ fontSize: '1.5rem', py: '10px' }}>Chemical Field</Box>
                  <Box sx={{ py: '5px' }}>Material & Manufacturing Processes Development for Rechargeable Battery</Box>
                  <Box sx={{ py: '5px' }}>Technologies for Sustainability (Bio-based, Recycled, and Carbon Neutrality)</Box>
                  <Box sx={{ py: '5px', pb: '15px' }}>Material Design Technologies using Material Informatics</Box>
               </Box>
            </Box>
         </Box>
         <Box sx={{ width: '100%', mt: '5dvh' }}>
            <Box sx={{ width: '80%', m: 'auto', fontSize: '2rem', mb: '10px', color: 'var(--color-LGred)' }}>Open Innovation</Box>
            <Box sx={{ width: '100%', backgroundColor: 'var(--color-LGgray-light)', color: 'var(--color-black)'  }}>
               <Box sx={{ width: '80%', m: 'auto', py: '15px' }}>
                  <Box sx={{ py: '15px',  lineHeight: '150%' }}>To contribute to the group&apos;s future technology preparation and creation of new business opportunities,
                     Technology Center Japan (Organization for Open Innovations in Japan Laboratory) conducts
                     technology information researches of companies, research institutes, universities, etc. in Japan,
                     and, as a result, proposes and implements various forms of cooperation models.</Box>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default JLMissionRole;