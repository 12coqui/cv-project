import React from 'react';
import { useContext, useRef, useEffect } from 'react';
import * as Icons from 'react-feather';
import { useReactToPrint } from 'react-to-print';
import { Context } from './context/CvContext';
import { formatMonthAndYear } from '../helpers/utils.js';
const SIZE = 14;

function Preview() {
	const contentRef = useRef(null);
	const reactToPrintFn = useReactToPrint({ contentRef });
	const { dataSubmitted } = useContext(Context);
	const { general, experience, education } = dataSubmitted;

	useEffect(() => {
		const handleKeyDown = event => {
			if (event.ctrlKey && event.key === 'p') {
				event.preventDefault();
				reactToPrintFn();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [reactToPrintFn]);

	return (
		<main className='preview-container' ref={contentRef}>
			<header>
				<div className='contact'>
					{general.email.length > 0 && (
						<p>
							<Icons.Mail size={SIZE} className='contact-icons' />
							<span>{general.email}</span>
						</p>
					)}
					{general.phone.length > 0 && (
						<p>
							<Icons.Phone size={SIZE} />
							<span>{general.phone}</span>
						</p>
					)}
					{general.address.length > 0 && (
						<p>
							<Icons.MapPin size={SIZE} />
							<span className='capitalize'>{general.address}</span>
						</p>
					)}
					{general.linkedin.length > 0 && (
						<p>
							<Icons.Linkedin size={SIZE} />
							<span>{general.linkedin}</span>
						</p>
					)}
					{general.github.length > 0 && (
						<p>
							<Icons.GitHub size={SIZE} />
							<span>{general.github}</span>
						</p>
					)}
				</div>
				<div className='fullname'>
					<h1 className='capitalize'>{general.name}</h1>
				</div>
			</header>
			<div className='professional-info'>
				<section className='experience'>
					<h3>Professional Experience</h3>
					{experience.map(exp => (
						<div key={exp.id} className='experience-details'>
							<div className='experience-details-first-column'>
								<p>{exp.city || ''}</p>
								<p>
									{formatMonthAndYear(exp.from) || ''} - {formatMonthAndYear(exp.to) || ''}
								</p>
							</div>
							<div className='experience-details-second-column'>
								<h4>
									<b>{exp.company || ''}</b>
								</h4>

								<p>
									<b>{exp.position || ''}</b>
								</p>

								<p>{exp.description || ''}</p>
							</div>
						</div>
					))}
				</section>
				<section className='education'>
					<h3>Education</h3>
					{education.map(sch => (
						<div key={sch.id} className='education-details'>
							<div className='education-details-first-column'>
								<p>
									{formatMonthAndYear(sch.from) || ''} - {formatMonthAndYear(sch.to) || ''}
								</p>
							</div>
							<div className='education-details-second-column'>
								<h4>
									<strong>{sch.school || ''}</strong>
								</h4>

								<p>
									<strong>{sch.degree || ''}</strong>
								</p>
							</div>
						</div>
					))}
				</section>
			</div>
		</main>
	);
}

export default Preview;
