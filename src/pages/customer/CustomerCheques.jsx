import React, { useEffect, useState } from 'react'
import api from '../../utils/api';
import validateFields from '../../utils/validation';
import { showToastMessage } from '../../components';
import './AddCustomer.css';

const CustomerCheques = () => {

  const [customerCheques, setCustomerCheques] = useState({
    "customer_name": "",
    "cheque_no": "",
    "bank_name": "",
    "ifsc_code": "",
  });

  const submitCustomerCheques = async (event) => {
    event.preventDefault();
    try {
      const fields = [
        { value: customerCheques.customer_name, validationType: 'required', keyName: 'Customer Name' },
        { value: customerCheques.cheque_no, validationType: 'required', keyName: 'Cheque No' },
        { value: customerCheques.bank_name, validationType: 'required', keyName: 'Bank Name' },
        { value: customerCheques.ifsc_code, validationType: 'required', keyName: 'IFSC Code' },

      ];
      //   console.log(validateFields(fields)); // Output: true
      if (validateFields(fields)) {
        // await api.post('/customers', customer).then(async (resp) => {
        //     showToastMessage("Customer SuccessFully saved", "success");
        // });
      }

    } catch (error) {
      console.log(error);
      let errorMessage = error.response.data.message || error.message;
      showToastMessage(errorMessage, "error");
    }
  };

  const handleChange = (event, keyName) => {
    let val = event.target.value;
    setCustomerCheques({ ...customerCheques, [keyName]: val });
  };

  return (
    <div className='add-customer-main-container'>
      <form onSubmit={e => submitCustomerCheques(e)}>
        <div>
          <label>Customer Name</label>
          <input type='text' name="customer_name" id="customer_name" required value={customerCheques.customer_name} onChange={event => handleChange(event, 'customer_name')} />
        </div>
        <div>
          <label>File Amount</label>
          <input type='number' name="cheque_no" id="cheque_no" required value={customerCheques.cheque_no} onChange={event => handleChange(event, 'cheque_no')} />
        </div>
        <div>
          <label>Bank Name</label>
          <input type='text' name="bank_name" id="bank_name" value={customerCheques.bank_name} onChange={event => handleChange(event, 'bank_name')} />
        </div>
        <div>
          <label>IFSC Code</label>
          <input type='number' name="ifsc_code" id="ifsc_code" required value={customerCheques.ifsc_code} onChange={event => handleChange(event, 'ifsc_code')} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CustomerCheques