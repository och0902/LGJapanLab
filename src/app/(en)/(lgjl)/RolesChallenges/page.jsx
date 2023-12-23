'use client';

import React from 'react';
import PageHero from '@/components/PageHero/PageHero';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import Image from 'next/image';

const JLHistoryMission = () => {

   const theme = useTheme();

   return (
		<Box className='pageContainer'>
         <PageHero image='/images/lgjl/rolesChallenges/RolesChallenges.png' aspectRatio='1920/400' title='Roles, R&D Challenges' />

         <Box sx={{ width: '100%' }}>

            <Box sx={{ width: '80%', m: 'auto', 
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               <Box sx={{ width: '700px', aspectRatio: '918/203', mt: 'var(--gap-basic)', position: 'relative', 
                  [theme.breakpoints.down('lg')] : { width: '60%' }, [theme.breakpoints.down('sm')] : { width: '80%' },}}>
                  <Image src='/images/lgjl/rolesChallenges/FutureLifeWithOurTechnology.png' fill sizes='100%' alt='Future Life With Our Technology' />
               </Box>
            </Box>

            <Box sx={{ width: '80%', m: 'auto', mt: 'calc( var(--gap-basic)/3 )', 
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               <Box sx={{ fontSize: '2rem', mb: '1dvh' }}>Mission Statement</Box>
               <Box sx={{ fontSize: '1rem', lineHeight: '150%' }}>
                  Through early detection, verification and securing of Japan&apos;s strengths in technology (materials/parts, etc.), 
                  LG Japan Laboratory will contribute the improvement of business competitiveness and competence preparation 
                  for the future of LG affiliated companies.
               </Box>
            </Box>
            
            <Box sx={{ width: '80%', m: 'auto', mt: 'var(--gap-basic)', fontSize: '2rem', color: 'var(--color-LGred)',
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               R&D Fields
            </Box>

            <Box sx={{ width: '80%', m: 'auto', mt: '10px', lineHeight: '150%',
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               In line with LG&apos;s business areas, we are conducting research and development in the electronics and chemical fields, 
               and are engaged in a variety of activities ranging from product technology development to materials research. 
               In particular, we are concentrating a lot of effort on the clean technology field to prepare for the future, 
               and we have selected and are cultivating hydrogen technology as our main research field.
            </Box>
            <Box sx={{ width: '80%', height: '100%', m: 'auto', mt: '30px', display: 'flex', gap: '15px',
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' },
               [theme.breakpoints.down('md')] : { flexDirection: 'column', gap: '40px' } }}>
               <Box sx={{ flexBasis: '50%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <Box sx={{ mt: '20px', px: '20px', fontSize: '1.5rem', color: 'var(--color-black)' }}>Electronics Field</Box>
                     <Image src='/images/lgjl/rolesChallenges/electrons.png' width={30} height={30} style={{ marginBottom: '-10px' }} alt='electons' />
                  </Box>
                  <Box sx={{ height: '100%', p: '20px', color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)', 
                     borderRadius: '40px', boxShadow: '0 4px 4px var(--color-LGgray)',
                     [theme.breakpoints.down('md')] : { px: '10px' } }}>
                     <Box sx={{ pt: '15px', pb: '10px' }}>Product Technology Development for Japan Market</Box>
                     <Box sx={{ pl: '10px', pb: '10px' }}>
                        <Box sx={{ pb: '5px' }}>Home Appliances :</Box>
                        <Box sx={{ pl: '10px', fontSize: '0.85rem' }}>Technologies Development for Washing Machines, Refrigerators, Air Conditioners, Air Purifiers, etc.</Box>
                     </Box>
                     <Box sx={{ pl: '10px', pb: '15px' }}>
                        <Box sx={{ pb: '5px' }}>Home Entertainments :</Box>
                        <Box sx={{ pl: '10px', fontSize: '0.85rem' }}>Picture Quality Improvement, Software Development, and Peripheral Device Evaluation for TVs</Box>
                     </Box>
                     <Box sx={{ py: '15px' }}>Quantum Computer Application</Box>
                     <Box sx={{ py: '15px' }}>OLED Materials & Functional Materials Develoment for Displays</Box>
                     <Box sx={{ py: '15px' }}>Optical Design Technologies for Camera Module</Box>
                     <Box sx={{ py: '15px' }}>Semiconductor Packaging Technologies</Box>
                  </Box>
               </Box>
            
               <Box sx={{ flexBasis: '50%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <Box sx={{ mt: '20px', px: '20px', fontSize: '1.5rem', color: 'var(--color-black)' }}>Chemical Field</Box>
                     <Image src='/images/lgjl/rolesChallenges/chemical.png' width={30} height={30} alt='chemical' />
                  </Box>
                  <Box sx={{ height: '100%', p: '20px', color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)', 
                     borderRadius: '40px', boxShadow: '0 4px 4px var(--color-LGgray)',
                     [theme.breakpoints.down('md')] : { px: '10px' } }}>
                     <Box sx={{ py: '15px' }}>Material & Manufacturing Processes Development for Rechargeable Battery</Box>
                     <Box sx={{ py: '15px' }}>Technologies for Sustainability (CT: Clean Technology)</Box>
                     <Box sx={{ pl: '10px', pb: '10px', fontSize: '0.85rem' }}>- Bio-based, Recycled</Box>
                     <Box sx={{ pl: '10px', pb: '15px', fontSize: '0.85rem' }}>- In particular, we are focusing on hydrogen technology.</Box>
                     <Box sx={{ py: '15px' }}>Material Design Technologies using Material Informatics</Box>
                  </Box>
               </Box>
            </Box>

            <Box sx={{ width: '80%', m: 'auto', mt: 'calc( var(--gap-basic)*1.5 ) ', fontSize: '2rem', color: 'var(--color-LGred)', 
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               Open Innovation
            </Box>

            <Box sx={{ width: '80%', m: 'auto', mt: '10px', lineHeight: '150%',
               [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
               Since 1995, LG Group has established and operated the Technology Center, 
               a dedicated organization for open innovation of promising technologies in major global bases. 
               Since establishing LG Technology Ventures (CVC) to invest in startups in North America in 2018, 
               it has also created a Technology Center Japan (TCJ) in Japan in 2019 to expand business cooperation 
               and investment capabilities with promising companies.
            </Box>

            <Box sx={{ width: '100%' }}>

               <Box sx={{ width: '80%', m: 'auto', mt: '30px', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' } }}>
                  <Box sx={{ color: 'var(--color-black)' }}>
                     <Box sx={{ fontSize: '1.5rem' }}>Technology Center Japan</Box>
                     <Box sx={{ fontSize: '1.2rem' }}>(TCJ, Organization dedicated to Open Innovation)</Box>
                  </Box>
               </Box>

               <Box sx={{ width: '80%', m: 'auto', mt: '30px', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' }  }}>
                  <Box sx={{ fontSize: '1.25rem' }}>Key Roles</Box>
               </Box>
               <Box sx={{ width: '100%', p: '20px 5px', backgroundColor: 'var(--color-LGgray-light)' }}>
                  <Box sx={{ width: '80%', m: 'auto', lineHeight: '150%', color: 'var(--color-black)',
                     [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                     <Box sx={{ py: '5px' }}>
                        Performing open innovation activities for LG affiliates&apos; business areas
                     </Box>
                     <Box sx={{ pt: '5px' }}>
                        Identify investment opportunities and build cooperative models for promising start-ups (especially in materials and parts business areas)
                     </Box>
                     <Box sx={{ pl: '10px', pb: '5px', fontSize: '0.85rem' }}>
                        Various partnerships such as J/V, M&A, Equity investment, Joint development, Licensing, Networking, etc.
                     </Box>                     
                  </Box>
               </Box>

               <Box sx={{ width: '80%', m: 'auto', mt: '30px', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' }  }}>
                  <Box sx={{ fontSize: '1.25rem' }}>
                     <Box>Key areas of Interest</Box><Box>(Materials and Components, etc.)</Box>
                  </Box>
               </Box>
               <Box sx={{ width: '100%', p: '20px 5px', backgroundColor: 'var(--color-LGgray-light)' }}>
                  <Box sx={{ width: '80%', m: 'auto', lineHeight: '150%', color: 'var(--color-black)',
                     [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                     <Box sx={{ py: '5px' }}>
                        <Box>EV Battery :</Box>
                        <Box>Silicon cathode material, copper foil, safety-related materials (heat dissipation, etc.), quality inspection equipment, and next-generation materials</Box>
                     </Box>
                     <Box sx={{ py: '5px' }}>
                        Sustainability: Hydrogen, eco-friendly materials (such as bioplastic) modifiers and processing equipment, CCUS, fermented raw materials, etc
                     </Box>
                     <Box sx={{ py: '5px' }}>
                        IT Parts: Camera Module, Next Generation Display, XR, Electronic Components, Semiconductor Materials, etc
                     </Box>
                  </Box>
               </Box>
               
               <Box sx={{ width: '80%', m: 'auto', mt: '30px', [theme.breakpoints.down('lg')] : { width: '100%', px: '5px' }  }}>
                  <Box sx={{ fontSize: '1.25rem' }}>
                     <Box>Achievements</Box><Box>(Collaboration Cases)</Box>
                  </Box>
               </Box>
               <Box sx={{ width: '100%', p: '20px 5px', backgroundColor: 'var(--color-LGgray-light)' }}>
                  <Box sx={{ width: '80%', m: 'auto', lineHeight: '150%', color: 'var(--color-black)',
                     [theme.breakpoints.down('lg')] : { width: '100%' } }}>
                     <Box sx={{ py: '5px' }}>
                        Investment : Biowork (Eco-friendly Modifier Equity Investment), KELP (Microbiome Research Institute J/V), GINZA STEFANY/EVERMERE (Cosmetics Related M&A), SoftBank Ventures Asia (LP Investment)
                     </Box>
                     <Box sx={{ py: '5px' }}>
                        *Exit agenda : Combustion synthetic yarn (inorganic material), FJ composite (heat dissipation material)
                     </Box>
                     <Box sx={{ py: '5px' }}>
                        Business development : MI-6 (Materials Informatics), Cross Compass (Smart Factory), Qbit Robotics (Commercial Robotics), Qunasys (Quantum Computing), etc
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default JLHistoryMission;