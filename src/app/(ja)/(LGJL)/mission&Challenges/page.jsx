'use client';

import React from 'react';
import PageHero from '@/components/ja/PageHero/PageHero';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import Image from 'next/image';

const JLHistoryMission = () => {

   const theme = useTheme();

   return (
		<Box className='pageContainer'>
         <PageHero image='/images/lgjl/mission&Challenges/Mission&Challenges.jpg' aspectRatio='1920/400' title='Missionと研究開発課題' />

         <Box sx={{ width: '100%' }}>

            <Box sx={{ width: '80%', m: 'auto', 
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               <Box sx={{ width: '700px', aspectRatio: '918/203', mt: 'var(--gap-basic)', position: 'relative', 
                  [theme.breakpoints.down('lg')] : { width: '60%' }, [theme.breakpoints.down('sm')] : { width: '80%' },}}>
                  <Image src='/images/lgjl/mission&Challenges/FutureLifeWithOurTechnology.png' fill sizes='100%' alt='Future Life With Our Technology' />
               </Box>
            </Box>

            <Box sx={{ width: '80%', m: 'auto', mt: 'calc( var(--gap-basic)/3 )', 
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               <Box sx={{ fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', mb: '1dvh' }}>Mission Statement</Box>
               <Box sx={{ fontSize: '1rem', lineHeight: '150%' }}>
                  日本の強み技術(素材/部品など)を早期センシングして、早い検証および技術確保を通じ、系列社事業競争力向上と未来準備を主導する。
               </Box>
            </Box>
            
            <Box sx={{ width: '80%', m: 'auto', mt: 'var(--gap-basic)', fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', color: 'var(--color-LGred)',
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               研究開発課題
            </Box>

            <Box sx={{ width: '80%', m: 'auto', mt: '10px', lineHeight: '150%',
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               LGの事業領域に合わせて電子·化学分野の研究開発を進め、製品技術開発から素材研究まで多様な活動を展開しています。
               特に未来に備えるためにクリーン技術分野に多くの努力を傾けており、水素技術を主要研究分野として選定し育成しています。
            </Box>
            <Box sx={{ width: '80%', height: '100%', m: 'auto', mt: '30px', display: 'flex', gap: '15px',
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' },
               [theme.breakpoints.down('md')] : { flexDirection: 'column', gap: '40px' } }}>
               <Box sx={{ flexBasis: '50%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <Box sx={{ mt: '20px', px: '20px', fontSize: '1.5rem',  fontWeight: 'var(--weight-bold)', color: 'var(--color-black)' }}>電子分野</Box>
                     <Image src='/images/lgjl/mission&Challenges/electrons.jpg' width={30} height={30} style={{ marginBottom: '-10px' }} alt='electons' />
                  </Box>
                  <Box sx={{ height: '100%', p: '20px', color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)', 
                     borderRadius: '40px', boxShadow: '0 4px 4px var(--color-LGgray)',
                     [theme.breakpoints.down('md')] : { px: '10px' } }}>
                     <Box sx={{ pt: '15px', pb: '10px' }}>日本市場向け製品技術開発</Box>
                     <Box sx={{ pl: '10px', pb: '10px' }}>
                        <Box sx={{ pb: '5px' }}>Home Appliances :</Box>
                        <Box sx={{ pl: '10px', fontSize: '0.85rem' }}>洗濯機、冷蔵庫、エアコン、空気清浄機等の技術開発</Box>
                     </Box>
                     <Box sx={{ pl: '10px', pb: '15px' }}>
                        <Box sx={{ pb: '5px' }}>Home Entertainments :</Box>
                        <Box sx={{ pl: '10px', fontSize: '0.85rem' }}>テレビの画質改善、ソフトウェア開発、周辺機器評価</Box>
                     </Box>
                     <Box sx={{ py: '15px' }}>量子コンピュータ応用</Box>
                     <Box sx={{ py: '15px' }}>OLED材料およびディスプレイ用機能材料の開発</Box>
                     <Box sx={{ py: '15px' }}>Camera Moduleの光学設計技術</Box>
                     <Box sx={{ py: '15px' }}>半導体パッケージング技術</Box>
                  </Box>
               </Box>
            
               <Box sx={{ flexBasis: '50%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <Box sx={{ mt: '20px', px: '20px', fontSize: '1.5rem',  fontWeight: 'var(--weight-bold)', color: 'var(--color-black)' }}>化学分野</Box>
                     <Image src='/images/lgjl/mission&Challenges/chemical.jpg' width={30} height={30} alt='chemical' />
                  </Box>
                  <Box sx={{ height: '100%', p: '20px', color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)', 
                     borderRadius: '40px', boxShadow: '0 4px 4px var(--color-LGgray)',
                     [theme.breakpoints.down('md')] : { px: '10px' } }}>
                     <Box sx={{ py: '15px' }}>充電池の材料および製造プロセスの開発</Box>
                     <Box sx={{ py: '15px' }}>持続可能性のための技術 (CT : Clean Technology)</Box>
                     <Box sx={{ pl: '10px', pb: '10px', fontSize: '0.85rem' }}>- Bio-based, Recycled</Box>
                     <Box sx={{ pl: '10px', pb: '15px', fontSize: '0.85rem' }}>- 特に水素技術に力を入れています。</Box>
                     <Box sx={{ py: '15px' }}>Material Informatics (MI) を活用した材料設計技術</Box>
                  </Box>
               </Box>
            </Box>

            <Box sx={{ width: '80%', m: 'auto', mt: 'calc( var(--gap-basic)*1.5 ) ', fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', color: 'var(--color-LGred)', 
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               オープンイノベーション
            </Box>

            <Box sx={{ width: '80%', m: 'auto', mt: '10px', lineHeight: '150%',
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               LGグループは1995年からグローバル主要拠点に有望技術のオープンイノベーション専担組織である「技術センター」を設立·運営している。 
               2018年にLG Technology Ventures(CVC)を設立して北米のスタートアップに投資した後、
               2019年には日本にも技術センタージャパン(TCJ)を設立し、有望企業との事業協力と投資力量を拡大した。
            </Box>

            <Box sx={{ width: '100%' }}>

               <Box sx={{ width: '80%', m: 'auto', mt: '30px', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
                  <Box sx={{ color: 'var(--color-black)' }}>
                     <Box sx={{ fontSize: '1.5rem', fontWeight: 'var(--weight-bold)' }}>Technology Center Japan</Box>
                     <Box sx={{ fontSize: '1.2rem' }}>(TCJ, オープンイノベーションに専念する組織)</Box>
                  </Box>
               </Box>

               <Box sx={{ width: '80%', m: 'auto', mt: '30px', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' }  }}>
                  <Box sx={{ fontSize: '1.25rem' }}>主な役割</Box>
               </Box>
               <Box sx={{ width: '100%', p: '20px 5px', backgroundColor: 'var(--color-LGgray-light)' }}>
                  <Box sx={{ width: '80%', m: 'auto', lineHeight: '150%', color: 'var(--color-black)',
                     [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                     <Box sx={{ py: '5px' }}>
                        LG系列会社の事業領域に対するオープンイノベーション活動の実施
                     </Box>
                     <Box sx={{ pt: '5px' }}>
                     投資機会を特定し、有望なスタートアップのための協力モデルを構築する。（特に素材·部品事業分野）
                     </Box>
                     <Box sx={{ pl: '10px', pb: '5px', fontSize: '0.85rem' }}>
                        J/V、M&A、株式投資、共同開発、ライセンシング、ネットワーキングなど多様なパートナーシップ。
                     </Box>                     
                  </Box>
               </Box>

               <Box sx={{ width: '80%', m: 'auto', mt: '30px', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' }  }}>
                  <Box sx={{ fontSize: '1.25rem' }}>
                     <Box>主な関心分野</Box><Box>(材料及び部品 等)</Box>
                  </Box>
               </Box>
               <Box sx={{ width: '100%', p: '20px 5px', backgroundColor: 'var(--color-LGgray-light)' }}>
                  <Box sx={{ width: '80%', m: 'auto', lineHeight: '150%', color: 'var(--color-black)',
                     [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                     <Box sx={{ py: '5px' }}>
                        EVバッテリー : シリコン陰極材、銅箔、安全関連材料(放熱など)、品質検査装備及び次世代材料開発、Licensing、Networkingなど。
                     </Box>
                     <Box sx={{ py: '5px' }}>
                        持続可能性 : 水素、環境にやさしい材料（バイオプラスチックなど）改質剤および加工装置、CCUS、発酵原料など
                     </Box>
                     <Box sx={{ py: '5px' }}>
                        IT部品 :カメラモジュール、次世代ディスプレイ、XR、電子部品、半導体材料など
                     </Box>
                  </Box>
               </Box>
               
               <Box sx={{ width: '80%', m: 'auto', mt: '30px', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' }  }}>
                  <Box sx={{ fontSize: '1.25rem' }}>
                     <Box>業績</Box><Box>(コラボレーション事例)</Box>
                  </Box>
               </Box>
               <Box sx={{ width: '100%', p: '20px 5px', backgroundColor: 'var(--color-LGgray-light)' }}>
                  <Box sx={{ width: '80%', m: 'auto', lineHeight: '150%', color: 'var(--color-black)',
                     [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                     <Box sx={{ py: '5px' }}>
                        投資 : バイオワーク（エコモディファイヤ株式投資）、KELP（マイクロバイオーム研究所J/V）、GINZA STEFANY/EVERMERE（化粧品関連M&A）、ソフトバンクベンチャーズアジア（LP投資）
                     </Box>
                     <Box sx={{ py: '5px' }}>
                        ※ 終了案件 : 燃焼合成糸（無機材料）、FJ複合材（放熱材料）
                     </Box>
                     <Box sx={{ py: '5px' }}>
                        事業展開 : MI-6（材料情報学）、クロスコンパス（スマートファクトリー）、Qbit Robotics（商用ロボティクス）、Qunasys（量子コンピューティング）等
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default JLHistoryMission;