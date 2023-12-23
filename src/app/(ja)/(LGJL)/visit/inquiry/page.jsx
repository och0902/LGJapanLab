'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { ServerInsertedHTMLContext, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

const VisitInquiry = () => {

	const theme = useTheme();
	const session = useSession();
	const router = useRouter();

	const [ visitor, setVisitor ] = useState({});
	const [ visitInfo, setVisitInfo ] = useState();
	const [ visitInfoArr, setVisitInfoArr ] = useState([]);

	const [ isSaving, setIsSaving ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ( !visitor.email || !visitor.mobile ) {
         toast.error('please enter email address and mobile phone number ...');
      } else {
			if(!isSaving) {
				setIsSaving(true);
				try {
					const params = { email: visitor.email, mobile: visitor.mobile };
					const queryParams = new URLSearchParams(params);
					const url = `/api/visit?${queryParams}`;
					fetch(url, {
						method: 'GET',
						cache: 'no-store',
					}).then ((response) => {
						if( response.ok ) return response.json();
					}).then ((result) => {
						// console.log(result);
						if( result.message && result.message === 'success' ) {
							// toast.success('Your request for a visit has been successfully found ...');
							setVisitInfo(result._doc);
							// setVisitInfoArr(Object.entries(result._doc).slice(1,-5));
							session.visitInfo = result._doc;
							// console.log(session);
							setIsSaving(false);
						} else {
							toast.error('Your request for a visit has not been found ...');
							// router.push('/visit');
						};
					});
				} catch (error) {
					toast.error(error.message);
				};
			};
      };

	};

	const handleModify = (e) => {
		e.preventDefault();
	
		router.push('/visit/modify');
	};

	return (
		<Box className='pageContainer'>

			<form style={{ width: '100%' }} onSubmit={handleSubmit}>
				<Box sx={{ width: '100%', py: '25px', fontSize: '2rem', textAlign: 'center', 
					color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)',
					[theme.breakpoints.down('md')] : { mt: 'calc( var(--gap-basic)/3 )' } }}>
					訪問 申し込み 状況
				</Box>
				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px', fontSize: '1.3rem' }}>
						<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} /> 訪問者
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>Eメールアドレス</Box>
								<Box sx={{ flexBasis: '40%' }}>
									<input type='text' className={styles.input} 
										onChange={(e) => setVisitor({ ...visitor, email:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>携帯電話</Box>
								<Box sx={{ flexBasis: '40%' }}>
									<input type='text' className={styles.input} 
										onChange={(e) => setVisitor({ ...visitor, mobile:e.target.value })} />
								</Box>
							</Box>
						</Grid>
					</Grid>
					{ !visitInfo && (
						<React.Fragment>
							<Box sx={{ mt: '50px', textAlign: 'center' }}>
								申し込み時に作成した訪問者情報を入力して提出してください。
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

			{/* { visitInfo && (
				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px', fontSize: '1.3rem' }}>
						<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} /> Visit Information
					</Box>
					<Grid container >
						{ visitInfoArr.map((info, i) => (
							<Grid key={i} item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{info[0]} :</Box>
									<Box sx={{ flexBasis: '40%' }}>{info[1]}</Box>
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
			)} */}

			{ visitInfo && (

				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					{ !visitInfo.approval ? (
						<Box sx={{	display: 'flex', flexDirection: 'column', alignItems: 'center',  gap: '20px', }}>
							<Box sx={{  width: '100px', aspectRatio: '1/1', position: 'relative',  }}>
								<Image src='/images/lgjl/visit/underReview.png' fill sizes='100%' alt='success' />
							</Box>
							<Box sx={{ px: '5px' }}>承認が進行中です。 しばらくして確認してください。</Box>
						</Box>
					) : (
						<Box sx={{	display: 'flex', flexDirection: 'column', alignItems: 'center',  gap: '20px', }}>
							<Box sx={{  width: '100px', aspectRatio: '1/1', position: 'relative',  }}>
								<Image src='/images/lgjl/visit/success.png' fill sizes='100%' alt='success' />
							</Box>
							<Box sx={{ px: '5px' }}>訪問が承認されました。</Box>
						</Box>
					)}

					<Box sx={{ m: '50px 20px 30px 20px', fontSize: '1.3rem' }}>
						<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} /> 訪問情報
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>会社 :</Box>
								<Box sx={{ flexBasis: '40%' }}>{visitInfo.company}</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>お名前 :</Box>
								<Box sx={{ flexBasis: '40%' }}>{visitInfo.name}</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>Eメールアドレス :</Box>
								<Box sx={{ flexBasis: '40%' }}>{visitInfo.email}</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>携帯電話 :</Box>
								<Box sx={{ flexBasis: '40%' }}>{visitInfo.mobile}</Box>
							</Box>
						</Grid>
						{ visitInfo.item && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>搬入物 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.item}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.quantity && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>品目数量 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.quantity}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.purpose && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>搬入目的 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.purpose}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.serial && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>シリアル番号 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.serial}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.unsealed && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>開封品 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.unsealed}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.reason && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>開封理由 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.reason}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.device && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>Wi-Fi 接続デバイス :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.device}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.wirelessMAC && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>ワイヤレス MAC アドレス :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.wirelessMAC}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.cloudConnection && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>クラウドPC 接続 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.cloudConnection}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.cloudIP && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>クラウドPC IPアドレス :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.cloudIP}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.cloudVMIP && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>クラウドPC VM IPアドレス :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.cloudVMIP}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.cloudConnectionIP && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>クラウドPC 接続 IPアドレス :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.cloudConnectionIP}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.conferenceRoomUse && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>会議室の使用 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.conferenceRoomUse}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.people && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>人数 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.people}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.date && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>使用日 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.date}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.time && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>使用時間 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.time}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.laboratoryUse && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>実験室使用 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.laboratoryUse}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.laboratory && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>実験室選択 :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.laboratory}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.privacyCheck && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>プライバシーポリシー :</Box>
									<Box sx={{ flexBasis: '40%' }}>Agreed</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.pledgeCheck  && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>訪問者の誓約 :</Box>
									<Box sx={{ flexBasis: '40%' }}>Agreed</Box>
								</Box>
							</Grid>
						)}
					</Grid>
					{ !visitInfo.approval && (
						<Box sx={{ mt: '50px', px: '10px', 
							display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
							<Box sx={{ px: '5px' }}>変更が必要な項目を修正してください。</Box>
							<button className={styles.buttonRed} onClick={handleModify}>Modify</button>
							{/* <button className={styles.buttonRed} onClick={handleDelete}>Delete</button> */}
						</Box>
					)}
				</Box>
			)}
			
		</Box>
	);
};

export default VisitInquiry;