import nodemailer from 'nodemailer';

const senderAddress = process.env.SENDER_ADDRESS;
const senderPassword = process.env.SENDER_PASSWORD; 

const receiverAddress = process.env.RECEIVER_ADDRESS;

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: { 
		user: senderAddress, 
		pass: senderPassword, 
	},
});

export const mailOptions = {
	from: senderAddress, 
	to: receiverAddress,
};