'use client';

import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';

const ChangePassword = () => {

   const session = useSession();

   const [ currentPassword, setCurrentPassword ] = useState('');
   const [ newPassword, setNewPassword ] = useState('');
   const [ confirmNewPassword, setConfirmNewPassword ] = useState('');

   // console.log(session);

   switch ( session.status ) {

      case 'loading':
         return (
            <Box sx={{ width: '100%', heght: '100vh', my: '10vh', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
               LOADING ...
            </Box>
         );

      case 'unauthenticated':
         redirect('/bulletins/signIn');

      case 'authenticated':
         const handleSubmit = async (e) => {
            e.preventDefault();

            if ( !currentPassword || !newPassword || !confirmNewPassword ) {
               toast.error('missing Data ...');
            } else {
               signIn('credentials', { email: session.data.user.email, password: currentPassword, redirect: false })
               .then((callback) => { 
                  console.log('callback: ', callback);
                  if ( callback?.error ) { toast.error(callback.error); };
                  if ( callback?.ok || callback?.error )  {
                     // toast.success('confirm current password ...');
                     if ( newPassword !== confirmNewPassword ) {
                        toast.error('new password does not mactch ...');
                     } else {
                        // console.log(session);
                        const id = session.data.user.sub;
                        try {
                           const url = `/api/auth/${id}`;
                           fetch(url, {
                              method: 'PUT',
                              headers: { 'Content-type': 'application/json' },
                              body: JSON.stringify({ 
                                 name: session.data.user.name,
                                 email: session.data.user.email,
                                 newPassword }),
                           })
                           .then ((response) => {
                              toast.success('new password has been registered ...');
                              response.statusCode = 201 && router.push('/bulletins/signIn');
                           })
                        } catch (err) {
                           toast.error('something went wrong ...');
                        };
                     };
                  }
               });
            };
         };

         return (
            <Box sx={{ width: '100%', heght: '100vh', my: '10vh', }}>
               <Paper sx={{ width: '500px', m: 'auto',  p: '30px', 
                           display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}
               >
                  <Typography variant='h5'>PASSWORD CHANGE</Typography>
                  <form onSubmit={handleSubmit}>
                     <Box sx={{ m: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', }} >
                        <TextField 
                           type='text'
                           label='name'
                           id='name'
                           value={session.data.user.name}
                           variant='outlined'
                           size='small'
                           sx={{ width: '250px', }}
                        />
                        <TextField 
                           type='text'
                           label='email'
                           id='email'
                           value={session.data.user.email}
                           variant='outlined'
                           size='small'
                           sx={{ width: '250px', }}
                        />
                        <TextField 
                           type='password'
                           label='current password'
                           id='currentPassword'
                           value={currentPassword}
                           onChange={(e) => setCurrentPassword( e.target.value )}
                           variant='outlined'
                           size='small'
                           sx={{ width: '250px', }}
                        />
                        <TextField 
                           type='password'
                           label='new password'
                           id='newPassword'
                           value={newPassword}
                           onChange={(e) => setNewPassword( e.target.value )}
                           variant='outlined'
                           size='small'
                           sx={{ width: '250px', }}
                        />
                        <TextField 
                           type='password'
                           label='confirm new password'
                           id='confirmNewPassword'
                           value={confirmNewPassword}
                           onChange={(e) => setConfirmNewPassword( e.target.value )}
                           variant='outlined'
                           size='small'
                           sx={{ width: '250px', }}
                        />
                        <Button type='submit' variant='outlined' sx={{ width: '250px', height: '40px', }}>Change Password</Button>
                        <Button variant='text'>
                           <Link href='/bulletins/signIn' passHref>
                              <Typography variant='body2'>Sign In 으로 이동</Typography>
                           </Link>
                        </Button>
                     </Box>

                  </form>
               </Paper>
            </Box>
         );
   }; 
};

export default ChangePassword;