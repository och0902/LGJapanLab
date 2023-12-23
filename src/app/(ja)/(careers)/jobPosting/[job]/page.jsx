'use client';

import React from 'react';
import styles from '../page.module.css';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { jobPostings } from '../jobPosting';
import Link from 'next/link';

const JobDetail = ({ params }) => {

   const { job } = params;
   const [ type, id ]  = job.split('_');

   const theme = useTheme();

   return (
      <Box className='pageContainer'>
         <Box sx={{ width: '100%' }}>

            <Box sx={{ width: '80%', m: 'auto',	display: 'flex', justifyContent: 'space-between', alignItems: 'center',
               [theme.breakpoints.down('lg')]: { width: '100%' } }}>
               <Box sx={{ fontSize: '2rem', color: 'var(--color-LGred)', [theme.breakpoints.down('sm')]: { fontSize: '1.75rem' } }}>採用情報</Box>
               <Link href='/recruit' className={styles.buttonRed}>
                  <Box sx={{ p: '10px 20px', backgroundColor: 'var(--color-LGred)', color: 'var(--color-white)',  
                     textAlign: 'center',	borderRadius: '26px', boxShadow: '3px 3px 3px var(--color-LGgray)' }}>採用 申し込み</Box>
               </Link>
            </Box>

            <Box sx={{ width: '100%', mt: '10px', backgroundColor: 'var(--color-LGgray-light)', color: 'var(--color-black)' }}>
               <Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')]: { width: '100%' } }}>
                  { jobPostings.map((jobPosting, i) => ( jobPosting.type === type && (
                     jobPosting.jobs.map((job, j) => ( job.id === id && (
                        job.details.map((detail, k) => (
                           <Box key={k} sx={{ p: '20px 5px', lineHeight: '150%', borderBottom: '1px solid var(--color-white)', display: 'flex' }}>
                              <Box sx={{ flexBasis: '20%' }}>{detail.item}</Box>
                              <Box sx={{ flexBasis: '80%' }}>
                                 {detail.contents && detail.contents.map((content, l) => (
                                    <Box key={l}>{content}</Box>
                                 ))}
                              </Box>
                           </Box>
                        ))
                     ))
                  ))
               ))}
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default JobDetail;