'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import moment from 'moment/moment';
import { useRouter } from 'next/navigation';

const Read = ({ params }) => {

   const { id } = params;

   const theme= useTheme();

   const [ bulletin, setBulletin ] = useState({});

   useEffect(() => {
      const url = `/api/bulletins/${id}`;
      fetch(url, { method: 'GET', cache: 'no-store' })
         .then (response => response.json())
         .then (result => { 
            const { bulletin } = result;
            setBulletin( bulletin );
         })
         .catch (error => { throw new Error(error); });
   },[id]);

   const router = useRouter();

   const handleDelete = () => {
      const confirmed = confirm('are you sure ?');
      if (confirmed) {
         router.push(`/bulletins/delete/${bulletin._id}`);
      }
   };

   return (
      <Box sx={{ width: '100%', my: '5vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5vh' }} > 
         <Paper sx={{ width: '100%' }}>
            <Box sx={{ p: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
               <Typography variant='body2'>Title : {bulletin.title}</Typography>
               <Box sx={{ display: 'flex', justifyContent: 'right', gap: '30px', [theme.breakpoints.down('md')]: { display : 'block' }}}>
                  <Typography variant='body2' sx={{ width: '200px', }}>Author : {bulletin.author}</Typography>
                  <Typography variant='body2' sx={{ width: '200px', }}>Date : {moment(bulletin.createdAt).format('YYYY-MM-DD HH:mm:ss') }</Typography>
               </Box>
            </Box>
            <Divider />
            <Typography 
               variant='body2' 
               sx={{ width: '100%', p: '10px', textDecoration: 'none', whiteSpace: 'pre', }} 
               dangerouslySetInnerHTML = {{ __html: bulletin.bulletin}}
            />
            <Divider />
            <Box sx={{ p: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
               <Link href='/bulletins'>
                  <Button sx={{ ml: '20px', px: '10px', width: 'max-contnt', '&:hover': { color: 'var(--color-LGred)', } }}>
                     <Typography><ArrowBackOutlinedIcon sx={{ mb: -0.8 }} /> Bulletin</Typography>
                  </Button>
               </Link>
               <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', pr: '10px', mr: '20px', }}>
                  <Link href={`/bulletins/update/${bulletin._id}`}>
                     <Button sx={{ width: 'max-contnt', px: '10px', '&:hover': { color: 'var(--color-LGred)', } }}>
                        <Typography><EditOutlinedIcon sx={{ mb: -0.8 }}/> Edit</Typography>
                     </Button>
                  </Link>
                  <Button onClick={handleDelete} sx={{ width: 'max-contnt', px: '10px', '&:hover': { color: 'var(--color-LGred)', } }}>
                     <Typography><DeleteOutlineOutlinedIcon sx={{ mb: -0.8 }}/> Delete</Typography>
                  </Button>
               </Box>
            </Box>
         </Paper>
      </Box>
   );
};

export default Read;