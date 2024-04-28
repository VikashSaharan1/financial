import {Request,Response} from 'express'
import registerUser from '../../use-cases/userUseCases/register-user';
import loginUser, { LoginResponse } from '../../use-cases/userUseCases/login-user';
import { findUser } from '../../use-cases/userUseCases/find-user';
import { updateUser } from '../../use-cases/userUseCases/update-user';


export const userSignup =  async (req:Request, res:Response) => {
  
  try {
    const { username, email, mobile, mobile2, password, image } = req.body;
    const user = await registerUser(username, email, mobile, mobile2, password, image);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const userLogin = async(req:Request,res:Response)=>{
  try{
      const mobile = req.query.mobile?.toString()
      const password = req.query.password?.toString()
      console.log(mobile,password);
      if (!mobile || !password) {
          return res.status(400).json({ message: 'Mobile and password are required.' });
      }
      
      const response:LoginResponse = await loginUser(mobile,password)
      const {userData,token} = response
      res.json({userData,token})
      
  }catch(error:any){
      throw new Error(error.message)
  }
}


export const profile = async(req:Request,res:Response)=>{
  try {
      const email = req.query.email?.toString()
      if(!email){
          return res.status(400).json({ message: 'Somthing Error' });
      }
      const userData = await findUser(email)        
      res.json(userData)
  } catch (error:any) {
      throw new Error(error.message)      
  }
}

export const profileUpdate = async(req:Request,res:Response)=>{
  try {

      const {username,email,mobile, mobile2} = req.body
      
      const image = req.file?.filename
      const userMobile = req.query.userMobile?.toString()
      
      if(!userMobile){
          return res.status(400).json({ message:'No mobile provided'});
      }
      const userData = await updateUser(username,email,mobile,mobile2,image,userMobile)
      
      res.json(userData)
      
      
  } catch (error:any) {
      console.log(error.message);
      
  }
}


