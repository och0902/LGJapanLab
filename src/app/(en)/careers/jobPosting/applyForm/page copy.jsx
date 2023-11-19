'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { useTheme } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

const ApplyForm = () => {

	const theme = useTheme();
	const router = useRouter();

	const [ checkbox, setCheckbox ] = useState(false);
	const [ position, setPosition ] = useState('');	
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ confirmEmail, setConfirmEmail ] = useState('');
	const [ files, setFiles ] = useState({});
	const [ otherMatters, setOtherMatters ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		// const userData = new FormData();
		// console.log('formData', userData);
		// userData.set('file', resume);

		if ( checkbox !== true ) { alert('Privacy Policy에 동의하여 주십시요');	return; }
		if ( !position || !name || !email || !confirmEmail ) { alert('필수 항목을 입력하여 주세요.'); return; }
		// if ( !position || !name || !email || !confirmEmail || !files ) { alert('필수 항목을 입력하여 주세요.'); return; }
		if ( email !== confirmEmail ) { alert('Email이 일치하지 않습니다'); return; }
	
		console.log('files', files);

      try {
         const url = '/api/careers';
         fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ checkbox, position, name, email, files, otherMatters }),
         })
         .then ((response) => {
            if( response.ok ) {
               toast.success('Your data was successfully delivered to the person in charge.');
            } else {
					toast.error('failed to create a careers data');
				};
				
				router.push('/careers/jobPosting');
				router.refresh();
		
         })
         .catch (error => { toast.error(error) });
      } catch (error) {
         toast.error('something went wrong ...');
      };

	};

	return (
		<Box className='pageContainer'>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ width: '80%', m: 'auto', fontSize: '2rem', textAlign: 'center' }}>Apply Form</Box>

				<form onSubmit={handleSubmit}>
					
					<Box sx={{ width: '100%', mt: 'calc( var(--gap-basic)/2 )', backgroundColor: 'var(--color-LGgray-light)',
						[theme.breakpoints.down('md')] : { mt: 'calc( var(--gap-basic)/3 )' } }}>
						<Box sx={{ width: '80%', m: 'auto', pt: '15px', pb: '5px', lineHeight: '150%', textAlign: 'center' }}>
							<Box>
								I understand and agree with 
								<Link href='/privacyPolicy' className={styles.privacypolicy}> the handling of personal information of LG Japan Lab Inc. and LG Group.</Link>
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
								<Box>Please check this box.</Box>
								<FormControlLabel control={
									<Checkbox sx={{ color: 'var(--color-LGred)', '&.Mui-checked': { color: 'var(--color-LGred)' } }} 
										onChange={(e) => setCheckbox(!checkbox)} value={checkbox}/>
								} />
							</Box>
						</Box>
					</Box>

					<Box sx={{ width: '80%', m: 'auto', mt: 'calc( var(--gap-basic)/2 )', 
						[theme.breakpoints.down('md')] : { width: '100%' } }}> 
						<Box sx={{ my: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Box>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> marked items are required.
							</Box>
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px', 
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Position
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setPosition(e.target.value)} value={position} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Name
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setName(e.target.value)} value={name}/>
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Email Address
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='email' className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<Box><CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Email Address</Box>
								<Box>(for Verification)</Box>
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='email' className={styles.input} onChange={(e) => setConfirmEmail(e.target.value)} value={confirmEmail} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Resume and Job Experience
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='file' multiple className={styles.input} onChange={(e) => setFiles(e.target.files)} value={files.name}/>
							</Box>						
						</Box>
						<Box sx={{ width: '50%', m: 'auto', my: '20px', [theme.breakpoints.down('sm')] : { width: '80%',} }}>
							※ Please make the file in Microsoft Office, PDF, and the file size should be within 30MB in total, and 5 attachments.
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								Other Matters to be Stated
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<textarea className={styles.textarea} onChange={(e) => setOtherMatters(e.target.value)} value={otherMatters} />
							</Box>						
						</Box>
						<Box sx={{ width: '50%', m: 'auto', my: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center',
							[theme.breakpoints.down('sm')] : { width: '80%',} }}>
							<Box>※ It may take some time to respond. Thank you for your understanding. Continuous submissions are not available in 10 minutes.</Box>
							<Box sx={{ my: '20px' }}>
								<button type='submit' className={styles.buttonRed}>Submit</button>
							</Box>
						</Box>
					</Box>
				</form>

			</Box>
		</Box>
	);
};

export default ApplyForm;