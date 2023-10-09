'use client';

import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const SignUp = () => {

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
            response.statusCode = 201 && router.push('/bulletins/signIn');
   
         } catch (err) {
            toast.error('something went wrong ...');
            setErr(true);
         };
      };

   };

   return (
      <Box sx={{ width: '100%', heght: '100vh', my: '10vh', }}>
         <Paper sx={{ width: '500px', m: 'auto',  p: '30px', 
                     display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}
         >
            <Typography variant='h5'>SIGN UP</Typography>
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
                     sx={{ width: '250px', height: '40px', }}
                  >Sign Up</Button>
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

export default SignUp;