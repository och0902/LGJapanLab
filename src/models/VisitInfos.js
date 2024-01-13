import mongoose from 'mongoose';

const visitInfoSchema = new mongoose.Schema({
   company: { type: String, required: [true, `visitor's company is required ...`] },
   name: { type: String, required: [true, `visitor's name is required ...`] },
   email: { type: String, required: [true, `visitor's email is required ...`] },
   mobile: { type: String, required: [true, `visitor's mobile is required ...`] },
   visitDate: { type: String, required: [true, `visitor's visit date is required ...`] },
   visitTime: { type: String, required: [true, `visitor's visit time is required ...`] },
   deviceQty: { type: Number, },
   carryingIns: [{ 
      deviceNo: { type: Number, },
      device: { type: String, },
      purpose: { type: String, },
      serial: { type: String, },
      unsealed: { type: String, },
      reason: { type: String, },
      wifi: { type: String, },
      wirelessMAC: { type: String, },
      cloudConnection: { type: String, },
      cloudIP: { type: String, },
      cloudVMIP: { type: String, },
      cloudConnectionIP: { type: String, },
   },],
   conferenceRoomUse: { type: String, },
   people: { type: String },
   startTime: { type: String, },
   endTime: { type: String, },
   laboratoryUse: { type: String, },
   laboratory: { type: String },
   privacyCheck: { type: Boolean, },
   pledgeCheck: { type: Boolean, },
   approval: { type: Boolean, default: false },
   }, { timestamps: true }
); 

const VisitInfos = mongoose.models.VisitInfos || mongoose.model('VisitInfos', visitInfoSchema);

export default VisitInfos;