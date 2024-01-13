'use client';

import React from 'react';
import PageHero from '@/components/ja/PageHero/PageHero';
import { Box } from '@mui/material';
import jlhistories from './jlhistory';
import { useTheme } from '@emotion/react';
import Image from 'next/image';

const JLHistoryMission = () => {

   const theme = useTheme();

   return (
		<Box className='pageContainer'>
         <PageHero image='/images/lgjl/JLHistory.jpg' aspectRatio='1920/400' title='ヒストリー' message1='of LG japan Lab'/>

         <Box sx={{ width: '100%', mt: 'calc( var(--gap-basic)/2 )' }}>
            <Box sx={{ width: '80%', m: 'auto', mb: '2dvh', fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               LG Japan Labヒストリー
            </Box>
            <Box sx={{ width: '80%', m: 'auto', mb: '5dvh', lineHeight: '150%', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               LGは1971年、家電·半導体など電子産業の先端技術を確保するためにゴールドスター東京リサーチオフィスを設立して以来、
               各事業者のニーズに合わせて系列会社の研究開発機関を日本に設立·運営してきた経緯がある。
               <br /><br />
               研究開発(R&D)力量を集中させ、日本でLGブランド価値を高めるため、
               LGグループ内に現地の研究機関を統合して2017年に研究法人であるLGジャパンラボが発足した経緯がある。
               <br /><br />
               現在、テレビ、家電などの製品技術開発活動、半導体パッケージング技術、
               OLEDデバイス素材·バッテリー素材などの素材開発、水素技術など未来技術に備えるための活動を行っています。
            </Box>
            <Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
               <Box sx={{ width: '100%', mb: '5dvh', display: 'flex', textAlign: 'center', gap: '2px' }}>
                  <Box sx={{ flex: 3, py: '15px', backgroundColor: 'var(--color-LGgray)', fontSize: '1.25rem', color: 'white',
                     [theme.breakpoints.down('sm')] : { fontSize: '1rem' }  }}>
                     電子系列</Box>
                  <Box sx={{ flex: 2, py: '15px', backgroundColor: 'var(--color-LGgray)', fontSize: '1.25rem', color: 'white',
                     [theme.breakpoints.down('sm')] : { fontSize: '1rem' } }}>
                     化学系列</Box>
               </Box>
               <Box sx={{ width: '100%', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', border: 'none' }}>
                     <thead>
                        <tr>
                           {jlhistories.companies.map((company, i) => (
                              <th key={i} style={{ width: '20%' }}>
                                 <Box sx={{ height: '80px', backgroundColor: 'var(--color-LGgray-light)', borderRadius: '40px', 
                                    color: 'var(--color-LGred)', display: 'flex', justifyContent: 'center', alignItems: 'center', 
                                    [theme.breakpoints.down('sm')] : { fontSize: '0.7rem' }}}>
                                    <Box>{company.name}</Box>
                                 </Box>
                              </th>
                           ))}
                        </tr>
                     </thead>
                     <tbody>
                        {jlhistories.events.map((row, i) => (
                           <tr key={i}>
                              {row.map((event, j) => (
                                 <td key={j} style={{ padding: '15px 0', borderLeft: '2px dotted var(--color-LGgray-light)' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px',
                                       [theme.breakpoints.down('xl')] : { flexDirection: 'column' },
                                       [theme.breakpoints.down('sm')] : { fontSize: '0.7rem' } }}>
                                       <Box>{event.date}</Box><Box>{event.history}</Box>
                                    </Box>
                                 </td>
                              ))}
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </Box>
               <Box sx={{ width: '100%', p: '15px', textAlign: 'center', backgroundColor: 'var(--color-LGgray-light)' }}>
                  <Box sx={{ my: '15px', color: 'var(--color-LGred)', fontWeight: 'bolder' }}>2017.07 LG Japan Lab Inc.</Box>
                  <Box sx={{ my: '15px', fontSize: '1rem', color: 'var(--color-black)' }}>
                     Integrated corporation of five affiliated research institutes @Shinagawa Glass Cube
                  </Box>
               </Box>
               <Box sx={{ width: '100%', overflow: 'hidden' }}>
                  <table style={{ width: '100%' }}>
                     <tbody>
                        <tr style={{ border: 'none' }}>
                           <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px dotted var(--color-LGgray-light)' }}></td>
                           <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px dotted var(--color-LGgray-light)' }}></td>
                           <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px dotted var(--color-LGgray-light)' }}></td>
                           <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px dotted var(--color-LGgray-light)' }}></td>
                           <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px dotted var(--color-LGgray-light)' }}>
                              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px',
                                 [theme.breakpoints.down('xl')] : { flexDirection: 'column' },
                                 [theme.breakpoints.down('sm')] : { fontSize: '0.7rem' } }}>
                                 <Box>2021</Box><Box>LGES 組織分離</Box>
                              </Box>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </Box>

               <Box sx={{ width: '100%', p: '15px', textAlign: 'center', backgroundColor: 'var(--color-LGgray-light)' }}>
                  <Box sx={{ my: '15px', color: 'var(--color-LGred)', fontWeight: 'bolder' }}>2022.02 LG Japan Lab Inc.</Box>
                  <Box sx={{ my: '15px', fontSize: '1rem', color: 'var(--color-black)' }}>
                     Laboratory relocation @Yokohama Innovation Center
                  </Box>
               </Box>
            </Box>
         </Box>      
 
      </Box>
   );
};

export default JLHistoryMission;