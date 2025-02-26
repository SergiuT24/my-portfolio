import React from 'react'
import myPhoto from '../assets/my-photo.jpg';
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

type TranslationProps = {
	about: string,
	descriptionOne: string,
	descriptionTwo: string,
	descriptionThree: string,
}

const About: React.FC<TranslationProps> = ({ about, descriptionOne, descriptionTwo, descriptionThree }) => {

	return (
		<section id="about" className='container mb-20 bg-gray-200 bg-gray-300 dark:bg-neutral-900/85 dark:border-[0.5px] dark:border-gray-500 rounded-4xl pb-20 px-20 pt-10'>
			<h2 className='text-center mb-20'>{about}</h2>
			<div className='flex justify-around'>
				<div className='w-1/4'>
					<div className='p-5 rounded-2xl bg-gray-400 dark:bg-neutral-800'>
						<img className='rounded-2xl' src={myPhoto} alt='Avatar-placeholder' />
						<div className='flex justify-around py-5'>
							<FaHtml5 size={40} color='#E34F26' />
							<FaCss3Alt size={40} color='#1572B6' />
							<RiJavascriptFill size={40} color='#F7DF1E' />
							<FaReact size={40} color='#61DAFB' />
						</div>
					</div>
				</div>
				<div className='w-1/2 flex flex-col justify-center'>
					<p className='text-sm'>
						{descriptionOne}
					</p>
					<p className='text-sm'>
						{descriptionTwo}
					</p>
					<p className='text-sm'>
						{descriptionThree}
					</p>
				</div>
			</div>
		</section>
	)
}

export default About