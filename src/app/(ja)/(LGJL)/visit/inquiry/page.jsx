'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { itemTitles } from '../itemTitles';
import { useRouter } from 'next/navigation';
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

	const [ isSaving, setIsSaving ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ( !visitor.email || !visitor.mobile ) {
         toast.error('メールアドレスと携帯電話番号を入力してください。');
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
						if( !response.ok ) {
							console.log(response.message);
							toast.error('データ処理中にエラーが発生しました。');
						} else {
							return response.json();
						}
					}).then ((result) => {
						// console.log(result);
						if( result.message && result.message === 'success' ) {
							// toast.success('入力した訪問リクエストが正常に確認されました。');
							setVisitInfo(result._doc);
							session.visitInfo = result._doc;
							// console.log(session);
							setIsSaving(false);
						} else {
							toast.error('入力した訪問リクエストが見つかりません。');
							setIsSaving(false);
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
		<Box className='pageContainer' >

			<form style={{ width: '100%' }} onSubmit={handleSubmit}>
				<Box sx={{ width: '100%', py: '25px', fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', textAlign: 'center', 
					color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)',
					[theme.breakpoints.down('md')] : { mt: 'calc( var(--gap-basic)/3 )' } }}>
					訪問申請状況
				</Box>
				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px', fontSize: '1.3rem' }}>
						<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} /> 訪問者
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.email}</Box>
								<Box sx={{ flexBasis: '40%' }}>
									<input type='text' className={styles.input} 
										onChange={(e) => setVisitor({ ...visitor, email:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.mobile}</Box>
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
								訪問申請時に作成した訪問者情報を入力して提出してください。
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
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.company} :</Box>
								<Box sx={{ flexBasis: '40%' }}>{visitInfo.company}</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.name} :</Box>
								<Box sx={{ flexBasis: '40%' }}>{visitInfo.name}</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.email} :</Box>
								<Box sx={{ flexBasis: '40%' }}>{visitInfo.email}</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.mobile} :</Box>
								<Box sx={{ flexBasis: '40%' }}>{visitInfo.mobile}</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.visitDate} :</Box>
								<Box sx={{ flexBasis: '40%' }}>{visitInfo.visitDate}</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.visitTime} :</Box>
								<Box sx={{ flexBasis: '40%' }}>{visitInfo.visitTime}</Box>
							</Box>
						</Grid>
					</Grid>
					{ (visitInfo.deviceQty > 0)  && (
						visitInfo.carryingIns.map((carryIn, i) => (
							<Grid container key={i}>
								<Grid item xs={12} md={6}>
									<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
										<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.deviceNo} :</Box>
										<Box sx={{ flexBasis: '40%' }}>{carryIn.deviceNo}</Box>
									</Box>
								</Grid>
								<Grid item xs={12} md={6}>
									<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
										<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.device} :</Box>
										<Box sx={{ flexBasis: '40%' }}>{carryIn.device}</Box>
									</Box>
								</Grid>
								{ carryIn.purpose && (
									<Grid item xs={12} md={6}>
										<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
											<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.purpose} :</Box>
											<Box sx={{ flexBasis: '40%' }}>{carryIn.purpose}</Box>
										</Box>
									</Grid>
								)}
								{ carryIn.serial && (
									<Grid item xs={12} md={6}>
										<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
											<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.serial} :</Box>
											<Box sx={{ flexBasis: '40%' }}>{carryIn.serial}</Box>
										</Box>
									</Grid>
								)}
								{ carryIn.unsealed && (
									<Grid item xs={12} md={6}>
										<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
											<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.unsealed} :</Box>
											<Box sx={{ flexBasis: '40%' }}>{carryIn.unsealed}</Box>
										</Box>
									</Grid>
								)}
								{ carryIn.reason && (
									<Grid item xs={12} md={6}>
										<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
											<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.reason} :</Box>
											<Box sx={{ flexBasis: '40%' }}>{carryIn.reason}</Box>
										</Box>
									</Grid>
								)}
								{ carryIn.wifi && (
									<Grid item xs={12} md={6}>
										<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
											<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.wifi} :</Box>
											<Box sx={{ flexBasis: '40%' }}>{carryIn.wifi}</Box>
										</Box>
									</Grid>
								)}
								{ carryIn.wirelessMAC && (
									<Grid item xs={12} md={6}>
										<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
											<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.wirelessMAC} :</Box>
											<Box sx={{ flexBasis: '40%' }}>{carryIn.wirelessMAC}</Box>
										</Box>
									</Grid>
								)}
								{ carryIn.cloudConnection && (
									<Grid item xs={12} md={6}>
										<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
											<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.cloudConnection} :</Box>
											<Box sx={{ flexBasis: '40%' }}>{carryIn.cloudConnection}</Box>
										</Box>
									</Grid>
								)}
								{ carryIn.cloudIP && (
									<Grid item xs={12} md={6}>
										<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
											<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.cloudIP} :</Box>
											<Box sx={{ flexBasis: '40%' }}>{carryIn.cloudIP}</Box>
										</Box>
									</Grid>
								)}
								{ carryIn.cloudVMIP && (
									<Grid item xs={12} md={6}>
										<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
											<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.cloudVMIP} :</Box>
											<Box sx={{ flexBasis: '40%' }}>{carryIn.cloudVMIP}</Box>
										</Box>
									</Grid>
								)}
							</Grid>
						))
					)}
					<Grid container >
						{ visitInfo.conferenceRoomUse && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.conferenceRoomUse} :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.conferenceRoomUse}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.people && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.people} :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.people}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.startTime && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.startTime} :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.startTime}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.endTime && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.endTime} :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.endTime}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.laboratoryUse && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.laboratoryUse} :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.laboratoryUse}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.laboratory && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.laboratory} :</Box>
									<Box sx={{ flexBasis: '40%' }}>{visitInfo.laboratory}</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.privacyCheck && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.privacyCheck} :</Box>
									<Box sx={{ flexBasis: '40%' }}>Agreed</Box>
								</Box>
							</Grid>
						)}
						{ visitInfo.pledgeCheck  && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '55%',  textAlign: 'right' }}>{itemTitles.pledgeCheck} :</Box>
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