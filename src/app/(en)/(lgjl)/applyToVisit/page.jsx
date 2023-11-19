'use client';

import React from 'react';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ApplyToVisit = () => {

   const theme = useTheme();

   return (
      <Box className='pageContainer'>
         <Box sx={{ width: '100%', m: 'auto' }}>
            <Box sx={{ width: '80%', m: '10px auto', fontSize: '2rem', 
               [theme.breakpoints.down('lg')]: { width: '100%' } }}>Apply to visit LG Japan Lab</Box>
            <Box sx={{ width: '100%', display: 'flex', gap: '20px', backgroundColor: 'var(--color-LGgray-light)' }}>
               <Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')]: { width: '100%', px: '10px' } }}>
                  <Box sx={{ py: '25px', display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-black)' }}>
                     <Box>
                        If you want to visit LG Japan Lab, please refer to the guide below, fill out the application form and pledge, 
                        and send an e-mail to <Link target='_blank' href='mailto:lgjl-visit@lge.com?subject=Apply to visit LG Japan Lab'>lgjl-visit@lge.com</Link>, and we will contact you after reviewing the documents.
                     </Box>
                     <Box sx={{ display: 'flex', alignItems: 'center', gap: '3%' }}>
                        <Box>
                           <Box sx={{ '&:hover' : { color: 'var(--color-LGred)' } }}>
                              <Link href='/documents/LGJLVisitGuide.pdf' download>Visit Guide</Link>
                           </Box>
                           <Box sx={{ '&:hover' : { color: 'var(--color-LGred)' } }}>
                              <Link href='/documents/LGJLVisitApplicationForm.xlsx' download>Visit Application Form</Link>
                           </Box>
                        </Box>
                        <ArrowForwardIcon/>
                        <Box sx={{ '&:hover' : { color: 'var(--color-LGred)' } }}>
                           <Link target='_blank' href='mailto:lgjl-visit@lge.com?subject=Apply to visit LG Japan Lab'>Mail to Visiting Officer</Link>
                        </Box>
                     </Box>
                     <Box>
                        - If multiple people visit, please collect visitor information and submit &apos;application&apos; in one sheet, and fill out &apos;pledge&apos; in one sheet per person.<br/>
                        - If you wish to use the conference room, please fill out the requirements in the text of the email and request it.<br/>
                        - If you wish to use the laboratory of a specific organization, please fill out the requirements in the mail text and add the head of the organization to the mail Cc.
                     </Box>

                     <Box sx={{ width: '80%', m: 'auto', p: '30px', border: '2px solid var(--color-LGgray)', [theme.breakpoints.down('md')] : { width: '100%', px: '10px' } }}>
                        <Box sx={{ fontSize: '1.25rem' }}>How to Create a Visit Application Mail</Box>
                        <TableContainer sx={{ mt: '30px', overflow: 'hidden' }}>
                           <Table stickyHeader size='small' aria-label='sticky table'>
                              <TableHead></TableHead>
                              <TableBody>
                                 <TableRow>
                                    <TableCell>To</TableCell>
                                    <TableCell sx={{ fontWeight: 'var(--weight-bold)', '&:hover' : { color: 'var(--color-LGred)' } }}>
                                       <Link target='_blank' href='mailto:lgjl-visit@lge.com?subject=Apply to visit LG Japan Lab'>lgjl-visit@lge.com</Link>
                                    </TableCell>
                                 </TableRow>
                                 <TableRow><TableCell>cc</TableCell><TableCell sx={{ fontWeight: 'var(--weight-bold)' }}>(the laboratory management leader, if you wish to use a laboratory)</TableCell></TableRow>
                                 <TableRow><TableCell>Title</TableCell><TableCell sx={{ fontWeight: 'var(--weight-bold)' }}>Apply to visit LG Japan Lab</TableCell></TableRow>
                                 <TableRow><TableCell>Attached</TableCell><TableCell sx={{ fontWeight: 'var(--weight-bold)' }}>Visit application and pledge form</TableCell></TableRow>
                                 <TableRow><TableCell>Contents</TableCell><TableCell sx={{ fontWeight: 'var(--weight-bold)' }}>
                                    I&apos;d like to request a visit to LGJL. <br/><br/>
                                    [Using Conference Room] : Y/N<br/>
                                    [Number of people used in the conference room] : O<br/>
                                    Date and time of meeting room use: Enter date and time<br/>
                                    [Laboratory use] : Y/N<br/>
                                    [Laboratory Name/Management Organization] : OO Team Laboratory<br/>
                                    [Name of laboratory users] : (If all visitors, write &apos;power&apos;)
                                 </TableCell></TableRow>
                              </TableBody>
                           </Table>
                        </TableContainer>
                     </Box>

                     <Box>
                        - For smooth visit processing, please request an email 3 days before the visit date.<br/>
                        - On the day of your visit, please receive an access certificate after sealing your smartphone camera and laptop connection terminal at the information desk on the second floor of Yokohama Innovation Center.<br/>
                        - Please return the certificate to the information desk on the 2nd floor every day and receive it again the next day.
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default ApplyToVisit;