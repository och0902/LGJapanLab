import mongoose from 'mongoose';

const { Schema } = mongoose;

const visitApplySchema = new Schema({
   checkbox: { type: Boolean , default: true },
   dateOfVisit: { type: String, required: [true, 'date of visit is required ...'] },
   purposeOfVisit: { type: String, required: [true, 'purpose of visit is required ...'] },
   personToMeet: { type: String, required: [true, 'person to meet is required ...'] },
   visitorName: { type: String, required: [true, 'visitor name is required ...'] },
   visitorMobile: { type: String, required: [true, 'visitor mobile is required ...'] },
   visitorEmail: { type: String, required: [true, 'visitor email is required ...'] },
   numberOfVisitors: { type: String, required: [true, 'number of visitors is required ...'] },
   conferenceRoom: { type: Boolean, default: false },
   laboratory: { type: Boolean, default: false },
   files: { type: Array, required: [true,'file paths are required ...'] },
   otherMatters: { type: String },
   }, { timestamps: true }
); 

const VisitApply = mongoose.models.VisitApply || mongoose.model('VisitApply', visitApplySchema);

export default VisitApply;