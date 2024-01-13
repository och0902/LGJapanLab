import nodemailer from 'nodemailer';

const transporterUser = process.env.TRANSPORTER_USER;
const transporterPassword = process.env.TRANSPORTER_PASSWORD; 

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: { 
		user: transporterUser, 
		pass: transporterPassword, 
	},
});

const careersReceiverAddress = process.env.CAREERS_RECEIVER_ADDRESS;

export const careersMailOptions = {
	from: '', 
	to: careersReceiverAddress,
};

const visitReceiverAddress = process.env.VISIT_RECEIVER_ADDRESS;

export const visitMailOptions = {
	from: '', 
	to: visitReceiverAddress,
};