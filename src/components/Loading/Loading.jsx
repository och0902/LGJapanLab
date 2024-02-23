import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
   return (
      <div className='pageContainer h-screen'>
         <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}>
               <div></div>
               <div></div>
            </div>
         </div>
      </div>
   );
};

export default Loading;
