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
		if( !session.visitInfo ) { toast.error('No visit information found ... '); }
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
					toast.error('An error occurred during data processing.');
				} else {
					return response.json();
				};
			}).then ((result) => {
				// console.log(result);
				if ( result.message && result.message === 'success' ) {
						toast.success('The data you entered has been processed successfully.');
						setIsSaving(false);
						router.push('/en/visit/apply/success');
					} else {
						toast.error('The data you entered was not processed properly. Please try again.');
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
					Visiting Information Modification
				</Box>
				
				<Box sx={{ width: '80%', m: 'auto', [theme.breakpoints.down('lg')] : { width: '100%' } }}>
					<Box sx={{ m: '50px 20px 30px 20px', fontSize: '1.3rem' }}>
						<CircleIcon sx={{ fontSize: '0.6rem', color: 'var(--color-LGgray)' }} /> Visitor Information
					</Box>

					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.company}</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<select className={styles.input} value={visitInfo.company}
										onChange={(e) => setVisitInfo({ ...visitInfo, company:e.target.value })} >
										<option value=''>Select</option>
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
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.name}</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='text' className={styles.input} value={visitInfo.name}
										onChange={(e) => setVisitInfo({ ...visitInfo, name:e.target.value })}  />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.email}</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='email' className={styles.input} value={visitInfo.email}
										onChange={(e) => setVisitInfo({ ...visitInfo, email:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.mobile}</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='tel' className={styles.input} placeholder={`'-'なしの数字のみ`}
										value={visitInfo.mobile} onChange={(e) => setVisitInfo({ ...visitInfo, mobile:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.visitDate}</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<input type='date' min={new Date().toISOString().substring(0, 10)} className={styles.input} value={visitInfo.visitDate}
										onChange={(e) => setVisitInfo({ ...visitInfo, visitDate:e.target.value })} />
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.visitTime}</Box>
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
							<Box sx={{ fontSize: '1.3rem' }}><CircleIcon sx={{ fontSize: '0.6rem'  }} /> Carrying-in Item</Box>
							<Box>	(entry target: digital recording media such as Labtop, USB, HDD)</Box>
						</Box>
						<Box className={ styles.addQuantity } onClick = { handleCarryIns } >
							Add items to be carried in
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
													<option value=''>Select</option>
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
														<option value=''>Select</option>
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
														<option value=''>Select</option>
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
																<option value=''>Select</option>
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
						<Box sx={{ fontSize: '1.3rem' }}> Application for Use of the Conference Room</Box>
						<Box>	(if more than one person is using it, one representative will fill it out)</Box>
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.conferenceRoomUse}</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<select className={styles.input} value={visitInfo.conferenceRoomUse}
										onChange={(e) => setVisitInfo({ ...visitInfo, conferenceRoomUse:e.target.value })} >
										<option value=''>Select</option>
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
						<Box sx={{ fontSize: '1.3rem' }}> Application for Laboratory Use</Box>
						<Box>	(if more than one person is using, one representative will fill in)</Box>
					</Box>
					<Grid container >
						<Grid item xs={12} md={6}>
							<Box sx={{ m: '5px', display: 'flex', alignItems: 'center', gap: '5%'  }}>
								<Box sx={{ flexBasis: '40%',  textAlign: 'right' }}>{itemTitles.laboratoryUse}</Box>
								<Box sx={{ flexBasis: '55%' }}>
									<select className={styles.input} value={visitInfo.laboratoryUse}
										onChange={(e) => setVisitInfo({ ...visitInfo, laboratoryUse:e.target.value })} >
										<option value=''>Select</option>
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
											<option value=''>Select</option>
											<optgroup label='B1'>
												<option value='B1 Clean Room'>Clean Room</option>
												<option value='B1 Gasbombe Room'>Gasbombe Room</option>
											</optgroup>
											<optgroup label='4F'>
												<option value='4F Battery Lab'>Battery Lab</option>
												<option value='4F Display Lab'>Display Lab</option>
												<option value='4F Battery Lab'>Reliability Test Room</option>
												<option value='4F Material Chemistry Lab'>Material Chemistry Lab</option>
											</optgroup>
											<optgroup label='5F'>
												<option value='5F Common Lab'>Common Lab</option>
											</optgroup>
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
					<Box>※ It may take some time to respond. Thank you for your understanding. Continuous submissions are not available in 10 minutes.</Box>
				</Box>

			</form>
		</Box>
	);
};

export default VisitModify;