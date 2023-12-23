'use client';

import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import Link from 'next/link';
import { VisitorState } from '../atom';
import { useRecoilState } from 'recoil';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const SignUp = () => {

   const [ visitorState, setVisitorState ] = useRecoilState(VisitorState);
   const theme = useTheme();
   const router = useRouter();

   const [ visitorData, setVisitorData ] = useState({});

   const handleSubmit = async (e) => {
      e.preventDefault();

      if ( !visitorData.email || !visitorData.password ) {
         toast.error('please enter an email and password ...');
      } else {
         try {
            fetch('/api/visit/auth', {
               method: 'POST',
               headers: { 'Content-type': 'application/json' },
               body: JSON.stringify( visitorData ),
            }).then ((response) => {
               if( response.ok ) return response.json();
            }).then ((result) => {
               setVisitorState(result);
               if(result.auth === 'authenticated') {
                  toast.success('sign in successfully ...');
                  router.push('/visitLGJL/applyForm');
               } else {
                  toast.error('sign In failure ...');
                  router.push('/visitLGJL'); router.refresh();
               };
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
               <Box sx={{ fontSize: '1.5rem', textAlign: 'center' }}>Sign In</Box>
               <form onSubmit={handleSubmit}>
                  <Box sx={{ mt: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', }} >
                     <TextField type='text' label='Email' variant='standard' sx={{ width: '300px', }}
                        onChange={(e) => setVisitorData({ ...visitorData, email: e.target.value })} />
                     <TextField type='password' label='Password' variant='standard' sx={{ width: '300px', }}          
                        onChange={(e) => setVisitorData({ ...visitorData, password: e.target.value })} />
                     <Button type='submit' variant='outlined'   
                        sx={{ width: '300px', height: '50px', mt: '50px', '&:hover': { color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)' } }}>
                           Sign In
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