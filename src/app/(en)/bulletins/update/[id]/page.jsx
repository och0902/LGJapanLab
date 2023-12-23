'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Link, Paper, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import TextEditor from '@/components/TextEditor/TextEditor';
import toolbarOptions from '@/config/toolbarOptions';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import UpgradeIcon from '@mui/icons-material/Upgrade';

const Update = ({ params }) => {

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
      router.push('/bulletins');
      router.refresh();
   };

   return (
      <Box className='pageContainer'>
         <Box sx={{ width: '100%', my: '5vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5vh' }} > 
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
               <form onSubmit={handleSubmit}>
                  <Box sx={{ p: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                     <TextField
                        type= 'text'
                        name= 'title'
                        label= 'Title'
                        onChange={(e) => setNewTitle(e.target.value)}
                        value={newTitle}
                        size= 'small'
                        sx={{ width: '100%', textDecoration: 'none', }}   
                     />
                  </Box>
                  <Divider />
                  <Box sx={{ p: '10px', }}>
                     <TextEditor 
                        value={newBulletin} 
                        style={{ width: '100%', minHeight: '40vh', }}
                        onChange={ setNewBulletin }
                        modules={toolbarOptions}
                     />
                  </Box>
                  <Divider />
                  <Box sx={{ ml: '20px', p: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                     <Link href='/bulletins'>
                        <Button sx={{ width: 'max-contnt', px: '10px', '&:hover': { color: 'var(--color-LGred)', } }}>
                           <Typography><ArrowBackOutlinedIcon sx={{ mb: -0.8 }} /> Bulletin</Typography>
                        </Button>
                     </Link>
                     <Box sx={{ display: 'flex', alignItems: 'center', pr: '10px', mr: '20px', }}>
                        <Button type='submit' sx={{ width: 'max-contnt', px: '10px', '&:hover': { color: 'var(--color-LGred)', } }}>
                           <Typography><UpgradeIcon sx={{ mb: -0.8 }}/> Update</Typography>
                        </Button>
                     </Box>
                  </Box>
               </form>
            </Paper>
         </Box>
      </Box>
   );
};

export default Update;