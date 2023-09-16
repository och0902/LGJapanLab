'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import toolbarOptions from '@/utils/toolbarOptions';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import { toast } from 'react-hot-toast';

const Create = () => {

   const session = useSession();
   const router = useRouter();

   const [ title, setTitle ] = useState('');
   const [ author, setAuthor ] = useState('');
   const [ bulletin, setBulletin ] = useState('');

   useEffect(() => {
      if (session.status === 'authenticated') {
         setAuthor(session.data.user.name);
      };
   },[session]);
   
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
               toast.error('failed to create a bulletin');
            };
         })
         .catch (error => { toast.error(error) });
      } catch (error) {
         toast.error('something went wrong ...');
      };
      router.push('/bulletins');
      router.refresh();

   };

   return (
      <Box sx={{ width: '100%' }}> 
         <Paper>
            <form onSubmit={hadleSubmit}>
               <Box variant='body1' sx={{ p: '10px' }}>
                  <TextField
                     type= 'text'
                     name= 'title'
                     label= 'Title'
                     onChange={(e) => setTitle(e.target.value)}
                     value={title}
                     size= 'small'
                     sx={{ width: '100%', textDecoration: 'none', }}   
                  />
               </Box>
               <Divider />
               <Box sx={{ p: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {/* <TextField
                     type= 'text'
                     name= 'contents'
                     label= 'Contents'
                     placeholder='Contents'
                     multiline
                     rows={15}
                     onChange={(e) => setBulletin(e.target.value)}
                     value={bulletin}
                     sx={{ width: '100%', textDecoration: 'none' }}   
                  />                      */}
                  <ReactQuill
                     value={bulletin}
                     style={{ width: '100%', minHeight: '40vh' }}
                     onChange={ setBulletin }
                     modules={toolbarOptions}
                  />
                  <Box sx={{ p: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                     <Link href='/bulletins'>
                        <Button sx={{ ml: '20px', px: '10px', width: 'max-contnt', '&:hover': { color: 'var(--color-LGred)', } }}>
                           <Typography><ArrowBackOutlinedIcon sx={{ mb: -0.8 }} /> Bulletin</Typography>
                        </Button>
                     </Link>
                     <Box sx={{ display: 'flex', alignItems: 'center', px: '10px', mr: '20px', }}>
                        <Button type='submit' sx={{ width: 'max-contnt', px: '10px', '&:hover': { color: 'var(--color-LGred)', } }}>
                           <Typography><CreateNewFolderOutlinedIcon sx={{ mb: -0.8 }}/> Create</Typography>
                        </Button>
                     </Box>
                  </Box>
               </Box>
            </form>
         </Paper>
      </Box>
   );
};

export default Create; 
