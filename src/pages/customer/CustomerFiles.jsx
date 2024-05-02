import React, { useEffect, useState } from 'react'
import api from '../../utils/api';
import validateFields from '../../utils/validation';
import { showToastMessage } from '../../components';
import { Link } from 'react-router-dom';
import './AddCustomer.css';

const CustomerFiles = () => {
  const [customers, setCustomers] = useState([]);
  const [agents, setAgents] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [customerFiles, setCustomerFiles] = useState({
    "customer_id": "",
    "file_amount": "",
    "agent_id": "",
    "mentor_id": "",
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
        { value: customerFiles.customer_id, validationType: 'required', keyName: 'Customer Name' },
        { value: customerFiles.file_amount, validationType: 'required', keyName: 'File Amount' },
        { value: customerFiles.agent_id, validationType: 'required', keyName: 'Agent Name' },
        { value: customerFiles.mentor_id, validationType: 'required', keyName: 'Gaurenter Name' },
        { value: customerFiles.credit_amount, validationType: 'required', keyName: 'Credit Amount' },
        { value: customerFiles.no_of_days, validationType: 'required', keyName: 'No Of Days' },
        { value: customerFiles.interest, validationType: 'required', keyName: 'Interest' },
        { value: customerFiles.agent_commission, validationType: 'required', keyName: 'Agent Commission' },

      ];
      //   console.log(validateFields(fields)); // Output: true
      if (validateFields(fields)) {
        await api.post('/customer-files', customerFiles).then(async (resp) => {
            showToastMessage("Customer Files SuccessFully saved", "success");
        });
      }

    } catch (error) {
      console.log(error);
      let errorMessage = error.response.data.message || error.message;
      showToastMessage(errorMessage, "error");
    }
  };

  const handleChange = (event, keyName) => {
    let val = event.target.value;
    console.log(val);
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
    const fetchMentors = async () => {
      const response = await api.get("/mentors");
      setMentors(response.data);        
    };
    fetchCustomers();
    fetchAgents();
    fetchMentors();
  }, []);

  return (
    <div className='add-customer-main-container'>
      <div><Link to="/customerlist"><button type='button' >Customer List</button></Link></div>
      <form onSubmit={e => submitCustomerFiles(e)}>
        <div>
          <label>Customer Name</label>
          <select name="customer_name" id="customer_name" required onChange={e => handleChange(e, 'customer_id')}>
            <option value="0">Select Customer Name</option>
            {
              customers.length > 0 && customers.map((customer)=>{
                  return <option value={customer.id}>{customer.customer_name}</option>
              })
              
            }
          </select>
        </div>
        <div>
          <label>Agent Name</label>
          <select name="agent_name" id="agent_name" required onChange={e => handleChange(e, 'agent_id')}>
          <option value="0">Select Agent Name</option>
            {
              agents.length > 0 && agents.map((agent)=>{
                  return <option value={agent.id}>{agent.agent_name}</option>
              })
              
            }
          </select>
        </div>
        <div>
          <label>Gaurenter</label>
          <select name="mentor_name" id="mentor_name" required onChange={e => handleChange(e, 'mentor_id')}>
          <option value="0">Select Gaurenter Name</option>
            {
              mentors.length > 0 && mentors.map((mentor)=>{
                  return <option value={mentor.id}>{mentor.mentor_name}</option>
              })
              
            }
          </select>
        </div>
        <div>
          <label>File Amount</label>
          <input type='number' name="file_amount" id="file_amount" required value={customerFiles.file_amount} onChange={event => handleChange(event, 'file_amount')} />
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

export default CustomerFiles;