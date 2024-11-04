import React from 'react';
import Form from './Form';
import { useState, useContext } from 'react';
import { ChevronDown, ChevronUp, Trash, Edit, PlusSquare } from 'react-feather';
import { Context } from '../context/CvContext';

const SIZE = 20;
function ExperienceForm() {
	const [formData, setFormData] = useState({
		company: '',
		position: '',
		city: '',
		from: '',
		to: '',
		description: '',
		id: '',
	});
	const [isOpen, setIsOpen] = useState(false);
	const [formIsOpen, setFormIsOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const { dataSubmitted, setDataSubmitted } = useContext(Context);

	const inputs = [
		{ type: 'text', id: 'company', name: 'company', label: 'Company', required: true },
		{ type: 'text', id: 'position', name: 'position', label: 'Position', required: true },
		{ type: 'text', id: 'city', name: 'city', label: 'City', required: true },
		{ type: 'date', id: 'from', name: 'from', label: 'From', required: true },
		{ type: 'date', id: 'to', name: 'to', label: 'To', required: true },
		{ type: 'text', id: 'description', name: 'description', label: 'Description', required: true },
	];

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		// const newData = { ...formData, id: crypto.randomUUID() };
		let experieceUpdated;
		if (isEditing) {
			experieceUpdated = dataSubmitted.experience.map(exp => {
				if (exp.id !== formData.id) {
					return exp;
				}
				return formData;
			});
			setIsEditing(false);
		} else {
			experieceUpdated = [...dataSubmitted.experience, { ...formData, id: crypto.randomUUID() }];
		}

		setDataSubmitted({ ...dataSubmitted, experience: experieceUpdated });
		setFormData({
			company: '',
			position: '',
			city: '',
			from: '',
			to: '',
			description: '',
			id: '',
		});
		setFormIsOpen(false);
	};

	const handleCancelEdit = () => {
		setFormData({
			company: '',
			position: '',
			city: '',
			from: '',
			to: '',
			description: '',
		});
		setFormIsOpen(false);
		setIsOpen(false);
		setIsEditing(false);
	};

	const handleEdit = id => {
		setFormIsOpen(true);
		setIsOpen(false);
		setIsEditing(true);
		const data = dataSubmitted.experience.find(exp => exp.id === id);
		setFormData(data);
	};

	const handleDelete = id => {
		const newData = dataSubmitted.experience.filter(exp => exp.id !== id);
		setDataSubmitted({ ...dataSubmitted, experience: newData });
	};

	const addNewExperience = () => {
		setFormIsOpen(true);
		setIsOpen(false);
	};

	return (
		<div className='form-wrapper'>
			{formIsOpen && (
				<Form
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleCancelEdit={handleCancelEdit}
					formData={formData}
					id='experiece-form'
					inputs={inputs}
					title={'Experience'}
				/>
			)}
			{!formIsOpen && (
				<div className='data-wrapper'>
					<button className='toggle-button' onClick={() => setIsOpen(prev => !prev)}>
						<h3>Experience</h3>
						{!isOpen ? <ChevronUp size={SIZE} /> : <ChevronDown size={SIZE} />}
					</button>
					{dataSubmitted.experience.length > 0 && isOpen && (
						<ul>
							{dataSubmitted.experience.map(exp => (
								<li key={exp.id}>
									<div className='info-wrapper'>
										<p>
											<strong>Company:</strong> {exp.company}
										</p>
										<p>
											<strong>Position:</strong> {exp.position}
										</p>
									</div>
									<div className='button-wrapper'>
										<button
											className='delete-button'
											onClick={() => handleDelete(exp.id)}
											aria-label='Delete a work experience'>
											<Trash size={14} />
										</button>
										<button
											className='edit-button'
											onClick={() => handleEdit(exp.id)}
											aria-label='Edit a work experience'>
											<Edit size={14} />
										</button>
									</div>
								</li>
							))}
						</ul>
					)}
					<button style={{ background: 'transparent' }} onClick={addNewExperience} aria-label='Add new work experience'>
						<PlusSquare size={20} />
					</button>
				</div>
			)}
		</div>
	);
}

export default ExperienceForm;
