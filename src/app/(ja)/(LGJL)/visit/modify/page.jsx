'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import { itemTitles } from '../itemTitles';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import { toast } from 'react-hot-toast';

const VisitModify = () => {

	const session = useSession();
	const theme = useTheme();
	const router = useRouter();

	const [ visitInfo, setVisitInfo ] = useState({
		company: '', name: '', email: '', mobile: '', visitDate: '', visitTime: '',
		deviceQty : 0,	
		carryingIns: [{}],
		conferenceRoomUse: '', people: '', startTime: '', endTime: '', 
		laboratoryUse: '', laboratory: '',
		privacyCheck: false, pledgeCheck: false,
	});
	
	const [ thisCarryingIns, setThisCarryingIns ] = useState([{
		deviceNo: 0, 
		device: '', purpose: '', serial: '', unsealed: '', reason: '', 
		wifi: '', wirelessMAC: '', cloudConnection: '', cloudIP: '', cloudVMIP: '', cloudConnectionIP: '',
	}]);

	useEffect(() => {
		if( !session.visitInfo ) { toast.error('訪問者情報は見つかりません。'); }
		else { 
			setVisitInfo(session.visitInfo);
			setThisCarryingIns(session.visitInfo.carryingIns);
		}; 
	},[session.visitInfo]);

	const handleCarryIns = (e) => {
		e.preventDefault();

		const qty = visitInfo.deviceQty + 1;
		setVisitInfo({ ...visitInfo, deviceQty: qty });
		thisCarryingIns[qty] = { 
			...thisCarryingIns[qty], deviceNo: qty, device: '', purpose: '', serial: '', unsealed: '', reason: '', 
			wifi: '', wirelessMAC: '', cloudConnection: '', cloudIP: '', cloudVMIP: '', cloudConnectionIP: '' 
		};
		setThisCarryingIns(thisCarryingIns.map(content => content));
	};

	const [ isSaving, setIsSaving ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		visitInfo.carryingIns = thisCarryingIns;

		// console.log( visitInfo );

		if(!isSaving ) {
			setIsSaving(true);
			try {
				const url = '/api/visit';
				fetch(url, {
					method: 'PUT',
					headers: { 'Content-type': 'application/json' },
					body: JSON.stringify( visitInfo ),
				}).then ((response) => {
					// console.log(response);
					if( !response.ok ) {
						console.log(response.message);
						toast.error('データ処理中にエラーが発生しました。');
					} else {
						return response.json();
					};
				}).then ((result) => {
					// console.log(result);
					if ( result.message && result.message === 'success' ) {
						toast.success('入力したデータは正常に処理されました。');
						setIsSaving(false);
						router.push('/visit/apply/success');
					} else {
						toast.error('入力したデータが正常に処理されませんでした。もう一度試してください。');
						setIsSaving(false);
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
				<Box sx={{ width: '100%', py: '25px', fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', textAlign: 'center', 
					color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)',
					[theme.breakpoints.down('md')] : { mt: 'calc( var(--gap-basic)/3 )' } }}>
					訪問情報修正
				</Box>
				
				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px', fontSize: '1.3rem' }}>
						<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGred)' }} /> 訪問者情報
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
									<Box className = { styles.required }>必須</Box>
									<Box>{itemTitles.company}</Box>
								</Box>
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
								<Box sx={{ flexBasis: '40%',  textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
									<Box className = { styles.required }>必須</Box>
									<Box>{itemTitles.name}</Box>
								</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='text' className={styles.input} value={visitInfo.name}
										onChange={(e) => setVisitInfo({ ...visitInfo, name:e.target.value })}  />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
									<Box className = { styles.required }>必須</Box>
									<Box>{itemTitles.email}</Box>
								</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='email' className={styles.input} value={visitInfo.email}
										onChange={(e) => setVisitInfo({ ...visitInfo, email:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
									<Box className = { styles.required }>必須</Box>
									<Box>{itemTitles.mobile}</Box>
								</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='tel' className={styles.input} placeholder={`'-'なしの数字のみ`}
										value={visitInfo.mobile} onChange={(e) => setVisitInfo({ ...visitInfo, mobile:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
									<Box className = { styles.required }>必須</Box>
									<Box>{itemTitles.visitDate}</Box>
								</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='date' min={new Date().toISOString().substring(0, 10)} className={styles.input} value={visitInfo.visitDate}
										onChange={(e) => setVisitInfo({ ...visitInfo, visitDate:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right', display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
									<Box className = { styles.required }>必須</Box>
									<Box>{itemTitles.visitTime}</Box>
								</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='time' list='time-list' step='1800' className={styles.input} value={visitInfo.visitTime}
										onChange={(e) => setVisitInfo({ ...visitInfo, visitTime:e.target.value })} />
									<datalist id='time-list'>
										<option value='08:30' /><option value='09:00' /><option value='09:30' /><option value='10:00' /><option value='10:30' />
										<option value='11:00' /><option value='11:30' /><option value='12:00' /><option value='12:30' /><option value='13:00' />
										<option value='13:30' /><option value='14:00' /><option value='14:30' /><option value='15:00' /><option value='15:30' />
										<option value='16:00' /><option value='16:30' /><option value='17:00' /><option value='17:30' />
									</datalist>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
				
				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 5px 30px 5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<Box sx={{ flexBasis: '50%', ml: '15px' }}>
							<Box sx={{ fontSize: '1.3rem' }}><CircleIcon sx={{ fontSize: '0.6rem'  }} /> 搬入物</Box>
							<Box>	(対象物 : Notebook、USB、HDDなどのデジタル記録メディア)</Box>
						</Box>
						<Box className={ styles.addQuantity } onClick = { handleCarryIns } >
							搬入物追加
						</Box>		
					</Box>
			
					{( visitInfo.deviceQty >= 0 ) && (
						thisCarryingIns.map((carryingIn, i) => (
							<React.Fragment key={i}>
								<Grid container sx={{ mt: '10px' }} >
									<Grid item xs={12} md={6}>
										<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
											<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.device}{i+1}</Box>
											<Box sx={{ flexBasis: '55%' }}>
												<select className={styles.input} value={carryingIn.device}
													onChange={(e) => {
														thisCarryingIns[i] = { ...carryingIn, device: e.target.value };
														setThisCarryingIns(thisCarryingIns.map(content => content));
													}}
												>
													<option value=''>選択</option>
													<option value='Notebook PC'>Notebook PC</option>
													<option value='Tablet PC'>Tablet PC</option>
													<option value='Mobile Phone'>Mobile Phone</option>
													<option value='USB Memory'>USB Memory</option>
													<option value='HDD'>HDD</option>
													<option value='CD'>CD</option>
													<option value='DVD'>DVD</option>
													<option value='etc.'>etc.</option>
												</select>
											</Box>
										</Box>
									</Grid>
								</Grid>
								<Grid container sx={{ mb: '10px' }}>
									{(carryingIn.device === 'Notebook PC' || carryingIn.device === 'Tablet PC') && (
										<>
										<Grid item xs={12} md={6}>
											<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
												<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.purpose}</Box>
												<Box sx={{ flexBasis: '55%' }}>
													<input type='text' className={styles.input} value={carryingIn.purpose}
														onChange={(e) => {
															thisCarryingIns[i] = { ...carryingIn, purpose: e.target.value };
															setThisCarryingIns(thisCarryingIns.map(content => content));
														}}
													/>
												</Box>
											</Box>
										</Grid>
										<Grid item xs={12} md={6}>
											<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
												<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.serial}</Box>
												<Box sx={{ flexBasis: '55%' }}>
													<input type='text' className={styles.input} value={carryingIn.serial}
														onChange={(e) => { 
															thisCarryingIns[i] = { ...carryingIn, serial: e.target.value };
															setThisCarryingIns(thisCarryingIns.map(content => content));
														}}
													/>
												</Box>
											</Box>
										</Grid>
										</>
									)}
									{(carryingIn.device === 'Notebook PC' || carryingIn.device === 'Tablet PC' || carryingIn.device === 'Mobile Phone' ) && (
										<>
										<Grid item xs={12} md={6}>
											<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
												<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.unsealed}</Box>
												<Box sx={{ flexBasis: '55%' }}>
													<select className={styles.input} value={carryingIn.unsealed}
														onChange={(e) => {
															thisCarryingIns[i] = { ...carryingIn, unsealed: e.target.value };
															setThisCarryingIns(thisCarryingIns.map(content => content));
														}} 
													>
														<option value=''>選択</option>
														<option value='Yes'>Yes</option>
														<option value='No'>No</option>
													</select>
												</Box>
											</Box>
										</Grid>
										{(carryingIn.unsealed == 'Yes') && (
											<Grid item xs={12} md={6}>
												<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
													<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.reason}</Box>
													<Box sx={{ flexBasis: '55%' }}>
														<input type='text' className={styles.input} value={carryingIn.reason}
															onChange={(e) => {
																thisCarryingIns[i] = { ...carryingIn, reason: e.target.value };
																setThisCarryingIns(thisCarryingIns.map(content => content));
															}} 
														/>
													</Box>
												</Box>
											</Grid>
										)}

										<Grid item xs={12} md={6}>
											<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
												<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.wifi}</Box>
												<Box sx={{ flexBasis: '55%' }}>
													<select className={styles.input} value={carryingIn.wifi}
														onChange={(e) => {
															thisCarryingIns[i] = { ...carryingIn, wifi: e.target.value };
															setThisCarryingIns(thisCarryingIns.map(content => content));
														}} 
													>
														<option value=''>選択</option>
														<option value='Yes'>Yes</option>
														<option value='No'>No</option>
													</select>
												</Box>
											</Box>
										</Grid>
										{( carryingIn.wifi === 'Yes' ) && (
											<>
											<Grid item xs={12} md={6}>
												<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
													<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.wirelessMAC}</Box>
													<Box sx={{ flexBasis: '55%' }}>
														<input type='text' className={styles.input} value={carryingIn.wirelessMAC}
															onChange={(e) => {
																thisCarryingIns[i] = { ...carryingIn, wirelessMAC: e.target.value };
																setThisCarryingIns(thisCarryingIns.map(content => content));
															}}  
														/>
													</Box>
												</Box>
											</Grid>
											{(visitInfo.company === 'LG Display' || visitInfo.company === 'LG Innotek') && (
												<Grid item xs={12} md={6}>
													<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
														<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.cloudConnection}</Box>
														<Box sx={{ flexBasis: '55%' }}>
															<select className={styles.input} value={carryingIn.cloudConnection}
																onChange={(e) => {
																	thisCarryingIns[i] = { ...carryingIn, cloudConnection: e.target.value };
																	setThisCarryingIns(thisCarryingIns.map(content => content));
																}} 
															>
																<option value=''>選択</option>
																<option value='Yes'>Yes</option>
																<option value='No'>No</option>
															</select>
														</Box>
													</Box>
												</Grid>
											)}
											{(visitInfo.company === 'LG Display' && carryingIn.cloudConnection === 'Yes') && (
												<Grid item xs={12} md={6}>
													<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
														<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.cloudIP}</Box>
														<Box sx={{ flexBasis: '55%' }}>
															<input type='text' className={styles.input} value={carryingIn.cloudIP}
																onChange={(e) => {
																	thisCarryingIns[i] = { ...carryingIn, cloudIP: e.target.value };
																	setThisCarryingIns(thisCarryingIns.map(content => content));
																}}  
															/>
														</Box>
													</Box>
												</Grid>
											)}
											{(visitInfo.company === 'LG Innotek' && carryingIn.cloudConnection === 'Yes') && (
												<>
												<Grid item xs={12} md={6}>
													<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
														<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.cloudVMIP}</Box>
														<Box sx={{ flexBasis: '55%' }}>
															<input type='text' className={styles.input} value={carryingIn.cloudVMIP}
																onChange={(e) => {
																	thisCarryingIns[i] = { ...carryingIn, cloudVMIP: e.target.value };
																	setThisCarryingIns(thisCarryingIns.map(content => content));
																}}  
															/>
														</Box>
													</Box>
												</Grid>
												<Grid item xs={12} md={6}>
													<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
														<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.cloudConnectionIP}</Box>
														<Box sx={{ flexBasis: '55%' }}>
															<input type='text' className={styles.input} value={carryingIn.cloudConnectionIP}
																onChange={(e) => {
																	thisCarryingIns[i] = { ...carryingIn, cloudConnectionIP: e.target.value };
																	setThisCarryingIns(thisCarryingIns.map(content => content));
																}}  
															/>
														</Box>
													</Box>
												</Grid>
												</>
											)}
											</>
										)}
										</>
									)}
								</Grid>
							</React.Fragment>
						))
					)}
				</Box>

				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px' }}>
						<Box sx={{ fontSize: '1.3rem' }}>
							<CircleIcon sx={{ fontSize: '0.6rem'  }} /> 会議室の使用申請</Box>
						<Box>	(複数の人が使用している場合は、担当者1名が記入します。)</Box>
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.conferenceRoomUse}</Box>
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
						{ visitInfo.conferenceRoomUse === 'Yes' && (
							<>
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.people}</Box>
									<Box sx={{ flexBasis: '55%' }}>
										<input type='text' className={styles.input} value={visitInfo.people}
											onChange={(e) => setVisitInfo({ ...visitInfo, people:e.target.value })} />
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.startTime}</Box>
									<Box sx={{ flexBasis: '55%' }}>
										<input type='time' list='time-list' step='1800' className={styles.input} value={visitInfo.startTime}
											onChange={(e) => setVisitInfo({ ...visitInfo, startTime:e.target.value })} />
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.endTime}</Box>
									<Box sx={{ flexBasis: '55%' }}>
										<input type='time' list='time-list' step='1800' className={styles.input} value={visitInfo.endTime}
											onChange={(e) => setVisitInfo({ ...visitInfo, endTime:e.target.value })} />
									</Box>
								</Box>
							</Grid>
							</>
						)}
					</Grid>
				</Box>

				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px' }}>
						<Box sx={{ fontSize: '1.3rem' }}>
							<CircleIcon sx={{ fontSize: '0.6rem'  }} /> 実験室の使用申請</Box>
						<Box>	(2名以上の方がご利用の場合は、1名の担当者がご記入ください。)</Box>
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.laboratoryUse}</Box>
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
						{ visitInfo.laboratoryUse === 'Yes' && (
							<Grid item xs={12} md={6}>
								<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
									<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.laboratory}</Box>
									<Box sx={{ flexBasis: '55%' }}>
										<select className={styles.input} value={visitInfo.laboratory}
											onChange={(e) => setVisitInfo({ ...visitInfo, laboratory:e.target.value })} >
											<option value=''>選択</option>
											<option value='B1 Clean Room'>B1 Clean Room</option>
											<option value='B1 Gasbombe Room'>B1 Gasbombe Room</option>
											<option value='4F Battery Lab'>4F Battery Lab</option>
											<option value='4F Display Lab'>4F Display Lab</option>
											<option value='4F Battery Lab'>4F Reliability Test Room</option>
											<option value='4F Material Chemistry Lab'>4F Material Chemistry Lab</option>
											<option value='5F Common Lab'>5F Common Lab</option>
										</select>
									</Box>
								</Box>
							</Grid>
						)}
					</Grid>
				</Box>

				<Box sx={{ mt: '50px', px: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
					<button type='submit' 
						className={styles.buttonRed} style={{ opacity: isSaving ? 0.5 : 1 }}>
						{isSaving ? 'Saving...' : 'Submit'}
					</button>
					<Box>※ 回答に時間がかかる場合があります。 ご理解のほどよろしくお願いします。</Box>
				</Box>

			</form>
		</Box>
	);
};

export default VisitModify;