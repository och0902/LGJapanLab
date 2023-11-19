'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { toast } from 'react-hot-toast';

const page = () => {

   const [ title, setTitle ] = useState('');
   const [ file, setFile ] = useState({});

   const handleSubmit = async (e) => {
      e.preventDefault();

      console.log('file', file);

      const formData = new FormData();
      formData.set('title', title);
      formData.set('file', file);

      // for (const file of files) {
      //    console.log('file', file);
      //    formData.append('files', file);
      // };

      console.log('formData', formData);

      if (file) {

         try {
            await fetch('/api/tt', {
               method: 'POST',
               body: formData,
            }).then( response => {
               if( response.ok ) {
                  console.log(response);
                  toast.success('Your data was successfully delivered to the person in charge.');
               } else {
                  toast.error('failed to create a careers data');
               };
            });
   
         } catch(error) {
            toast.error(error);
         }

      }

   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input type='text' className={styles.input} onChange={(e) => setTitle(e.target.value)} />
            <br /><br />
            <input type='file' className={styles.input} onChange={(e) => setFile(e.target.files?.[0] || {})} />
            <br /><br />
            <button type='submit' className={styles.buttonRed}>Submit</button>
         </form>
      </div>
   )
}

export default page
