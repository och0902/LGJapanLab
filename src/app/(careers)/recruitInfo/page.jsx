'use client';

import React from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import { Grid } from '@mui/material';
import recruitInfo from './recruitInfo';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Link from 'next/link';
import Image from 'next/image';
import { BtnRedLink } from '@/components/BtnRed/BtnRed';

const RecruitInfo = () => {

	const { language } = useGlobalContext();
	const { pageHero, btn, page, videos, weAre, aboutRND, growthPaths, recruitmentFields, employeesWelfare, recruitmentProcess } 
		= recruitInfo(language);

	return (
		<div className='pageContainer'>

			<div className='relative'>
				<video src={'/videos/careers/recruitmentInformation.mp4'} width='100%' priority='high' 
					autoPlay muted preload='auto' loop suppressHydrationWarning/>
				<div className='absolute bottom-0 w-full h-[35%] sm:h-[30%] md:h-[25%] px-[10px] md:px-[20px] 
					flex items-center gap-[20px] md:gap-[50px]' style={{ background: 'rgba(235, 235, 235, 0.5' }} >
					<div className='text-black'>
						<div className='my-[5px] md:my-[10px] text-[0.9rem] sm:text-[1.2rem] md:text-[1.5rem]'>{pageHero.message[0]}</div>
						<div className='my-[5px] md:my-[10px] text-[0.8rem] sm:text-[0.9rem] md:text-[1rem]'>{pageHero.message[1]}</div>
					</div>
					<div className='w-[90px] md:w-[150px] flex'>
						<BtnRedLink href='/jobPosting' title={btn}/>
					</div>
					
				</div>
			</div>

			<div className='w-full md:w-[80%] m-auto'>
				<div className='xs:text-[1.25rem] text-center text-black'>{page.desc[0]}</div>
				<div className='text-[1.25rem] xs:text-[1.75rem] sm:text-[2.5rem] font-bold text-center text-LGred italic'>
					{page.desc[1]}
				</div>
				{page.desc[2] && <div className='xs:text-[1.25rem] text-center text-black'>{page.desc[2]}</div>}
			</div>

			<div className='w-full'>
				<div className='w-full lg:w-[80%] m-auto text-[2rem] lg:text-[2.5rem] font-bold'>{page.title[0]}</div>
				<div className='w-full py-[10px] flex flex-col gap-[20px] bg-LGgray-light'>
					<div className='w-full lg:w-[80%] m-auto px-[5px] lg:px-0'>
						<div className='flex flex-col gap-[20px] text-black'>
							{ weAre.map((weare, i) => (
								<div key={i}>
									<div className='text-[1.5rem] font-bold'>{weare.policy}</div>
									<div className='text-[0.8rem] sm:text-[1rem]'>{weare.desc}</div>
								</div>
							))}
						</div>
					</div>
					<div className='w-full lg:w-[80%] m-auto mt-[15px] border-2 border-LGred rounded-[30px] text-center'>
						<div className='text-[1.25rem] m-[20px]'>{aboutRND.title}</div>
						<div className='mb-[20px] px-[10px]'>
							{ aboutRND.desc.map((about, i) => (<div key={i} className='text-[0.8rem] sm:text-[1rem]'>{about}</div>))}
						</div>
					</div>  		
				</div>
			</div>

			<div className='w-full mt-[calc(-1*var(--gap-base))]'>  
            <Grid container>
               { videos.map((video, i) => (
                  <Grid key={i} item xs={6} sm={6} md={3} className='px-[1px] pt-[4px]'>
                     <div className='flex flex-wrap'>
								<Link href={video.youtube} target='_blank' className='w-full aspect-[16/9] relative cursor-pointer overflow-hidden'>
                           <Image src={video.thumbnail} fill sizes='width: 100%' alt='video Thumbnail'
										className=' object-contain transition duration-300 ease-in-out hover:scale-[1.05]' />
                        </Link>
                     </div>
                  </Grid>
               ))}
            </Grid>
         </div>

			<div className='w-full'>
				<div className='w-full lg:w-[80%] m-auto'>
					<div className='text-[2rem] lg:text-[2.5rem] font-bold'>{page.title[1]}</div>
				</div>

				<div className='w-full lg:w-[80%] m-auto mt-[10px] py-[10px] flex flex-col gap-[40px] text-black'>
					{growthPaths.map((growthpath, i) => (
						<div key={i} className='flex flex-col md:flex-row items-center gap-[20px] md:gap-[50px]'>
							<div className='basis-[55%] w-full'>
								<div className='w-full mb-[20px] relative border-t-2 border-dashed border-LGred'>
									<ArrowForwardIosIcon className='absolute top-[-10px] sm:top-[-11px] lg:top-[-13px] right-[-10px] text-LGred' />
								</div>
								<div className='flex justify-between gap-[10px]'>
									{ growthpath.specialties.map((specialty, j) => ( 
										<div key={j} className='basis-[50%] py-[10px] text-[0.9rem] sm:text-[1rem]
											flex justify-center items-center border-[1px] border-LGgray rounded-[5px]'>{specialty}</div>
									))}
								</div>
							</div>
							<div className='basis-[45%] w-full p-[15px] bg-LGgray-light text-black'>
								<div className='mb-[8px] text-[1.25rem] sm:text-[1.5rem] font-bold'>{growthpath.path}</div>
								<div className='text-[0.8rem] sm:text-[1rem]'>{growthpath.desc}</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='w-full'>
				<div className='w-full lg:w-[80%] m-auto text-[2rem] lg:text-[2.5rem] font-bold'>{page.title[2]}</div>
				{recruitmentFields.map((field, i) => (
					<div key={i} className='my-[20px]'>
						<div className='w-full lg:w-[80%] m-auto flex items-center gap-[20px] border-b-[1px] border-LGred'>
							<div className='mt-[5px] text-[1.2rem] sm:[1.5rem] font-bold text-LGred'>{field.researchArea}</div>
							<Image src={field.url} width={30} height={30} alt={field.icon} />
						</div>
						<div className='w-full bg-LGgray-light text-black'>
							<div className='w-full lg:w-[80%] m-auto'>
								{field.contents.map((content, j) => (
									<div key={j} className='py-[15px] px-[5px] text-[0.8rem] sm:text-[1rem] leading-6 border-b-[1px] border-white'>{content}</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='w-full'>
				<div className='w-full lg:w-[80%] m-auto'>
					<div className='text-[2rem] lg:text-[2.5rem] font-bold'>{page.title[3]}</div>
				</div>
				<div className='w-full bg-LGgray-light text-black'>
					<div className='w-full lg:w-[80%] m-auto'>
						{ employeesWelfare.map((welfare, i) => (
							<div key={i} className='w-full py-[20px] px-[5px] leading-6 border-b-[1px] border-white flex'>
								<div className='basis-[30%] pr-[3px] sm:pr-[10px] text-[0.8rem] sm:text-[1rem] border-r-[1px] border-white flex justify-between items-center'>
									<div>{welfare.item}</div>
									<Image src={welfare.url} width={25} height={25} alt={welfare.item} />
								</div>
								<div className='basis-[70%] pl-[10px]'>
									{ welfare.contents.map((content, j) =>(
										<div key={j} className='text-[0.8rem] sm:text-[1rem]'>{content}</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='w-full'>
				<div className='w-full lg:w-[80%] m-auto text-[2rem] lg:text-[2.5rem] font-bold'>{page.title[4]}</div>
				<div className='w-full lg:w-[80%] m-auto mt-[15px] text-black'>
					<div>{recruitmentProcess.desc}</div>
					<div className='mt-[25px] flex flex-wrap justify-center md:justify-between items-center'>
						{ recruitmentProcess.processes.map((process, i) => (
							<React.Fragment key={i} >							
								<div className='w-[100px] h-[100px] md:w-[115px]  md:h-[115px] lg:w-[130px] lg:h-[130px]
									my-[10px] border-[10px] border-LGgray-light rounded-full flex flex-col justify-center items-center text-center'>
									<div>{process.process}</div>
									<div className='text-[0.75rem]'>{process.desc}</div>
								</div>
								{ i+1 < recruitmentProcess.processes.length && <PlayArrowIcon className='m-[-5px] text-[2.5rem] font-bold text-LGred' /> }
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
			
			<div className='w-[300px] m-auto flex'>
				<BtnRedLink href='/jobPosting' title={btn} />
			</div>
			
		</div>
	);
};

export default RecruitInfo;