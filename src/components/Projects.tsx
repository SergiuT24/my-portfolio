import React from 'react'
import Project from './Project'
import snakePic from '../assets/snake-game.png';
import fifaPic from '../assets/fifa-11.png';
import zodiakPic from '../assets/zodiak.png';

type TranslateProps = {
	myProjects: string,
	snake: string,
	snakeAbout: string,
	fifa: string,
	fifaAbout: string,
	horoscope: string,
	horoscopeAbout: string,
}

const Projects: React.FC<TranslateProps> = ({ myProjects, snake, snakeAbout, fifa, fifaAbout, horoscope, horoscopeAbout }) => {
	return (
		<section id="projects" className='container flex items-center flex-col mb-20'>
			<h2 className='text-center mb-20'>{myProjects}</h2>
			<div className='grid grid-cols-3 gap-10'>
				<Project
					img={snakePic}
					title={snake}
					about={snakeAbout}
				/>
				<Project
					img={fifaPic}
					title={fifa}
					about={fifaAbout}
				/>
				<Project
					img={zodiakPic}
					title={horoscope}
					about={horoscopeAbout}
				/>
				<Project
					img={snakePic}
					title={snake}
					about={snakeAbout}
				/>
				<Project
					img={fifaPic}
					title={fifa}
					about={fifaAbout}
				/>
				<Project
					img={zodiakPic}
					title={horoscope}
					about={horoscopeAbout}
				/>
			</div>
		</section>
	)
}

export default Projects;