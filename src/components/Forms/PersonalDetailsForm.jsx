import React from 'react';
import Form from './Form';
import { useState, useContext } from 'react';
import { Context } from '../context/CvContext';

const inputs = [
	{ type: 'text', id: 'name', name: 'name', label: 'Name', required: true },
	{ type: 'email', id: 'email', name: 'email', label: 'Email', required: true },
	{ type: 'tel', id: 'phone', name: 'phone', label: 'Phone', required: true },
	{ type: 'text', id: 'address', name: 'address', label: 'Address' },
	{ type: 'url', id: 'linkedin', name: 'linkedin', label: 'LinkedIn' },
	{ type: 'url', id: 'github', name: 'github', label: 'GitHub' },
];
function PersonalDetailsForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		linkedin: '',
		github: '',
	});

	const { dataSubmitted, setDataSubmitted } = useContext(Context);

	const handleChange = e => {
		const newData = { ...formData, [e.target.name]: e.target.value };
		setFormData(newData);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setDataSubmitted({ ...dataSubmitted, general: formData });
		setFormData({
			name: '',
			email: '',
			phone: '',
			address: '',
			linkedin: '',
			github: '',
		});
	};

	const handleEdit = () => {
		setFormData(dataSubmitted.general);
	};

	return (
		<div className='form-wrapper'>
			<Form
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleEdit={handleEdit}
				formData={formData}
				inputs={inputs}
				id='general-form'
				title='Personal Details'
			/>
		</div>
	);
}

export default PersonalDetailsForm;
