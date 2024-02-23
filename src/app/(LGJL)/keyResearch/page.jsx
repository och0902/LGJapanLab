'use client';

import React from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import keyResearch from './keyResearch';
import { Grid } from '@mui/material';
import PageHero from '@/components/PageHero/PageHero';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const KeyResearch = () => {

	const { language } = useGlobalContext();
   const { pageHero, page, paragraph, parisAgreement, table, fig } = keyResearch( language );

	const SDG = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17 ];

	return (
		<div className='pageContainer'>
         <PageHero image='/images/lgjl/keyResearch/KeyResearch.jpg' title={pageHero.title} />
			
			<div className='w-full'>
				
				<div className='w-full lg:w-[80%] m-auto mb-[40px] flex justify-center'>
					<div className='mb-[50px] flex flex-col sm:flex-row items-center sm:items-start gap-0 sm:gap-[10px]'>
						<div className='text-[3rem] sm:text-[4rem] font-bold' 
							style={{ backgroundImage: 'linear-gradient(to top, #3E7E44, var(--color-LGgray-light) )', backgroundClip: 'text', color: 'transparent' }} >
							{pageHero.desc[0]}; </div>
						<div className='mt-0 sm:mt-[60px]'>{pageHero.desc[1]}</div>
					</div>
				</div>

				<div className='w-full lg:w-[80%] m-auto px-[5px] lg:px-0 text-[2rem] lg:text-[2.5rem] font-bold'>{page.title}</div>

				<div className='w-full lg:w-[80%] m-auto mt-[10px] px-[5px] lg:px-0 leading-6 flex flex-col justify-center items-center gap-[20px]'>
					<div className='w-full'>{paragraph[0]}</div>
					<div className='w-full md:w-[80%] m-auto my-[30px] relative'> 
						<Link href='https://sdgs.un.org/goals' target='_blank' >
							<Grid container>
								{SDG.map((sdg, i) => (
									<Grid key={i} item xs={2} sm={12/9} className='p-[3px]'>
										<div className='aspect-square relative overflow-hidden'>
											<Image src={`/images/lgjl/keyResearch/SDGoal${sdg}.jpg`} fill sizes='100%' alt='Sustainable Development Goal' />
										</div>
									</Grid>
								))}
							</Grid>
						</Link>
						<div className='w-full m-auto mt-[10px] text-center text-[0.75rem]'>{fig[0]}</div>
					</div>

					<div className='w-full'>
						<Link href='https://unfccc.int/process-and-meetings/the-paris-agreement' target='_blank' >{parisAgreement}</Link>
						{paragraph[1]}
					</div>

					<div className='w-full m-auto flex flex-wrap flex-col md:flex-row justify-between items-center gap-[15px] md:gap-0' >
						<div className='w-full md:w-[50%] md:pr-[20px]'>{paragraph[2]}</div>
						<div className='w-[80%] md:w-[50%] my-[20px]'>
							<Link href='https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/energy-economics/energy-outlook/bp-energy-outlook-2022.pdf'
								target='_blank' >						
								<div className='w-full aspect-[800/397] relative'>
									<Image src='/images/lgjl/keyResearch/CO2ReductionScenario.jpg' fill sizes='100%' alt='CO2 Reduction Scenario' />
								</div>
							</Link>
							<div className='w-full m-auto mt-[10px] text-center text-[0.75rem]'>{fig[1]}</div>
						</div>
					</div>

					<div className='w-full m-auto flex flex-wrap flex-col md:flex-row justify-between items-center gap-[15px] md:gap-0'>
						<div className='w-full md:w-[50%] md:pr-[20px]'>{paragraph[3]}</div>
						<div className='w-[80%] md:w-[50%] my-[20px]'>		
							<Link href='https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/energy-economics/energy-outlook/bp-energy-outlook-2022.pdf'
								target='_blank' >
								<div className='w-full aspect-[850/420] relative'>
									<Image src='/images/lgjl/keyResearch/EnergyShare.jpg' fill sizes='100%' alt='Energy Share' />
								</div>
							</Link>
							<div className='w-full m-auto mt-[10px] text-center text-[0.75rem]'>{fig[2]}</div>
						</div>
					</div>

					<div className='w-full m-auto flex flex-col justify-center items-center gap-[20px]'>

						<div className='w-full'>{paragraph[4]}</div>
						<div className='w-[90%] sm:w-[60%] m-auto mt-[20px]'>
							<div className='w-full my-[30px] aspect-[1086/556] relative'>
								<Image src='/images/lgjl/keyResearch/HydrogenElectric.jpg' fill sizes='100%' alt='Sustainable Development Goals' />
							</div>
							<div className='w-full m-auto mb-[30px] text-center text-[0.75rem]'>{fig[3]}</div>
						</div>
						<div className='w-full'>{paragraph[5]}</div>
					</div>
				
					<div className='w-full'>
						<div className='w-[80%] m-auto my-[30px] flex flex-col items-center'>
							<div className='flex gap-[10px] lg:gap-[30px]'>
								<div className='w-[50px] md:w-[60px] lg:w-[100px] aspect-square relative'>
									<Image src='/images/lgjl/keyResearch/SDGoal_13.jpg' fill sizes='100%' alt='Sustainable Development Goal' />
								</div>
								<div className='w-[1px] border-r-[1px] border-LGgray-light'></div>
								<div className='h-[45px] md:h-[50px] lg:h-[80px] aspect-[851/293] relative'>
									<Image src='/images/LGJapanLabInc.png' fill sizes='100%' alt='LG Japan Lab' />
								</div>
								<div className='w-[1px] border-r-[1px] border-LGgray-light'></div>
								<div className='text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] font-bold text-green flex items-center'>{pageHero.desc[0]}</div>
							</div>
							<div className='mt-[10px] text-[0.75rem]'>{fig[4]}</div>
						</div>
						<div className='mt-[20px]'>{paragraph[6]}</div>
					</div>

					<div className='w-full'>		
						<div className='w-full lg:w-[80%] m-auto my-[30px]'>
							<Grid container spacing='5px'>
								{table.map((items, i) => (
									<Grid key={i} item xs={6} sm={3} >
										<div className={`h-[60px] pl-[10px] flex items-center gap-[20px] text-[1rem] text-white
											${items.selected ? 'bg-LGred' : 'bg-LGgray'}`}>
											<div>
												{items.title.map((title, j) => (
													<div key={j}>{title}</div>
												))}
											</div>
											<ArrowForwardIosIcon className='mb-[-3px]' />
										</div>
										<div className='h-[200px] pt-[10px] pl-[10px] border-[1px] border-LGgray'>
											{items.contents.map((content, j) => (
												<div key={j}>{content}</div>
											))}
										</div>
									</Grid>
								))}
							</Grid>
							<div className='w-full m-auto mt-[10px] text-center text-[0.75rem]'>{fig[5]}</div>
						</div>
					</div>

					<div className='w-full'>{paragraph[7]}</div>
				</div>
			</div>
		</div>
	);
};

export default KeyResearch;