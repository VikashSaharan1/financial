import React, { useEffect, useState } from 'react'
import api from '../../utils/api';
import validateFields from '../../utils/validation';
import { showToastMessage } from '../../components';
import './Mentor.css';
import '../customer/AddCustomer.css';

const Mentor = () => {

  const [mentor, setMentor] = useState({
    "customer_name": "",
    "agent_name": "",
    "mentor_name": "",
    "mobile": "",
  });

  const submitMentor = async (event) => {
    event.preventDefault();
    try {
      const fields = [
        { value: mentor.customer_name, validationType: 'required', keyName: 'Customer Name' },
        { value: mentor.file_amount, validationType: 'required', keyName: 'Agent Name' },
        { value: mentor.agent_name, validationType: 'required', keyName: 'Mentor Name' },
        { value: mentor.credit_amount, validationType: 'required', keyName: 'Mobile' },
      ];

      //   console.log(validateFields(fields)); // Output: true
      if (validateFields(fields)) {
        await api.post('/mentors', mentor).then(async (resp) => {
          showToastMessage("Mentor SuccessFully saved", "success");
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
    setMentor({ ...mentor, [keyName]: val });
  };

  const [customers, setCustomers] = useState([]);
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/customers");
      setCustomers(response.data);
      const response1 = await api.get("/agents");
      setAgents(response.data);
    };
    fetchData();
  }, [])

  console.log("customers: ", customers)
  console.log("agents: ", agents)

  return (
    <div className='add-customer-main-container'>
      <form onSubmit={e => submitMentor(e)}>
        <div>
          <label>Customer Name</label>
          <input type='text' name="customer_name" id="customer_name" required value={mentor.customer_name} onChange={event => handleChange(event, 'customer_name')} />
        </div>
        <div>
          <label>Agent Name</label>
          <input type='text' name="	agent_name" id="agent_name" value={mentor.agent_name} onChange={event => handleChange(event, 'agent_name')} />
        </div>
        <div>
          <label>Mentor Name</label>
          <input type='text' name="mentor_name" id="mentor_name" required value={mentor.mentor_name} onChange={event => handleChange(event, 'mentor_name')} />
        </div>
        <div>
          <label>Mobile</label>
          <input type='number' name="mobile" id="mobile" required value={mentor.mobile} onChange={event => handleChange(event, 'mobile')} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Mentor