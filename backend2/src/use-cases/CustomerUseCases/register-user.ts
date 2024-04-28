import { saveUser, findUserByMobile } from "../../repositories/user-repository";
import { securePassword } from "../../helper/bcrypt"

async function registerUser(username: string,
  email: string,
  mobile: string,
  mobile2: string,
  password: string,
  image:any) {
  
  const existingUser = await findUserByMobile(mobile);
  if(!existingUser) {
    const securePass = await securePassword(password);
    return await saveUser(username, email, mobile, mobile2, securePass, image)
  } else{
    throw new Error("Email already exists in the database")
  }

}

export default registerUser;
