'use client';

import React, { useState, useRef, useEffect,} from 'react';
import styles from './Navbar.module.css';
import { links, languages } from './NavMenu';
import Link from 'next/link';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {

   const router = useRouter();

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
   const handleLanguage = (e) => {
      e.preventDefault();

      const lang = e.target.value;
      setLanguage(lang);
      
      switch (lang) {
         case 'Eng':
            router.push('/');
            break;
         case 'Jpn':
            router.push('/ja');
            break;
      };
   };

   return (
      <Box sx={{ position: 'fixed', top: '0', left: '0', width: '100%', backgroundColor: 'var(--color-bg)', zIndex: '100'}}>
         <Box className={styles.navContainer}>
            <Box sx={{ height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
               <Link href='/' style={{ textDecoration: 'none', zIndex: '110' }}>
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

                  <li className={styles.listSpace}></li>

                  <li className={styles.listItem} style={{ padding: '10px', display: 'flex', alignItems: 'center' }} >
                     <select className={styles.languageSelect} value={language} onChange={handleLanguage} >
                        <option value='Eng'>Eng</option>
                        <option value='Jpn'>Jpn</option>
                     </select>
                  </li>
               </ul>

            </Box>
         </Box>
      </Box>   
   );
};

export default Navbar;
