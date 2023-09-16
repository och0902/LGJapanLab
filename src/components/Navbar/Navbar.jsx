'use client';

import React, { useState, useRef, useEffect,} from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {

   const links = [
      {  title: 'LG',
         subLinks: [
            { title: 'History', url: '/lghistory' },
            { title: 'CI & LG way', url: '/ci&lgway' }, 
            { title: 'Affiliated', url: '/affiliated' },
            { title: 'Products', url: '/product' }
         ],
      },
      {  title: 'Japan Lab',
         subLinks: [
            { title: 'History', url: '/jlhistory' },
            { title: 'Mission & Role', url: '/jlmission&role' },
            { title: 'Key Research Area', url: '/jlkeyarea' },
            { title: 'Carrier', url: '/carrier' },
            { title: 'Contact Us', url: '/contact' }
         ],
      },
   ];

   const [ showMenu, setShowMenu ] = useState(false);
   const ShowMenu = () => {
      setShowMenu(!showMenu);
   };

   const [showDropdown, setShowDropdown] = useState(null);
   const dropdownItems = useRef([]);
   const toggleItem = (item) => {
      const dropdownContainer = item.querySelector(`.${styles.dropdownContainer}`);
      if (item.classList.contains(styles.showDropdown)) {
         dropdownContainer.removeAttribute('style');
         item.classList.remove(styles.showDropdown);
      } else {
         dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
         item.classList.add(styles.showDropdown);
      }
   };
   const handleClick = (index) => {
      const item = dropdownItems.current[index];
      toggleItem(item);
      if (showDropdown !== null && showDropdown !== index) {
         toggleItem(dropdownItems.current[showDropdown]);
      }
      setShowDropdown(index === showDropdown ? null : index);
   };

   const dropdownContainer = useRef([]);
   const removeStyle = () => {
      if ( window.innerWidth > 900 ) {
         dropdownContainer.current.forEach((e) => {
            e.removeAttribute('style');
         });
         dropdownItems.current.forEach((e) => {
            e.classList.remove(styles.showDropdown);
         });
      }
   };

   useEffect(() => {
      window.addEventListener("resize", removeStyle);
      return () => {
         window.removeEventListener("resize", removeStyle);
      };
   }, []);

   const languages = [
      { language: 'Eng', url: '#' },
      { language: 'Jpn', url: '#' },
      { language: 'Kor', url: '#'} 
   ];

   const [ language, setLanguage ] = useState('Eng');
   
   const handleLanguage = (e) => {
      e.preventDefault();
      setLanguage(e.target.value);
      // console.log('language: ', language);
   };

   const session = useSession();

   return (
      <Box sx={{ position: 'fixed', top: '0', left: '0', width: '100%', backgroundColor: 'var(--color-bg)', zIndex: '100'}}>
         <Box className={styles.navContainer}>
            <Box sx={{ height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
               <Link href='/' style={{ textDecoration: 'none', zIndex: '110' }}>
                  <Image src='/images/LG-logo.png' width={93} height={50} alt='LG logo' />
                  <Box sx={{ color: 'var(--color-LGgray)', fontSize: '18px', fontWeight: '800', mt: '-15px', pl: '50px' }}>
                     Japan Lab Inc.</Box>
               </Link>
               <Box className={(showMenu ? styles.toggle + ' ' + styles.showIcon : styles.toggle)} onClick={ShowMenu}>
                  <MenuIcon className={styles.toggleMenu} />
                  <CloseIcon className={styles.toggleClose} />
               </Box>
            </Box>

            <Box className={(showMenu ? styles.menuContainer + ' ' + styles.showMenu : styles.menuContainer)}>
               <ul className={styles.listContainer}>

                  <li className={styles.listSpace}></li>

                  {links.map((link, i) => (
                     link.subLinks ? (
                        <li key={i} className={styles.listItem} ref={(elem) => (dropdownItems.current[i] = elem)}>
                           <Link href='' className={styles.listTitle} onClick={() => handleClick(i)}>
                              <Typography>{link.title}</Typography>
                              <KeyboardArrowDownIcon className={styles.dropdownArrow} />
                           </Link>
                           <ul className={styles.dropdownContainer}>
                              <Box className={styles.dropdownItem}>
                                 {link.subLinks.map((subLink, j) => (
                                    <li key={j} className={styles.dropdownList}>
                                       <Link href={subLink.url} className={styles.dropdownTitle}>
                                          <Typography sx={{ padding: '5px 20px' }}>{subLink.title}</Typography>
                                       </Link>
                                    </li>
                                 ))}
                              </Box>
                           </ul>
                        </li>
                     ) : (
                        <li key={i} className={styles.listItem}>                           
                           <Link href={link.url} className={styles.listTitle} style={{ pointerEvents: 'initial' }}>
                              <Typography>{link.title}</Typography>
                           </Link>
                        </li>
                     )
                  ))}

                  {session.status === 'authenticated' && (
                     <li className={styles.listItem} >
                        <Link href='/bulletins' className={styles.listTitle} style={{ pointerEvents: 'initial' }}>
                           <Typography>Bulletin</Typography></Link>
                     </li>
                  )}

                  <li className={styles.listSpace}></li>

                  {session.status !== 'authenticated' ? 
                     ( 
                        <li className={styles.listItem} >
                           <Link href='/signIn' className={styles.listTitle} 
                              style={{ padding: '10px', pointerEvents: 'initial', display: 'flex', alignItems: 'center', gap: '5px' }}>
                              <Typography>Sign In</Typography><LoginIcon sx={{ mb: '-5px' }} /></Link>
                        </li>
                     ) : (
                        <li className={styles.listItem} >
                           <Link href='/signIn' className={styles.listTitle} 
                              style={{ padding: '10px', pointerEvents: 'initial', display: 'flex', alignItems: 'center', gap: '5px' }} onClick={signOut}>
                              <LogoutIcon sx={{ mb: '-5px' }}/><Typography>Sign Out</Typography></Link>
                        </li>
                     )
                  }

                  <li className={styles.listItem} style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                     <FormControl variant='standard' sx={{ p: 0, minWidth: 60 }}>
                        <Select value={language} onChange={handleLanguage} sx={{ color: 'var(--color-LGgray)', '&:hover': { color: 'var(--color-LGred)' } }} >
                           {languages.map((language, i) => (
                              <MenuItem key={i} sx={{ pl: '10px', color: 'var(--color-LGgray)' }} value={language.language}>{language.language}</MenuItem>
                           ))}
                        </Select>
                     </FormControl>
                  </li>

               </ul>
            </Box>
         </Box>
      </Box>   
   );
};

export default Navbar;