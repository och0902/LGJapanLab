'use client';

import React from 'react';
import styles from '../page.module.css';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { jobDetails } from './jobs';
import Link from 'next/link';

const JobDetail = ({ params }) => {

   let { job } = params;
   
   const theme = useTheme();

   return (
      <Box className='pageContainer'>
         <Box sx={{ width: '100%' }}>

            <Box sx={{ width: '80%', m: 'auto',	display: 'flex', justifyContent: 'space-between', alignItems: 'center',
               [theme.breakpoints.down('lg')]: { width: '100%' } }}>
               <Box sx={{ fontSize: '2rem', color: 'var(--color-LGred)', [theme.breakpoints.down('sm')]: { fontSize: '1.75rem' } }}>Recruitment information</Box>
               <Link href='/jlVisit' className={styles.buttonRed}>
                  <Box sx={{ p: '10px 20px', backgroundColor: 'var(--color-LGred)', color: 'var(--color-white)',  
                     textAlign: 'center',	borderRadius: '26px', boxShadow: '3px 3px 3px var(--color-LGgray)' }}>Recruitment Application</Box>
               </Link>
            </Box>

            <Box sx={{ width: '100%', mt: '10px', backgroundColor: 'var(--color-LGgray-light)', color: 'var(--color-black)' }}>
               <Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')]: { width: '100%' } }}>
                  { jobDetails.map((jobDetail, i) => ( jobDetail.job == job && 
                     ( jobDetail.details.map((detail, j) => (
                        <Box key={j} sx={{ p: '20px 5px', lineHeight: '150%', borderBottom: '1px solid var(--color-white)', display: 'flex' }}>
                           <Box sx={{ flexBasis: '20%' }}>{detail.item}</Box>
                           <Box sx={{ flexBasis: '80%' }}>
                              {detail.contents.map((content, k) => (
                                 <Box key={k}>{content}</Box>
                              ))}
                           </Box>
                        </Box>
                     )))
               ))}
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default JobDetail;