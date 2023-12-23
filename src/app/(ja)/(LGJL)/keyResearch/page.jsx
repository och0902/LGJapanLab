'use client';

import React from 'react';
import styles from './page.module.css';
import { Box, Grid } from '@mui/material';
import PageHero from '@/components/ja/PageHero/PageHero';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const JLKeyResearch = () => {

	const theme = useTheme();

	const SDG = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17 ];

	return (
		<Box className='pageContainer'>
         <PageHero image='/images/lgjl/keyResearch/KeyResearch.png' aspectRatio='1920/400' title='重点 研究 課題' />
			
			<Box sx={{ width: '100%' }}>
				<Box sx={{ width: '80%', m: 'auto', display: 'flex', justifyContent: 'center', 
					[theme.breakpoints.down('lg')]: { width: '100%' } }}>
					<Box sx={{ mb: '50px', display: 'flex', gap: '10px', 
						[theme.breakpoints.down('sm')] : { flexDirection: 'column', alignItems: 'center', gap: '0' }  }}>
						<Box sx={{ fontSize: '4rem', fontWeight: '600',
							[theme.breakpoints.down('sm')] : { fontSize : '3rem'} }} className={styles.multicolortext} >水素; </Box>
						<Box sx={{ mt: '60px', [theme.breakpoints.down('sm')] : { mt: '0' } }}>LG Japan Labの重点研究課題</Box>
					</Box>
				</Box>
				
				<Box sx={{ width: '80%', m: 'auto', fontSize: '2rem', 
					[theme.breakpoints.down('lg')]: { width: '100%', px: '5px', fontSize: '1.5rem' } }}>モディベーションと研究課題</Box>

				<Box sx={{ width: '80%', m: 'auto', mt: '10px', lineHeight: '150%',
					display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px',
					[theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>

					<Box sx={{ width: '100%' }}>
						世界環境開発会議（WCED）は、1987年に持続可能な開発を、将来世代のニーズを満たす能力を阻害することなく、現世代のニーズに応える意味のある開発と定義しました。 
						2015年にすべての国連加盟国によって採択された2030年持続可能な開発アジェンダは、人々と地球、現在そして未来のための平和と繁栄に向けた共通の青写真を提供します。 
						その中心には、開発途上国によるグローバルパートナーシップにおける行動の緊急の呼びかけである17の持続可能な開発目標（SDGs）があります。 
						彼らは、貧困の終息と他の剥奪は、気候変動に対処し、海洋や森林を保護するために働く一方で、健康や教育を改善し、
						不平等を減らし経済成長を促進する戦略と連携しなければならないことを認識しています。
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
							図.1 17持続可能な開発目標
						</Box>
					</Box>

					<Box sx={{ width: '100%' }}>
						<Link href='https://unfccc.int/process-and-meetings/the-paris-agreement' target='_blank' >パリ協定は、</Link>
							2015 年 12 月 12 日にフランスのパリで開催された国連気候変動会議 (COP21) において、法的拘束力のある国際条約として 196 の締約国によって採択され、2016 年 11 月 4 日に発効しました。 
							「地球の平均気温を産業革命前の水準よりも大幅に低く保つ」ことと、「気温の上昇を産業革命前の水準から1.5℃に抑える」ことだ。
							国連の気候変動に関する政府間パネル（気候変動に関する政府間パネル）が1.5℃を超えると、干ばつや熱波、降雨などの気候変動の影響がより頻繁に発生し、深刻化するリスクがあるためだ。
							地球温暖化を1.5℃に抑えるには、温室効果ガス排出量が遅くとも2025年までにピークに達し、2030年までに43％減少しなければなりません。
					</Box>

					<Box sx={{ width: '100%', 
						display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',
						[theme.breakpoints.down('md')] : { flexDirection: 'column', gap: '15px' } }} >
						<Box sx={{ width: '50%', pr: ' 20px', 
							[theme.breakpoints.down('md')] : { width: '100%', pr: '0' } }}>
							図2は、炭素削減とネットゼロについて、現在と比較して削減が加速するシナリオを示しています。
							どちらのシナリオでも CO2e 排出量は新型コロナウイルス感染症以前のレベルを超えて増加します。
							加速排出量とネットゼロ排出量は 2020 年代初頭にピークに達し、2050 年までに 2019 年のレベルに比べてそれぞれ約 75% と 95% 減少します。 
							New Momentum における CO2e 排出量は 2020 年代後半にピークに達し、2050 年までに 2019 年のレベルより約 20% 減少します。
							<br/><br/>
							持続可能な開発への取り組みの一環として、当社は世界中の気候危機に対処するためにカーボンニュートラルを追求しており、気温上昇だけでは1.5℃以下という目標を達成するのは難しいですが、
							地球規模でのカーボンニュートラル活動をさらに強化する必要があります。
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
								図.2 二酸化炭素排出シナリオ : Accelerated, Net Zero, and New Momentum
							</Box>
						</Box>

					</Box>

					<Box sx={{ width: '100%', m: 'auto', 
						display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center',

						[theme.breakpoints.down('md')] : { flexDirection: 'column', gap: '15px'} }} >

						<Box sx={{ width: '50%', pr: '20px', 
							[theme.breakpoints.down('md')] : { width: '100%', pr: '0' } }}>
							図3に世界の一次エネルギー利用の動向と将来予測を示します。
							一部の国や地域では、エネルギー不足や経済成長への対策として化石由来エネルギーの利用が一定の割合で継続すると予想されており、
							天然ガスはエネルギー変換の過程で重要な役割を果たすことが期待されています。
							<br/><br/>
							化石由来のエネルギー源は今後 20 年間で約 4 分の 1 減少すると予想されており、再生可能エネルギーはそれ以上に成長すると予想されています。
							ネット・ゼロ・エネルギー社会の構築への需要により、6倍の約60％に増加しました。
							また、エネルギーセキュリティの観点から、再生可能エネルギー、ガス、液体燃料などの多様なエネルギー源の利用が期待されています。
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
								図.3 Accelerated と Net Zero は、「パリ一貫した」IPCC シナリオとほぼ一致しています。
							</Box>
						</Box>
					</Box>

					<Box sx={{ width: '100%', m: 'auto',
						display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
						<Box sx={{ width: '100%' }}>
							化石エネルギーや原子力エネルギーを高効率で電気に変換し、効率よく利用しています。
							変換デバイスを使用し、近距離から大量消費地域まで供給します。
							一方で、大容量の保管や長期保管ができないため、非効率な要素がある電力のピーク使用に備えて確保し、運用するには、かなりの量の予備電力が必要です。
							<br/><br/>
							太陽電池や風力などの再生可能エネルギーには、生産密度が比較的小さい、季節や環境要因による変動が大きい、エネルギー消費地域に近いなど、利用には多くの制約があります。
						</Box>
						<Box sx={{ width: '60%', m: 'auto', mt: '20px', 
							[theme.breakpoints.down('sm')] : { width: '90%' }, }}>
							<Box sx={{ width: '100%', aspectRatio: '1086/556', position: 'relative'  }}>
								<Image src='/images/lgjl/keyResearch/HydrogenElectric.jpg' fill sizes='100%' alt='Sustainable Development Goals' />
							</Box>
							<Box sx={{ width: '100%', m: 'auto', mt: '10px', textAlign: 'center', fontSize: '0.75rem',
								[theme.breakpoints.down('lg')]: { width: '100%' } }}>
								図.4 水素の役割
							</Box>
						</Box>
						<Box sx={{ width: '100%' }}>
							発生したエネルギーを水素に変換して貯蔵し、必要に応じて水素で発電することで、上記2つの課題を同時に解決できます。
							つまり、電力と水素エネルギーの相互補完関係を活用して、エネルギー全体を効率的に利用することができ、カーボンニュートラルの実現を加速します。
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
									水素
								</Box>
							</Box>
							<Box sx={{ mt: '10px', fontSize: '0.75rem' }} >
								図.5 LG Japan Labは持続可能な開発目標をサポートしています。
							</Box>
						</Box>
						<Box sx={{ mt: '20px' }}>
							このような状況を背景に、LGは13の気候変動アクションを中心とした活動を通じて持続可能な発展の実現を目指しています。
							気候変動を防止する水素エネルギーの研究開発を通じて社会に貢献します。
							既存の化石エネルギーや原子力エネルギーのサプライチェーンは、より多様な形で新たなバリューチェーンを形成すると予想される水素技術のおかげで、
							異種産業間のコラボレーションが生まれます。
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
								図.6 水素のバリューチェーンと技術
							</Box>
						</Box>
					</Box>

					<Box sx={{ width: '100%' }}>
						<Box>
							図6に水素技術のバリューチェーンを示します。さまざまな分野の技術の中でも、LG Japan Labは水素製造のための水素技術に焦点を当てています。
							新エネルギー時代に向けて、エネルギー資源は「採掘」から「生産」へ大きく変化すると考えているからです。
							より速い水素エネルギー社会の実現には、世界的な協力、産学共同研究、オープンイノベーションなどの様々な協力が必要です。
							ものづくり大国である日本と韓国の力を結集して、この変革をリードしていきたいと考えています。
						</Box>
					</Box>
				</Box>
				
			</Box>
			
		</Box>
	);
};

export default JLKeyResearch;