import mongoose from 'mongoose';

const visitInfoSchema = new mongoose.Schema({
   company: { type: String, required: [true, `visitor's company is required ...`] },
   name: { type: String, required: [true, `visitor's name is required ...`] },
   email: { type: String, required: [true, `visitor's email is required ...`] },
   mobile: { type: String, required: [true, `visitor's mobile is required ...`] },
   item: { type: String },
   quantity: { type: String },
   purpose: { type: String },
   serial: { type: String },
   unsealed: { type: String },
   wirelessMAC: { type: String },
   cloudConnection: { type: String },
   cloudIP: { type: String },
   cloudVMIP: { type: String },
   cloudConnectionIP: { type: String },
   conferenceRoomUse: { type: String },
   people: { type: String },
   date: { type: String },
   time: { type: String },
   laboratoryUse: { type: String },
   laboratory: { type: String },
   privacyCheck: { type: Boolean, default: false },
   pledgeCheck: { type: Boolean, default: false },
   otherMatters: { type: String },
   approval: { type: Boolean, default: false },
   }, { timestamps: true }
); 

const VisitInfos = mongoose.models.VisitInfos || mongoose.model('VisitInfos', visitInfoSchema);

export default VisitInfos;