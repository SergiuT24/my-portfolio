import React, { useState, useEffect } from 'react'
import Photo from '../assets/home-pic.svg';
import { FaGithub, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa6';

type TranslationProps = {
	welcome: string,
	name: string,
	aboutMe: string,
}

const Home: React.FC<TranslationProps> = ({ welcome, name, aboutMe }) => {
	const [typedText, setTypedText] = useState('');
	const [index, setIndex] = useState(0);
	const targetText = 'FRONT-END DEVELOPER';

	const clickAbout = () => {
		window.scrollTo({
			top: 570,
			behavior: 'smooth'
		});
	}

	useEffect(() => {
		if (index < targetText.length) {
			const typingEffect = setTimeout(() => {
				setTypedText((prev) => prev + targetText[index]);
				setIndex((prevIndex) => prevIndex + 1);
			}, 150);

			return () => clearTimeout(typingEffect);
		}
	}, [index, targetText]);

	return (
		<section id="home" className="container flex flex-col py-10 gap-10 justify-around items-center mt-20 mb-5 md:py-20 lg:flex-row lg:py-0 lg:gap-0 md:my-20">
			<div className='flex flex-col gap-10 lg:w-1/2'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl flex flex-col gap-4 text-center'>
					<span>{welcome}</span>
					<span>{name}</span>
				</h1>
				<p className='text-xl text-center'>
					{typedText}<span>|</span>
				</p>
				<div className='flex justify-center gap-8'>
					<a href="https://github.com/SergiuT24" target='_blank'>
						<FaGithub size={30} className='hover:text-gray-500' />
					</a>
					<a href="https://www.instagram.com/tudos.sergiu/" target='_blank'>
						<FaInstagram size={30} className='hover:text-gray-500' />
					</a>
					<a href="https://t.me/serhionioex" target='_blank'>
						<FaTelegram size={30} className='hover:text-gray-500' />
					</a>
					<a href="https://www.linkedin.com/in/tudos-sergiu-8476b129b/" target='_blank'>
						<FaLinkedin size={30} className='hover:text-gray-500' />
					</a>
				</div>
			</div>
			<div className='w-[70%] lg:w-1/3 flex items-center flex-col justify-center'>
				<img src={Photo} />
				<button
					onClick={clickAbout}
					className='hidden lg:flex items-center cursor-pointer justify-center w-fit p-3 rounded-2xl border hover:text-gray-700 dark:hover:text-gray-400'
				>
					{aboutMe}
				</button>
			</div>
		</section>
	)
}

export default Home