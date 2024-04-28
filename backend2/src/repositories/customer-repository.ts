import customerModel, { CustomerInterface } from "../entities/customerModel";

export const saveCustomer = async ( name: string,
    mobile: number,
    mobile2: number,
    isAadhar: boolean,
    isCheque: boolean,
    aadharNo: number,
    noOfCheque: number,
): Promise<CustomerInterface> => {
    const customer = new customerModel({name, mobile, mobile2, isAadhar, isCheque, aadharNo, noOfCheque });
    return await customer.save();
};

export const findCustomerByMobile = async (mobile: string): Promise<CustomerInterface | null> => {
    const customerData = customerModel.findOne({ mobile });
    return  customerData;
}


export const update = async ( name: string,
    mobile: number,
    mobile2: number,
    isAadhar: boolean,
    isCheque: boolean,
    aadharNo: number,
    noOfCheque: number,
    _id: string
 ): Promise<CustomerInterface | null> => {
    const customerData = await customerModel.findOneAndUpdate(
        { _id },
        {
            $set: {
                name,
                mobile,
                mobile2,
                isAadhar,
                isCheque,
                aadharNo,
                noOfCheque
            }
        },
        {
            new: true
        }
    );
    return customerData;
}



export const deleteOne = async (_id: string): Promise<CustomerInterface | object> => {
    const response = await customerModel.findByIdAndDelete(_id);
    if(response) {
        return response;
    } else {
        return ({message: "Customer not Found"});
    }
}