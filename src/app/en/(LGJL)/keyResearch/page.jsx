'use client';

import React from 'react';
import styles from './page.module.css';
import { Box, Grid } from '@mui/material';
import PageHero from '@/components/en/PageHero/PageHero';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const JLKeyResearch = () => {

	const theme = useTheme();

	const SDG = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17 ];

	return (
		<Box className='pageContainer'>
         <PageHero image='/images/lgjl/keyResearch/KeyResearch.png' aspectRatio='1920/400' title='Key Research Issue' />
			
			<Box sx={{ width: '100%' }}>
				<Box sx={{ width: '80%', m: 'auto', display: 'flex', justifyContent: 'center', 
					[theme.breakpoints.down('lg')]: { width: '100%' } }}>
					<Box sx={{ mb: '50px', display: 'flex', gap: '10px', 
						[theme.breakpoints.down('sm')] : { flexDirection: 'column', alignItems: 'center', gap: '0' }  }}>
						<Box sx={{ fontSize: '4rem', fontWeight: '600',
							[theme.breakpoints.down('sm')] : { fontSize : '3rem'} }} className={styles.multicolortext} >Hydrogen; </Box>
						<Box sx={{ mt: '60px', [theme.breakpoints.down('sm')] : { mt: '0' } }}>Key Research Issue of LG Japan Lab</Box>
					</Box>
				</Box>
				
				<Box sx={{ width: '80%', m: 'auto', fontSize: '2rem', 
					[theme.breakpoints.down('lg')]: { width: '100%', px: '5px', fontSize: '1.5rem' } }}>Motivation & Research Issue</Box>

				<Box sx={{ width: '80%', m: 'auto', mt: '10px', lineHeight: '150%',
					display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px',
					[theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>

					<Box sx={{ width: '100%' }}>
						In 1987, the World Council on Environmental Development (WCED) defined sustainable development as meaning development 
						that meets the needs of the present generation without hindering the ability to satisfy the needs of future generations.
						The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, 
						provides a shared blueprint for peace and prosperity for people and the planet, now and into the future. 
						At its heart are the 17 Sustainable Development Goals (SDGs), which are an urgent call for action by all countries - developed and developing - in a global partnership. 
						They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, 
						reduce inequality, and spur economic growth - all while tackling climate change and working to preserve our oceans and forests.
					</Box>

					<Box sx={{ width: '80%', m: '20px auto', position: 'relative', [theme.breakpoints.down('md')] : { width: '100%' } }} > 
						<Link href='https://sdgs.un.org/goals' target='_blank' >
							<Grid container>
								{SDG.map((sdg, i) => (
									<Grid key={i} item xs={2} sm={12/9} sx={{ p: '3px' }}>
										<Box sx={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden' }}>
											<Image src={`/images/lgjl/keyResearch/SDGoal${sdg}.png`} fill sizes='100%' className={styles.thumbnail} alt='Sustainable Development Goal' />
										</Box>
									</Grid>
								))}
							</Grid>
						</Link>
						<Box sx={{ width: '100%', m: 'auto', mt: '10px', textAlign: 'center', fontSize: '0.75rem',
							[theme.breakpoints.down('lg')]: { width: '100%' } }}>
							Fig.1 17 Sustainable Development Goals
						</Box>
					</Box>

					<Box sx={{ width: '100%' }}>
						<Link href='https://unfccc.int/process-and-meetings/the-paris-agreement' target='_blank' >The Paris Agreement </Link>
						was adopted by 196 parties as a legally binding international treaty at the United Nations Climate Change Conference (COP21) 
						in Paris, France, on December 12, 2015, and came into force on November 4, 2016, 
						with the overriding goal of &quot;keeping the average global temperature well below pre-industrial levels&quot; 
						and &quot;limiting the temperature rise to 1.5℃ above pre-industrial levels.&quot; 
						This is because if the UN&apos;s Intergovernmental Panel on Climate Change (Intergovernmental Panel on Climate Change) exceeds 1.5℃, 
						climate change impacts such as drought, heatwaves and rainfall are more frequent and at risk of seriousness. 
						To limit global warming to 1.5℃, greenhouse gas emissions must peak before 2025 at the latest and fall by 43% by 2030.
					</Box>

					<Box sx={{ width: '100%', 
						display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',
						[theme.breakpoints.down('md')] : { flexDirection: 'column', gap: '15px' } }} >
						<Box sx={{ width: '50%', pr: ' 20px', 
							[theme.breakpoints.down('md')] : { width: '100%', pr: '0' } }}>
							Fig.2 shows the scenarios for accelerated reductions compared to the present for carbon reduction and for Net Zero. 
							CO2e emissions in both scenarios increase above pre-Covid levels. Emissions in Accelerated and Net Zero peak in the early 2020s and by 2050
							are around 75% and 95% below 2019 levels respectively. CO2e emissions in New Momentum peak in the late 2020s and by 2050 are around 20% below 2019 levels.
							<br/><br/>
							As a part of our efforts for sustainable development, we are pursuing carbon neutrality to cope with the climate crisis worldwide, 
							but it is difficult to achieve the goal of below 1.5℃ with temperature increases alone, 
							and we need to further strengthen carbon neutrality activities on a global scale. 
						</Box>
						<Box sx={{ width: '50%', my: '20px', [theme.breakpoints.down('md')] : { width: '80%' } }}>
							<Link href='https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/energy-economics/energy-outlook/bp-energy-outlook-2022.pdf'
								target='_blank' >						
								<Box sx={{ width: '100%', aspectRatio: '800/397', position: 'relative' }}>
									<Image src='/images/lgjl/keyResearch/CO2ReductionScenario.png' fill sizes='100%' alt='CO2 Reduction Scenario' />
								</Box>
							</Link>
							<Box sx={{ width: '100%', m: 'auto', mt: '10px', textAlign: 'center', fontSize: '0.75rem',
								[theme.breakpoints.down('lg')]: { width: '100%' } }}>
								Fig.2 Carbon Emission Scenarios : Accelerated, Net Zero, and New Momentum
							</Box>
						</Box>

					</Box>

					<Box sx={{ width: '100%', m: 'auto', 
						display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',

						[theme.breakpoints.down('md')] : { flexDirection: 'column', gap: '15px'} }} >

						<Box sx={{ width: '50%', pr: '20px', 
							[theme.breakpoints.down('md')] : { width: '100%', pr: '0' } }}>
							Fig.3 shows trends in the use of primary energy sources around the world and future projections. 
							In some countries and regions, the use of fossil-derived energy is expected to continue at a certain rate as a countermeasure 
							for energy shortages and economic growth, and natural gas is expected to play an important role in the energy conversion process. 
							<br/><br/>
							Fossil-derived energy sources are expected to decrease by about a quarter over the next 20 years, and renewables will grow more than 
							six fold to about 60% due to the demand for building a net zero energy society. 
							In addition, the use of various energy sources such as renewable energy, gas, and liquid fuel is expected from the viewpoint of energy security.
						</Box>

						<Box sx={{ width: '50%', my: '20px', [theme.breakpoints.down('md')] : { width: '80%' } }}>			
							<Link href='https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/energy-economics/energy-outlook/bp-energy-outlook-2022.pdf'
								target='_blank' >
								<Box sx={{ width: '100%', aspectRatio: '850/420', position: 'relative' }}>
									<Image src='/images/lgjl/keyResearch/EnergyShare.png' fill sizes='100%' alt='Energy Share' />
								</Box>
							</Link>
							<Box sx={{ width: '100%', m: 'auto', mt: '10px', textAlign: 'center', fontSize: '0.75rem',
								[theme.breakpoints.down('lg')]: { width: '100%' } }}>
								Fig.3 Accelerated and Net Zero are broadly in line with ‘Paris consistent’ IPCC scenarios
							</Box>
						</Box>
					</Box>

					<Box sx={{ width: '100%', m: 'auto',
						display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
						<Box sx={{ width: '100%' }}>
							Fossil or nuclear energy is being used efficiently by converting it into electricity through high-efficiency 
							conversion devices and supplying it from close range to mass consumption areas. On the other hand, 
							due to the lack of large-capacity storage and long-term storage, there is an inefficient factor 
							that requires a significant amount of spare power to be secured and operated against power peak usage. 
							<br/><br/>
							For renewables such as solar cells and wind power, there are many constraints on utilization, 
							such as relatively small density of production, large variability depending on seasonal and environmental factors, 
							and close to energy consumption areas.
						</Box>
						<Box sx={{ width: '60%', m: 'auto', mt: '20px', 
							[theme.breakpoints.down('sm')] : { width: '90%' }, }}>
							<Box sx={{ width: '100%', aspectRatio: '1086/556', position: 'relative'  }}>
								<Image src='/images/lgjl/keyResearch/HydrogenElectric.jpg' fill sizes='100%' alt='Sustainable Development Goals' />
							</Box>
							<Box sx={{ width: '100%', m: 'auto', mt: '10px', textAlign: 'center', fontSize: '0.75rem',
								[theme.breakpoints.down('lg')]: { width: '100%' } }}>
								Fig.4 Roles of Hydrogen
							</Box>
						</Box>
						<Box sx={{ width: '100%' }}>
							The above two issues can be solved simultaneously by converting the generated energy into hydrogen and storing it, 
							and generating power through hydrogen if necessary. That is, the complementary relationship between power and hydrogen energy can be leveraged to ensure the efficient 
							use of the entire energy, thereby accelerating the realization of carbon neutrality.
						</Box>
					</Box>
				
					<Box sx={{ width: '100%' }}>
						<Box sx={{ width: '80%', m: 'auto', mt: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Box sx={{ display: 'flex', gap: '30px', [theme.breakpoints.down('lg')] : { gap : '10px' } }}>
								<Box sx={{ width: '100px', aspectRatio: '1/1', position: 'relative',  [theme.breakpoints.down('lg')] : { width: '60px' } }}>
									<Image src='/images/lgjl/keyResearch/SDGoal_13.png' fill sizes='100%' alt='Sustainable Development Goal' />
								</Box>
								<Box sx={{ width: '1px', borderRight: '1px solid var(--color-LGgray-light)' }}></Box>
								<Box sx={{ height: '80px', aspectRatio: '851/293', position: 'relative', [theme.breakpoints.down('lg')] : { height: '50px' } }}>
									<Image src='/images/LGJapanLabInc.png' fill sizes='100%' alt='LG Japan Lab' />
								</Box>
								<Box sx={{ width: '1px', borderRight: '1px solid var(--color-LGgray-light)' }}></Box>
								<Box sx={{ fontSize: '2rem', color: 'green', display: 'flex', alignItems: 'center',
									[theme.breakpoints.down('md')] : { fontSize: '1.5rem' } }} >
									Hydrogen
								</Box>
							</Box>
							<Box sx={{ mt: '10px', fontSize: '0.75rem' }} >
								Fig.5 LG Japan Lab supports the Sustainable Development Goals.
							</Box>
						</Box>
						<Box sx={{ mt: '20px' }}>
							Against this background, LG aims to realize sustainable development through activities centered on &apos;13 Climate Action&apos; 
							and contributes to society through research and development on hydrogen energy to prevent climate change. 
							The existing supply chain of fossil or nuclear energy is expected to form a new value chain in more diverse forms 
							due to hydrogen technology and to create collaboration between heterogeneous industries.
						</Box>
					</Box>

					<Box sx={{ width: '100%' }}>		
					
						<Box sx={{ width: '80%', m: 'auto', mt: '20px', 
							[theme.breakpoints.down('lg')]: { width: '100%' } }}>
							<Grid container spacing='5px'>
								<Grid item xs={6} sm={3} >
									<Box sx={{ height: '60px', pl: '10px', display: 'flex', alignItems: 'center', gap: '20px',
										fontSize: '1rem', backgroundColor: 'var(--color-LGgray)', color: 'var(--color-white)' }}>
										<Box>Sources</Box>
										<ArrowForwardIosIcon sx={{ mb: '-3px'  }} />
									</Box>
									<Box sx={{ height: '200px', pt: '10px', pl: '10px', border: '1px solid var(--color-LGgray)' }}>
										<Box>Solar</Box>
										<Box>Wind</Box>
										<Box>Biomass</Box>
									</Box>
								</Grid>
								<Grid item xs={6} sm={3}>
									<Box sx={{ height: '60px', pl: '10px', display: 'flex', alignItems: 'center', gap: '20px',
										fontSize: '1rem', backgroundColor: 'var(--color-LGred)', color: 'var(--color-white)' }}>
										<Box>Production</Box>
										<ArrowForwardIosIcon sx={{ mb: '-3px'  }} />
									</Box>
									<Box sx={{ height: '200px', pt: '10px', pl: '10px', border: '1px solid var(--color-LGgray)', color: 'var(--color-black)' }}>
										<Box>Electrolysis</Box>
										<Box>pyrolysis</Box>
										<Box>Fermentation</Box>
									</Box>
								</Grid>
								<Grid item xs={6} sm={3}>
									<Box sx={{ height: '60px', pl: '10px', display: 'flex', alignItems: 'center', gap: '20px',
										fontSize: '1rem', backgroundColor: 'var(--color-LGgray)', color: 'var(--color-white)' }}>
										<Box>
											<Box>Storage</Box><Box>Transportation</Box>
										</Box>
										<ArrowForwardIosIcon sx={{ mb: '-3px'  }} />
									</Box>
									<Box sx={{ height: '200px', pt: '10px', pl: '10px', border: '1px solid var(--color-LGgray)' }}>
										<Box>Liquid Hydrogen</Box>
										<Box>Organic Hydrides</Box>
										<Box>Ammonia</Box>
										<br />
										<Box>Gasification</Box>
										<Box>Dehydrogenation</Box>
										<Box>Direct Use</Box>
									</Box>
								</Grid>
								<Grid item xs={6} sm={3}>
									<Box sx={{ height: '60px', pl: '10px', display: 'flex', alignItems: 'center', gap: '20px',
										fontSize: '1rem', backgroundColor: 'var(--color-LGgray)', color: 'var(--color-white)' }}>
										<Box>
											<Box>Distribution</Box><Box>Utilization</Box>
										</Box>	
									</Box>
									<Box sx={{ height: '200px', pt: '10px', pl: '10px', border: '1px solid var(--color-LGgray)' }}>
										<Box>Fuel Cell</Box>
										<Box>Power Generation</Box>
									</Box>
								</Grid>
							</Grid>
							<Box sx={{ width: '100%', m: 'auto', mt: '10px', textAlign: 'center', fontSize: '0.75rem',
								[theme.breakpoints.down('lg')]: { width: '100%' } }}>
								Fig.6 Hydrogen Value Chain & Technologies
							</Box>
						</Box>
					</Box>

					<Box sx={{ width: '100%' }}>
						<Box>
							Fig.6 shows the value chain for hydrogen technology. Among many technologies in many areas, LG Japan Lab focuses on 
							hydrogen technology for hydrogen production. This is because we think energy resources will change significantly 
							from &apos;mining&apos; to &apos;producing&apos; toward the new energy era. 
							In order to realize a faster society of hydrogen energy, various co-operations such as global cooperation, 
							joint research between industry and academia, and open innovation are required. 
							We want to lead this transformation by combining the capabilities of Japan and Korea, which are manufacturing powerhouses.
						</Box>
					</Box>
				</Box>
				
			</Box>
			
		</Box>
	);
};

export default JLKeyResearch;