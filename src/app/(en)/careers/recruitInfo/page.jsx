'use client';

import React from 'react';
import styles from './page.module.css';
import { Box, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@emotion/react';
import { videos, weAre, aboutRND, recruitmentFields, employeesWelfare, recruitmentProcess, jobPostings } from './recruitInfo';
import Link from 'next/link';
import Image from 'next/image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Careers= () => {

	const theme = useTheme();

	return (
		<Box className='pageContainer'>

			<Box sx={{ position: 'relative' }}>
				<video src={'/videos/careers/recruitmentInformation.mp4'} width='100%' style={{ border: 'none' }} autoPlay muted preload='auto' loop suppressHydrationWarning />
				<Box sx={{ position: 'absolute', bottom: '0', width: '100%', height: '25%', px: '20px', backgroundColor: 'rgba(235, 235, 235, 0.5)',
					display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
					[theme.breakpoints.down('md')] : { height: '30%', px: '10px' }, [theme.breakpoints.down('sm')] : { height: '35%' } }}>
					<Box sx={{ color: 'var(--color-black)' }} >
						<Box sx={{ my: '10px', fontSize: '1.5rem', [theme.breakpoints.down('md')] : { my: '5px', fontSize: '1.2rem'} }}>
							Now, 5 Job Postings are Open.
						</Box>
						<Box sx={{ my: '10px', [theme.breakpoints.down('md')] : { my: '5px' } }}>
							including 4 Career Postings
						</Box>
					</Box>
					<Box sx={{ p: '10px 20px', backgroundColor: 'var(--color-LGred)', color: 'var(--color-white)', 
						borderRadius: '26px', boxShadow: '3px 3px 3px var(--color-LGgray)', 
						[theme.breakpoints.down('md')] : { p: '5px 10px' } }}>
						<Link href='/careers/jobPosting' className={styles.buttonRed}>Job Posting</Link>
					</Box>
				</Box>
			</Box>

			<Box sx={{ width: '80%', m: 'auto', fontSize: '1.25rem', textAlign: 'center', color: 'var(--color-black)', 
				[theme.breakpoints.down('md')] : { width: '100%' }, [theme.breakpoints.down(450)] : { fontSize: '1rem'} }}>
				<Box>LG Japan Lab is</Box>
				<Box sx={{ fontSize: '2rem', color: 'var(--color-LGred)',
					[theme.breakpoints.down('sm')] : { fontSize: '1.75rem' }, [theme.breakpoints.down(450)] : { fontSize: '1.25rem'}  }}>
					<i>recruiting autonomous and creative talents</i>
				</Box>
				<Box>who will create a clear and bright future together.</Box>
			</Box>

			<Box sx={{ width: '100%' }}>
				<Box sx={{ width: '80%', m: 'auto', fontSize: '2rem', 
					[theme.breakpoints.down('md')]: { fontSize: '1.75rem' },
					[theme.breakpoints.down('lg')]: { width: '100%' } }}>We are</Box>
				<Box sx={{ width: '100%', py: '10px', display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: 'var(--color-LGgray-light)' }}>
					<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')]: { width: '100%', px: '5px' } }}>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-black)' }}>
							{ weAre.map((policy, i) => (
								<Box key={i}>
									<Box sx={{ fontSize: '1.5rem' }}>{policy.policy}</Box>
									<Box>{policy.desc}</Box>
								</Box>
							))}
						</Box>
					</Box>
					<Box sx={{ width: '80%', m: 'auto', mt: '15px', border: '2px solid var(--color-LGred)', borderRadius: '30px',textAlign: 'center', 
						[theme.breakpoints.down('lg')]: { width: '100%' } }}>
						<Box sx={{ fontSize: '1.25rem', m: '20px' }}>About research & development works</Box>
						<Box sx={{ mb: '20px', px: '10px' }} >
							{ aboutRND.map((about, i) => (
								<Box key={i}>{about}</Box>
							))}
						</Box>
					</Box>  		
				</Box>
			</Box>

			<Box sx={{ width: '100%', mt: 'calc( -1*(var(--gap-basic)) )', [theme.breakpoints.down('md')] : { mt: 'calc( -1*(var(--gap-basic)/2) )' } }}>  
            <Grid container>
               { videos.map((video, i) => (
                  <Grid key={i} item xs={6} sm={6} md={3} sx={{ px: '1px', pt: '4px' }}>
                     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
								<Link href={`/watch?v=${video.url}`} 
                           style={{ width: '100%', aspectRatio: '16/9', position: 'relative', cursor: 'pointer', overflow: 'hidden' }} >
                           <Image src={video.thumbnail} fill sizes='width: 100%' className={styles.thumbnail} alt='video Thumbnail'/>
                        </Link>
                     </Box>
                  </Grid>
               ))}
            </Grid>
         </Box>

			<Box sx={{ width: '100%' }}>
				<Box sx={{ width: '80%', m: 'auto',	display: 'flex', justifyContent: 'space-between', alignItems: 'center',
					[theme.breakpoints.down('lg')]: { width: '100%' } }}>
					<Box sx={{ fontSize: '2rem', [theme.breakpoints.down('sm')]: { fontSize: '1.75rem' } }}>Growth Path</Box>
					<Link href='/careers/jobPosting' className={styles.buttonRed}>
						<Box sx={{ p: '10px 20px', backgroundColor: 'var(--color-LGred)', color: 'var(--color-white)', 
							borderRadius: '26px', boxShadow: '3px 3px 3px var(--color-LGgray)' }}>Job Posting</Box>
					</Link>
				</Box>

				<Box sx={{ width: '80%', m: 'auto', mt: '10px', py: '10px', display: 'flex', flexDirection: 'column', gap: '40px', color: 'var(--color-black)',
					[theme.breakpoints.down('lg')]: { width: '100%' } }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '50px', 
						[theme.breakpoints.down('md')] : { flexDirection: 'column', gap: '20px' } }}>
						<Box sx={{ flexBasis: '50%' }}>
							<Box sx={{ width: '100%', mb: '20px', position: 'relative', borderTop: '2px dashed var(--color-LGred)' }}>
								<ArrowForwardIosIcon sx={{ position: 'absolute', top: '-13px', right: '-10px', color: 'var(--color-LGred)',
									[theme.breakpoints.down('md')] : { top: '-12px' } }} />
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '30px' }}>
								<Box sx={{ flexBasis: '50%', p: '10px 30px', display: 'flex', justifyContent: 'center', alignItems: 'center', 
									border: '1px solid var(--color-LGgray)', borderRadius: '20px' }}>
									Researcher
								</Box>
								<Box sx={{ flexBasis: '50%', p: '10px 30px', display: 'flex', justifyContent: 'center', alignItems: 'center', 
									border: '1px solid var(--color-LGgray)', borderRadius: '20px' }}>
									Senior Researcher
								</Box>
							</Box>
						</Box>
						<Box sx={{ flexBasis: '50%', width: '100%', p: '10px', backgroundColor: 'var(--color-LGgray-light)', color: 'var(--color-black)' }}>
							<Box sx={{ fontSize: '1.5rem', [theme.breakpoints.down('sm')]: { fontSize: '1.25rem' } }}>Professional Research Position</Box>
							<Box>Depending on your capabilities, you grow from a researcher to a senior researcher.</Box>
						</Box>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '50px', 
						[theme.breakpoints.down('md')] : { flexDirection: 'column', gap: '20px' } }}>
						<Box sx={{ flexBasis: '50%' }}>
							<Box sx={{ width: '100%', mb: '20px', position: 'relative', borderTop: '2px dashed var(--color-LGred)' }}>
								<ArrowForwardIosIcon sx={{ position: 'absolute', top: '-13px', right: '-10px', color: 'var(--color-LGred)',
									[theme.breakpoints.down('md')] : { top: '-12px' } }} />
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '30px' }}>
								<Box sx={{ flexBasis: '50%', p: '10px 30px', display: 'flex', justifyContent: 'center', alignItems: 'center', 
									border: '1px solid var(--color-LGgray)', borderRadius: '20px' }}>
									Team Leader
								</Box>
								<Box sx={{ flexBasis: '50%', p: '10px 30px', display: 'flex', justifyContent: 'center', alignItems: 'center', 
									border: '1px solid var(--color-LGgray)', borderRadius: '20px' }}>
									Executive
								</Box>
							</Box>
						</Box>
						<Box sx={{ flexBasis: '50%', width: '100%', p: '10px', backgroundColor: 'var(--color-LGgray-light)', color: 'var(--color-black)' }}>
							<Box sx={{ fontSize: '1.5rem', [theme.breakpoints.down('sm')]: { fontSize: '1.25rem' } }}>Professional Management Position</Box>
							<Box>In LG Japan Lab, team leaders basically carry out personnel and budget management with a lot of authority, and talented people who have leadership capabilities and meet their personal vision grow into team leaders.</Box>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box sx={{ width: '100%' }}>
				<Box sx={{ width: '80%', m: 'auto',	[theme.breakpoints.down('lg')]: { width: '100%' } }}>
					<Box sx={{ fontSize: '2rem', [theme.breakpoints.down('md')]: { fontSize: '1.75rem' } }}>Field of Recruitment</Box>
				</Box>
				{recruitmentFields.map((field, i) => (
					<Box key={i} sx={{ my: '20px' }}>
						<Box sx={{ width: '80%', m: 'auto', fontSize: '1.5rem', color: 'var(--color-LGred)', 
							borderBottom: '1px solid var(--color-LGred)',
							[theme.breakpoints.down('lg')]: { width: '100%' } }}>
							{field.researchArea}<span style={{ paddingLeft: '10px' }}>{field.icon}</span>
						</Box>
						<Box sx={{ width: '100%', backgroundColor: 'var(--color-LGgray-light)', color: 'var(--color-black)' }}>
							<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')]: { width: '100%' } }}>
								{field.contents.map((content, j) => (
									<Box key={j} sx={{ p: '10px 5px', lineHeight: '150%', borderBottom: '1px solid var(--color-white)' }}>{content}</Box>
								))}
							</Box>
						</Box>
					</Box>
				))}
			</Box>

			<Box sx={{ width: '100%' }}>
				<Box sx={{ width: '80%', m: 'auto',	[theme.breakpoints.down('lg')]: { width: '100%' } }}>
					<Box sx={{ fontSize: '2rem', [theme.breakpoints.down('md')]: { fontSize: '1.75rem' } }}>Employee Welfare</Box>
				</Box>
				<Box sx={{ width: '100%', backgroundColor: 'var(--color-LGgray-light)', color: 'var(--color-black)' }}>
					<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')]: { width: '100%' } }}>
						{ employeesWelfare.map((welfare, i) => (
							<Box key={i} sx={{ p: '20px 5px', lineHeight: '150%', borderBottom: '1px solid var(--color-white)', display: 'flex' }}>
								<Box sx={{ flexBasis: '25%', pr: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRight: '1px solid var(--color-white)' }}>
									<Box>{welfare.item}</Box>
									<Box sx={{ [theme.breakpoints.down('sm')] : { display: 'none' }}}>{welfare.icon}</Box>
								</Box>
								<Box sx={{ flexBasis: '75%', pl: '10px' }}>
									{ welfare.contents.map((content, j) =>(
										<Box key={j} sx={{ [theme.breakpoints.down('sm')] : { fontSize: '0.85rem' } }}>{content}</Box>
									))}
								</Box>
							</Box>
						))}
					</Box>
				</Box>
			</Box>

			<Box sx={{ width: '100%' }}>
				<Box sx={{ width: '80%', m: 'auto', fontSize: '2rem',
					[theme.breakpoints.down('md')]: { fontSize: '1.75rem' },
					[theme.breakpoints.down('lg')]: { width: '100%' } }}>Recruitment Process</Box>
				<Box sx={{ width: '80%', m: 'auto', color: 'var(--color-black)', [theme.breakpoints.down('lg')]: { width: '100%' } }}>
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
								{ i+1 !== recruitmentProcess.length && <PlayArrowIcon sx={{ m: '-5px', fontSize: '2.5rem', color: 'var(--color-LGred)' }} /> }
							</React.Fragment>
						))}
					</Box>
				</Box>
			</Box>

		</Box>
	);
};

export default Careers;