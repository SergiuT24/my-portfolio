import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type TranslateProps = {
	skills: string;
};

const Skills: React.FC<TranslateProps> = ({ skills }) => {
	const { t } = useTranslation();
	const [selectedCategory, setSelectedCategory] = useState<'technical' | 'soft'>('technical');

	const technicalSkills = [
		{ name: 'HTML', level: '80%' },
		{ name: 'CSS', level: '75%' },
		{ name: 'JavaScript', level: '70%' },
		{ name: 'React', level: '50%' },
		{ name: 'TypeScript', level: '40%' },
	];

	const softSkills = [
		{ name: 'Creativity', level: '90%' },
		{ name: 'Problem Solving', level: '90%' },
		{ name: 'Communication', level: '85%' },
		{ name: 'Teamwork', level: '88%' },
		{ name: 'Adaptability', level: '80%' },
		{ name: 'Time Management', level: '85%' },
		{ name: 'Attention to Detail', level: '82%' },
		{ name: 'Critical Thinking', level: '87%' },
		{ name: 'Leadership', level: '75%' },
		{ name: 'Emotional Intelligence', level: '78%' },
		{ name: 'Decision Making', level: '80%' },
		{ name: 'Conflict Resolution', level: '77%' },
		{ name: 'Self-Motivation', level: '85%' },
		{ name: 'Work Ethic', level: '88%' },
		{ name: 'Resilience', level: '80%' },
	];

	const skillsToDisplay = selectedCategory === 'technical' ? technicalSkills : softSkills;

	return (
		<section id="skills" className='mx-auto w-full flex justify-center mb-20 bg-gray-300 dark:bg-neutral-900/85 pb-20 px-3 pt-10 lg:px-20'>
			<div className='container'>
				<h2 className='text-center mb-20'>{skills}</h2>
				{/* Desktop Version */}
				<div className='hidden md:flex m-20 flex-col gap-10'>
					<div className='flex justify-center'>
						<button
							onClick={() => setSelectedCategory('technical')}
							className={`w-1/2 p-5 cursor-pointer dark:hover:text-gray-400 hover:border-t hover:border-x hover:rounded-t-2xl ${selectedCategory === 'technical' ? 'border-t rounded-t-2xl border-x dark:text-gray-400' : ''}`}
						>
							{t('technical-skills')}
						</button>
						<button
							onClick={() => setSelectedCategory('soft')}
							className={`w-1/2 p-5 cursor-pointer dark:hover:text-gray-400 hover:border-t hover:border-x hover:rounded-t-2xl ${selectedCategory === 'soft' ? 'border-t rounded-t-2xl border-x dark:text-gray-400' : ''}`}
						>
							{t('soft-skills')}
						</button>
					</div>
					<div className='grid grid-cols-2 gap-x-10'>
						{skillsToDisplay.map((skill, index) => (
							<div key={index}>
								<p>{t(skill.name)}</p>
								<div className='w-full bg-gray-700 rounded-md h-4 mt-1'>
									<div
										className='bg-blue-500 h-full rounded-md'
										style={{
											width: skill.level,
										}}
									></div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Mobile Version */}
				<div className='md:hidden'>
					<div className='flex flex-col gap-20'>
						<div>
							<h2 className='mb-6'>{t('technical-skills')}</h2>
							<div>
								<ul>
									{technicalSkills.map((skill, index) => (
										<li key={index}>
											<p>{t(skill.name)}</p>
											<div className='w-full bg-gray-700 rounded-md h-4 mt-1'>
												<div
													className='bg-blue-500 h-full rounded-md'
													style={{
														width: skill.level,
													}}
												></div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div>
							<h2 className='mb-6'>{t('soft-skills')}</h2>
							<div>
								<ul>
									{softSkills.map((skill, index) => (
										<li key={index}>
											<p>{t(skill.name)}</p>
											<div className='w-full bg-gray-700 rounded-md h-4 mt-1'>
												<div
													className='bg-blue-500 h-full rounded-md'
													style={{
														width: skill.level,
													}}
												></div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
