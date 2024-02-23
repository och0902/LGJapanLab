'use client';

import React, { useState } from 'react';
import { useGlobalContext } from '@/ContextProvider/context/GlobalContext';
import visitApplication from './visitApplication';
import { useRouter } from 'next/navigation';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Modal from 'react-modal';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import ModalPrivacyPolicy from '@/components/ModalPrivacyPolicy/ModalPrivacyPolicy';
import ModalPledge from '@/components/ModalPledge/ModalPledge';
import { BtnRedSubmit } from '@/components/BtnRed/BtnRed';
import RequiredMark from '@/components/RequiredMark/RequiredMark';

const VisitApplication = () => {

	const { language } = useGlobalContext();
	const { toasts, pageHero, catagory, btn, etc } = visitApplication( language );

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

	const [ privacyModal, setPrivacyModal ] = useState(false);
	const [ pledgeModal, setPledgeModal ] = useState(false);

	const customStyles = {
      content: {
         width: '86%', margin: 'auto', marginTop: 'var(--gap-basic)', color: 'var(--color-black)', backgroundColor: 'var(--color-LGgray-light)'
	}};

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

	const handleInputErrors = ( visitInfo ) => {
		if ( !visitInfo.company || !visitInfo.name || !visitInfo.email || !visitInfo.mobile || !visitInfo.visitDate || !visitInfo.visitTime ) 
			{ toast.error( toasts.error[0] ); return false; };
		if ( !visitInfo.email.includes('@g') ) 
			{ toast.error( toasts.error[1] ); return false;	};
		if ( visitInfo.privacyCheck !== true || visitInfo.pledgeCheck !== true ) 
			{ toast.error( toasts.error[2] ); return false; };
		return true;
	};

	const [ isSaving, setIsSaving ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ( !handleInputErrors( visitInfo ) ) return;

		visitInfo.carryingIns = thisCarryingIns;

		// console.log( visitInfo );

		if(!isSaving) {
			setIsSaving(true);
			try {
				const url = '/api/visit';
				const response = await fetch(url, {
					method: 'POST',
					headers: { 'Content-type': 'application/json' },
					body: JSON.stringify( visitInfo ),
				});
				const result = await response.json();
				if ( result?.message && result?.message === 'data processed successfully' ) {
					// console.log(result.message);
					toast.success( toasts.message[0] );
					setIsSaving(false);
					router.push('/visitApplication/success');
				} else {
					throw new Error( result?.message );
				};
			} catch (error) {
				toast.error(error.message);
			} finally {
				setIsSaving(false);
			}
		};

	};

	return (
		<div className='pageContainer'>

			<form className='w-full' onSubmit={handleSubmit}>
				<div className='w-full mt-[calc(var(--gap-base)*0.3)] py-[25px] text-[2.5rem] font-bold text-center text-black bg-LGgray-light'>
					{pageHero.title}
				</div>
				
				<div className='w-full lg:w-[80%] m-auto my-[30px] flex flex-col items-center'>
					<div>{pageHero.desc[0]}</div>
					<Link href='/documents/LGJLVisitGuide.pdf' download target='_blank' 
						className='flex justify-center items-center gap-[10px] hover:text-LGred'>
						<div className='w-[30px] aspect-square relative'>
							<Image src={'/images/lgjl/visit/manual.png'} fill sizes='100%' alt='manual'  />
						</div>
						<div>{pageHero.desc[1]}</div>
					</Link>
					<div className='flex items-center gap-[10px]'>
						<RequiredMark language={language} title={etc.required} /><div>{pageHero.desc[2]}</div>
					</div>
				</div>

				<div className='w-full lg:w-[80%] m-auto mt-[100px]'>
					<div className='my-[20px] mx-[10px] text-[1.5rem] lg:text-[1.8rem] text-LGred'>
						<CircleIcon className='text-[0.6rem]' /> {catagory[0].title}
					</div>
					<Grid container >
						<Grid item xs={12} md={6}>
							<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
								<div className='basis-[45%] text-right flex justify-end items-center gap-[10px]'>
									<RequiredMark language={language} title={etc.required} /><div>{catagory[0].item.company}</div>
								</div>
								<div className='basis-[55%]'>
									<select className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]'
										value={visitInfo.company} 
										onChange={(e) => setVisitInfo({ ...visitInfo, company:e.target.value })} >
										<option value=''>{etc.select}</option>
										<option value='LG Electonics'>LG Electonics</option>
										<option value='LG Display'>LG Display</option>
										<option value='LG Innotek'>LG Innotek</option>
										<option value='LG Chem'>LG Chem</option>
										<option value='LG Energy Solution'>LG Energy Solution</option>
										<option value='etc.'>etc.</option>
									</select>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} md={6}>
							<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
								<div className='basis-[45%] text-right flex justify-end items-center gap-[10px]'>
									<RequiredMark language={language} title={etc.required} /><div>{catagory[0].item.name}</div>
								</div>
								<div className='basis-[55%]'>
									<input type='text' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]'
										value={visitInfo.name} 
										onChange={(e) => setVisitInfo({ ...visitInfo, name:e.target.value })} />
								</div>
							</div>
						</Grid>
						<Grid item xs={12} md={6}>
							<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
								<div className='basis-[45%] text-right flex justify-end items-center gap-[10px]'>
									<RequiredMark language={language} title={etc.required} /><div>{catagory[0].item.email}</div>
								</div>
								<div className='basis-[55%]'>
									<input type='email' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]'
										value={visitInfo.email}	
										onChange={(e) => setVisitInfo({ ...visitInfo, email:e.target.value })} />
								</div>
							</div>
						</Grid>
						<Grid item xs={12} md={6}>
							<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
								<div className='basis-[45%] text-right flex justify-end items-center gap-[10px]'>
									<RequiredMark language={language} title={etc.required} /><div>{catagory[0].item.mobile}</div>
								</div>
								<div className='basis-[55%]'>
									<input type='tel' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' placeholder={`'-'なしの数字のみ`}
										value={visitInfo.mobile} 
										onChange={(e) => setVisitInfo({ ...visitInfo, mobile:e.target.value })} />
								</div>
							</div>
						</Grid>
						<Grid item xs={12} md={6}>
							<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
								<div className='basis-[45%] text-right flex justify-end items-center gap-[10px]'>
									<RequiredMark language={language} title={etc.required} /><div>{catagory[0].item.visitDate}</div>
								</div>
								<div className='basis-[55%]'>
									<input type='date' min={new Date().toISOString().substring(0, 10)} 
										className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
										value={visitInfo.visitDate} 
										onChange={(e) => setVisitInfo({ ...visitInfo, visitDate:e.target.value })} />
								</div>
							</div>
						</Grid>
						<Grid item xs={12} md={6}>
							<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
								<div className='basis-[45%] text-right flex justify-end items-center gap-[10px]'>
									<RequiredMark language={language} title={etc.required} /><div>{catagory[0].item.visitTime}</div>
								</div>
								<div className='basis-[55%]'>
									<input type='time' list='time-list' step='1800' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]'
										value={visitInfo.visitTime} 
										onChange={(e) => setVisitInfo({ ...visitInfo, visitTime:e.target.value })} />
									<datalist id='time-list'>
										<option value='08:30' /><option value='09:00' /><option value='09:30' /><option value='10:00' /><option value='10:30' />
										<option value='11:00' /><option value='11:30' /><option value='12:00' /><option value='12:30' /><option value='13:00' />
										<option value='13:30' /><option value='14:00' /><option value='14:30' /><option value='15:00' /><option value='15:30' />
										<option value='16:00' /><option value='16:30' /><option value='17:00' /><option value='17:30' />
									</datalist>
								</div>
							</div>
						</Grid>
					</Grid>
				</div>
							
				<div className='w-full lg:w-[80%] m-auto mt-[100px]'>
					<Grid container >
						<Grid item xs={12} md={6}>
							<div className='mx-[10px]'>
								<div className='text-[1.5rem] lg:text-[1.8rem]'>
									<CircleIcon className='text-[0.6rem]' /> {catagory[1].title}
								</div>
								<div>	{catagory[1].desc}</div>
							</div>
						</Grid>
						<Grid item xs={12} md={6}>
							<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
								<div className='basis-[45%]'></div>
								<div className='basis-[55%]'>
									<div className='w-full p-[10px] text-center border-[1px] border-LGgray rounded-[3px]
										hover:cursor-pointer hover:text-LGred hover:border-LGred' 
										onClick = { handleCarryIns }>
										{etc.addItems}
									</div>
								</div>
							</div>
						</Grid>
					</Grid>		
					
					{( visitInfo.deviceQty >= 0 ) && (
						thisCarryingIns.map((carryingIn, i) => (
							<React.Fragment key={i}>
								<Grid container sx={{ mt: '10px' }} >
									<Grid item xs={12} md={6}>
										<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
											<div className='basis-[45%] text-right'>{catagory[1].item.device}{i+1}</div>
											<div className='basis-[55%]'>
												<select className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
													value={carryingIn.device}
													onChange={(e) => { 
														thisCarryingIns[i] = { ...carryingIn, device: e.target.value }; 
														setThisCarryingIns(thisCarryingIns.map(content => content)); 
													}}
												>
													<option value=''>{etc.select}</option>
													<option value='Notebook PC'>Notebook PC</option>
													<option value='Tablet PC'>Tablet PC</option>
													<option value='Mobile Phone'>Mobile Phone</option>
													<option value='USB Memory'>USB Memory</option>
													<option value='HDD'>HDD</option>
													<option value='CD'>CD</option>
													<option value='DVD'>DVD</option>
													<option value='etc.'>etc.</option>
												</select>
											</div>
										</div>
									</Grid>
								</Grid>
								<Grid container sx={{ mb: '10px' }}>
									{(carryingIn.device === 'Notebook PC' || carryingIn.device === 'Tablet PC') && (
										<>
										<Grid item xs={12} md={6}>
											<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
												<div className='basis-[45%] text-right'>{catagory[1].item.purpose}</div>
												<div className='basis-[55%]'>
													<input type='text'className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
														value={carryingIn.purpose}
														onChange={(e) => {
															thisCarryingIns[i] = { ...carryingIn, purpose: e.target.value };
															setThisCarryingIns(thisCarryingIns.map(content => content));
														}}
													/>
												</div>
											</div>
										</Grid>
										<Grid item xs={12} md={6}>
										<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
											<div className='basis-[45%] text-right'>{catagory[1].item.serial}</div>
												<div className='basis-[55%]'>
													<input type='text' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
														value={carryingIn.serial}
														onChange={(e) => { 
															thisCarryingIns[i] = { ...carryingIn, serial: e.target.value };
															setThisCarryingIns(thisCarryingIns.map(content => content));
														}}
													/>
												</div>
											</div>
										</Grid>
										</>
									)}
									{(carryingIn.device === 'Notebook PC' || carryingIn.device === 'Tablet PC' || carryingIn.device === 'Mobile Phone' ) && (
										<>
										<Grid item xs={12} md={6}>
										<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
											<div className='basis-[45%] text-right'>{catagory[1].item.unsealed}</div>
												<div className='basis-[55%]'>
													<select className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
														value={carryingIn.unsealed}
														onChange={(e) => {
															thisCarryingIns[i] = { ...carryingIn, unsealed: e.target.value };
															setThisCarryingIns(thisCarryingIns.map(content => content));
														}} 
													>
														<option value=''>{etc.select}</option>
														<option value='Yes'>Yes</option>
														<option value='No'>No</option>
													</select>
												</div>
											</div>
										</Grid>
										{(carryingIn.unsealed == 'Yes') && (
											<Grid item xs={12} md={6}>
												<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
													<div className='basis-[45%] text-right'>{catagory[1].item.reason}</div>
													<div className='basis-[55%]'>
														<input type='text' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
															value={carryingIn.reason}
															onChange={(e) => {
																thisCarryingIns[i] = { ...carryingIn, reason: e.target.value };
																setThisCarryingIns(thisCarryingIns.map(content => content));
															}} 
														/>
													</div>
												</div>
											</Grid>
										)}

										<Grid item xs={12} md={6}>
											<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
												<div className='basis-[45%] text-right'>{catagory[1].item.wifi}</div>
												<div className='basis-[55%]'>
													<select className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
														value={carryingIn.wifi}
														onChange={(e) => {
															thisCarryingIns[i] = { ...carryingIn, wifi: e.target.value };
															setThisCarryingIns(thisCarryingIns.map(content => content));
														}} 
													>
														<option value=''>{etc.select}</option>
														<option value='Yes'>Yes</option>
														<option value='No'>No</option>
													</select>
												</div>
											</div>
										</Grid>
										{( carryingIn.wifi === 'Yes' ) && (
											<>
											<Grid item xs={12} md={6}>
												<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
													<div className='basis-[45%] text-right'>{catagory[1].item.wirelessMAC}</div>
													<div className='basis-[55%]'>
														<input type='text' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
															value={carryingIn.wirelessMAC}
															onChange={(e) => {
																thisCarryingIns[i] = { ...carryingIn, wirelessMAC: e.target.value };
																setThisCarryingIns(thisCarryingIns.map(content => content));
															}}  
														/>
													</div>
												</div>
											</Grid>
											{(visitInfo.company === 'LG Display' || visitInfo.company === 'LG Innotek') && (
												<Grid item xs={12} md={6}>
													<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
														<div className='basis-[45%] text-right'>{catagory[1].item.cloudConnection}</div>
														<div className='basis-[55%]'>
															<select className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
																value={carryingIn.cloudConnection}
																onChange={(e) => {
																	thisCarryingIns[i] = { ...carryingIn, cloudConnection: e.target.value };
																	setThisCarryingIns(thisCarryingIns.map(content => content));
																}} 
															>
																<option value=''>{etc.select}</option>
																<option value='Yes'>Yes</option>
																<option value='No'>No</option>
															</select>
														</div>
													</div>
												</Grid>
											)}
											{(visitInfo.company === 'LG Display' && carryingIn.cloudConnection === 'Yes') && (
												<Grid item xs={12} md={6}>
													<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
														<div className='basis-[45%] text-right'>{catagory[1].item.cloudIP}</div>
														<div className='basis-[55%]'>
															<input type='text' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]'
																value={carryingIn.cloudIP}
																onChange={(e) => {
																	thisCarryingIns[i] = { ...carryingIn, cloudIP: e.target.value };
																	setThisCarryingIns(thisCarryingIns.map(content => content));
																}}  
															/>
														</div>
													</div>
												</Grid>
											)}
											{(visitInfo.company === 'LG Innotek' && carryingIn.cloudConnection === 'Yes') && (
												<>
												<Grid item xs={12} md={6}>
													<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
														<div className='basis-[45%] text-right'>{catagory[1].item.cloudVMIP}</div>
														<div className='basis-[55%]'>
															<input type='text' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
																value={carryingIn.cloudVMIP}
																onChange={(e) => {
																	thisCarryingIns[i] = { ...carryingIn, cloudVMIP: e.target.value };
																	setThisCarryingIns(thisCarryingIns.map(content => content));
																}}  
															/>
														</div>
													</div>
												</Grid>
												<Grid item xs={12} md={6}>
													<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
														<div className='basis-[45%] text-right'>{catagory[1].item.cloudConnectionIP}</div>
														<div className='basis-[55%]'>
															<input type='text' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
																value={carryingIn.cloudConnectionIP}
																onChange={(e) => {
																	thisCarryingIns[i] = { ...carryingIn, cloudConnectionIP: e.target.value };
																	setThisCarryingIns(thisCarryingIns.map(content => content));
																}}  
															/>
														</div>
													</div>
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
				</div>

				<div className='w-full lg:w-[80%] m-auto mt-[100px]'>
					<div className='my-[20px] mx-[10px]'>
							<div className='text-[1.5rem] lg:text-[1.8rem]'>
							<CircleIcon className='text-[0.6rem]' /> {catagory[2].title}
						</div>
						<div>	{catagory[2].desc}</div>
					</div>
					<Grid container >
						<Grid item xs={12} md={6}>
							<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
								<div className='basis-[45%] text-right'>{catagory[2].item.conferenceRoomUse}</div>
								<div className='basis-[55%]'>
									<select className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
										value={visitInfo.conferenceRoomUse}	onChange={(e) => setVisitInfo({ ...visitInfo, conferenceRoomUse:e.target.value })} >
										<option value=''>{etc.select}</option>
										<option value='Yes'>Yes</option>
										<option value='No'>No</option>
									</select>
								</div>
							</div>
						</Grid>
						{ visitInfo.conferenceRoomUse === 'Yes' && (
							<>
							<Grid item xs={12} md={6}>
								<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
									<div className='basis-[45%] text-right'>{catagory[2].item.people}</div>
									<div className='basis-[55%]'>
										<input type='text' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]' 
											value={visitInfo.people} onChange={(e) => setVisitInfo({ ...visitInfo, people:e.target.value })} />
									</div>
								</div>
							</Grid>
							<Grid item xs={12} md={6}>
								<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
									<div className='basis-[45%] text-right'>{catagory[2].item.startTime}</div>
									<div className='basis-[55%]'>
										<input type='time' list='time-list' step='1800' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]'
											value={visitInfo.startTime} onChange={(e) => setVisitInfo({ ...visitInfo, startTime:e.target.value })} />
									</div>
								</div>
							</Grid>
							<Grid item xs={12} md={6}>
								<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
									<div className='basis-[45%] text-right'>{catagory[2].item.endTime}</div>
									<div className='basis-[55%]'>
										<input type='time' list='time-list' step='1800' className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]'
											value={visitInfo.endTime}	onChange={(e) => setVisitInfo({ ...visitInfo, endTime:e.target.value })} />
									</div>
								</div>
							</Grid>
							</>
						)}
					</Grid>
				</div>

				<div className='w-full lg:w-[80%] m-auto mt-[100px]'>
					<div className='my-[20px] mx-[10px]'>
						<div className='text-[1.5rem] lg:text-[1.8rem]'>
							<CircleIcon className='text-[0.6rem]' /> {catagory[3].title}
						</div>
						<div>	{catagory[3].desc}</div>
					</div>
					<Grid container >
						<Grid item xs={12} md={6}>
							<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
								<div className='basis-[45%] text-right'>{catagory[3].item.laboratoryUse}</div>
								<div className='basis-[55%]'>
									<select className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]'
										value={visitInfo.laboratoryUse} onChange={(e) => setVisitInfo({ ...visitInfo, laboratoryUse:e.target.value })} >
										<option value=''>{etc.select}</option>
										<option value='Yes'>Yes</option>
										<option value='No'>No</option>
									</select>
								</div>
							</div>
						</Grid>
						{ visitInfo.laboratoryUse === 'Yes' && (
							<Grid item xs={12} md={6}>
								<div className='m-[10px] flex items-center gap-[10px] lg:gap-[30px]'>
									<div className='basis-[45%] text-right'>{catagory[3].item.laboratory}</div>
									<div className='basis-[55%]'>
										<select className='w-full p-[10px] border-[1px] border-LGgray rounded-[3px]'
											value={visitInfo.laboratory} onChange={(e) => setVisitInfo({ ...visitInfo, laboratory:e.target.value })} >
											<option value=''>{etc.select}</option>
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
									</div>
								</div>
							</Grid>
						)}
					</Grid>
				</div>

				<div className='w-full lg:w-[80%] m-auto mt-[80px] '>
					<div className='m-[10px] flex gap-[10px]'>
						<div className='basis-[50%]'>
							<div onClick={() => setPrivacyModal(true)}
								className='w-full py-[10px] border-[1px] border-LGgray rounded
									flex flex-col md:flex-row justify-center items-center gap-[5px] hover:underline hover:text-LGred underline-offset-4'>
								<div className='w-[30px] aspect-square relative'>
									<Image src={'/images/lgjl/visit/privacy.png'} fill sizes='100%' alt='manual'  />
								</div>
								<div>{btn[0].title}</div>
							</div>
							<div className='mt-[10px] px-[5px] flex items-center'>
								<FormControlLabel control={
									<Checkbox className='text-LGred' sx={{ '&.Mui-checked': { color: 'var(--color-LGred)' } }} 
										checked={visitInfo.privacyCheck} onChange={(e) => setVisitInfo({ ...visitInfo, privacyCheck: e.target.checked })} />
								} />
								<div>
									<div>{btn[0].desc}</div>
								</div>
							</div>
						</div>
						<div className='basis-[50%]'>
							<div onClick={() => setPledgeModal(true)}
								className='w-full py-[10px] border-[1px] border-LGgray rounded
									flex flex-col md:flex-row justify-center items-center gap-[5px] hover:underline hover:text-LGred underline-offset-4'>
								<div className='w-[30px] aspect-square relative'>
									<Image src={'/images/lgjl/visit/pledge.png'} fill sizes='100%' alt='manual' />
								</div>
								<div>{btn[1].title}</div>
							</div>
							<div className='mt-[10px] px-[5px] flex items-center'>
								<FormControlLabel control={
									<Checkbox className='text-LGred' sx={{ '&.Mui-checked': { color: 'var(--color-LGred)' } }} 
										checked={visitInfo.pledgeCheck} onChange={(e) => setVisitInfo({ ...visitInfo, pledgeCheck: e.target.checked })} />
								} />
								<div>
									<div>{btn[1].desc}</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Modal isOpen={privacyModal} style={customStyles} >
					<div className='pageContainer'>
						<ModalPrivacyPolicy />
						<div className='flex gap-[20px]'>
							<button className='p-[20px] text-[1.2rem] font-bold border-[1px] border-LGgray 
								rounded-md transition duration-500 ease-in-out 
								over:no-underline hover:cursor-pointer hover:text-LGred hover:border-LGred'
								onClick={() => { setVisitInfo({ ...visitInfo, privacyCheck: true }); setPrivacyModal(false); }}>
								{btn[0].modalAccept}
							</button>
							<button className='p-[20px] text-[1.2rem] font-bold border-[1px] border-LGgray 
								rounded-md transition duration-500 ease-in-out 
								over:no-underline hover:cursor-pointer hover:text-LGred hover:border-LGred'
								onClick={() => setPrivacyModal(false)}>
								{btn[0].modalClose}
							</button>
						</div>
					</div>
				</Modal>

				<Modal isOpen={pledgeModal} style={customStyles} >
					<div className='pageContainer'>
						<ModalPledge />
						<div className='flex gap-[20px]'>
							<button className='p-[20px] text-[1.2rem] font-bold border-[1px] border-LGgray 
								rounded-md transition duration-500 ease-in-out 
								over:no-underline hover:cursor-pointer hover:text-LGred hover:border-LGred'
								onClick={() => { setVisitInfo({ ...visitInfo, pledgeCheck: true }); setPledgeModal(false); }}>
								{btn[1].modalAccept}
							</button>
							<button className='p-[20px] text-[1.2rem] font-bold border-[1px] border-LGgray 
								rounded-md transition duration-500 ease-in-out 
								over:no-underline hover:cursor-pointer hover:text-LGred hover:border-LGred'
								onClick={() => setPledgeModal(false)} >
								{btn[1].modalClose}
							</button>
						</div>
					</div>
				</Modal>

				<div className='w-full lg:w-[80%] m-auto mt-[100px] flex flex-col items-center gap-[50px]'>
					<div className='w-[300px]'>
						<BtnRedSubmit title={isSaving ? btn[2].title[1] : btn[2].title[0]} style={{ opacity: isSaving ? 0.5 : 1 }} />
					</div>
					<div>{btn[2].desc}</div>
				</div>

			</form>
		</div>
	);
};

export default VisitApplication;