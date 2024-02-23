'use client';

import React from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import lgProducts from './lgProducts';
import PageHero from '@/components/PageHero/PageHero';
import { Grid } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const LGProducts = () => {

	const { language } = useGlobalContext();
	const { pageHero, products } = lgProducts( language );

   return (
		<div className='pageContainer'>
			<PageHero image='/images/lg/lgProducts/LGProducts.jpg' title={pageHero.title} message1={pageHero.message}/>
			<div className='w-full m-auto flex flex-col gap-[calc(var(--gap-base)*0.8)]'>
				{ products.map((product, i) => (
					<div key={i} className='w-full lg:w-[84%] m-auto'>
						<div className='w-full m-auto mb-[-10px] px-[2%] text-[2rem] lg:text-[2.5rem] font-bold'>{product.category}</div>
						<div className='w-full m-auto p-[2%] pb-[3%] bg-LGgray-light rounded-[40px]'>
							<div className='mb-[5px] text-[1.5rem] font-bold italic text-LGred '>{product.desc1}</div>
							<div className='mb-[20px] text-[1rem]'>{product.desc2}</div>
							<Grid container>
								{ product.videoclips.map((videoclip, j) => (
									<Grid key={j} item xs={6} sm={6} md={3} className='p-[3px]'>
										<div className='flex flex-wrap'>
											{/* <Link href={`/watch?v=${videoclip.url}`}  */}
											<Link href={videoclip.youtube} target='_blank' className='w-full aspect-[16/9] relative cursor-pointer overflow-hidden'>
												<Image src={videoclip.thumbnail} fill sizes='width: 100%' alt='LG Products'
													className='object-contain transition duration-300 ease-in-out transform hover:scale-[1.05]' />
											</Link>
										</div>
									</Grid>
								))} 
							</Grid>
						</div>
					</div>
				))}
			</div>
			
      </div>
   );
};

export default LGProducts;