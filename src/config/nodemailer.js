import nodemailer from 'nodemailer';

const transporterUser = process.env.TRANSPORTER_USER;
const transporterPassword = process.env.TRANSPORTER_PASSWORD; 

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	// host: 'smtp.gmail.com',
	// port: 465,
	// secure: true,
	auth: { 
		user: transporterUser, 
		pass: transporterPassword, 
	},
	preserveSent: false,
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