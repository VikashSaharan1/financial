import React, { useEffect, useState } from 'react'
import api from '../../utils/api';
import validateFields from '../../utils/validation';
import { showToastMessage } from '../../components';
import './AddCustomer.css';

const Mentor = () => {


  const [mentor, setMentor] = useState({
    "mentor_name": "",
    "mobile": "",
  });

  const submitMentor = async (event) => {
    event.preventDefault();
    try {
      const fields = [
        { value: mentor.mentor_name, validationType: 'required', keyName: 'Mentor Name' },
        { value: mentor.mobile, validationType: 'required', keyName: 'Mobile' },
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
    console.log(mentor);
  };

 

  return (
    <div className='add-customer-main-container'>
      <form onSubmit={e => submitMentor(e)}>
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