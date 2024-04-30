import React, { useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import api from '../../utils/api';

const columns = [
	{
		name: 'Agent Name',
		selector: row => row.agent_name,
	},
	{
		name: 'Mobile',
		selector: row => row.mobile,
	},
    {
		name: 'Alternate Mobile',
		selector: row => row.mobile2,
	},
    {
		name: 'Address',
		selector: row => row.address,
	},
    {
		name: 'Aadhar No',
		selector: row => row.aadhar_no,
	},
    {
		name: 'PAN No',
		selector: row => row.pan_no,
	},
    
];


function Agent() {
    const [data, setData] = useState([]);
    useEffect(() =>{

        const fetchAgents = async () => {
            const response = await api.get("/agents");
            setData(response.data);         
        };
        fetchAgents();
    }, [])

  return (
    <div>
        { data.length > 0 ? 
        <DataTable
    columns={columns}
    data={data} 
   
/>
 :null }
</div>
  )
}

export default Agent