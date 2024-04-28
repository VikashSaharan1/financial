import { UserInterface } from "../../entities/userModel";
import { findUserByMobile } from "../../repositories/user-repository";

export const findUser = async(email:string):Promise<UserInterface | null>=>{
    const userData = await findUserByMobile(email)
    return userData
}

