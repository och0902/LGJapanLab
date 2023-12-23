'use client';

import React, { useState } from 'react';
import { TextField, Button,  Box } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const SignUp = () => {

   const theme = useTheme();
   const router = useRouter();

   const [ visitorData, setVisitorData ] = useState({});
   const [ confirmPassword, setConfirmPassword ] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();

      if ( !visitorData.email || !visitorData.password || !visitorData.name || !confirmPassword ) {
         toast.error('missing Data ...');
      } else if ( visitorData.password !== confirmPassword ) {
         toast.error('password does not mactch ...');
      } else {
         try {
            fetch('/api/visit/signUp', {
               method: 'POST',
               headers: { 'Content-type': 'application/json' },
               body: JSON.stringify( visitorData ),
            }).then ((response) => {
               if( response.ok ) return response.json();
            }).then ((result) => {
               toast.success(result.message);
               router.push('/visitLGJL');
            });
         } catch (error) {
            toast.error(error.message);
         };
      };
   };

   return (
      <Box className='pageContainer'>
         <Box sx={{ width: '80%', m: 'auto', mt: 'var( --margin-basic)', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Box>
               <Box sx={{ fontSize: '1.5rem', textAlign: 'center' }}>Sign Up</Box>
               <form onSubmit={handleSubmit}>
                  <Box sx={{ mt: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', }} >
                     <TextField type='text' label='Email' variant='standard' sx={{ width: '300px', }}
                        onChange={(e) => setVisitorData({ ...visitorData, email: e.target.value })} />
                     <TextField type='password' label='Password' variant='standard' sx={{ width: '300px', }}          
                        onChange={(e) => setVisitorData({ ...visitorData, password: e.target.value })} />
                     <TextField type='password' label='Confirm Password' variant='standard' sx={{ width: '300px', }}
                        onChange={(e) => setConfirmPassword( e.target.value )} value={confirmPassword} />
                     <TextField type='text' label='Name' variant='standard' sx={{ width: '300px', }}
                        onChange={(e) => setVisitorData({ ...visitorData, name: e.target.value })} />
                     <TextField type='text' label='Mobile Number' variant='standard' sx={{ width: '300px', }}
                        onChange={(e) => setVisitorData({ ...visitorData, mobile: e.target.value })} />
                     <TextField type='text' label='Company Name' variant='standard' sx={{ width: '300px', }}
                        onChange={(e) => setVisitorData({ ...visitorData, company: e.target.value })} />
                     <TextField type='text' label='Position' variant='standard' sx={{ width: '300px', }}
                        onChange={(e) => setVisitorData({ ...visitorData, position: e.target.value })} />
                     <Button type='submit' variant='outlined'   
                        sx={{ width: '300px', height: '50px', mt: '50px', '&:hover': { color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)' } }}>
                           Sign Up
                     </Button>
                     <Button variant='text'>
                        <Link href='/visitLGJL' passHref>
                           Visit Application 으로 이동
                        </Link>
                     </Button>
                  </Box>
               </form>
            </Box>
         </Box>
      </Box>
   );
};

export default SignUp;