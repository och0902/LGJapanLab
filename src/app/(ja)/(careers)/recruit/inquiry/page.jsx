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

	const [ isSaving, setIsSaving ] = useState(false);

   const handleSubmit = async (e) => {
		e.preventDefault();

		if ( !applicant.name || !applicant.email ) {
         toast.error('お名前とメールアドレスを入力してください。');
      } else {
			if(!isSaving) {
				setIsSaving(true);
				try {
					const params = { name: applicant.name, email: applicant.email };
					const queryParams = new URLSearchParams(params);
					const url = `/api/careers?${queryParams}`;
					fetch(url, {
						method: 'GET',
						cache: 'no-store',
					}).then ((response) => {
						// console.log(response);
						if( !response.ok ) {
							console.log(response.message);
							toast.error('An error occurred during data processing.');
						} else {
							return response.json();
						};
					}).then ((result) => {
						// console.log(result);
						if ( result.message && result.message === 'success' ) {
							// toast.success( 'Requested applicant for a recruitment has been successfully found ...' );
							setApplicantInfo(result._doc);
							setApplicantInfoArr(Object.entries(result._doc).slice(1,-3));
							session.applicantInfo = result._doc;
							setIsSaving(false);
						} else {
							toast.error('要求された採用志願者が見つかりません。');
							setIsSaving(false);
						};
					});
				} catch (error) {
					toast.error(error.message);
				};
			};
      };
   };

   return (
      <Box className='pageContainer'>

         <form style={{ width: '100%' }} onSubmit={handleSubmit}>
				<Box sx={{ width: '100%', py: '25px', fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', textAlign: 'center', 
					color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)',
					[theme.breakpoints.down('md')] : { mt: 'calc( var(--gap-basic)/3 )' } }}>
					エントリー状況照会
				</Box>
				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px', fontSize: '1.3rem' }}>
						<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} /> 応募者
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>氏名</Box>
								<Box sx={{ flexBasis: '40%' }}>
									<input type='text' className={styles.input} 
										onChange={(e) => setApplicant({ ...applicant, name:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>メールアドレス</Box>
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
								エントリー時に登録した情報を入力してください。
							</Box>
							<Box sx={{ mt: '30px', px: '10px', display: 'flex', justifyContent: 'center' }}>
								<button type='submit' 
									className={styles.buttonRed} style={{ opacity: isSaving ? 0.5 : 1 }}>
									{isSaving ? 'Reading...' : 'Submit'}
								</button>
							</Box>
						</React.Fragment>
					)}
				</Box>
			</form>
			{ applicantInfo && (
				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px', fontSize: '1.3rem' }}>
						<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} />
						<span> 採用 申請 状況 : </span>
						<span style={{ color: 'var(--color-LGred)'}}> {applicantInfo.recruitmentStatus}</span>
					</Box>
				</Box>
			)}
      </Box>
   );
};

export default RecruitInquiry;