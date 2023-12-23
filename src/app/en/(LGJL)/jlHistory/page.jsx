'use client';

import React from 'react';
import PageHero from '@/components/en/PageHero/PageHero';
import { Box } from '@mui/material';
import jlhistories from './jlhistory';
import { useTheme } from '@emotion/react';

const JLHistoryMission = () => {

   const theme = useTheme();

   return (
		<Box className='pageContainer'>
         <PageHero image='/images/lgjl/JLHistory.png' aspectRatio='1920/400' title='History' message1='of LG japan Lab'/>

         <Box sx={{ width: '100%', mt: 'calc( var(--gap-basic)/2 )' }}>
            <Box sx={{ width: '80%', m: 'auto', mb: '2dvh', fontSize: '2rem', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               LG Japan Lab History
            </Box>
            <Box sx={{ width: '80%', m: 'auto', mb: '5dvh', lineHeight: '150%', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               Since establishing the Goldstar Tokyo Research Office in 1971 to secure advanced technologies in the electronics industry such as home appliances and semiconductors,
               LG has established and operated research and development organizations in Japan for its affiliates according to the needs of each business.
               <br /><br />
               In order to focus R&D capabilities and enhance LG brand value in Japan, LG Japan Lab, a research corporation, 
               was launched in 2017 by integrating local research organizations within the LG Group.
               <br /><br />
               Currently, we are carrying out activities in product technology development for TVs, home appliances, etc., 
               development of materials such as semiconductor packaging technology, OLED device materials, and battery materials, and hydrogen technology to prepare for future technologies.
            </Box>
            <Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
               <Box sx={{ width: '100%', mb: '5dvh', display: 'flex', textAlign: 'center', gap: '2px' }}>
                  <Box sx={{ flex: 3, py: '15px', backgroundColor: 'var(--color-LGgray)', fontSize: '1.25rem', color: 'white',
                     [theme.breakpoints.down('sm')] : { fontSize: '1rem' }  }}>
                     Electronics Affiliated</Box>
                  <Box sx={{ flex: 2, py: '15px', backgroundColor: 'var(--color-LGgray)', fontSize: '1.25rem', color: 'white',
                     [theme.breakpoints.down('sm')] : { fontSize: '1rem' } }}>
                     Chemical Affiliated</Box>
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
                           <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px dotted var(--color-LGgray-light)' }}></td>
                           <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px dotted var(--color-LGgray-light)' }}></td>
                           <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px dotted var(--color-LGgray-light)' }}></td>
                           <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px dotted var(--color-LGgray-light)' }}></td>
                           <td style={{ width: '20%', padding: '20px 0' , borderLeft: '2px dotted var(--color-LGgray-light)' }}>
                              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px',
                                 [theme.breakpoints.down('xl')] : { flexDirection: 'column' },
                                 [theme.breakpoints.down('sm')] : { fontSize: '0.7rem' } }}>
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
 
      </Box>
   );
};

export default JLHistoryMission;