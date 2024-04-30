import React, { useEffect, useState } from 'react'
import api from '../../utils/api';
import validateFields from '../../utils/validation';
import { showToastMessage } from '../../components';
import './AddCustomer.css';

const CustomerFiles = () => {

  const [customerFiles, setCustomerFiles] = useState({
    "customer_name": "",
    "file_amount": "",
    "agent_name": "",
    "credit_amount": "",
    "no_of_days": "",
    "interest": "",
    "agent_commission": "",
    "amount_date": ""
  });

  const submitCustomerFiles = async (event) => {
    event.preventDefault();
    try {
      const fields = [
        { value: customer.customer_name, validationType: 'required', keyName: 'Customer Name' },
        { value: customer.file_amount, validationType: 'required', keyName: 'File Amount' },
        { value: customer.agent_name, validationType: 'required', keyName: 'Agent Name' },
        { value: customer.credit_amount, validationType: 'required', keyName: 'Credit Amount' },

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
    setCustomerFiles({ ...customerFiles, [keyName]: val });
  };

  return (
    <div className='add-customer-main-container'>
      <form onSubmit={e => submitCustomerFiles(e)}>
        <div>
          <label>Customer Name</label>
          <input type='text' name="customer_name" id="customer_name" required value={customerFiles.customer_name} onChange={event => handleChange(event, 'customer_name')} />
        </div>
        <div>
          <label>File Amount</label>
          <input type='number' name="file_amount" id="file_amount" required value={customerFiles.file_amount} onChange={event => handleChange(event, 'file_amount')} />
        </div>
        <div>
          <label>Agent Name</label>
          <input type='text' name="	agent_name" id="agent_name" value={customerFiles.agent_name} onChange={event => handleChange(event, 'agent_name')} />
        </div>
        <div>
          <label>Credit Amount</label>
          <input type='number' name="credit_amount" id="credit_amount" required value={customerFiles.credit_amount} onChange={event => handleChange(event, 'credit_amount')} />
        </div>
        <div>
          <label>No. Of Days</label>
          <input type='number' name="no_of_days" id="no_of_days" required value={customerFiles.no_of_days} onChange={event => handleChange(event, 'no_of_days')} />
        </div>
        <div>
          <label>Interest</label>
          <input type='number' name="interest" id="interest" value={customerFiles.interest} onChange={event => handleChange(event, 'interest')} />
        </div>
        <div>
          <label>Agent Commission	</label>
          <input type='number' name="agent_commission" id="agent_commission" onChange={event => handleChange(event, 'agent_commission')} />
        </div>
        <div>
          <label>Amount Date</label>
          <input type='date' name="amount_date" id="amount_date" onChange={event => handleChange(event, 'amount_date')} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CustomerFiles