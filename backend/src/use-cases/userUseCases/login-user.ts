import { findUserByMobile } from "../../repositories/user-repository";
import { matchPassword } from "../../helper/bcrypt";
import { generateAuthToken } from "../../middlewares/auth";
import { UserInterface } from "../../entities/userModel";

export interface LoginResponse {
    userData: UserInterface;
    token: string;
}


async function loginUser (mobile: string, password: string): Promise<LoginResponse> {
    const existingUser = await findUserByMobile(mobile);
    if(existingUser) {
        const isMatch = await matchPassword(password, existingUser.password);
        if (isMatch) {
            const token = generateAuthToken(existingUser);
            return { userData: existingUser, token };
        } else {
            throw new Error("Password Not Match");
        }
    }  else{

        throw new Error("User not found");
    }
}

module.exports = loginUser;
