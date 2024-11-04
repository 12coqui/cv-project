import React from 'react';
import Form from './Form';
import { useState, useContext } from 'react';
import { ChevronDown, ChevronUp, Trash, Edit, PlusSquare } from 'react-feather';
import { Context } from '../context/CvContext';

const SIZE = 20;
function EducationForm() {
	const [formData, setFormData] = useState({
		school: '',
		degree: '',
		from: '',
		to: '',
	});
	const [isOpen, setIsOpen] = useState(false);
	const [formOpen, setFormOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const { dataSubmitted, setDataSubmitted } = useContext(Context);
	const inputs = [
		{ type: 'text', id: 'school', name: 'school', label: 'School', required: true },
		{ type: 'text', id: 'degree', name: 'degree', label: 'Degree', required: true },
		{ type: 'date', id: 'from', name: 'from', label: 'From', required: true },
		{ type: 'date', id: 'to', name: 'to', label: 'To', required: true },
	];

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		let updatedData;
		if (isEditing) {
			updatedData = dataSubmitted.education.map(school => {
				if (school.id !== formData.id) {
					return school;
				}
				return { ...formData };
			});
			setIsEditing(false);
		} else {
			updatedData = [...dataSubmitted.education, { ...formData, id: crypto.randomUUID() }];
		}

		setDataSubmitted({ ...dataSubmitted, education: updatedData });
		setFormData({
			school: '',
			degree: '',
			from: '',
			to: '',
		});
		setFormOpen(false);
		setIsOpen(false);
	};

	const handleCancelEdit = () => {
		setFormData({
			school: '',
			degree: '',
			from: '',
			to: '',
		});
		setFormOpen(false);
		setIsOpen(false);
	};

	const handleEdit = id => {
		const school = dataSubmitted.education.find(school => school.id === id);
		setFormData(school);
		setFormOpen(true);
	};

	const handleDelete = id => {
		const newEducation = dataSubmitted.education.filter(school => school.id !== id);
		setDataSubmitted({ ...dataSubmitted, education: newEducation });
	};

	const addNewSchool = () => {
		setFormOpen(true);
	};

	return (
		<div className='form-wrapper'>
			{formOpen && (
				<Form
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleCancelEdit={handleCancelEdit}
					formData={formData}
					inputs={inputs}
					id='education-form'
				/>
			)}
			{!formOpen && (
				<div className='data-wrapper'>
					<button className={`toggle-button ${isOpen ? '' : ''}`} onClick={() => setIsOpen(prev => !prev)}>
						<h3>Education </h3>
						{!isOpen ? <ChevronUp size={SIZE} /> : <ChevronDown size={SIZE} />}
					</button>
					{dataSubmitted.education.length > 0 && isOpen && (
						<ul>
							{dataSubmitted.education.map(institution => (
								<li key={institution.id}>
									<div className='info-wrapper'>
										<p>
											<strong>{institution.school}</strong>
										</p>
									</div>
									<div className='button-wrapper'>
										<button
											className='delete-button'
											onClick={() => handleDelete(institution.id)}
											aria-label='Delete school'>
											<Trash size={14} />
										</button>
										<button
											className='edit-button'
											onClick={() => handleEdit(institution.id)}
											aria-label='Edit a school'>
											<Edit size={14} />
										</button>
									</div>
								</li>
							))}
						</ul>
					)}
					<button style={{ background: 'transparent' }} onClick={addNewSchool} aria-label='Add new school'>
						<PlusSquare size={20} />
					</button>
				</div>
			)}
		</div>
	);
}

export default EducationForm;
