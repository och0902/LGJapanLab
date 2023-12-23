'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import { Box, Checkbox, FormControlLabel, Grid } from '@mui/material';
import { useTheme } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import Modal from 'react-modal';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import ModalPrivacyPolicy from '@/components/ja/ModalPrivacyPolicy/ModalPrivacyPolicy';
import ModalPledge from '@/components/ja/ModalPledge/ModalPledge';

const VisitApply = () => {

	const theme = useTheme();
	const router = useRouter();

	const [ visitInfo, setVisitInfo ] = useState({ 
		company: '', name: '', email: '', mobile: '', 
		item: '', quantity: '', purpose: '', serial: '', unsealed: '', reason: '',
		device: '', wirelessMAC: '', cloudConnection: '', cloudIP: '', cloudVMIP: '', cloudConnectionIP: '',
		conferenceRoomUse: '', people: '', date: '', time: '',
		laboratoryUse: '', laboratory: '',
	});

	const [ privacyCheck, setPrivacyCheck ] = useState(false);
	const [ privacyModal, setPrivacyModal ] = useState(false);
	const [ pledgeCheck, setPledgeCheck ] = useState(false);
	const [ pledgeModal, setPledgeModal ] = useState(false);

	const customStyles = {
      content: {
         width: '86%', margin: 'auto', marginTop: 'var(--gap-basic)', color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)'
	}};

	const [ isSaving, setIsSaving ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ( privacyCheck !== true ) { toast('Privacy Policy에 동의하여 주십시요'); return; }
		if ( pledgeCheck !== true ) { toast('Pledge에 동의하여 주십시요'); return; }

		visitInfo.privacyCheck = privacyCheck;
		visitInfo.pledgeCheck = pledgeCheck;

		// console.log( visitInfo );

		if(!isSaving) {
			setIsSaving(true);
			try {
				const url = '/api/visit';
				fetch(url, {
					method: 'POST',
					headers: { 'Content-type': 'application/json' },
					body: JSON.stringify( visitInfo ),
				}).then ((response) => {
					if( response.ok ) return response.json();
				}).then ((result) => {
					if( result ) {
						toast.success(result.message);
						setIsSaving(false);
						router.push('/visit/apply/success');
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
					訪問 申し込み
				</Box>
				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px', fontSize: '1.3rem' }}>
						<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} /> 訪問者情報
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>会社</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<select className={styles.input} value={visitInfo.company}
										onChange={(e) => setVisitInfo({ ...visitInfo, company:e.target.value })} >
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
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>お名前</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='text' className={styles.input} value={visitInfo.name}
										onChange={(e) => setVisitInfo({ ...visitInfo, name:e.target.value })}  />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>Eメールアドレス</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='text' className={styles.input} value={visitInfo.email}
										onChange={(e) => setVisitInfo({ ...visitInfo, email:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>携帯電話</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='text' className={styles.input} value={visitInfo.mobile}
										onChange={(e) => setVisitInfo({ ...visitInfo, mobile:e.target.value })} />
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>

				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px' }}>
						<Box sx={{ fontSize: '1.3rem' }}>
							<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} /> 搬入物
						</Box>
						<Box>	(対象物 : Labtop、USB、HDDなどのデジタル記録メディア)</Box>
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>搬入物</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<select className={styles.input} value={visitInfo.item}
										onChange={(e) => setVisitInfo({ ...visitInfo, item:e.target.value })} >
										<option value=''>選択</option>
										<option value='Notebook PC'>Notebook PC</option>
										<option value='Tablet PC'>Tablet PC</option>
										<option value='USB Memory'>USB Memory</option>
										<option value='HDD'>HDD</option>
										<option value='CD'>CD</option>
										<option value='DVD'>DVD</option>
										<option value='etc.'>etc.</option>
									</select>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>品目数量</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='text' className={styles.input} value={visitInfo.quantity}
										onChange={(e) => setVisitInfo({ ...visitInfo, quantity:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>搬入目的</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='text' className={styles.input} value={visitInfo.purpose}
										onChange={(e) => setVisitInfo({ ...visitInfo, purpose:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>シリアル番号</Box>
								<Box sx={{ flexBasis: '55%' }}>
									{ visitInfo.item === 'Notebook PC' || visitInfo.item === 'Tablet PC' ? (
										<input type='text' className={styles.input} value={visitInfo.serial}
											onChange={(e) => setVisitInfo({ ...visitInfo, serial:e.target.value })} /> 
									) : (
										<input type='text' className={styles.input} value={visitInfo.serial} disabled /> 
									)}
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>開封品</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<select className={styles.input} value={visitInfo.unsealed}
										onChange={(e) => setVisitInfo({ ...visitInfo, unsealed:e.target.value })}>
										<option value=''>選択</option>
										<option value='Yes'>Yes</option>
										<option value='No'>No</option>
									</select>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>開封理由</Box>
								<Box sx={{ flexBasis: '55%' }}>
									{ visitInfo.unsealed === 'Yes' ? (
										<input type='text' className={styles.input} value={visitInfo.reason}
											onChange={(e) => setVisitInfo({ ...visitInfo, reason:e.target.value })} /> 
									) : (
										<input type='text' className={styles.input} value={visitInfo.reason} disabled /> 
									)}
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>

				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px' }}>
						<Box sx={{ fontSize: '1.3rem' }}>
							<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} /> Wi-Fi 接続デバイス
						</Box>
						<Box>	(訪問者のためにWi-Fiを使いたい人だけです。)</Box>
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>Wi-Fi 接続デバイス</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<select className={styles.input} value={visitInfo.device}
										onChange={(e) => setVisitInfo({ ...visitInfo, device:e.target.value })}>
										<option value=''>選択</option>
										<option value='Notebook PC'>Notebook PC</option>
										<option value='Tablet PC'>Tablet PC</option>
										<option value='Mobile Phone'>Mobile Phone</option>
										<option value='etc.'>etc.</option>
									</select>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>ワイヤレス MAC アドレス</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='text' className={styles.input} value={visitInfo.wirelessMAC}
										onChange={(e) => setVisitInfo({ ...visitInfo, wirelessMAC:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>クラウドPC 接続</Box>
								<Box sx={{ flexBasis: '55%' }}>
									{ visitInfo.company === 'LG Display' || visitInfo.company === 'LG Innotek' ? (
										<select className={styles.input} value={visitInfo.cloudConnection}
											onChange={(e) => setVisitInfo({ ...visitInfo, cloudConnection:e.target.value })} >
											<option value=''>選択</option>
											<option value='Yes'>Yes</option>
											<option value='No'>No</option>
										</select>
									) : (
										<select className={styles.input} value={visitInfo.cloudConnection} disabled >
											<option value=''>選択</option>
										</select>
									)}
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>クラウドPC IPアドレス</Box>
								<Box sx={{ flexBasis: '55%' }}>
									{ visitInfo.company === 'LG Display' && visitInfo.cloudConnection === 'Yes' ? (
										<input type='text' className={styles.input} value={visitInfo.cloudIP}
											onChange={(e) => setVisitInfo({ ...visitInfo, cloudIP:e.target.value })} />
									) : (
										<input type='text' className={styles.input} value={visitInfo.cloudIP} disabled />
									)}
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>クラウドPC VM IPアドレス</Box>
								<Box sx={{ flexBasis: '55%' }}>
									{ visitInfo.company === 'LG Innotek' && visitInfo.cloudConnection === 'Yes' ? (
										<input type='text' className={styles.input} value={visitInfo.cloudVMIP}
											onChange={(e) => setVisitInfo({ ...visitInfo, cloudVMIP:e.target.value })} />
									) : (
										<input type='text' className={styles.input} value={visitInfo.cloudVMIP} disabled />
									)}
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>クラウドPC 接続 IPアドレス</Box>
								<Box sx={{ flexBasis: '55%' }}>
									{ visitInfo.company === 'LG Innotek' && visitInfo.cloudConnection === 'Yes' ? (
										<input type='text' className={styles.input} value={visitInfo.cloudConnectionIP}
											onChange={(e) => setVisitInfo({ ...visitInfo, cloudConnectionIP:e.target.value })} />
									) : (
										<input type='text' className={styles.input} value={visitInfo.cloudConnectionIP} disabled />
									)}
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>

				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px' }}>
						<Box sx={{ fontSize: '1.3rem' }}><CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} /> 会議室の使用申請</Box>
						<Box>	(複数の人が使用している場合は、担当者1名が記入します。)</Box>
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>会議室の使用</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<select className={styles.input} value={visitInfo.conferenceRoomUse}
										onChange={(e) => setVisitInfo({ ...visitInfo, conferenceRoomUse:e.target.value })} >
										<option value=''>選択</option>
										<option value='Yes'>Yes</option>
										<option value='No'>No</option>
									</select>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>人数</Box>
								<Box sx={{ flexBasis: '55%' }}>
									{ visitInfo.conferenceRoomUse === 'Yes' ? (
										<input type='text' className={styles.input} value={visitInfo.people}
											onChange={(e) => setVisitInfo({ ...visitInfo, people:e.target.value })} />
									) : (
										<input type='text' className={styles.input} value={visitInfo.people} disabled />
									)}
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>使用日</Box>
								<Box sx={{ flexBasis: '55%' }}>
									{ visitInfo.conferenceRoomUse === 'Yes' ? (
										<input type='date' className={styles.input} value={visitInfo.date}
											onChange={(e) => setVisitInfo({ ...visitInfo, date:e.target.value })} />
									) : (
										<input type='text' className={styles.input} value={visitInfo.date} disabled />
									)}
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>使用時間</Box>
								<Box sx={{ flexBasis: '55%' }}>
									{ visitInfo.conferenceRoomUse === 'Yes' ? (
										<input type='time' className={styles.input} value={visitInfo.time}
											onChange={(e) => setVisitInfo({ ...visitInfo, time:e.target.value })} />
									) : (
										<input type='text' className={styles.input} value={visitInfo.time} disabled />
									)}
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>

				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px' }}>
						<Box sx={{ fontSize: '1.3rem' }}><CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} /> 実験室の使用申請</Box>
						<Box>	(2名以上の方がご利用の場合は、1名の担当者がご記入ください。)</Box>
					</Box>
					<Grid container >

						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>実験室使用</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<select className={styles.input} value={visitInfo.laboratoryUse}
										onChange={(e) => setVisitInfo({ ...visitInfo, laboratoryUse:e.target.value })} >
										<option value=''>選択</option>
										<option value='Yes'>Yes</option>
										<option value='No'>No</option>
									</select>
								</Box>
							</Box>
						</Grid>

						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>実験室選択</Box>
								<Box sx={{ flexBasis: '55%' }}>
									{ visitInfo.laboratoryUse === 'Yes' ? (
										<select className={styles.input} value={visitInfo.laboratory}
											onChange={(e) => setVisitInfo({ ...visitInfo, laboratory:e.target.value })} >
											<option value=''>選択</option>
											<option value='B1 Clean Room'>B1 Clean Room</option>
											<option value='B1 Gasbombe Room'>B1 Gasbombe Room</option>
											<option value='4F Battery Lab'>4F Battery Lab</option>
											<option value='4F Display Lab'>4F Display Lab</option>
											<option value='4F Material Chemistry Lab'>4F Material Chemistry Lab</option>
											<option value='5F Common Lab'>5F Common Lab</option>
										</select>
									) : (
										<select className={styles.input} value={visitInfo.laboratory} disabled >
											<option value={''}>選択</option>	
										</select>
									)}
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>

				<Box sx={{ width: '80%', m: 'auto', mt: '80px', 
					[theme.breakpoints.down('md')] : { width: '100%' } }} >
					<Link href='/documents/LGJLVisitGuide.pdf' download target='_blank' 
						className={styles.linkBox} style={{ flexDirection: 'row' }}>
						<Box sx={{ width: '50px', aspectRatio: '1/1', position: 'relative' }}>
							<Image src={'/images/lgjl/visit/manual.png'} fill sizes='100%' alt='manual'  />
						</Box>
						<Box sx={{ fontSize: '1.2rem', [theme.breakpoints.down('sm')] : { fontSize: '1rem' } }}>
							訪問 申し込み マニュアル ダウンロード
						</Box>
					</Link>
					<Box sx={{ mt: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Box sx={{ flexBasis: '49%' }}>
							<Box className={styles.linkBox} onClick={() => setPrivacyModal(true)}>
								<Box sx={{ width: '50px', aspectRatio: '1/1', position: 'relative' }}>
									<Image src={'/images/lgjl/visit/privacy.png'} fill sizes='100%' alt='manual'  />
								</Box>
								<Box sx={{ fontSize: '1.2rem', [theme.breakpoints.down('sm')] : { fontSize: '1rem' } }}>
									プライバシーポリシー
								</Box>
							</Box>
							<Box sx={{ height: '100px', mt: '10px', px: '5px', display: 'flex', alignItems: 'center' }}>
								<FormControlLabel control={
									<Checkbox sx={{ color: 'var(--color-LGred)', '&.Mui-checked': { color: 'var(--color-LGred)' } }} 
										checked={privacyCheck} onChange={(e) => setPrivacyCheck(e.target.checked)} />
								} />
								<Box>
									<Box>上記を確認し、個人情報の収集·利用に同意します。</Box>
								</Box>
							</Box>
						</Box>
						<Box sx={{ flexBasis: '49%' }}>
							<Box className={styles.linkBox} onClick={() => setPledgeModal(true)}>
								<Box sx={{ width: '50px', aspectRatio: '1/1', position: 'relative' }}>
									<Image src={'/images/lgjl/visit/pledge.png'} fill sizes='100%' alt='manual'  />
								</Box>
								<Box sx={{ fontSize: '1.2rem', [theme.breakpoints.down('sm')] : { fontSize: '1rem' } }}>
									訪問者の誓約
								</Box>
							</Box>
							<Box sx={{ height: '100px', mt: '10px', px: '5px', display: 'flex', alignItems: 'center' }}>
								<FormControlLabel control={
									<Checkbox sx={{ color: 'var(--color-LGred)', '&.Mui-checked': { color: 'var(--color-LGred)' } }} 
										checked={pledgeCheck} onChange={(e) => setPledgeCheck(e.target.checked)} />
								} />
								<Box>
									<Box>上記の内容を確認し、訪問者の誓約に同意します。</Box>
								</Box>
							</Box>
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

				<Modal isOpen={pledgeModal} style={customStyles} >
					<Box className='pageContainer'>
						<ModalPledge />
						<Box sx={{ display: 'flex', gap: '20px' }}>
							<button className={styles.modalBtn} onClick={() => {setPledgeCheck(true); setPledgeModal(false);}}>
								訪問者の誓約に同意する
							</button>
							<button className={styles.modalBtn} onClick={() => setPledgeModal(false)} >
								訪問者の誓約を閉じる
							</button>
						</Box>
					</Box>
				</Modal>

				<Box sx={{ mt: '50px', px: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
					<button type='submit' 
						className={styles.buttonRed} style={{ opacity: isSaving ? 0.5 : 1 }}>
						{isSaving ? 'Saving...' : 'Submit'}
					</button>
					<Box>※ 回答に時間がかかる場合があります。 ご理解のほどよろしくお願いします。 10分以内の継続的な提出はできません。</Box>
				</Box>

			</form>
		</Box>
	);
};

export default VisitApply;