import React from 'react';
import { Box, Typography } from '@mui/material';

const JLHistory = () => {
   return (
		<Box className='pageContainer'>
         <Typography variant='h5'>LG&apos;s Japan Area R&D Organization History</Typography>
         <Box sx={{ width: '100%', display: 'flex', textAlign: 'center', gap: '6px' }}>
            <Typography variant='h6' sx={{ flex: 3, py: '15px', backgroundColor: ' var(--color-LGgray)', color: 'white' }}>
               Electronincs Affiliated</Typography>
            <Typography variant='h6' sx={{ flex: 2, py: '15px', backgroundColor: ' var(--color-LGgray)', color: 'white' }}>
               Chemicals Affiliated</Typography>
         </Box>
         <Box sx={{ width: '100%', display: 'flex', gap: '10px' }}>
            <Box sx={{ flex: '1', p: '20px 10px', backgroundColor: 'var(--color-bg-content)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
               <Typography sx={{ mb: '5px', pb: '10px', color: 'var(--color-LGred)', fontWeight: 'bolder' }}>LG Elctronics</Typography>
               <Box>
                  <Box sx={{ my: '10px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                     <Typography variant='body2'>1971: </Typography>
                     <Typography variant='body2'>GoldStar Japan Office</Typography>
                  </Box>
                  <Box sx={{ my: '10px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                     <Typography variant='body2'>1981: </Typography>
                     <Typography variant='body2'>HITEC Engineering</Typography>
                  </Box>
                  <Box sx={{ my: '10px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                     <Typography variant='body2'>1986: </Typography>
                     <Typography variant='body2'>GoldStar Japan</Typography>
                  </Box>
                  <Box sx={{ my: '10px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                     <Typography variant='body2'>1988: </Typography>
                     <Typography variant='body2'>GoldStar Tokyo Lab</Typography>
                  </Box>
                  <Box sx={{ my: '10px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                     <Typography variant='body2'>1995: </Typography>
                     <Typography variant='body2'>LGE Tokyo Lab</Typography>
                  </Box>
               </Box>
            </Box>
            <Box sx={{ flex: '1', p: '20px 10px', backgroundColor: 'var(--color-bg-content)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
               <Typography sx={{ mb: '5px', pb: '10px', color: 'var(--color-LGred)', fontWeight: 'bolder' }}>LG Display</Typography>
               <Box>
                  <Box sx={{ my: '10px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                     <Typography variant='body2'>2004: </Typography>
                     <Typography variant='body2'>LGD Japan Lab</Typography>
                  </Box>
               </Box>
            </Box>
            <Box sx={{ flex: '1', p: '20px 10px', backgroundColor: 'var(--color-bg-content)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
               <Typography sx={{ mb: '5px', pb: '10px', color: 'var(--color-LGred)', fontWeight: 'bolder' }}>LG Innotek</Typography>
               <Box>
                  <Box sx={{ my: '10px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                     <Typography variant='body2'>2010: </Typography>
                     <Typography variant='body2'>LGIT Japan Lab</Typography>
                  </Box>
               </Box>
            </Box>
            <Box sx={{ flex: '1', p: '20px 10px', backgroundColor: 'var(--color-bg-content)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
               <Typography sx={{ mb: '5px', pb: '10px', color: 'var(--color-LGred)', fontWeight: 'bolder' }}>LG Chem</Typography>
               <Box>
                  <Box sx={{ my: '10px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                     <Typography variant='body2'>2006-08: </Typography>
                     <Typography variant='body2'>LGC Japan Lab</Typography>
                  </Box>
                  <Box sx={{ my: '10px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                     <Typography variant='body2'>2011: </Typography>
                     <Typography variant='body2'>LGC Japan Lab</Typography>
                  </Box>
               </Box>
            </Box>
            <Box sx={{ flex: '1', p: '20px 10px', backgroundColor: 'var(--color-bg-content)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
               <Typography sx={{ mb: '5px', pb: '10px', color: 'var(--color-LGred)', fontWeight: 'bolder' }}>LG Energy Solution</Typography>
               <Box>
                  <Box sx={{ my: '10px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                     <Typography variant='body2'>2021: </Typography>
                     <Typography variant='body2'>LGES Separation</Typography>
                  </Box>
               </Box>
            </Box>            
         </Box>
         <Box sx={{ width: '100%', p: '10px', textAlign: 'center', backgroundColor: ' var(--color-bg-content)' }}>
            <Typography sx={{ my: '10px', color: 'var(--color-LGred)', fontWeight: 'bolder' }}>2017.07 LG Japan Lab Inc.</Typography>
            <Typography variant='body2' sx={{ my: '10px' }}>Integrated corporation of five affiliated research institutes @Shinagawa Glass Cube</Typography>
         </Box>
         <Box sx={{ width: '100%', p: '10px', textAlign: 'center', backgroundColor: ' var(--color-bg-content)' }}>
            <Typography sx={{ my: '10px', color: 'var(--color-LGred)', fontWeight: 'bolder' }}>2022.02 LG Japan Lab Inc.</Typography>
            <Typography variant='body2' sx={{ my: '10px' }}>Laboratory relocation @Yokohama Innovation Center</Typography>
         </Box>
      </Box>
   );
};

export default JLHistory;