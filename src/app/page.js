'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import pageData from './pageData';
import { Grid } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';


const Root = () =>  {

   const session = useSession();

   const { language } = useGlobalContext();
   const { pageTitle, videos, mediaList, relatedList } = pageData( language );

   const randomStart = Math.floor(Math.random() * videos.length);
   const [currentVideo, setCurrentVideo] = useState(randomStart);
   // const [currentVideo, setCurrentVideo] = useState(0);

   const handleVideoEnd = (e) => {
      e.preventDefault();

      // set the next video index
      const nextVideo = (currentVideo + 1) % videos.length;
      setCurrentVideo(nextVideo);
      // setCurrentVideo(randomVideo());
   };

   return (
      <div className='pageContainer'>
         <video src={videos[currentVideo]} width='100%' priority='high' autoPlay muted preload='auto' suppressHydrationWarning onEnded={handleVideoEnd} />
         <div className='w-full lg:w-[80%] m-auto'>
            <div className='mb-[10px] text-[2rem] lg:text-[2.5rem] font-bold'>{pageTitle[0]}</div>
            <Grid container>
               { mediaList.map((media, i) => (
                  <Grid key={i} item xs={6} sm={6} md={3} className='p-[3px]'>
                     <Link href={media.url} target='_blank'>
                        <div className='w-full aspect-[16/9] relative cursor-pointer overflow-hidden'>
                           <Image src={media.thumbnail} fill sizes='width: 100%' alt='Media'
                              className='object-contain transition ease-in-out duration-1000 hover:scale-[1.3]' />
                        </div>
                     </Link>
                     <div className='sm:text-[1.25rem]'>{media.title}</div>
                  </Grid>
               ))}
            </Grid>
         </div>

         <div className='w-full lg:w-[80%] m-auto'>
            <div className='mb-2 text-[2rem] lg:text-[2.5rem] font-bold'>{pageTitle[1]}</div>
            <Grid container>
               { relatedList.map((related, i) => (
                  <Grid key={i} item xs={6} sm={6} md={4} sx={{ p: '3px' }}>
                     <Link href={related.url} target='_blank'>
                        <div className='w-full aspect-[16/9] relative cursor-pointer overflow-hidden'>
                           <Image src={related.thumbnail} fill sizes='width: 100%' alt='LG Group Subsidiary'
                              className='object-contain transition ease-in-out duration-1000 hover:scale-[1.3]' />
                        </div>
                     </Link>
                     <div className='sm:text-[1.25rem]'>{related.company}</div>
                  </Grid>
               ))}
            </Grid>
         </div>
      </div>
   );
}

export default Root;