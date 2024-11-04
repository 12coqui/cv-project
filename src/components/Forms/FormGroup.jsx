import React from 'react';

function FormGroup({ type, id, name, label, val, handleChange, ...derived }) {
	return (
		<div className='form-group'>
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} name={name} value={val} onChange={handleChange} />
		</div>
	);
}

export default FormGroup;
