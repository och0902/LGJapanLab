'use client';

import React from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Link from 'next/link';
import Image from 'next/image';

const RecruitApply = () => {

	const theme = useTheme();
	const router = useRouter();

	const recruitmentProcess = [
		{ process: 'Document Screening',  },
		{ process: `1'st Interview`, },
		{ process: `2'nd Interview`, desc: 'with Personal Presentation' },
		{ process: 'Apitude Test', desc: 'with 15min Web Test' },
		{ process: 'Final Interview', desc: 'with Personal Presentation' },
		{ process: 'Decision & Notification', },
	];

	return (
		<Box className='pageContainer'>

			<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }} >
				<Box sx={{ fontSize: '2.5rem',
					[theme.breakpoints.down('md')]: { fontSize: '1.75rem' },
					[theme.breakpoints.down('lg')]: { width: '100%' } }}>Recruitment Process</Box>
				<Box sx={{ mt: '15px', color: 'var(--color-black)', [theme.breakpoints.down('lg')]: { width: '100%' } }}>
					<Box>
						The entire process may change depending on the case of two to three interviews. 
						The first interview is available online and there is no written test, but a web aptitude test is conducted before the final interview.
					</Box>
					<Box sx={{ mt: '25px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',
						[theme.breakpoints.down('md')] : { justifyContent: 'center' } }}>
						{ recruitmentProcess.map((process, i) => (
							<React.Fragment key={i} >							
								<Box sx={{ width: '130px', height: '130px', my: '10px', border: '10px solid var(--color-LGgray-light)', borderRadius: '75px',
									display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
									[theme.breakpoints.down('lg')] : { width: '115px', height: '115px' },
									[theme.breakpoints.down('md')] : { width: '100px', height: '100px' }, }}>
									<Box>{process.process}</Box>
									<Box sx={{ fontSize: '0.75rem' }}>{process.desc}</Box>
								</Box>
								{ i+1 !== recruitmentProcess.length && <PlayArrowIcon sx={{ m: '-5px', fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', color: 'var(--color-LGred)' }} /> }
							</React.Fragment>
						))}
					</Box>
				</Box>
			</Box>

			<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }} >

				<Box sx={{ fontSize: '2.5rem', 
					[theme.breakpoints.down('md')]: { fontSize: '1.75rem' },
					[theme.breakpoints.down('lg')]: { width: '100%' } }}>Recruitment Application</Box>

				<Box sx={{ mt: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Box sx={{ flexBasis: '47%' }}>
						<Link href={'/en/recruit/apply'} className={styles.link}>
							<Box className={styles.linkBox1} 
								sx={{ color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)', border: '3px solid var(--color-LGred)' }}>
								<Box sx={{ width: '50px', aspectRatio: '1/1', position: 'relative',
									[theme.breakpoints.down('md')] : { width: '35px' } }}>
									<Image src={'/images/careers/apply.png'} fill sizes='100%' alt='manual' />
								</Box>
								<Box sx={{ fontSize: '1.2rem', fontWeight: 'var(--weight-bold)', [theme.breakpoints.down('md')] : { fontSize: '0.75rem'  } }}>
									Recruitment Application
								</Box>
							</Box>
						</Link>
					</Box>
					<Box sx={{ flexBasis: '47%' }}>
						<Link href={'/en/recruit/inquiry'} className={styles.link} >
							<Box className={styles.linkBox2} 
								sx={{ color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)', border: '3px solid var(--color-LGgray-light)' }}>
								<Box sx={{ width: '50px', aspectRatio: '1/1', position: 'relative',
									[theme.breakpoints.down('md')] : { width: '35px' } }}>
									<Image src={'/images/careers/inquiry.png'} fill sizes='100%' alt='manual'  />
								</Box>
								<Box sx={{ fontSize: '1.2rem', fontWeight: 'var(--weight-bold)', [theme.breakpoints.down('md')] : { fontSize: '0.8rem'  } }}>
									Application Inquiry
								</Box>
							</Box>
						</Link>
					</Box>
				</Box>
			</Box>
			
		</Box>
	);
};

export default RecruitApply;