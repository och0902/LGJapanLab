'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Input, Paper, TextField, Typography } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Create = () => {

   const session = useSession();

   const [ title, setTitle ] = useState('');
   const [ author, setAuthor ] = useState('admin');
   const [ bulletin, setBulletin ] = useState('');

   useEffect(() => {
      if (session.status === 'authenticated') {
         setAuthor(session.data.user.name);
      };
   },[session]);
   
   const router = useRouter();

   const hadleSubmit = (e) => {
      e.preventDefault();
   
      if( !title || !bulletin ) {
         alert('title and bulettin are required.');
         return;
      };

      try {
         const url = '/api/bulletins';
         fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ title, author, bulletin }),
         })
         .then ((response) => {
            if( !response.ok ) {
               throw new Error('failed to create a article');
            };
         })
         .catch (error => { throw new Error(error); });
      } catch (error) {
         console.log(error);
      };
      // redirect('/bulletins');
      router.push('/bulletins');
      router.refresh();

   };

   return (
      <Paper sx={{ my: '10vh', display: 'flex', flexDirection: 'column', gap: '15px', }}>
         <form onSubmit={hadleSubmit}>
            <Box>
               <Box variant='body1' sx={{ p: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                  <TextField
                     placeholder='Title'
                     onChange={(e) => setTitle(e.target.value)}
                     value={title}
                     sx={{ width: '100%', textDecoration: 'none', }}   
                  />
               </Box>
               <Divider />
               <Box variant='body1' sx={{ p: '15px', }}>
                  <TextField
                     placeholder='Contents'
                     multiline
                     rows={20}
                     onChange={(e) => setBulletin(e.target.value)}
                     value={bulletin}
                     sx={{ width: '100%', textDecoration: 'none' }}   
                  />                     
               </Box>
            </Box>
            <Divider />
            <Box sx={{ p: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
               <Link href='/bulletins'>
                  <Button sx={{ ml: '20px', px: '10px', width: 'max-contnt', '&:hover': { color: 'var(--LG-simbolmark)', } }}>
                     <Typography><ArrowBackOutlinedIcon sx={{ mb: -0.8 }} /> Bulletin</Typography>
                  </Button>
               </Link>
               <Box sx={{ display: 'flex', alignItems: 'center', px: '10px', mr: '20px', }}>
                  <Button type='submit' sx={{ width: 'max-contnt', px: '10px', '&:hover': { color: 'var(--LG-simbolmark)', } }}>
                     <Typography><CreateNewFolderOutlinedIcon sx={{ mb: -0.8 }}/> Create</Typography>
                  </Button>
               </Box>
            </Box>
         </form>
      </Paper>
   );
};

export default Create; 