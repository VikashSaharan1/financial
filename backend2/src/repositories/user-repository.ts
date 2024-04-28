import userModel, { UserInterface } from "../entities/userModel";

export const saveUser = async ( username: string,
    email: string,
    mobile: string,
    mobile2: string,
    password: string,
    image: any,
): Promise<UserInterface> => {
    const user = new userModel({username, email, mobile, mobile2, password, image });
    return await user.save();
};

export const findUserByMobile = async (mobile: string): Promise<UserInterface | null> => {
    const userData = userModel.findOne({ mobile });
    return  userData;
}


export const update = async ( username?: string, 
email?: string, mobile?: string,
mobile2?: string, password?: string, image?: string ): Promise<UserInterface | null> => {
    const userData = await userModel.findOneAndUpdate(
        { email },
        {
            $set: {
                username,
                email,
                mobile,
                mobile2,
                password,
                image
            }
        },
        {
            new: true
        }
    );
    return userData;
}



export const deleteOne = async (_id: string): Promise<UserInterface | object> => {
    const response = await userModel.findByIdAndDelete(_id);
    if(response) {
        return response;
    } else {
        return ({message: "User not Found"});
    }
}