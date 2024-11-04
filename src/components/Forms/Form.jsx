import React, { useId } from 'react';
import Button from '../Button';
import FormGroup from './FormGroup';
function Form({ handleChange, handleSubmit, handleEdit, handleCancelEdit, formData, inputs, id, title }) {
	const formId = useId();

	return (
		<form id={id} onSubmit={handleSubmit} className='hide'>
			<h3>{title}</h3>
			{inputs.map(input => (
				<FormGroup
					key={input.id}
					{...input}
					id={`${formId}-${input.id}`}
					val={formData[input.name]}
					handleChange={handleChange}
				/>
			))}
			<div className='buttons-wrapper'>
				{id === 'general-form' && <Button text='Edit' type='button' handler={handleEdit} />}
				<Button text='Submit' type='submit' />
				{id !== 'general-form' && <Button text='Cancel' type='button' handler={handleCancelEdit} />}
			</div>
		</form>
	);
}

export default Form;
