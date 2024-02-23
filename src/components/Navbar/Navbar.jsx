'use client';

import React, { useState, useRef, useEffect,} from 'react';
import styles from './Navbar.module.css';
import NavMenu from './NavMenu';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';

const Navbar = () => {

   const { language, setLanguage } = useGlobalContext();
   const menus = NavMenu( language );

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

   return (
      <div className='fixed top-0 left-0 w-full bg-white z-10' >
         <div className={styles.navContainer}>
            <div className='h-full flex flex-wrap justify-between items-center' >
               <Link href='/' className='no-underline z-10'>
                  <Image src='/images/LGJapanLabInc.png' priority='high' width={160} height={55} alt='LG Japan Lab' />
               </Link>
               <div className={(showMenu ? styles.toggle + ' ' + styles.showIcon : styles.toggle)} onClick={ShowMenu}>
                  <MenuIcon className={styles.toggleMenu} />
                  <CloseIcon className={styles.toggleClose} />
               </div>
            </div>

            <div className={(showMenu ? styles.menuContainer + ' ' + styles.showMenu : styles.menuContainer)}>
               <ul className={styles.listContainer}>

                  <li className='grow'></li>

                  {menus.map((menu, i) => (
                     menu.subs ? (
                        <li key={i} className={styles.listItem} ref={(elem) => (dropdownItems.current[i] = elem)}>
                           <Link href='' className={styles.listTitle} onClick={() => handleClick(i)}>
                              {menu.mains.title}
                              <KeyboardArrowDownIcon className={styles.dropdownArrow} />
                           </Link>
                           <ul className={styles.dropdownContainer}>
                              <div className={styles.dropdownItem}>
                                 {menu.subs.map((subMenu, j) => (
                                    <li key={j} className={styles.dropdownList}>
                                       <Link href={subMenu.url} className={styles.dropdownTitle} onClick={ShowMenu}>
                                          <div className='py-1 px-5'>{subMenu.title}</div>
                                       </Link>
                                    </li>
                                 ))}
                              </div>
                           </ul>
                        </li>
                     ) : (
                        <li key={i} className={styles.listItem}>                           
                           <Link href={menu.mains.url} className={styles.listTitle} style={{ pointerEvents: 'initial' }} onClick={ShowMenu}>
                              {menu.mains.title}
                           </Link>
                        </li>
                     )
                  ))}

                  <li className='grow'></li>

                  <li className={styles.listItem} style={{ padding: '10px', display: 'flex', alignItems: 'center' }} >
                     <select className='p-2.5 text-LGgray border-none hover:cursor-pointer bg-LGgray-light md:bg-white' 
                        value={language} onChange={(e) => setLanguage(e.target.value)} >
                        <option value='Jpn'>Jpn</option>
                        <option value='Eng'>Eng</option>
                     </select>
                  </li>
               </ul>

            </div>
         </div>
      </div>   
   );
};

export default Navbar;