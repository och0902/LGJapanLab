'use client';

import React from 'react';
import styles from './page.module.css';
import { Box, Grid } from '@mui/material';
import PageHero from '@/components/PageHero/PageHero';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@emotion/react';
import { newRecruitments, careerRecruitments } from './jobPosting';
import Link from 'next/link';

const Careers= () => {

	const theme = useTheme();

	return (
		<Box className='pageContainer'>
			<PageHero image='/images/careers/Careers.png' aspectRatio='1920/600' title='Job Postings'
				message1='Future value created together' />

			<Box sx={{ width: '100%' }}>

				<Box sx={{ width: '80%', m: 'auto',	display: 'flex', justifyContent: 'space-between', alignItems: 'center',
					[theme.breakpoints.down('lg')]: { width: '100%' } }}>
					<Box sx={{ fontSize: '2rem', color: 'var(--color-LGred)', [theme.breakpoints.down('sm')]: { fontSize: '1.75rem' } }}>New Recruitment</Box>
					<Link href='/careers/jobPosting/applyForm' className={styles.buttonRed}>
						<Box sx={{ p: '10px 20px', backgroundColor: 'var(--color-LGred)', color: 'var(--color-white)',  
							textAlign: 'center',	borderRadius: '26px', boxShadow: '3px 3px 3px var(--color-LGgray)' }}>Apply Form</Box>
					</Link>
				</Box>

				<Box sx={{ width: '100%', mt: '10px', display: 'flex', gap: '20px', backgroundColor: 'var(--color-LGgray-light)' }}>
					<Box sx={{ width: '80%', m: 'auto', px: '5px', py: '15px', color: 'var(--color-black)',
						display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', 
						[theme.breakpoints.down('lg')]: { width: '100%' } }}>
						<Grid container spacing={'10px'}>		
							{newRecruitments.map((newRecruitment, i) => (
								<Grid key={i} item xs={12} sm={6} >
									<Link href={newRecruitment.url} className={styles.toJobDetail}>
										<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
											<Box>{newRecruitment.team}</Box>
											<Box sx={{ color: 'var(--color-LGred)' }}>{newRecruitment.status}</Box>
										</Box>
										<Box sx={{ px: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
											<Box>
												<Box sx={{ fontSize: '1.25rem', [theme.breakpoints.down('sm')] : { fontSize: '1.1rem' } }}>{newRecruitment.recruitmentJob}</Box>
												<Box sx={{ mt: '10px', [theme.breakpoints.down('sm')] : { fontSize: '0.85rem' } }}>{newRecruitment.desc}</Box>
											</Box>
											<ArrowForwardIosIcon sx={{ fontSize: '2rem',[theme.breakpoints.down('sm')] : { fontSize: '1.75rem' } }} />
										</Box>
										<Box sx={{ textAlign: 'end' }}>
											<Box>{newRecruitment.location}</Box>
										</Box>
									</Link>
								</Grid>
							))}
						</Grid>
					</Box>
				</Box>
			</Box>

			<Box sx={{ width: '100%' }}>

				<Box sx={{ width: '80%', m: 'auto',	display: 'flex', justifyContent: 'space-between', alignItems: 'center',
					[theme.breakpoints.down('lg')]: { width: '100%' } }}>
					<Box sx={{ fontSize: '2rem', color: 'var(--color-LGred)', [theme.breakpoints.down('sm')]: { fontSize: '1.75rem' } }}>Career Recruitment</Box>
					<Link href='/careers/jobPosting/applyForm' className={styles.buttonRed}>
						<Box sx={{ p: '10px 20px', backgroundColor: 'var(--color-LGred)', color: 'var(--color-white)',  
							textAlign: 'center',	borderRadius: '26px', boxShadow: '3px 3px 3px var(--color-LGgray)' }}>Apply Form</Box>
					</Link>
				</Box>

				<Box sx={{ width: '100%', mt: '10px', display: 'flex', gap: '20px', backgroundColor: 'var(--color-LGgray-light)' }}>
					<Box sx={{ width: '80%', m: 'auto', px: '5px', py: '15px', color: 'var(--color-black)',
						display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', 
						[theme.breakpoints.down('lg')]: { width: '100%' } }}>
						<Grid container spacing={'10px'}>		
							{careerRecruitments.map((careerRecruitment, i) => (
								<Grid key={i} item xs={12} sm={6} >
									<Link href={careerRecruitment.url} className={styles.toJobDetail}>
										<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
											<Box>{careerRecruitment.team}</Box>
											<Box sx={{ color: 'var(--color-LGred)' }}>{careerRecruitment.status}</Box>
										</Box>
										<Box sx={{ px: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
											<Box>
												<Box sx={{ fontSize: '1.25rem', [theme.breakpoints.down('sm')] : { fontSize: '1.1rem' } }}>{careerRecruitment.recruitmentJob}</Box>
												<Box sx={{ mt: '10px', [theme.breakpoints.down('sm')] : { fontSize: '0.85rem' } }}>{careerRecruitment.desc}</Box>
											</Box>
											<ArrowForwardIosIcon sx={{ fontSize: '2rem',[theme.breakpoints.down('sm')] : { fontSize: '1.75rem' } }} />
										</Box>
										<Box sx={{ textAlign: 'end' }}>
											<Box>{careerRecruitment.location}</Box>
										</Box>
									</Link>
								</Grid>
							))}
						</Grid>
					</Box>
				</Box>
			</Box>




		</Box>
	);
};

export default Careers;