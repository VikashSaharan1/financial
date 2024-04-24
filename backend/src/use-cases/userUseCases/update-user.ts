import { UserInterface } from "../../entities/userModel"
import { findUserByMobile, update } from "../../repositories/user-repository"
import { securePassword } from "../../helper/bcrypt"


export const updateUser =async (
    username:string,
    email:string,
    mobile:string,
    mobile2: string,
    image:any,
    userEmail:string
    ) => {
    try{
    const existingUser = await findUserByMobile(userEmail)
    
    if(existingUser){
        const userData = await update(
            username,
            email,
            mobile,
            mobile2,
            image
        )
        return userData
    }
}
catch(error){
    throw new Error ("User not found")
}
}