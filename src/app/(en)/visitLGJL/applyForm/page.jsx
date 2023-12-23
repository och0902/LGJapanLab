'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import { VisitorState } from '../atom';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { useTheme } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

const ApplyForm = () => {

	const theme = useTheme();
	const router = useRouter();
	const [ visitorState, setVisitorState ] = useRecoilState(VisitorState);

	const [ checkbox, setCheckbox ] = useState(false);
	const [ dateOfVisit, setDateOfVisit ] = useState('');
	const [ purposeOfVisit, setPurposeOfVisit ] = useState('');
	const [ personToMeet, setPersonToMeet ] = useState('');
	const [ visitorName, setVisitorName ] = useState('');
	const [ visitorMobile, setVisitorMobile ] = useState('');	
	const [ visitorEmail, setVisitorEmail ] = useState('');
	const [ numberOfVisitors, setNumberOfVisitors ] = useState('');
	const [ conferenceRoom, setConferenceRoom ] = useState('');
	const [ laboratory, setLaboratory ] = useState('');
	const [ files, setFiles ] = useState([]);
	const [ otherMatters, setOtherMatters ] = useState('');

	useEffect(() => {
		if ( visitorState.auth === 'authenticated' ) {
			setCheckbox(visitorState._doc.checkbox);
			setVisitorName(visitorState._doc.name);
			setVisitorMobile(visitorState._doc.mobile);
			setVisitorEmail(visitorState._doc.email);
		};
	},[]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ( checkbox !== true ) { toast('Privacy Policy에 동의하여 주십시요');	return; }
	
		const formData = new FormData();

		formData.set('checkbox', checkbox);
		formData.set('dateOfVisit', dateOfVisit);
		formData.set('purposeOfVisit', purposeOfVisit);
		formData.set('personToMeet', personToMeet);
		formData.set('visitorName', visitorName);
		formData.set('visitorMobile', visitorMobile);
		formData.set('visitorEmail', visitorEmail);
		formData.set('numberOfVisitors', numberOfVisitors);
		formData.set('conferenceRoom', conferenceRoom);
		formData.set('laboratory', laboratory);
		formData.set('otherMatters', otherMatters);
				
		const fileLength = files.length;
      formData.set('fileLength', fileLength);
      for( var i=0 ; i < fileLength ; i++ ) {
         formData.set(`files${i}`, files[i]);
      };

      try {
         fetch('/api/visit/apply', {
            method: 'POST',
            body: formData,
				header: { 'Custom-Header': 'value', },
         }).then ((response) => {
            if( response.ok ) return response.json();
			}).then ((result) => {
				toast.success(result.message);
				router.push('/visitLGJL');
			});
      } catch (error) {
         toast.error(error.message);
      };

	};

   const handleSignOut = (e) => {
      e.preventDefault();
      setVisitorState({ ...visitorState, auth: 'unauthenticated' });
      router.push('/visitLGJL/signIn'); 
   };

	return (
		<Box className='pageContainer'>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ width: '80%', m: 'auto', fontSize: '2rem', textAlign: 'center' }}>Apply Form for Visit LG Japan Lab</Box>
				<Box sx={{ width: '80%', m: 'auto', fontSize: '2rem', textAlign: 'center' }} onClick={handleSignOut}>Sign Out</Box>

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
										onChange={(e) => setCheckbox(!checkbox)} value={checkbox} />
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
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Date of Visit
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setDateOfVisit(e.target.value)} value={dateOfVisit} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px', 
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Purpose of Visit
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setPurposeOfVisit(e.target.value)} value={purposeOfVisit} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px', 
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Person to Meet
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setPersonToMeet(e.target.value)} value={personToMeet} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Visitor Name
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setVisitorName(e.target.value)} value={visitorName}/>
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Visitor Mobile
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setVisitorMobile(e.target.value)} value={visitorMobile}/>
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Visitor Email
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='email' className={styles.input} onChange={(e) => setVisitorEmail(e.target.value)} value={visitorEmail} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Number of Visitors
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setNumberOfVisitors(e.target.value)} value={numberOfVisitors} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								Using a Conference Room
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setConferenceRoom(e.target.value)} value={conferenceRoom} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								Using a Laboratory
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setLaboratory(e.target.value)} value={laboratory} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								Attaced Files
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='file' multiple className={styles.input} onChange={(e) => setFiles(e.target.files)} />
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