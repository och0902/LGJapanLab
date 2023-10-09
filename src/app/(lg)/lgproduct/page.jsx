'use client';

import React from 'react';
import LGProducts from './lgproducts';
import styles from './page.module.css';
import { Box, Grid } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero/PageHero';

const Products = () => {
   return (
		<Box className='pageContainer'>
			<PageHero image='/images/lg/lgproducts/LGProducts.png' aspectRatio='1920/400' title='LG Products' 
				message1="Life's Good" />
			{ LGProducts.map((product, i) => (
				<Box key={i} sx={{ width: '100%' }}>
					<Box sx={{ mb: '10px', fontSize: '2rem' }}>
						{product.category}
					</Box>
					<Grid container>
						{ product.videoclips.map((videoclip, j) => (
							<Grid key={j} item xs={12} sm={6} md={3} sx={{ p: '3px' }}>
								<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
									<Link href={`/lgproduct/watch?v=${videoclip.url}`} style={{ width: '100%', aspectRatio: '16/9', backgroundColor: 'black', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
										<Image src={videoclip.thumbnail} fill sizes='width: 100%' className={styles.thumbnail} loading='lazy' alt='LG Products' />
									</Link>
								</Box>
							</Grid>
						))} 
					</Grid>
				</Box>
			))}
      </Box>
   );
};

export default Products;