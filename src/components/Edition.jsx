import React from 'react';
import PersonalDetailsForm from './Forms/PersonalDetailsForm';
import ExperienceForm from './Forms/ExperienceForm';
import EducationForm from './Forms/EducationForm';

function Edition() {
	return (
		<aside>
			<PersonalDetailsForm />
			<ExperienceForm />
			<EducationForm />
		</aside>
	);
}

export default Edition;
