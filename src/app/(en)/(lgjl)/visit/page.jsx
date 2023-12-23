'use client';

import React from 'react';
import { Box } from '@mui/material';
import styles from './page.module.css';
import { useTheme } from '@emotion/react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Link from 'next/link';
import Image from 'next/image';

const Visit = () => {

   const theme = useTheme();

   const applicationProcess = [ 'Application', 'Approval', 'Visit' ];

   return (
      <Box className='pageContainer' >
         <Box sx={{ width: '100%', aspectRatio: '1920/800', position: 'relative',
            [theme.breakpoints.down('md')] : { width: '150%' },
            [theme.breakpoints.down('sm')] : { width: '200%' }, }} >
            <Image src={'/images/lgjl/visit/visit.png'} priority='high' fill sizes='100%' alt='visit application' />
         </Box>
         
         <Box sx={{ position: 'absolute', width: '80%', m: 'auto', color: 'var(--color-white)', display: 'flex', justifyContent: 'space-between',
            [theme.breakpoints.down('lg')] : { width: '100%', pr: '50px' },
            [theme.breakpoints.down('md')] : { flexDirection: 'column', px: '25px' } }}>
            <Box sx={{ flexBasis: '50%', mb: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
               <Box sx={{ mb: '70px', fontSize: '3rem', 
                  textShadow: '5px 5px 5px var(--color-LGgray)',
                  [theme.breakpoints.down('md')] : { mb: '10px' },
                  [theme.breakpoints.down('sm')] : { fontSize: '2rem' } }}>
                  <Box>Visiting Appliction</Box>
               </Box>
               <Box sx={{ [theme.breakpoints.down('sm')]: { fontSize: '0.8rem'} }}>
                  This is a visit application for employees of LG affiliates
               </Box>
               <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                  { applicationProcess.map((process, i) => (
                     <React.Fragment key={i} >							
                        <Box sx={{ width: '130px', height: '130px', my: '10px', 
                           border: '10px solid var(--color-white)', borderRadius: '75px',
                           display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', 
                           [theme.breakpoints.down('lg')] : { width: '110px', height: '110px', border: '8px solid var(--color-white)', },
                           [theme.breakpoints.down('sm')] : { width: '75px', height: '75px', border: '5px solid var(--color-white)', }, }}>
                           <Box>{process}</Box>
                        </Box>
                        { i+1 !== applicationProcess.length && 
                           <PlayArrowIcon sx={{ m: '-5px', fontSize: '2.5rem', color: 'var(--color-LGred)', 
                              [theme.breakpoints.down('md')] : { fontSize: '1.5rem' } }} /> }
                     </React.Fragment>
                  ))}
               </Box>
            </Box>

            <Box sx={{ flexBasis: '45%', display: 'flex', justifyContent: 'space-between' }}>
               <Link href={'/visit/apply'} className={styles.link} style={{ flexBasis: '48%' }}>
                  <Box className={styles.linkBox} 
                     sx={{ backgroundColor: 'var(--color-LGred)', border: '2px solid var(--color-LGred)' }}>
                     <Box sx={{ width: '25%', aspectRatio: '1/1', position: 'relative', 
                        [theme.breakpoints.down('md')] : { width: '10%' } }}>
                        <Image src={'/images/lgjl/visit/apply.png'} fill sizes='100%' alt='apply' />
                     </Box>
                     <Box sx={{ fontSize: '1.2rem', [theme.breakpoints.down('sm')] : { fontSize: '0.8rem' } }}>
                        Visiting Application
                     </Box>
                  </Box>
               </Link>
               <Link href={'/visit/inquiry'} className={styles.link} style={{ flexBasis: '48%' }}>
                  <Box className={styles.linkBox} 
                     sx={{ backgroundColor: 'var(--color-LGgray)', border: '2px solid var(--color-LGgray)' }}>
                     <Box sx={{ width: '25%', aspectRatio: '1/1', position: 'relative',
                        [theme.breakpoints.down('md')] : { width: '10%' }  }}>
                        <Image src={'/images/lgjl/visit/inquiry.png'} fill sizes='100%' alt='inquiry' />
                     </Box>
                     <Box sx={{ fontSize: '1.2rem', [theme.breakpoints.down('sm')] : { fontSize: '0.8rem' } }}>
                        Application Inquiry</Box>
                  </Box>
               </Link>
            </Box>

         </Box>
      </Box>
   );
};

export default Visit;
