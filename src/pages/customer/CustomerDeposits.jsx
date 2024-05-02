import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import validateFields from '../../utils/validation';
import { showToastMessage } from '../../components';
import { Link } from 'react-router-dom';
import './AddCustomer.css';

const CustomerDepsoits = () => {
  const navigate =  useNavigate();
  const [customerFile, setCustomerFile] = useState([]);
  const [customerDeposit, setDustomerDeposit] = useState({
    "customer_file_id": "",
    "deposit_amount": "",
    "deposit_date": "",
    "deposit_by": "",
  });

  const submitCustomerDeposit = async (event) => {
    event.preventDefault();
    try {
      const fields = [
        { value: customerDeposit.customer_file_id, validationType: 'required', keyName: 'Customer Name' },
        { value: customerDeposit.deposit_amount, validationType: 'required', keyName: 'File Amount' },
        { value: customerDeposit.deposit_date, validationType: 'required', keyName: 'Agent Name' },
        { value: customerDeposit.deposit_by, validationType: 'required', keyName: 'Credit Amount' },

      ];
      //   console.log(validateFields(fields)); // Output: true
      if (validateFields(fields)) {
         await api.post('/customers', customer).then(async (resp) => {
             showToastMessage("Customer SuccessFully saved", "success");
         });
         navigate('/customerfiles');
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

  useEffect(() =>{
    const fetchCustomers = async () => {
      const response = await api.get("/customers");
      setCustomers(response.data);        
    };
    const fetchAgents = async () => {
      const response = await api.get("/agents");
      setAgents(response.data);        
    };
    fetchCustomers();
    fetchAgents();
  }, []);

  return (
    <div className='add-customer-main-container'>
      <div><Link to="/customerlist"><button type='button' >Customer List</button></Link></div>
      <form onSubmit={e => submitCustomerDeposit(e)}>
      
        
        <div>
          <label>Deposit Amount</label>
          <input type='number' name="deposit_amount" id="deposit_amount" required value={customerDeposit.deposit_amount} onChange={event => handleChange(event, 'deposit_amount')} />
        </div>
       
        <div>
          <label>Deposit Date</label>
          <input type='number' name="deposit_date" id="deposit_date" required value={customerDeposit.deposit_date} onChange={event => handleChange(event, 'deposit_date')} />
        </div>
        <div>
          <label>Deposit By</label>
          <input type='number' name="deposit_by" id="deposit_by" required value={customerDeposit.deposit_by} onChange={event => handleChange(event, 'deposit_by')} />
        </div>
       
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CustomerDepsoits;