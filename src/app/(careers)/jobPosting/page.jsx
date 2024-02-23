'use client';

import React from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import jobPosting from './jobPosting';
import { Grid } from '@mui/material';
import PageHero from '@/components/PageHero/PageHero';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import { BtnRedLink } from '@/components/BtnRed/BtnRed';

const JobPosting = () => {

	const { language } = useGlobalContext();
	const { pageHero, btn, jobPostings } = jobPosting(language);

	return (
		<div className='pageContainer'>
			<PageHero image='/images/careers/Careers.jpg' aspectRatio='1920/600' title={pageHero.title}
				message1={pageHero.message} />

			{ jobPostings.map((jobPosting, i) => (
				<div key={i} className='w-full'>
					<div className='w-full lg:w-[80%] m-auto text-[2rem] lg:text-[2.5rem] font-bold text-LGred'>
						{jobPosting.title}
					</div>

					<div className='w-full mt-[10px] flex gap-[20px] bg-LGgray-light'>
						<div className='w-full lg:w-[80%] m-auto py-[15px] px-[5px] flex flex-wrap justify-between'>
							<Grid container spacing={'10px'}>		
								{jobPosting.jobs.map((job, j) => (
									<Grid key={j} item xs={12} sm={6} >
										<Link href={`/jobPosting/${jobPosting.type}_${job.id}`}
											className='w-full h-[160px] sm:h-[250px] py-[5px] px-[10px] flex flex-col justify-between
												bg-white border-1 border-LGgray-light rounded-[5px] shadow-md shadow-LGgray transition duaration-300 ease-in-out
												hover:no-underline hover:text-LGred hover:border-1 hover:border-LGred'>
											<div className='flex justify-between'>
												<div>{job.team}</div>
												<div className='text-LGred'>{job.status}</div>
											</div>
											<div className='px-[5px] flex justify-between items-center'>
												<div>
													<div className='text-[1.1rem] sm:text-[1.5rem] font-bold'>{job.recruitmentJob}</div>
													<div className='mt-[10px] text-[0.85rem] sm:text-[1rem]'>{job.desc}</div>
												</div>
												<ArrowForwardIosIcon className='text-[2rem] lg:text-[2,3rem] font-bold' />
											</div>
											<div className='text-end'>{job.location}</div>
										</Link>
									</Grid>
								))}
							</Grid>
						</div>
					</div>
				</div>
			))}
			
			<div className='w-[300px] m-auto flex'>
				<BtnRedLink href='/recruitApplication' title={btn}/>
			</div>
		</div>
	);
};

export default JobPosting;