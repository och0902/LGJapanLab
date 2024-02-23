import mongoose from 'mongoose';

const applicantInfoSchema = new mongoose.Schema({
   name: { type: String, required: [true, 'name is required ...'] },
   nameKana: { type: String, },
   email: { type: String, required: [true, 'email is required ...'] },
   mobile: { type: String, required: [true, 'mobile phone number is required ...'] },
   recruitmentJob: { type: String, required: [true, 'recruitment job is required ...'] },
   files: { type: Array, required: [true,'file paths are required ...'] },
   otherMatters: { type: String },
   privacyCheck: { type: Boolean , default: true },
   }, { timestamps: true }
); 

const ApplicantInfos = mongoose.models.ApplicantInfos || mongoose.model('ApplicantInfos', applicantInfoSchema);

export default ApplicantInfos;