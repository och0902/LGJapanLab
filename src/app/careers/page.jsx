'use client';

import React from 'react';
import { Box } from '@mui/material';
import PageHero from '@/components/PageHero/PageHero';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@emotion/react';
import { careers, jobPostings } from './careers_en';

const Careers= () => {

	const theme = useTheme();

	return (
		<Box className='pageContainer'>
			<PageHero image='/images/lgjl/Careers.png' aspectRatio='1920/600' title='Careers' color='var(--color-black)'
				message1='Future value created together' />

			<Box sx={{ width: '80%', m: 'auto', mt: '5dvh', display: 'flex', flexGrow: '1', justifyContent: 'space-between', gap: '50px',
				[theme.breakpoints.down('md')]: { width: '100%', flexDirection: 'column', gap: '10px' } }}>
				<Box sx={{ flexBasis: '20%', fontSize: '2rem' }}>Careers</Box>
				<Box sx={{ flexBasis: '80%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
					{careers.map((career, i) => (
						<Box key={i} sx={{ flexBasis: '24%', height: '120px', p: '5px',
							border: '1px solid var(--color-LGgray-light)', borderRadius: '5px', 
							boxShadow: '2px 2px 5px var(--color-LGgray)' }}>
							{career.icon}
							<Box sx={{ my: '7px', fontSize: '1.5rem', textAlign: 'center' }}>{career.researchArea}</Box>
						</Box>
					))}
				</Box>
			</Box>

			<Box sx={{ width: '100%' }}>
				<Box sx={{ width: '80%', m: '10px auto', fontSize: '2rem', color: 'var(--color-LGred)',
					[theme.breakpoints.down('md')]: { width: '100%' }  }}>Job Posting</Box>
				<Box sx={{ width: '100%', display: 'flex', gap: '20px', backgroundColor: 'var(--color-LGgray-light)' }}>
					<Box sx={{ width: '80%', m: 'auto', py: '25px', color: 'var(--color-black)',
						display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px',
						[theme.breakpoints.down('md')]: { width: '100%', gap: '0' } }}>
						{jobPostings.map((jobPosting, i) => (
							<Box key={i} sx={{ flexBasis: '31%', m: 'auto', gap: '5px', p: '5px' }}>
								<Box sx={{ width: '100%', height: '200px', p: '5px 10px',
									display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
									backgroundColor: 'var(--color-white)',
									border: '1px solid var(--color-LGgray-light)', borderRadius: '5px', 
									boxShadow: '2px 2px 5px var(--color-LGgray)' }}>
									<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
										<Box>{jobPosting.team}</Box>
										<Box sx={{ color: 'var(--color-LGred)' }}>{jobPosting.status}</Box>
									</Box>
									<Box sx={{ px: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
										<Box>
											<Box sx={{ fontSize: '1.25rem' }}>{jobPosting.researchField}</Box>
											<Box>{jobPosting.desc}</Box>
										</Box>
										<ArrowForwardIosIcon sx={{ fontSize: '2rem' }} />
									</Box>
									<Box sx={{ textAlign: 'end' }}>
										<Box>{jobPosting.location}</Box>
									</Box>
								</Box>
							</Box>
						) )}
					</Box>
				</Box>
			</Box>

		</Box>
	);
};

export default Careers;