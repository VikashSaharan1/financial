import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import "./Agent.css";
import api from '../../utils/api';
import { Link } from "react-router-dom";
import { ActionButton } from '../../components';
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
		name: 'Aadhar No',
		selector: row => row.aadhar_no,
	},
	{
		name: 'PAN No',
		selector: row => row.pan_no,
	},
	{
		name: 'Action',
		selector: row => row.action,
	},

];




function Agent() {
	const [data, setData] = useState([]);

	const editAction = (id) => {
		console.log(id);
	};

	const deleteAction = async (id) => {
		const response = await api.delete("/agents/" + id).then(async resp => {
			fetchAgents();
		});
		console.log(response);
	};

	const fetchAgents = async () => {
		const response = await api.get("/agents");
		const items = [];
		response.data.forEach((element, index) => {
			element.action = <><ActionButton label={'Edit'} className={'btn-edit'} onClick={e => editAction(element.id)} />
				<ActionButton label={'Delete'} className={'btn-delete'} onClick={e => deleteAction(element.id)} />
			</>;

			items.push(element);
		});
		setData(items);
	};

	useEffect(() => {


		fetchAgents();
	}, [])

	return (
		<div className='agent-main-container'>
			<div><Link to="/addagent"><button type='button' >Add Agent</button></Link></div>
			{data.length > 0 ?
				<DataTable
					columns={columns}
					data={data}

				/>
				: null}
		</div>
	)
}

export default Agent