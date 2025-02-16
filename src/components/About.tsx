import React, { useEffect, useRef } from 'react'
import myPhoto from '../assets/my-photo.jpg';
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";


const About: React.FC = () => {

	return (
		<div className='container mb-20 bg-neutral-900/85 border-[0.5px] border-gray-500 rounded-4xl pb-20 px-20 pt-10'>
			<h2 className='text-center mb-20'>About Me</h2>
			<div className='flex justify-around'>
				<div className='w-1/4'>
					<div className='p-5 rounded-2xl bg-neutral-800'>
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
						Hi! I'm Sergiu Tudos, a passionate frontend developer, always eager to learn and create innovative projects. I work with technologies like React, TypeScript, Vite, and Tailwind, building intuitive and dynamic user interfaces. I enjoy solving problems through code and optimizing user experiences.
					</p>
					<p className='text-sm'>
						Besides programming, I’m involved in organizing and managing FIFA 11 tournaments, where I build dynamic leaderboards, integrate custom functionalities, and constantly look for ways to enhance the player experience. Recently, I started exploring the creation of Discord bots to automate score updates in my competitions.
					</p>
					<p className='text-sm'>
						My goal is to become a skilled web developer, refine my knowledge, and create projects that bring value to the community.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About