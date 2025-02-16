import React, { useState, useEffect } from 'react'
import Photo from '../assets/home-pic.svg';

const Home: React.FC = () => {
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
		<div className='container flex justify-around items-center my-20'>
			<div className='flex flex-col gap-5 w-1/2'>
				<h1 className='flex flex-col gap-4 text-center'>
					<span>Welcome to My Digital World!</span>
					<span>I'm Sergiu Tudos</span>
				</h1>
				<p className='text-xl text-center'>
					{typedText}<span>|</span>
				</p>
			</div>
			<div className='w-1/3 flex items-center flex-col justify-center'>
				<img src={Photo} />
				<button
					onClick={clickAbout}
					className='flex items-center cursor-pointer justify-center w-fit p-3 rounded-2xl border hover:text-gray-400'
				>
					More About Me
				</button>
			</div>
		</div>
	)
}

export default Home