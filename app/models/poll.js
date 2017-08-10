import mongoose from 'mongoose';
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
        }]
});

export default mongoose.model('Poll', pollSchema)