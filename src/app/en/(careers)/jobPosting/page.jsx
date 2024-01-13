'use client';

import React from 'react';
import styles from './page.module.css';
import { Box, Grid } from '@mui/material';
import PageHero from '@/components/ja/PageHero/PageHero';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@emotion/react';
import { jobPostings } from './jobPosting';
import Link from 'next/link';

const Careers= () => {

	const theme = useTheme();

	return (
		<Box className='pageContainer'>
			<PageHero image='/images/careers/Careers.jpg' aspectRatio='1920/600' title='Job Postings'
				message1='Future value created together' />

			{jobPostings.map((jobPosting, i) => (
				<Box key={i} sx={{ width: '100%' }}>
					<Box sx={{ width: '80%', m: 'auto',	display: 'flex', justifyContent: 'space-between', alignItems: 'center',
						[theme.breakpoints.down('lg')]: { width: '100%' } }}>
						<Box sx={{ fontSize: '2.5rem', color: 'var(--color-LGred)', [theme.breakpoints.down('sm')]: { fontSize: '1.75rem' } }}>
							{jobPosting.title}
						</Box>
					</Box>

					<Box sx={{ width: '100%', mt: '10px', display: 'flex', gap: '20px', backgroundColor: 'var(--color-LGgray-light)' }}>
						<Box sx={{ width: '80%', m: 'auto', px: '5px', py: '15px', color: 'var(--color-black)',
							display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', 
							[theme.breakpoints.down('lg')]: { width: '100%' } }}>
							<Grid container spacing={'10px'}>		
								{jobPosting.jobs.map((job, j) => (
									<Grid key={j} item xs={12} sm={6} >
										<Link href={`/en/jobPosting/${jobPosting.type}_${job.id}`} className={styles.toJobDetail}>
											<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
												<Box>{job.team}</Box>
												<Box sx={{ color: 'var(--color-LGred)' }}>{job.status}</Box>
											</Box>
											<Box sx={{ px: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
												<Box>
													<Box sx={{ fontSize: '1.5rem', fontWeight: 'var(--weight-bold)',
														[theme.breakpoints.down('sm')] : { fontSize: '1.1rem' } }}>{job.recruitmentJob}</Box>
													<Box sx={{ mt: '10px', [theme.breakpoints.down('sm')] : { fontSize: '0.85rem' } }}>{job.desc}</Box>
												</Box>
												<ArrowForwardIosIcon sx={{ fontSize: '2rem',[theme.breakpoints.down('sm')] : { fontSize: '1.75rem' } }} />
											</Box>
											<Box sx={{ textAlign: 'end' }}>
												<Box>{job.location}</Box>
											</Box>
										</Link>
									</Grid>
								))}
							</Grid>
						</Box>
					</Box>
				</Box>
			))}
			
			<Box sx={{ width: '300px' }}>
				<Link href='/en/recruit' className={styles.buttonRed}>
					<Box sx={{ p: '10px 20px', backgroundColor: 'var(--color-LGred)', color: 'var(--color-white)',  
						textAlign: 'center',	borderRadius: '26px', boxShadow: '3px 3px 3px var(--color-LGgray)' }}>Recruitment Application</Box>
				</Link>
			</Box>

		</Box>
	);
};

export default Careers;