'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Box, Button, Divider, Paper, TextField } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import TextEditor from '@/components/TextEditor/TextEditor';
import toolbarOptions from '@/config/toolbarOptions';
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

   const handleSubmit = (e) => {
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
            <form onSubmit={handleSubmit}>
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
                  <TextEditor          
                     value={bulletin}
                     style={{ width: '100%', minHeight: '40vh' }}
                     onChange={ setBulletin }
                     modules={toolbarOptions}
                  />
                  <Box sx={{ p: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                     <Link href='/bulletins'>
                        <Button sx={{ ml: '20px', px: '10px', width: 'max-contnt', '&:hover': { color: 'var(--color-LGred)', } }}>
                           <Box><ArrowBackOutlinedIcon sx={{ mb: -0.8 }} /> Bulletin</Box>
                        </Button>
                     </Link>
                     <Box sx={{ display: 'flex', alignItems: 'center', px: '10px', mr: '20px', }}>
                        <Button type='submit' sx={{ width: 'max-contnt', px: '10px', '&:hover': { color: 'var(--color-LGred)', } }}>
                           <Box><CreateNewFolderOutlinedIcon sx={{ mb: -0.8 }}/> Create</Box>
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
