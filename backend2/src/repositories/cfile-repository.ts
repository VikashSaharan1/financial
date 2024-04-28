import { Schema } from "mongoose";
import cFileModel, { cFileInterface } from "../entities/cFileModel";

export const saveCustomer = async (  fullAmount: number,
    fileAmount: number,
    days: number,
    interest: number,
    perDayKist: number,
    agent: string,
    gurantee: string,
    customerId: Schema.Types.ObjectId
): Promise<cFileInterface> => {
    const customerFile = new cFileModel({fullAmount, fileAmount, days, interest, perDayKist, agent, gurantee });
    return await customerFile.save();
};

// export const findCustomerByMobile = async (mobile: string): Promise<cFileInterface | null> => {
//     const customerData = cFileModel.findOne({ mobile });
//     return  customerData;
// }


// export const update = async ( name: string,
//     mobile: number,
//     mobile2: number,
//     isAadhar: boolean,
//     isCheque: boolean,
//     aadharNo: number,
//     noOfCheque: number,
//     _id: string
//  ): Promise<cFileInterface | null> => {
//     const customerData = await cFileModel.findOneAndUpdate(
//         { _id },
//         {
//             $set: {
//                 name,
//                 mobile,
//                 mobile2,
//                 isAadhar,
//                 isCheque,
//                 aadharNo,
//                 noOfCheque
//             }
//         },
//         {
//             new: true
//         }
//     );
//     return customerData;
// }



export const deleteOne = async (_id: string): Promise<cFileInterface | object> => {
    const response = await cFileModel.findByIdAndDelete(_id);
    if(response) {
        return response;
    } else {
        return ({message: "Customer not Found"});
    }
}