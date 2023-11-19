'use client';

import React, { useState } from 'react';
import { TextField, Button, Paper, Box, Grid } from '@mui/material';
import { useTheme } from '@emotion/react';
import { signIn } from 'next-auth/react';
import GetTime from '@/components/GetTime/GetTime';
import { toast } from 'react-hot-toast';

const SignIn = () => {

   const theme = useTheme();

   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');

   async function handleSubmit(e) {
      e.preventDefault();

      if ( !email || !password ) {
         toast.error('please enter an email and password ...');
      } else {
         // await connectDB().catch((error) => toast.error(error));
         // const user = await Users.find({ email: email });
         // const isAdmin = user.admin;
         const isAdmin = true;
         if ( !isAdmin ) {
            toast.error('not admin ...');
         } else {
            signIn( 'credentials', { email, password, redirect: false } )
            .then((callback) => {
               if ( callback?.error ) { toast.error(callback.error); };
               if ( callback?.ok && !callback.error )  { 
                  toast.success('sign in successfully ...'); 
               }
            });
         };
      } 
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
                     <Box sx={{ fontSize: '1.5rem', color: 'var(--color-LGgray)' }}>Sign In</Box>
                     <form onSubmit={handleSubmit}>
                        <Box sx={{ m: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', }} >
                           <TextField 
                              type= 'text'
                              label= 'email'
                              name= 'email'
                              onChange={(e) => setEmail( e.target.value )}
                              value={email}
                              variant= 'outlined'
                              size= 'small'
                              sx={{ width: '250px', }}
                           />
                           <TextField 
                              type= 'password'
                              label= 'password'
                              name= 'password'
                              onChange={(e) => setPassword( e.target.value )}
                              value={password}
                              variant= 'outlined'
                              size= 'small'
                              sx={{ width: '250px', }}
                           />
                           <Button 
                              type='submit'
                              variant='outlined'
                              sx={{ width: '250px', height: '40px', 
                                 '&:hover': { color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)' } }}
                           >
                              Sign In</Button>
                        </Box>
                     </form>
                  </Paper>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
};

export default SignIn;