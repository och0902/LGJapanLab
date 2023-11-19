'use client';

import React, { useState, useRef, useEffect,} from 'react';
import styles from './Navbar.module.css';
import { links, languages } from './NavMenu';
import Link from 'next/link';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {

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

   const [ language, setLanguage ] = useState('Eng');

   const router = useRouter();
   
   const handleLanguage = (e) => {
      e.preventDefault();

      const lan = e.target.value;
      setLanguage(lan);Image
      
      switch (lan) {
         case 'Eng':
            router.push('/');
            break;
         case 'Jpn':
            router.push('/ja');
            break;
      };
   };

   const session = useSession();

   return (
      <Box sx={{ position: 'fixed', top: '0', left: '0', width: '100%', backgroundColor: 'var(--color-bg)', zIndex: '100'}}>
         <Box className={styles.navContainer}>
            <Box sx={{ height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
               <Link href='/' style={{ textDecoration: 'none', zIndex: '110' }}>
                  {/* <Image src='/images/LG-logo.png' width={93} height={70} alt='LG logo' loading='lazy' />
                  <Box sx={{ color: 'var(--color-LGgray)', fontSize: '18px', fontWeight: '800', mt: '-15px', pl: '50px' }}>
                     Japan Lab Inc.</Box> */}
                  <Image src='/images/LGJapanLabInc.png' priority='high' width={160} height={55} alt='LG Japan Lab' />
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
                              {link.title}
                              <KeyboardArrowDownIcon className={styles.dropdownArrow} />
                           </Link>
                           <ul className={styles.dropdownContainer}>
                              <Box className={styles.dropdownItem}>
                                 {link.subLinks.map((subLink, j) => (
                                    <li key={j} className={styles.dropdownList}>
                                       <Link href={subLink.url} className={styles.dropdownTitle} onClick={ShowMenu}>
                                          <Box sx={{ padding: '5px 20px' }}>{subLink.title}</Box>
                                       </Link>
                                    </li>
                                 ))}
                              </Box>
                           </ul>
                        </li>
                     ) : (
                        <li key={i} className={styles.listItem}>                           
                           <Link href={link.url} className={styles.listTitle} style={{ pointerEvents: 'initial' }} onClick={ShowMenu}>
                              {link.title}
                           </Link>
                        </li>
                     )
                  ))}

                  {session.status === 'authenticated' && (
                     <li className={styles.listItem} >
                        <Link href='/bulletins' className={styles.listTitle} style={{ pointerEvents: 'initial' }}>
                           Bulletin
                        </Link>
                     </li>
                  )}

                  <li className={styles.listSpace}></li>

                  <li className={styles.listItem} style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                     <FormControl variant='standard' sx={{ p: 0, minWidth: 60 }}>
                        <Select value={language} onChange={handleLanguage} sx={{ color: 'var(--color-LGgray)', '&:hover': { color: 'var(--color-LGred)' } }} >
                           {languages.map((language, i) => (
                              <MenuItem key={i} sx={{ pl: '10px', color: 'var(--color-LGgray)' }} value={language.language}>{language.language}</MenuItem>
                           ))}
                        </Select>
                     </FormControl>
                  </li>

                  {session.status !== 'authenticated' ? 
                     ( 
                        <li className={styles.listItem} >
                           <Link href='/signIn' className={styles.listTitle} style={{ padding: '10px', pointerEvents: 'initial' }}>
                              <LockOutlinedIcon sx={{ mb: '-5px' }} />
                           </Link>
                        </li>
                     ) : (
                        <li className={styles.listItem} >
                           <Link href='/signIn' className={styles.listTitle} style={{ padding: '10px', pointerEvents: 'initial' }} onClick={signOut}>
                              <LockOpenOutlinedIcon sx={{ mb: '-5px' }}/>
                           </Link>
                        </li>
                     )
                  }

               </ul>
            </Box>
         </Box>
      </Box>   
   );
};

export default Navbar;