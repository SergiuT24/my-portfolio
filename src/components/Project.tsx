import React from 'react'
import MainButton from './UI/MainButton';
import { FaGithub } from 'react-icons/fa6'
import { FaPlayCircle } from "react-icons/fa";

type ProjectProps = {
	img: string,
	link: string,
	linkDemo: string,
	title: string,
	about: string,
}

const Project: React.FC<ProjectProps> = ({ img, link, linkDemo, title, about }) => {
	return (
		<div className='flex flex-col gap-5 px-6 py-10 bg-gray-300 dark:bg-neutral-800 opacity-90 rounded-xl justify-center w-[300px] md:w-[500px] lg:w-[430px] xl:w-[400px]'>
			<div className='flex justify-center'>
				<img className='w-72 rounded-xl' src={img} />
			</div>
			<h3 className='text-center text-2xl'>{title}</h3>
			<p className='text-sm lg:h-96'>{about}</p>
			<div className='flex justify-around '>
				<MainButton icon={FaGithub} link={link} linkName={'Github'} />
				<MainButton icon={FaPlayCircle} link={linkDemo} linkName={'Demo'} />
			</div>
		</div>
	)
}

export default Project