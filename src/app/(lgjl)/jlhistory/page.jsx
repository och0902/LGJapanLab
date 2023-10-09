'use client';

import React from 'react';
import { Box } from '@mui/material';
import PageHero from '@/components/PageHero/PageHero';
import jlhistories from './jlhistory_en';
import { useTheme } from '@emotion/react';

const JLHistory = () => {

   const theme = useTheme();

   return (
		<Box className='pageContainer'>
         <PageHero image='/images/lgjl/JLHistory.png' aspectRatio='1920/400' 
            title='History' message1='of LG Japan Laboratiry' color='var(--color-black)' />  

         <Box sx={{ width: '100%', mt: '5dvh' }}>
            <Box sx={{ width: '80%', m: 'auto', mb: '5dvh', fontSize: '2rem' }}>LG&apos;s Japan Area R&D Organization History</Box>
            <Box sx={{ width: '100%', mb: '5dvh', display: 'flex', textAlign: 'center', gap: '2px' }}>
               <Box sx={{ flex: 3, py: '15px', backgroundColor: 'var(--color-LGgray)', fontSize: '1.25rem', color: 'white' }}>
                  Electronic Affiliated</Box>
               <Box sx={{ flex: 2, py: '15px', backgroundColor: 'var(--color-LGgray)', fontSize: '1.25rem', color: 'white' }}>
                  Chemical Affiliated</Box>
            </Box>
            <Box sx={{ width: '100%', overflow: 'hidden' }}>
               <table style={{ width: '100%', borderCollapse: 'collapse', border: 'none' }}>
                  <thead>
                     <tr>
                        {jlhistories.companies.map((company, i) => (
                           <th key={i} style={{ width: '20%' }}>
                              <Box sx={{ py: '20px', backgroundColor: 'var(--color-LGgray-light)', borderRadius: '28px', color: 'var(--color-LGred)',
                                 textAlign: 'center'}}>
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
                              <td key={j} style={{ padding: '15px 0', borderLeft: '2px solid var(--color-LGgray-light)' }}>
                                 <Box sx={{ px: '3px', display: 'flex', flexDirection: 'row', gap: '10px',
                                    [theme.breakpoints.down('lg')] : { flexDirection: 'column' } }}>
                                    <Box>{event.date}</Box><Box>{event.history}</Box>
                                 </Box>
                              </td>
                           ))}
                        </tr>
                     ))}
                  </tbody>
               </table>
            </Box>
            <Box sx={{ width: '100%', p: '15px', textAlign: 'center', backgroundColor: ' var(--color-bg-content)' }}>
               <Box sx={{ my: '15px', color: 'var(--color-LGred)', fontWeight: 'bolder' }}>2017.07 LG Japan Lab Inc.</Box>
               <Box sx={{ my: '15px', fontSize: '1rem', color: 'var(--color-black)' }}>
                  Integrated corporation of five affiliated research institutes @Shinagawa Glass Cube
               </Box>
            </Box>
            <Box sx={{ width: '100%', overflow: 'hidden' }}>
               <table style={{ width: '100%' }}>
                  <tbody>
                     <tr style={{ border: 'none' }}>
                        <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px solid var(--color-LGgray-light)' }}></td>
                        <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px solid var(--color-LGgray-light)' }}></td>
                        <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px solid var(--color-LGgray-light)' }}></td>
                        <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px solid var(--color-LGgray-light)' }}></td>
                        <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px solid var(--color-LGgray-light)' }}>
                           <Box sx={{ px: '3px', display: 'flex', flexDirection: 'row', gap: '10px',
                              [theme.breakpoints.down('lg')] : { flexDirection: 'column' } }}>
                              <Box>2021</Box><Box>LGES Separation</Box>
                           </Box>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </Box>

            <Box sx={{ width: '100%', p: '15px', textAlign: 'center', backgroundColor: ' var(--color-bg-content)' }}>
               <Box sx={{ my: '15px', color: 'var(--color-LGred)', fontWeight: 'bolder' }}>2022.02 LG Japan Lab Inc.</Box>
               <Box sx={{ my: '15px', fontSize: '1rem', color: 'var(--color-black)' }}>
                  Laboratory relocation @Yokohama Innovation Center
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default JLHistory;