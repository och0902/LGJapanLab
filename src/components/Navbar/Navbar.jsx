'use client';

import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {

   const links = [
      {  title: 'LG',
         href: '',
         class: 'styles.',
         subLinks: [
            { title: 'History', href: '/lghistory', },
            { title: 'LG way & Affiliated', href: '/lgway&affiliated', }, 
         ],
      },
      {  title: 'Japan Lab',
         href: '',
         subLinks: [
            { title: 'History', href: '/jlhistory', },
            { title: 'Mission & Role', href: '/jlmission&role', },
            { title: 'Achievement', href: '/jlachievement', },
            { title: 'Access', href: '/jlaccess', },
         ],
      },
      {  title: 'Carrier',
         href: '/carrier',
      },
      {  title: 'Bulletin',
         href: '/bulletins', 
      },
   ];

   const languages = [ 'Eng', 'Jpn', 'Kor', ];

   const [ language, setLanguage ] = useState('Eng');
   
   const handleLanguage = (e) => {
      e.preventDefault();
      setLanguage(e.target.value);
      console.log('language: ', language);
   };

   const session = useSession();

   return (
      <Box sx={{ width: '100%', height: '80px', display: 'flex', flexDirection: 'row', 
                  justifyContent: 'space-between', alignItems: 'center', zIndex: '100' }}>
         <Link href='/' sx={{ textDecoration: 'none' }}>
            <Image src='/images/LG-logo.png' width={112} height={60} alt='LG logo' />
            <Box sx={{ color: 'var(--LG-logotype)', fontSize: '20px', fontWeight: '800', mt: '-15px', pl: '60px' }}>
               Japan Lab Inc.</Box>
         </Link>
         <ul style={{ width: '600px', height: '100%', display: 'flex',
                  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            {links.map((link, idx) => (
               <li key={idx} className={styles.link}
                  style={{ height: '100%', listStyle: 'none', position: 'relative', '&:hover': { color: 'blue' } }}>
                  <Link href={link.href} sx={{ height: '100%', lineHeight: '80px' }}>
                     <Typography sx={{ height: '100%', lineHeight: '80px', px: '10px', display: 'flex', 
                                       alignItems: 'center', '&:hover': { color: 'var(--LG-simbolmark)' } }}>
                        {link.title}
                        {link.subLinks && 
                           <KeyboardArrowDownIcon className={styles.arrow}
                              sx={{ height: '100%', lineHeight: '80px', width: '22px', textAlign: 'center', transition: 'all 0.5s ease', }} />}
                     </Typography>
                  </Link>
                  <ul className={styles.subLinks}
                     style={{ position: 'absolute', top: '50px', left: '0', width: 'max-content', padding: '10px', listStyle: 'none', backgroundColor: 'white', }}>
                     {link.subLinks && link.subLinks.map((subLink, idx) => (
                        <li key={idx}>
                           <Link href={subLink.href}>
                              <Typography sx={{ '&:hover': { color: 'var(--LG-simbolmark)', } }}>{subLink.title}</Typography>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </li>
            ))}
         </ul>   

         <Box sx={{ width: '150px',  height: '100%', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
            {session.status !== 'authenticated' 
               && <Link href='/bulletins/signIn' style={{ display: 'flex', alignItems: 'center', }} ><LoginIcon /></Link>}
            <select onChange={handleLanguage} 
               style={{ padding: '10px', border: 'none', outline: 'none', }} >
               {languages.map((language, idx) => ( 
                  <option key={idx} value={language}>{language}</option>
               ))}
            </select>
            {session.status === 'authenticated' 
               && <Link href='/bulletins/signIn' onClick={signOut} style={{ display: 'flex', alignItems: 'center', }} ><LogoutIcon /></Link>}
         </Box>
      </Box>
   );
};

export default Navbar;