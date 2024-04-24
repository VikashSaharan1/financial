import mongoose,{Document,Schema} from 'mongoose';

export interface UserInterface extends Document {
        _id: string,
        username: string,
        email: string,
        mobile: string,
        mobile2: string,
        password: string,
        image: any,
        date: string
}


const  userSchema:Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String },
    mobile: { type: String, required: true, unique: true },
    mobile2: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String },
    date: { type: Date, required: true, default: Date.now },
})

export default mongoose.model<UserInterface>('User',userSchema)













