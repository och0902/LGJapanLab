'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { useTheme } from '@emotion/react';
import { jobPostings } from '../../jobPosting/jobPosting';
import CircleIcon from '@mui/icons-material/Circle';
import Modal from 'react-modal';
import ModalPrivacyPolicy from '@/components/ja/ModalPrivacyPolicy/ModalPrivacyPolicy';
import { toast } from 'react-hot-toast';

const RecruitApply = () => {

	const theme = useTheme();
	const router = useRouter();

	// const [ applicantInfo, setApplicantInfo ] = useState({});

	const [ name, setName ] = useState('');
	const [ nameKana, setNameKana ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ confirmEmail, setConfirmEmail ] = useState('');
	const [ mobile, setMobile ] = useState('');
	const [ recruitmentJob, setRecruitmentJob ] = useState('');	
	const [ files, setFiles ] = useState([]);
	const [ otherMatters, setOtherMatters ] = useState('');
	const [ privacyCheck, setPrivacyCheck ] = useState(false);
	const [ privacyModal, setPrivacyModal ] = useState(false);
	const recruitmentStatus = '申請書類が提出されました。これから採用プロセスが行われる予定です。'; 

	const customStyles = {
      content: {
         width: '86%', margin: 'auto', marginTop: 'var(--gap-basic)', color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)'
      }
   };

	const [ isSaving, setIsSaving ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// if ( !name || !nameKana || !email || !confirmEmail || !mobile || !recruitmentJob ) { toast.error('必須項目を抜けずに入力してください。'); return; }
		if ( !name || !nameKana || !email || !confirmEmail || !mobile || !recruitmentJob || !files ) { toast.error('必須項目を抜けずに入力してください。'); return; };
		if ( email !== confirmEmail ) { toast.error('メールアドレスが一致しません。'); return; };
		if ( privacyCheck !== true ) { toast.error('プライバシーポリシーに同意してください。'); return; };
		
		const formData = new FormData();

		formData.set('name', name);
		formData.set('nameKana', nameKana);
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
						toast.error('データ処理中にエラーが発生しました。');
					} else {
						return response.json();
					};
				}).then ((result) => {
					if ( result?.message && result?.message === 'data saved & email sent successfully' ) {
						toast.success('入力したデータは正常に処理されました。');
						setIsSaving(false);
						router.push('/recruit/apply/success');
					} else {
						toast.error('入力したデータが正常に処理されませんでした。もう一度試してください。');
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
						エントリーフォーム
					</Box>

					<Box sx={{ width: '80%', m: 'auto', mt: 'calc( var(--gap-basic)/2 )', 
						[theme.breakpoints.down('md')] : { width: '100%' } }}> 
						<Box sx={{ my: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
								<Box sx={{ width: '35px', fontSize: '0.75rem', textAlign: 'center',
									color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)', borderRadius: '12px' }}>必須</Box>
								<Box>表示された項目は必須です。</Box>
							</Box>
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
								<Box sx={{ width: '35px', fontSize: '0.75rem', textAlign: 'center',
									color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)', borderRadius: '12px' }}>必須</Box>
								<Box>氏名</Box>
							</Box>
							<Box sx={{ flexBasis: '65%' }}>
								<input type='text' className={styles.input} onChange={(e) => setName(e.target.value)} value={name}/>
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
								<Box sx={{ width: '35px', fontSize: '0.75rem', textAlign: 'center',
									color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)', borderRadius: '12px' }}>
									必須
								</Box>
								<Box>フリガナ</Box>
							</Box>
							<Box sx={{ flexBasis: '65%' }}>
								<input type='text' className={styles.input} onChange={(e) => setNameKana(e.target.value)} value={nameKana} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
								<Box sx={{ width: '35px', fontSize: '0.75rem', textAlign: 'center',
									color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)', borderRadius: '12px' }}>
									必須
								</Box>
								<Box>メールアドレス</Box>
							</Box>
							<Box sx={{ flexBasis: '65%' }}>
								<input type='email' className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
								<Box sx={{ width: '35px', fontSize: '0.75rem', textAlign: 'center',
									color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)', borderRadius: '12px' }}>
									必須
								</Box>
								<Box><Box>メールアドレス</Box><Box>(確認用)</Box></Box>
								
							</Box>
							<Box sx={{ flexBasis: '65%' }}>
								<input type='email' className={styles.input} onChange={(e) => setConfirmEmail(e.target.value)} value={confirmEmail} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
								<Box sx={{ width: '35px', fontSize: '0.75rem', textAlign: 'center',
									color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)', borderRadius: '12px' }}>
									必須
								</Box>
								<Box>携帯電話</Box>
							</Box>
							<Box sx={{ flexBasis: '65%' }}> 
								<input type='tel' className={styles.input} placeholder={`'-'なしの数字のみ`} 
									onChange={(e) => setMobile(e.target.value)} value={mobile} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px', 
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
								<Box sx={{ width: '35px', fontSize: '0.75rem', textAlign: 'center',
									color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)', borderRadius: '12px' }}>
									必須
								</Box>
								<Box>ポジション</Box>
							</Box>
							<Box sx={{ flexBasis: '65%' }}>
								<select className={styles.input} 
									onChange={(e) => setRecruitmentJob(e.target.value)} value={recruitmentJob} >
									<option value=''>選択</option>
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
							<Box sx={{ flexBasis: '35%', textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
								<Box sx={{ width: '35px', fontSize: '0.75rem', textAlign: 'center',
									color: 'var(--color-white)', backgroundColor: 'var(--color-LGred)', borderRadius: '12px' }}>
									必須
								</Box>
								<Box>履歴書および職務経歴書</Box>
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
									<Box>※ ファイルはMicrosoft OfficeまたはPDF形式にし、ファイルサイズは合計100MB以内で作成いただきますようお願いいたします。</Box>
								</Box>
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '35%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem'  }} /> その他の記載事項
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
								<span className={styles.privacypolicy} onClick={() => setPrivacyModal(true)}>
									LG Japan Lab Inc.およびLGグループの個人情報の取り扱いに
								</span>
								<span>同意いただける場合は以下の「同意する」をチェックしてください。</span>
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
								<Box>同意する </Box>
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
									プライバシーポリシーに同意する
								</button>
								<button className={styles.modalBtn} onClick={() => setPrivacyModal(false)}>
									プライバシーポリシーを閉じる
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
						<Box>※ 回答に時間がかかる場合があります。 ご理解のほどよろしくお願いします。</Box>
					</Box>
				</form>
			</Box>
		</Box>
	);
};

export default RecruitApply;