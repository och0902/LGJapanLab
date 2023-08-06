'use client';

import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const SignIn = () => {

   const session = useSession();
   const router = useRouter();

   const [ userData, setUserData ] = useState({ email: '', password: '' });

   switch ( session.status ) {

      case 'loading':
         return (
            <Box sx={{ width: '100%', heght: '100vh', my: '10vh', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
               LOADING ...
            </Box>
         );

      case 'unauthenticated':
         async function handleSubmit(e) {
            e.preventDefault();
   
            if ( !userData.email || !userData.password ) {
               toast.error('please enter an email and password ...');
            } else {
               signIn( 'credentials', { ...userData, redirect: false })
               .then((callback) => {
                  if ( callback?.error ) { toast.error(callback.error); };
                  if ( callback?.ok && !callback.error )  { 
                     toast.success('sign in successfully ...'); 
                     // redirect('/bulletins');
                     router.push('/bulletins');
                  }
               });
            };
         };
            
         return (
            <Box sx={{ width: '100%', heght: '100vh', my: '10vh', }}>
               <Paper sx={{ width: '500px', m: 'auto',  p: '30px', 
                           display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}
               >
                  <Typography variant='h5'>SIGN IN</Typography>
                  <Typography variant='body2' sx={{ mt: 2 }}>이메일과 패스워드를 입력하여 주세요</Typography>
                  <form onSubmit={handleSubmit}>
                     <Box sx={{ m: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', }} >
                        <TextField 
                           type='text'
                           label='email'
                           id='email'
                           value={userData.email}
                           onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                           variant='outlined'
                           size='small'
                           sx={{ width: '250px', }}
                        />
                        <TextField 
                           type='password'
                           label='password'
                           id='password'
                           value={userData.password}
                           onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                           variant='outlined'
                           size='small'
                           sx={{ width: '250px', }}
                        />
                        <Button 
                           type='submit'
                           variant='outlined'
                           sx={{ width: '250px', height: '40px', }}
                        >
                           Sign In</Button>
                        <Button variant='text'>
                           <Link href='/bulletins/signUp' passHref>
                              <Typography variant='body2'>Sign up 으로 이동</Typography>
                           </Link>
                        </Button>
                     </Box>
                  </form>
               </Paper>
            </Box>
         );

      case 'authenticated':
         // redirect('/bulletins');

   }

};

export default SignIn;