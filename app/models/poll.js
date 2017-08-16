import mongoose from 'mongoose';
import User from './user'
const Schema = mongoose.Schema;

const pollSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    options:[{
        answear:{type:String,
            },
        votes:{
            type: Number,
            default: 0
        }   
        }],
        created_by:{
            type:Schema.Types.ObjectId, ref:'User'
        }
});

export default mongoose.model('Poll', pollSchema)