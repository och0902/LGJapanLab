import React from 'react';
import styles from './Loading.module.css';
import { Box } from '@mui/material';

const Loading = () => {
   return (
      <Box className='pageContainer' sx={{ height: '60dvh' }}>
         <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}>
               <div></div>
               <div></div>
            </div>
         </div>
      </Box>
   );
};

export default Loading;
