import mongoose,{Document,Schema} from 'mongoose';

export interface CustomerInterface extends Document {
        _id: string,
        name: string,
        mobile: string,
        mobile2: string,
        isAadhar: boolean,
        isCheque: boolean,
        aadharNo: number,
        noOfCheque: number,
        date: string
}


const  customerSchema:Schema = new Schema({
    name: { type: String, required: true },
    mobile: { type: Number, required: true, unique: true },
    mobile2: { type: Number },
    isAadhar: { type: Boolean },
    isCheque: { type: Boolean },
    aadharNo: { type: Number, required: true },
    noOfCheque: { type: Number, required: true },
    date: { type: Date, required: true, default: Date.now },
})

export default mongoose.model<CustomerInterface>('Customer',customerSchema)













