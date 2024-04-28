import mongoose,{Document,Schema} from 'mongoose';

export interface cFileInterface extends Document {
        _id: string,
        fullAmount: number,
        fileAmount: number,
        days: number,
        interest: number,
        perDayKist: number,
        agent: string,
        gurantee: string,
        customerId: [{ type: Schema.Types.ObjectId, ref: 'Customer' }]
        date: string
}


const  cFileSchema:Schema = new Schema({
    fullAmount: { type: Number, required: true },
    fileAmount: { type: Number, required: true},
    days: { type: Number },
    interest: { type: Number },
    perDayKist: { type: Number },
    agent: { type: String, required: true },
    gurantee: { type: String, required: true },
    customerId: [{ type: Schema.Types.ObjectId, ref: 'Customer' }],
    date: { type: Date, required: true, default: Date.now },
})

export default mongoose.model<cFileInterface>('CFile',cFileSchema)













