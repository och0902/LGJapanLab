'use client';

import React, { useState } from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import recruitApplication from './recruitApplication';
import jobPosting from '../jobPosting/jobPosting';
import { useRouter } from 'next/navigation';
import { Checkbox, FormControlLabel } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Modal from 'react-modal';
import ModalPrivacyPolicy from '@/components/ModalPrivacyPolicy/ModalPrivacyPolicy';
import { toast } from 'react-hot-toast';
import { BtnRedSubmit } from '@/components/BtnRed/BtnRed';
import RequiredMark from '@/components/RequiredMark/RequiredMark';

const RecruitApplication = () => {

	const { language } = useGlobalContext();
	const { toasts, page, items, btn, etc } = recruitApplication( language );
	const { jobPostings } = jobPosting(language);

	const router = useRouter();
	
	const [ applicantInfo, setApplicantInfo ] = useState({
		name: '', nameKana: '', email: '', confirmEmail: '', mobile: '', recruitmentJob: '',
		files: [],
		otherMatters: '', privacyCheck: false,
	});

	const [ privacyModal, setPrivacyModal ] = useState(false);

	const customStyles = {
      content: {
         width: '86%', margin: 'auto', marginTop: 'var(--gap-basic)', color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)'
      }
   };

	const handleInputErrors = ( applicantInfo ) => {
		// if ( !applicantInfo.name || !applicantInfo.nameKana || !applicantInfo.email || !applicantInfo.confirmEmail || !applicantInfo.mobile || !applicantInfo.recruitmentJob ) 
		// 	{ toast.error( toasts.error[0] ); return false; };
		if ( !applicantInfo.name || !applicantInfo.nameKana || !applicantInfo.email || !applicantInfo.confirmEmail || !applicantInfo.mobile || !applicantInfo.recruitmentJob || !applicantInfo.files ) 
			{ toast.error( toasts.error[0] ); return ; };
		if ( applicantInfo.email !== applicantInfo.confirmEmail ) 
			{ toast.error( toasts.error[1] ); return false; };
		if ( applicantInfo.privacyCheck !== true ) 
			{ toast.error( toasts.error[2] ); return false; };
		return true;
	};

	const [ isSaving, setIsSaving ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ( !handleInputErrors( applicantInfo ) ) return;

		const formData = new FormData();

		formData.set('name', applicantInfo.name);
		formData.set('nameKana', applicantInfo.nameKana);
		formData.set('email', applicantInfo.email);
		formData.set('mobile', applicantInfo.mobile);
		formData.set('recruitmentJob', applicantInfo.recruitmentJob);
		formData.set('otherMatters', applicantInfo.otherMatters);
		formData.set('privacyCheck', applicantInfo.privacyCheck);

		const fileLength = applicantInfo.files.length;
      formData.append('fileLength', fileLength);
		
      for( var i=0 ; i < fileLength ; i++ ) {
         formData.append(`files${i}`, applicantInfo.files[i]);
      };

		if(!isSaving) {
			setIsSaving(true);
			try {
				const url = '/api/careers';
				const response = await fetch(url, {
					method: 'POST',
					body: formData,
					header: { 'Custom-Header': 'value', },
				});
				const result = await response.json();
				if (result.error) {
					console.log(result.error.message);
					throw new Error( toasts.error[3] );
				} else if ( result?.message && result?.message === 'data processed successfully' ) {
					console.log(result.message);
					toast.success( toasts.message[0] );
					setIsSaving(false);
					router.push('/recruitApplication/success');
				};
			} catch (error) {
				toast.error(error.message);
			} finally {
				setIsSaving(false);
			};
		};
	};

	return (
		<div className='pageContainer'>

			<form className='w-full' onSubmit={handleSubmit}>
				<div className='w-full m-auto mt-[calc(var(--gap-base)*0.3)] py-[25px] text-[2.5rem] font-bold text-center text-black bg-LGgray-light'>
					{page.title}
				</div>

				<div className='mt-[30px] flex justify-center items-center gap-[10px]'>
					<RequiredMark language={language} title={etc.required} /><div>{page.desc[0]}</div>
				</div>

				<div className='w-full lg:w-[80%] m-auto my-[100px]'> 
					<div className='my-[20px] flex items-center gap-[10px] lg:gap-[30px]'>
						<div className='basis-[35%] text-right flex justify-end items-center gap-[10px]'>
							<RequiredMark language={language} title={etc.required} /><div>{items[0].title}</div>
						</div>
						<div className='basis-[65%]'>
							<input className='w-[90%] p-[10px] border-[1px] border-LGgray rounded-[3px]'
								type='text' value={applicantInfo.name}
								onChange={(e) => setApplicantInfo({ ...applicantInfo, name:e.target.value })} />
						</div>						
					</div>

					<div className='my-[20px] flex items-center gap-[10px] lg:gap-[30px]'>
						<div className='basis-[35%] text-right flex justify-end items-center gap-[10px]'>
							<RequiredMark language={language} title={etc.required} /><div>{items[1].title}</div>
						</div>
						<div className='basis-[65%]'>
							<input className='w-[90%] p-[10px] border-[1px] border-LGgray rounded-[3px]' 
								type='text' value={applicantInfo.nameKana}
								onChange={(e) => setApplicantInfo({ ...applicantInfo, nameKana:e.target.value })} />
						</div>						
					</div>

					<div className='my-[20px] flex items-center gap-[10px] lg:gap-[30px]'>
						<div className='basis-[35%] text-right flex justify-end items-center gap-[10px]'>
							<RequiredMark language={language} title={etc.required} /><div>{items[2].title}</div>
						</div>
						<div className='basis-[65%]'>
							<input className='w-[90%] p-[10px] border-[1px] border-LGgray rounded-[3px]' 
								type='email' value={applicantInfo.email}
								onChange={(e) => setApplicantInfo({ ...applicantInfo, email:e.target.value })} />
						</div>						
					</div>

					<div className='my-[20px] flex items-center gap-[10px] lg:gap-[30px]'>
						<div className='basis-[35%] text-right flex justify-end items-center gap-[10px]'>
							<RequiredMark language={language} title={etc.required} /><div>{items[3].title}</div>
						</div>
						<div className='basis-[65%]'>
							<input className='w-[90%] p-[10px] border-[1px] border-LGgray rounded-[3px]' 
								type='email' value={applicantInfo.confirmEmail}
								onChange={(e) => setApplicantInfo({ ...applicantInfo, confirmEmail:e.target.value })} />
						</div>						
					</div>

					<div className='my-[20px] flex items-center gap-[10px] lg:gap-[30px]'>
						<div className='basis-[35%] text-right flex justify-end items-center gap-[10px]'>
							<RequiredMark language={language} title={etc.required} /><div>{items[4].title}</div>
						</div>
						<div className='basis-[65%]'>
							<input className='w-[90%] p-[10px] border-[1px] border-LGgray rounded-[3px]' placeholder={items[4].desc} 
								type='tel' value={applicantInfo.mobile}
								onChange={(e) => setApplicantInfo({ ...applicantInfo, mobile:e.target.value })} />
						</div>						
					</div>

					<div className='my-[20px] flex items-center gap-[10px] lg:gap-[30px]'>
						<div className='basis-[35%] text-right flex justify-end items-center gap-[10px]'>
							<RequiredMark language={language} title={etc.required} /><div>{items[5].title}</div>
						</div>
						<div className='basis-[65%]'>
							<select className='w-[90%] p-[10px] border-[1px] border-LGgray rounded-[3px]'
								value={applicantInfo.recruitmentJob}
								onChange={(e) => setApplicantInfo({ ...applicantInfo, recruitmentJob:e.target.value })} >
								<option value=''>{etc.select}</option>
								{ jobPostings.map((jobPosting, i) => (
									jobPosting.jobs.map((job, j) => (
										<option key={j} value={job.recruitmentJob}>{job.recruitmentJob}</option>
									))
								))}
							</select>
						</div>						
					</div>

					<div className='my-[20px] flex items-center gap-[10px] lg:gap-[30px]'>
						<div className='basis-[35%] text-right flex justify-end items-center gap-[10px]'>
							<RequiredMark language={language} title={etc.required} /><div>{items[6].title}</div>
						</div>
						<div className='basis-[65%]'>
							<input className='w-[90%] p-[10px] border-[1px] border-LGgray rounded-[3px]'
								type='file' multiple onChange={(e) => setApplicantInfo({ ...applicantInfo, files:e.target.files })} />
						</div>						
					</div>

					<div className='my-[20px] flex items-center gap-[10px] lg:gap-[30px]'>
						<div className='basis-[35%] text-right'></div>
						<div className='basis-[65%]'>
							<div className='w-[90%]'>{page.desc[1]}</div>
						</div>				
					</div>
					<div className='my-[20px] flex items-center gap-[10px] lg:gap-[30px]'>
						<div className='basis-[35%] text-right'><CircleIcon className='text-[0.6rem]' /> {items[7].title}</div>
						<div className='basis-[65%]'>
							<textarea className='w-[90%] h-[200px] p-[10px] border-[1px] border-LGgray rounded-[3px]'
								value={applicantInfo.otherMatters}
								onChange={(e) => setApplicantInfo({ ...applicantInfo, otherMatters:e.target.value })} />
						</div>						
					</div>

				</div>
				<div className='w-full mt-[calc(var(--gap-base)*0.5)] md:mt-[calc(var(--gap-base)*0.3)] bg-LGgray-light'>
					<div className='w-[80%] m-auto pt-[15px] pb-[5px] leading-6 text-center'>
						<div>
							<span>{btn[0].desc[0]} </span>
							<span className='hover:underline hover:cursor-pointer hover:text-LGred underline-offset-4' 
								onClick={() => setPrivacyModal(true)}>{btn[0].desc[1]}</span>
							<span> {btn[0].desc[2]}</span>
						</div>
						<div className='flex justify-center items-center gap-[20px]'>
							<div>{btn[0].desc[3]} </div>
							<FormControlLabel control={
								<Checkbox className='text-LGred' sx={{ '&.Mui-checked': { color: 'var(--color-LGred)' } }} 
									checked={applicantInfo.privacyCheck} onChange={(e) => setApplicantInfo({ ...applicantInfo, privacyCheck: e.target.checked})} />
							} />
						</div>
					</div>
				</div>

				<Modal isOpen={privacyModal} style={customStyles} >
					<div className='pageContainer'>
						<ModalPrivacyPolicy />
						<div className='flex gap-[20px]'>
							<button className='p-[20px] text-[1.2rem] font-bold border-[1px] border-LGgray 
								rounded-md transition duration-500 ease-in-out 
								over:no-underline hover:cursor-pointer hover:text-LGred hover:border-LGred '
								onClick={() => { setApplicantInfo({ ...applicantInfo, privacyCheck: true }); setPrivacyModal(false); }}>
								{btn[0].modalAccept}
							</button>
							<button className='p-[20px] text-[1.2rem] font-bold border-[1px] border-LGgray 
								rounded-md transition duration-500 ease-in-out 
								over:no-underline hover:cursor-pointer hover:text-LGred hover:border-LGred '
								onClick={() => setPrivacyModal(false)}>
								{btn[0].modalClose}
							</button>
						</div>
					</div>
				</Modal>

				<div className='w-full lg:w-[80%] m-auto mt-[100px] flex flex-col items-center gap-[50px]'>
					<div className='w-[300px]'>
						<BtnRedSubmit title={isSaving ? btn[1].title[1] : btn[1].title[0]} style={{ opacity: isSaving ? 0.5 : 1 }} />
					</div>
					<div>{btn[1].desc}</div>
				</div>
			</form>
		</div>
	);
};

export default RecruitApplication;