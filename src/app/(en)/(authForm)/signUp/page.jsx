'use client';

import React, { useState } from 'react';
import { TextField, Button, Paper, Box, Grid } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/navigation';
import GetTime from '@/components/GetTime/GetTime';
import { toast } from 'react-hot-toast';

const SignUp = () => {

   const theme = useTheme();
   const router = useRouter();

   const [ userData, setUserData ] = useState({ name: '', email: '', password: '' });
   const [ confirmPassword, setConfirmPassword ] = useState('');
   const [ err, setErr ] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();

      if ( !userData.name || !userData.email || !userData.password || !confirmPassword ) {
         toast.error('missing Data ...');
      } else if ( userData.password !== confirmPassword ) {
         toast.error('password does not mactch ...');
      } else {
         try {
            const response = await fetch('/api/auth/signUp', {
               method: 'POST',
               headers: { 'Content-type': 'application/json' },
               body: JSON.stringify( userData ),
            });
            toast.success('user has been registered ...');
            response.statusCode = 201 && router.push('/signIn');
   
         } catch (err) {
            toast.error('something went wrong ...');
            setErr(true);
         };
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
                     display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                     <Box sx={{ fontSize: '1.5rem', color: 'var(--color-LGgray)' }}>Sign Up</Box>
                     <form onSubmit={handleSubmit}>
                        <Box sx={{ m: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', }} >
                           <TextField 
                              type='text'
                              label='name'
                              id='name'
                              value={userData.name}
                              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                              variant='outlined'
                              size='small'
                              sx={{ width: '250px', }}
                           />
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
                           <TextField 
                              type='password'
                              label='confirm password'
                              id='confirmPassword'
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword( e.target.value )}
                              variant='outlined'
                              size='small'
                              sx={{ width: '250px', }}
                           />
                           <Button 
                              type='submit' 
                              variant='outlined'
                              sx={{ width: '250px', height: '40px',
                                 '&:hover': { color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)' } }}
                           >Sign Up</Button>
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

export default SignUp;