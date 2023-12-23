'use client';

import React from 'react';
import LGProducts from './lgProducts';
import styles from './page.module.css';
import { Box, Grid } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/en/PageHero/PageHero';
import { useTheme } from '@emotion/react';

const Products = () => {

	const theme = useTheme();

   return (
		<Box className='pageContainer'>
			<PageHero image='/images/lg/lgProducts/LGProducts.png' aspectRatio='1920/400' title='LG Products' message1="Life's Good" />
			<Box sx={{ width: '100%', m: 'calc( var(--gap-basic)/2 ) auto', display: 'flex', flexDirection: 'column', gap: 'var(--gap-basic)',
				[theme.breakpoints.down('lg')] : { gap: 'calc( var(--gap-basic)/2 )' }  }} >
				{ LGProducts.map((product, i) => (
					<Box key={i} sx={{ width: '84%', m: 'auto', [theme.breakpoints.down('lg')] : { width : '100%'} }}>
						<Box sx={{ width: '100%', m: 'auto', mb: '-10px', px: '2%', fontSize: '2rem' }}>{product.category}</Box>
						<Box sx={{ width: '100%', m: 'auto', p: '2% 2% 3% 2%', background: 'var(--color-LGgray-light)', borderRadius: '40px' }}>
							<Box sx={{ mb: '5px', fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--color-LGred)' }}>{product.desc1}</Box>
							<Box sx={{ mb: '20px', fontSize: '1rem' }}>{product.desc2}</Box>
							<Grid container>
								{ product.videoclips.map((videoclip, j) => (
									<Grid key={j} item xs={6} sm={6} md={3} sx={{ p: '3px' }}>
										<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
											<Link href={`/en/watch?v=${videoclip.url}`} 
												style={{ width: '100%', aspectRatio: '16/9', backgroundColor: 'black', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
												<Image src={videoclip.thumbnail} fill sizes='width: 100%' className={styles.thumbnail} alt='LG Products' />
											</Link>
										</Box>
									</Grid>
								))} 
							</Grid>
						</Box>
					</Box>
				))}
			</Box>
			
      </Box>
   );
};

export default Products;