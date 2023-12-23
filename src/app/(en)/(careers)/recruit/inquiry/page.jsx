'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useSession } from 'next-auth/react';
import CircleIcon from '@mui/icons-material/Circle';
import { toast } from 'react-hot-toast';

const RecruitInquiry = () => {

   const theme = useTheme();
	const session = useSession();

	const [ applicant, setApplicant ] = useState({});
	const [ applicantInfo, setApplicantInfo ] = useState();
	const [ applicantInfoArr, setApplicantInfoArr ] = useState([]);

   const handleSubmit = async (e) => {
		e.preventDefault();

		if ( !applicant.name || !applicant.email ) {
         toast.error('please enter name and email address ...');
      } else {
         try {
				const params = { name: applicant.name, email: applicant.email };
				const queryParams = new URLSearchParams(params);
				const url = `/api/careers?${queryParams}`;
				fetch(url, {
					method: 'GET',
					cache: 'no-store',
            }).then ((response) => {
					// console.log(response);
               if( response.ok ) return response.json();
            }).then ((result) => {
					// console.log(result);
               if( result.message && result.message === 'success' ) {
                  // toast.success('Your request for a visit has been successfully found ...');
						setApplicantInfo(result._doc);
						setApplicantInfoArr(Object.entries(result._doc).slice(1,-3));
						session.applicantInfo = result._doc;
						console.log(session);
					} else {
                  toast.error('Your request for a recruitment has not been found ...');
                  // router.push('/visit');
               };
            });
         } catch (error) {
            toast.error(error.message);
         };
      };
   };

   return (
      <Box className='pageContainer'>

         <form style={{ width: '100%' }} onSubmit={handleSubmit}>
				<Box sx={{ width: '100%', py: '25px', fontSize: '2rem', textAlign: 'center', 
					color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)',
					[theme.breakpoints.down('md')] : { mt: 'calc( var(--gap-basic)/3 )' } }}>
					Recruitment Application Inquiry
				</Box>
				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px', fontSize: '1.3rem' }}>
						<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} /> Applicant 
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>Name</Box>
								<Box sx={{ flexBasis: '40%' }}>
									<input type='text' className={styles.input} 
										onChange={(e) => setApplicant({ ...applicant, name:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>Email Address</Box>
								<Box sx={{ flexBasis: '40%' }}>
									<input type='text' className={styles.input} 
										onChange={(e) => setApplicant({ ...applicant, email:e.target.value })} />
								</Box>
							</Box>
						</Grid>
					</Grid>

					{ !applicantInfo && (
						<React.Fragment>
							<Box sx={{ mt: '50px', textAlign: 'center' }}>
								Please enter the applicant information you filled out at the time of application and submit
							</Box>
							<Box sx={{ mt: '30px', px: '10px', display: 'flex', justifyContent: 'center' }}>
								<button type='submit' className={styles.buttonRed}>Submit</button>
							</Box>
						</React.Fragment>
					)}
				</Box>
			</form>
			{ applicantInfo && (
				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px', fontSize: '1.3rem' }}>
						<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} />
						<span> Your Recruitment Status:</span>
						<span style={{ color: 'var(--color-LGred)'}}> {applicantInfo.recruitmentStatus}</span>
					</Box>
				</Box>
			)}
      </Box>
   );
};

export default RecruitInquiry;