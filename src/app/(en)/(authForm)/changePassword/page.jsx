'use client';

import React, { useState } from 'react';
import { TextField, Button, Paper, Box, Grid } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useTheme } from '@emotion/react';
import GetTime from '@/components/GetTime/GetTime';

const ChangePassword = () => {

   const session = useSession();
   const theme = useTheme();
   const router = useRouter();

   const [ currentPassword, setCurrentPassword ] = useState('');
   const [ newPassword, setNewPassword ] = useState('');
   const [ confirmNewPassword, setConfirmNewPassword ] = useState('');

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
                        response.statusCode = 201 && router.push('/signIn');
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
      <Box className='pageContainer'>
         <Grid container>
            <Grid item xs={12} md={6}
               sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center',
               [theme.breakpoints.down('md')]: { justifyContent: 'center' } }}>
               <Box sx={{ width: '75%', height: '450px', [theme.breakpoints.down('md')]: { height: '150px' } }}>
                  <GetTime />
               </Box>
            </Grid>
            <Grid item xs={12} md={6} 
               sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center',
               [theme.breakpoints.down('md')]: { justifyContent: 'center' } }}>
               <Box sx={{ width: '75%', height: '450px' }}>
                  <Paper sx={{ width: '100%', height: '100%',
                     display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                     <Box sx={{ fontSize: '1.5rem', color: 'var(--color-LGgray)' }}>Change Password</Box>
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
                           <Button 
                              type='submit' 
                              variant='outlined' 
                              sx={{ width: '250px', height: '40px', 
                                 '&:hover': { color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)' }}}
                           >
                              Change Password
                           </Button>
                           <Button variant='text'>
                              <Link href='/signIn' passHref>
                                 <Box>Sign In 으로 이동</Box>
                              </Link>
                           </Button>
                        </Box>
                     </form>
                  </Paper>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
};

export default ChangePassword;