'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { useTheme } from '@emotion/react';
import { jobPostings } from '../../jobPosting/jobPosting';
import CircleIcon from '@mui/icons-material/Circle';
import Modal from 'react-modal';
import ModalPrivacyPolicy from '@/components/en/ModalPrivacyPolicy/ModalPrivacyPolicy';
import { toast } from 'react-hot-toast';

const RecruitApply = () => {

	const theme = useTheme();
	const router = useRouter();

	// const [ applicantInfo, setApplicantInfo ] = useState({});
	
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ confirmEmail, setConfirmEmail ] = useState('');
	const [ mobile, setMobile ] = useState('');
	const [ recruitmentJob, setRecruitmentJob ] = useState('');	
	const [ files, setFiles ] = useState([]);
	const [ otherMatters, setOtherMatters ] = useState('');
	const [ privacyCheck, setPrivacyCheck ] = useState(false);
	const [ privacyModal, setPrivacyModal ] = useState(false);
	const recruitmentStatus = 'The application form has been submitted. The recruitment process will be carried out from now on.'; 

	const customStyles = {
      content: {
         width: '86%', margin: 'auto', marginTop: 'var(--gap-basic)', color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)'
      }
   };

	const [ isSaving, setIsSaving ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// if ( !name || !email || !confirmEmail || !mobile || !recruitmentJob ) { toast.error('Please enter required items'); return;  }
		if ( !name || !email || !confirmEmail || !mobile || !recruitmentJob || !files ) { toast.error('Please enter required items'); return; };
		if ( email !== confirmEmail ) { toast.error('Name or Email do not match'); return; };
		if ( privacyCheck !== true ) { toast.error('Please agree to the Privacy Policy'); return; };

		const formData = new FormData();

		formData.set('name', name);
		formData.set('email', email);
		formData.set('mobile', mobile);
		formData.set('recruitmentJob', recruitmentJob);
		formData.set('otherMatters', otherMatters);
		formData.set('privacyCheck', privacyCheck);
		formData.set('recruitmentStatus', recruitmentStatus);

		const fileLength = files.length;
      formData.append('fileLength', fileLength);
		
      for( var i=0 ; i < fileLength ; i++ ) {
         formData.append(`files${i}`, files[i]);
      };

		if(!isSaving) {
			setIsSaving(true);
			try {
				const url = '/api/careers';
				fetch(url, {
					method: 'POST',
					body: formData,
					header: { 'Custom-Header': 'value', },
				}).then ((response) => {
					// console.log(response);
					if( !response.ok ) {
						console.log(response.message);
						toast.error('An error occurred during data processing.');
					} else {
						return response.json();
					};
				}).then ((result) => {
					if ( result?.message && result?.message === 'data saved & email sent successfully' ) {
						toast.success('The data you entered has been processed successfully.');
						setIsSaving(false);
						router.push('/en/recruit/apply/success');
					} else {
						toast.error('The data you entered was not processed properly. Please try again.');
						setIsSaving(false);
					};
				});
			} catch (error) {
				toast.error(error.message);
			};
		}
	};

	return (
		<Box className='pageContainer'>

			<Box sx={{ width: '100%' }}>
				
				<form onSubmit={handleSubmit}>
					<Box sx={{ width: '100%', py: '25px', fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', textAlign: 'center', 
						color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)',
						[theme.breakpoints.down('md')] : { mt: 'calc( var(--gap-basic)/3 )' } }}>
						Recruitment Application
					</Box>

					<Box sx={{ width: '80%', m: 'auto', mt: 'calc( var(--gap-basic)/2 )', 
						[theme.breakpoints.down('md')] : { width: '100%' } }}> 
						<Box sx={{ my: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Box>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> marked items are required.
							</Box>
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Name
							</Box>
							<Box sx={{ flexBasis: '65%' }}>
								<input type='text' className={styles.input} onChange={(e) => setName(e.target.value)} value={name}/>
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Email Address
							</Box>
							<Box sx={{ flexBasis: '65%' }}>
								<input type='email' className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right' }}>
								<Box><CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Email Address</Box>
								<Box>(for Verification)</Box>
							</Box>
							<Box sx={{ flexBasis: '65%' }}>
								<input type='email' className={styles.input} onChange={(e) => setConfirmEmail(e.target.value)} value={confirmEmail} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Mobile Phone
							</Box>
							<Box sx={{ flexBasis: '65%' }}>
								<input type='text' className={styles.input} onChange={(e) => setMobile(e.target.value)} value={mobile} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px', 
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Recruitment Job
							</Box>
							<Box sx={{ flexBasis: '65%' }}>
								<select className={styles.input} 
									onChange={(e) => setRecruitmentJob(e.target.value)} value={recruitmentJob} >
									<option value=''>Select</option>
									{jobPostings.map((jobPosting, i) => (
										jobPosting.jobs.map((job, j) => (
											<option key={j} value={job.recruitmentJob}>{job.recruitmentJob}</option>
										))
									))}
								</select>
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Resume and Job Experience
							</Box>
							<Box sx={{ flexBasis: '65%' }}>
								<input type='file' multiple className={styles.input} onChange={(e) => setFiles(e.target.files)} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('lg')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right' }}></Box>
							<Box sx={{ flexBasis: '65%' }}>
								<Box sx={{ width: '90%' }} >
									<Box>※ Please make a file in Microsoft Office or PDF format and make sure that the file size does not exceed 100MB in total.</Box>
								</Box>
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right' }}>
								Other Matters to be Stated
							</Box>
							<Box sx={{ flexBasis: '65%' }}>
								<textarea className={styles.textarea} onChange={(e) => setOtherMatters(e.target.value)} value={otherMatters} />
							</Box>						
						</Box>

					</Box>
					<Box sx={{ width: '100%', mt: 'calc( var(--gap-basic)/2 )', backgroundColor: 'var(--color-LGgray-light)',
						[theme.breakpoints.down('md')] : { mt: 'calc( var(--gap-basic)/3 )' } }}>
						<Box sx={{ width: '80%', m: 'auto', pt: '15px', pb: '5px', lineHeight: '150%', textAlign: 'center' }}>
							<Box>
								<span>I understand and agree with </span>
								<span className={styles.privacypolicy} onClick={() => setPrivacyModal(true)}>
									the handling of personal information of LG Japan Lab Inc. and LG Group.
								</span>
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
								<Box>Please check this box.</Box>
								<FormControlLabel control={
									<Checkbox sx={{ color: 'var(--color-LGred)', '&.Mui-checked': { color: 'var(--color-LGred)' } }} 
										checked={privacyCheck} onChange={(e) => setPrivacyCheck(e.target.checked)} />
								} />
							</Box>
						</Box>
					</Box>

					<Modal isOpen={privacyModal} style={customStyles} >
						<Box className='pageContainer'>
							<ModalPrivacyPolicy />
							<Box sx={{ display: 'flex', gap: '20px' }}>
								<button className={styles.modalBtn} onClick={() => {setPrivacyCheck(true); setPrivacyModal(false);}}>
									Agree to Privacy Policy 
								</button>
								<button className={styles.modalBtn} onClick={() => setPrivacyModal(false)}>
									Close Privacy Policy
								</button>
							</Box>
						</Box>
					</Modal>

					<Box sx={{ width: '80%', m: 'auto', my: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center',
						[theme.breakpoints.down('md')] : { width: '100%',} }}>
						<Box sx={{ my: '30px' }}>
							<button type='submit' 
								className={styles.buttonRed} style={{ opacity: isSaving ? 0.5 : 1 }}>
								{isSaving ? 'Saving...' : 'Submit'}
							</button>
						</Box>
						<Box>※ The answer may take some time. We ask for your understanding.</Box>
					</Box>
				</form>
			</Box>
		</Box>
	);
};

export default RecruitApply;