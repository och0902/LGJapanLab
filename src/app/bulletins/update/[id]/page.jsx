'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Link, Paper, TextField, Typography } from '@mui/material';
import { redirect, useRouter } from 'next/navigation';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const Update = ({ params }) => {

   const router = useRouter();

   const [ newTitle, setNewTitle ] = useState('');
   const [ newAuthor, setNewAuthor ] = useState('');
   const [ newBulletin, setNewBulletin ] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
   
      try {
         const url = `/api/bulletins/${id}`;
         fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ newTitle, newAuthor, newBulletin }), 
         })
         .then (response => {
            if ( !response.ok ) {
               throw new Error('Failed to update topic');
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

   const { id } = params;

   useEffect(() => {
      const url = `/api/bulletins/${id}`;
      fetch(url, { method: 'GET', cache: 'no-store' })
         .then (response => response.json())
         .then (data => { 
            const { bulletin } = data;
      
            setNewTitle(bulletin.title);
            setNewAuthor(bulletin.author);
            setNewBulletin(bulletin.bulletin);
         })
         .catch (error => { throw new Error(error); });
   },[id]);

   return (
      <Paper sx={{ my: '10vh', display: 'flex', flexDirection: 'column', gap: '15px', }}>
         <form onSubmit={handleSubmit}>
            <Box>
               <Box variant='body1' sx={{ p: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                  <TextField
                     placeholder='Title'
                     onChange={(e) => setNewTitle(e.target.value)}
                     value={newTitle}
                     sx={{ width: '100%', textDecoration: 'none', }}   
                  />
               </Box>
               <Divider />
               <Box variant='body1' sx={{ p: '15px', }}>
                  <TextField
                     placeholder='Contents'
                     multiline
                     rows={20}
                     onChange={(e) => setNewBulletin(e.target.value)}
                     value={newBulletin} 
                     sx={{ width: '100%', textDecoration: 'none' }}   
                  />                     
               </Box>
            </Box>
            <Divider />
            <Box sx={{ ml: '20px', p: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
               <Link href='/bulletins'>
                  <Button sx={{ width: 'max-contnt', px: '10px', '&:hover': { color: 'var(--LG-simbolmark)', } }}>
                     <Typography><ArrowBackOutlinedIcon sx={{ mb: -0.8 }} /> Bulletin</Typography>
                  </Button>
               </Link>
               <Box sx={{ display: 'flex', alignItems: 'center', pr: '10px', mr: '20px', }}>
                  <Button type='submit' sx={{ width: 'max-contnt', px: '10px', '&:hover': { color: 'var(--LG-simbolmark)', } }}>
                     <Typography><UpgradeIcon sx={{ mb: -0.8 }}/> Update</Typography>
                  </Button>
               </Box>
            </Box>
      </form>
   </Paper>
   );
};

export default Update;