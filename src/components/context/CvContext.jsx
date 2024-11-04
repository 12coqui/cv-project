import { createContext, useState } from 'react';
import React from 'react';
const Context = createContext('casco');
function CvContext({ children }) {
	const [dataSubmitted, setDataSubmitted] = useState({
		general: {
			name: 'Leandro Serra',
			email: 'serraln.92@gmail.com',
			phone: '+5491160000000',
			address: 'Centenario 255',
			linkedin: 'https://www.linkedin.com/in/leandroserra/',
			github: 'https://www.github.com/12coqui',
		},
		experience: [
			{
				company: 'Digital Talent',
				position: 'Front end developer',
				city: 'Rosario, Santa Fe, Argentina',
				from: '04-04-2023',
				to: '',
				description:
					'Here I was in charge of developing the front end of the company website, leading a team of 5 developers. I also worked on the company’s mobile app.',
				id: crypto.randomUUID(),
			},
			{
				company: 'Digital Talent',
				position: 'Front end developer',
				city: 'Rosario, Santa Fe, Argentina',
				from: '04-04-2023',
				to: '10-10-2024',
				description:
					'Here I was in charge of developing the front end of the company website, leading a team of 5 developers. I also worked on the company’s mobile app.',
				id: crypto.randomUUID(),
			},
		],
		education: [
			{
				school: 'UGR',
				degree: 'Kinesiology',
				from: '2021-01-01',
				to: '2021-01-01',
				id: crypto.randomUUID(),
			},
		],
	});

	return <Context.Provider value={{ dataSubmitted, setDataSubmitted }}>{children}</Context.Provider>;
}

export { CvContext, Context };
