'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { videos, mediaList, relatedList } from './pageData';

const Root = () =>  {

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
            <div className='mb-[10px] text-[2rem] lg:text-[2.5rem] font-bold'>メディア</div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-1'>
               { mediaList.map((media, i) => (
                  <div key={i}>
                     <Link href={media.url} target='_blank'>
                        <div className='w-full aspect-[16/9] relative cursor-pointer overflow-hidden'>
                           <Image src={media.thumbnail} fill sizes='width: 100%' alt='Media'
                              className='object-contain transition ease-in-out duration-1000 hover:scale-[1.3]' />
                        </div>
                     </Link>
                     <div className='sm:text-[1.25rem]'>{media.title}</div>
                  </div>
               ))}
            </div>
         </div>

         <div className='w-full lg:w-[80%] m-auto'>
            <div className='mb-2 text-[2rem] lg:text-[2.5rem] font-bold'>LGグループ チャンネル</div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-1'>
               { relatedList.map((related, i) => (
                  <div key={i}>
                     <Link href={related.url} target='_blank'>
                        <div className='w-full aspect-[16/9] relative cursor-pointer overflow-hidden'>
                           <Image src={related.thumbnail} fill sizes='width: 100%' alt='LG Group Subsidiary'
                              className='object-contain transition ease-in-out duration-1000 hover:scale-[1.3]' />
                        </div>
                     </Link>
                     <div className='sm:text-[1.25rem]'>{related.company}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Root;