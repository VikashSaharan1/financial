import React, { useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import api from '../../utils/api';
import { Link } from 'react-router-dom';
import { ActionButton } from '../../components';
const columns = [
	{
		name: 'Customer Name',
		selector: row => row.customer_name,
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
		name: 'Aadhar No',
		selector: row => row.aadhar_no,
	},
    
	{
		name: 'No Of Cheque',
		selector: row => row.no_of_cheque,
	},
	{
		name: 'Action',
		selector: row => row.action,
	},
];


function Customer() {
    const [data, setData] = useState([]);

	
	const editAction = (id) => {
		console.log(id);
	};

	const deleteAction = async (id) => {
		const response = await api.delete("/customers/" + id).then( async resp => {
			fetchCustomers();
		});
		console.log(response);
	};

	const fetchCustomers = async () => {
		const response = await api.get("/customers");
		const items = [];
		response.data.forEach((element, index) => {
			element.action = <><ActionButton label={'Edit'} className={'btn-edit'} onClick={e => editAction(element.id)}  /><br/>
			<ActionButton label={'Delete'} className={'btn-delete'} onClick={e => deleteAction(element.id)}  />
			</>;

			items.push(element);
		});
		setData(items);        
	};

    useEffect(() =>{

       
        fetchCustomers();
    }, [])

  return (
    <div>
		<div>
			<Link to="/addcustomer"><button type='button' >Add Customer</button></Link>&nbsp;&nbsp;
			<Link to="/customercheques"><button type='button' >Customer Cheques</button></Link>&nbsp;&nbsp;
			<Link to="/mentor"><button type='button' >Mentor</button></Link>&nbsp;&nbsp;
			<Link to="/customerfiles"><button type='button' >Customer Files</button></Link>&nbsp;&nbsp;
		</div>
        { data.length > 0 ? 
        <DataTable
    columns={columns}
    data={data} 
   
/>   
 :null }
</div>
  )
}

export default Customer