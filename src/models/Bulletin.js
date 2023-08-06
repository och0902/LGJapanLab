import mongoose from 'mongoose';

const { Schema } = mongoose;

const bulletinSchema = new Schema({
   title: { type: String, required: [true, 'title is required ...'] },
   author: { type: String, required: [true, 'author is required ...'] },
   bulletin: { type: String, unique: true, required: [true, 'bulletin is required ...'] },
   }, { timestamps: true }
); 

const Bulletin = mongoose.models.Bulletin || mongoose.model('Bulletin', bulletinSchema);

export default Bulletin;