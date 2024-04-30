import React, { useEffect, useState} from 'react'
import api from '../../utils/api';
import validateFields from '../../utils/validation';
import { showToastMessage } from '../../components';

function AddAgent() {
    const [agent, setAgent] = useState({
        "agent_name":"",
        "mobile":"",
        "mobile2":"",
        "address":"",
        "aadhar_no":"",
        "pan_no": ""
    });
    const submitAgent = async (event) => {
        event.preventDefault();
        try {
             const fields = [
            { value: agent.agent_name, validationType: 'required', keyName: 'Agent Name' },
            { value: agent.mobile, validationType: 'required', keyName: 'Mobile' },
            { value: agent.address, validationType: 'required', keyName: 'Address' },
            { value: agent.aadhar_no, validationType: 'required', keyName: 'Aadhar' },
          
          ];
          //   console.log(validateFields(fields)); // Output: true
          if (validateFields(fields)) {
            await api.post('/agents', agent).then(async (resp) => {
                showToastMessage("Agent SuccessFully saved", "success");
            });
          }

        }catch(error) {
            console.log(error);
            let errorMessage = error.response.data.message || error.message;
            showToastMessage(errorMessage, "error");
        }
       

      
    };
    const handleChange = (event, keyName) => {
        let val = event.target.value;
        setAgent({...agent, [keyName]: val})
    };
  return (
    <div>
        <form onSubmit={e => submitAgent(e)}>
            <div>
                <label>Agent Name</label>
                <input type='text' name="agent_name" id="agent_name" required value={agent.agent_name} onChange={event => handleChange(event, 'agent_name')}  />
            </div>
            <div>
                <label>Mobile</label>
                <input type='text' name="mobile" id="mobile" required value={agent.mobile} onChange={event => handleChange(event, 'mobile')}  />
            </div>
            <div>
                <label>Alternate Mobile</label>
                <input type='text' name="mobile2" id="mobile2"  value={agent.mobile2} onChange={event => handleChange(event, 'mobile2')}  />
            </div>
            <div>
                <label>Address</label>
                <input type='text' name="address" id="address" required value={agent.address} onChange={event => handleChange(event, 'address')}  />
            </div>
            <div>
                <label>Aadhar No</label>
                <input type='text' name="aadhar_no" id="aadhar_no" required value={agent.aadhar_no} onChange={event => handleChange(event, 'aadhar_no')}  />
            </div>
            <div>
                <label>PAN No</label>
                <input type='text' name="pan_no" id="pan_no"  value={agent.pan_no} onChange={event => handleChange(event, 'pan_no')}  />
            </div>            
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddAgent