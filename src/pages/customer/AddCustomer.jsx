import React, { useEffect, useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import api from '../../utils/api';
import validateFields from '../../utils/validation';
import { showToastMessage } from '../../components';
import './AddCustomer.css';

function AddCustomer() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
        "customer_name":"",
        "mobile":"",
        "mobile2":"",
        "address":"",
        "aadhar_no":"",
        "pan_no": "",
        "is_cheque": false,
        "no_of_cheque": 0
    });
    const submitCustomer = async (event) => {
        event.preventDefault();
        try {
             const fields = [
            { value: customer.customer_name, validationType: 'required', keyName: 'Customer Name' },
            { value: customer.mobile, validationType: 'required', keyName: 'Mobile' },
            { value: customer.address, validationType: 'required', keyName: 'Address' },
            { value: customer.aadhar_no, validationType: 'required', keyName: 'Aadhar' },
          
          ];
          //   console.log(validateFields(fields)); // Output: true
          if (validateFields(fields)) {
            await api.post('/customers', customer).then(async (resp) => {
                showToastMessage("Customer SuccessFully saved", "success");
                navigate("/customerlist")
            });
          }

        }catch(error) {
            console.log(error);
            let errorMessage = error.response.data.message || error.message;
            showToastMessage(errorMessage, "error");
        }
       

      
    };
    const handleChange = (event, keyName) => {
        let val;
        if(keyName === 'is_cheque') {
            val = event.target.checked;
        } else {
            val = event.target.value;
        }
        setCustomer({...customer, [keyName]: val});
    };
  return (
    <div className='add-customer-main-container'>
        <div><Link to="/customerlist"><button type='button' >Customer List</button></Link></div>
        <form onSubmit={e => submitCustomer(e)}>
        
        
            <div>
                <label>Customer Name</label>
                <input type='text' name="customer_name" id="customer_name" required value={customer.customer_name} onChange={event => handleChange(event, 'customer_name')}  />
            </div>
            <div>
                <label>Mobile</label>
                <input type='number' name="mobile" id="mobile" required value={customer.mobile} onChange={event => handleChange(event, 'mobile')}  />
            </div>
            <div>
                <label>Alternate Mobile</label>
                <input type='number' name="mobile2" id="mobile2"  value={customer.mobile2} onChange={event => handleChange(event, 'mobile2')}  />
            </div>
            <div>
                <label>Address</label>
                <input type='text' name="address" id="address" required value={customer.address} onChange={event => handleChange(event, 'address')}  />
            </div>
            <div>
                <label>Aadhar No</label>
                <input type='text' name="aadhar_no" id="aadhar_no" required value={customer.aadhar_no} onChange={event => handleChange(event, 'aadhar_no')}  />
            </div>
            <div>
                <label>PAN No</label>
                <input type='text' name="pan_no" id="pan_no"  value={customer.pan_no} onChange={event => handleChange(event, 'pan_no')}  />
            </div>
            <div>
                <label>Is Cheque</label>
                <input type='checkbox' name="is_cheque" id="is_cheque"   onChange={event => handleChange(event, 'is_cheque')}  />
            </div>
            { customer.is_cheque?<div>
                <label>No of Cheque</label>
                <input type='number' name="no_of_cheque" id="no_of_cheque"  onChange={event => handleChange(event, 'no_of_cheque')}  />
            </div>:null}
            <button type='submit'>Submit</button>
        </form>
    </div>
    
  )
}

export default AddCustomer