'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { useTheme } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import Modal from 'react-modal';
import ModalPrivacyPolicy from '@/components/ja/ModalPrivacyPolicy/ModalPrivacyPolicy';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

const RecruitApply = () => {

	const theme = useTheme();
	const router = useRouter();

	const [ name, setName ] = useState('');
	const [ confirmName, setConfirmName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ confirmEmail, setConfirmEmail ] = useState('');
	const [ mobile, setMobile ] = useState('');
	const [ position, setPosition ] = useState('');	
	const [ files, setFiles ] = useState([]);
	const [ otherMatters, setOtherMatters ] = useState('');
	const [ privacyCheck, setPrivacyCheck ] = useState(false);
	const [ privacyModal, setPrivacyModal ] = useState(false);
	const [ recruitmentStatus, setRecruitmentStatus ] = useState('申請書類が提出されました。'); 

	const customStyles = {
      content: {
         width: '86%', margin: 'auto', marginTop: 'var(--gap-basic)', color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)'
      }
   };

	const [ isSaving, setIsSaving ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ( privacyCheck !== true ) { toast('Please agree to the Privacy Policy');	return; }
		if ( !name || !confirmName || !email || !confirmEmail || !mobile || !position ) { toast('Please enter required items'); return; }
		// if ( !name || !confirmName || !email || !confirmEmail || !mobile || !position || !files ) { toast('Please enter required items'); return; }
		if ( name !== confirmName ) { toast('Name does not match'); return; }
		if ( email !== confirmEmail ) { toast('Email does not match'); return; }
	
		const formData = new FormData();

		formData.set('name', name);
		formData.set('email', email);
		formData.set('mobile', mobile);
		formData.set('position', position);
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
					if( response.ok ) return response.json();
				}).then ((result) => {
					toast.success(result.message);
					setIsSaving(false);
					router.push('/recruit/apply/success');
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
					<Box sx={{ width: '100%', py: '25px', fontSize: '2rem', textAlign: 'center', 
						color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)',
						[theme.breakpoints.down('md')] : { mt: 'calc( var(--gap-basic)/3 )' } }}>
						採用 申し込み
					</Box>

					<Box sx={{ width: '80%', m: 'auto', mt: 'calc( var(--gap-basic)/2 )', 
						[theme.breakpoints.down('md')] : { width: '100%' } }}> 
						<Box sx={{ my: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Box>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> 表示された項目は必要です。
							</Box>
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> お名前
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setName(e.target.value)} value={name}/>
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<Box><CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> お名前</Box>
								<Box>(確認用)</Box>
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setConfirmName(e.target.value)} value={confirmName} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Eメールアドレス
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='email' className={styles.input} onChange={(e) => setEmail(e.target.value)} value={email} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<Box><CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Eメールアドレス</Box>
								<Box>(確認用)</Box>
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='email' className={styles.input} onChange={(e) => setConfirmEmail(e.target.value)} value={confirmEmail} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> 携帯電話
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='text' className={styles.input} onChange={(e) => setMobile(e.target.value)} value={mobile} />
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px', 
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> Position
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								{/* <input type='text' className={styles.input} onChange={(e) => setPosition(e.target.value)} value={position} /> */}
								<select className={styles.input} 
									onChange={(e) => setPosition(e.target.value)} value={position} >
									<option value=''>選択</option>
									<option value='LG Electonics'>LG Electonics</option>
									<option value='LG Display'>LG Display</option>
									<option value='LG Innotek'>LG Innotek</option>
									<option value='LG Chem'>LG Chem</option>
									<option value='LG Energy Solution'>LG Energy Solution</option>
									<option value='etc.'>etc.</option>
								</select>
							</Box>						
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> 履歴書と職務経験
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<input type='file' multiple className={styles.input} onChange={(e) => setFiles(e.target.files)} />
							</Box>						
						</Box>
						<Box sx={{ width: '50%', m: 'auto', my: '20px', [theme.breakpoints.down('sm')] : { width: '80%',} }}>
							※ ファイルはMicrosoft Office、PDFで作成してください。ファイルサイズは合計30MB以内、添付ファイルは5つです。
						</Box>
						<Box sx={{ my: '20px', display: 'flex', alignItems: 'center', gap: '30px',
							[theme.breakpoints.down('md')] : { gap: '10px' } }}>
							<Box sx={{ flexBasis: '30%', textAlign: 'right' }}>
								その他の記載事項
							</Box>
							<Box sx={{ flexBasis: '70%' }}>
								<textarea className={styles.textarea} onChange={(e) => setOtherMatters(e.target.value)} value={otherMatters} />
							</Box>						
						</Box>

					</Box>
					<Box sx={{ width: '100%', mt: 'calc( var(--gap-basic)/2 )', backgroundColor: 'var(--color-LGgray-light)',
						[theme.breakpoints.down('md')] : { mt: 'calc( var(--gap-basic)/3 )' } }}>
						<Box sx={{ width: '80%', m: 'auto', pt: '15px', pb: '5px', lineHeight: '150%', textAlign: 'center' }}>
							<Box className={styles.privacypolicy} onClick={() => setPrivacyModal(true)}>
								LG Japan Lab Inc.およびLGグループの個人情報の取り扱いについて、ご理解、同意いただけますか？
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
								<Box>同意する。</Box>
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
						<Box>※ 回答に時間がかかる場合があります。 ご理解のほどよろしくお願いします。 10分以内の継続的な提出はできません。</Box>
					</Box>
				</form>
			</Box>
		</Box>
	);
};

export default RecruitApply;