import React from 'react';
import products from './products';
import styles from './page.module.css';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const Products = () => {
   return (
		<Box className='pageContainer'>
			{ products.map((product, idx) => (
				<Box key={idx} sx={{ width: '100%' }}>
					<Typography variant='h5' sx={{ mb: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
						{product.icon}{product.category}
					</Typography>
					<Grid container>
						{ product.videoclips.map((videoclip, idx) => (
							<Grid key={idx} item xs={12} sm={6} md={3} sx={{ p: '3px' }}>
								<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
									<Link href={`/product/watch?v=${videoclip.url}`} style={{ width: '100%', aspectRatio: '16/9', backgroundColor: 'black', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
										<Image src={videoclip.thumbnail} fill className={styles.thumbnail} alt='Products' />
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