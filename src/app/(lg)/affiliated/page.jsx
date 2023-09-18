import React from 'react';
import styles from './page.module.css';
import { Box, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import affilated from './affiliated_en';
import Link from 'next/link';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const LGAffiliated = () => {

   return (
      <Box className='pageContainer'>
         <Box className={styles.affilatedContainer}>
            <Box className={styles.title}>
               <Typography variant='h5' sx={{ mb: '2dvh' }}>Affiliated Companies</Typography>
               <Typography variant='h6'>We create value for our customers</Typography>
            </Box>
            <Box className={styles.fieldContainer}>
               {affilated.map((field, i) => (
                  <>
                     <Box key={i} className={styles.field}>
                        <Typography variant='h5' sx={{ mb: '2dvh', display: 'flex', alignItems: 'center', gap: '10px' }} >
                           {field.icon}{field.fields}</Typography>
                        <Box className={styles.companyContainer}>
                           {field.companies.map((company, j) => (
                              <>
                                 <Link key={j} href={company.url} className={styles.company}>
                                    <Typography variant='h6' sx={{ mb: 1 }}>
                                       <KeyboardArrowRightOutlinedIcon sx={{ mb: -0.7 }} /> {company.name}
                                    </Typography>
                                    <Typography variant='body2' sx={{ paddingLeft: '3%', }}>{company.desc}</Typography>
                                 </Link>
                                 <Grid container>
                                    { company.videoclips && company.videoclips.map((videoclip, k) => (
                                       <Grid key={k} item xs={12} sm={6} md={3} sx={{ p: '3px' }}>
                                          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                             <Link href={videoclip.url} style={{ width: '100%', aspectRatio: '16/9', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                                                <Image src={videoclip.thumbnail} fill className={styles.thumbnail} loading='lazy' alt='Affiliated' />
                                                <Typography variant='h6' sx={{ position: 'absolute', top: '65%', left: '7%', color: 'white', fontWeight: 'bolder' }}>
                                                   {videoclip.title}
                                                </Typography>
                                             </Link>
                                          </Box>
                                       </Grid>
                                    ))} 
                                 </Grid>
                              </>
                           ))}
                        </Box>
                     </Box>
                     <Divider />
                  </>
               ))}
            </Box>
         </Box>         
      </Box>
   );
};

export default LGAffiliated;