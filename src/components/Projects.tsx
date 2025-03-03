import React from 'react'
import Project from './Project'
import snakePic from '../assets/snake-game.png';
import fifaPic from '../assets/fifa-11.png';
import zodiakPic from '../assets/zodiak.png';
import portfolioPic from '../assets/portfolio.png';
import todoPic from '../assets/toDoApp.png';
import fifaRobotPic from '../assets/fifa-robot.png';

type TranslateProps = {
	myProjects: string,
	snake: string,
	snakeAbout: string,
	fifa: string,
	fifaAbout: string,
	horoscope: string,
	horoscopeAbout: string,
	portfolio: string,
	portfolioAbout: string,
	todo: string,
	todoAbout: string,
	fifarobot: string,
	fifarobotAbout: string,
}

const Projects: React.FC<TranslateProps> = ({ myProjects, snake, snakeAbout, fifa, fifaAbout, horoscope, horoscopeAbout, portfolio, portfolioAbout, todo, todoAbout, fifarobot, fifarobotAbout }) => {
	return (
		<section id="projects" className='container flex items-center flex-col mb-20'>
			<h2 className='text-center mb-20'>{myProjects}</h2>
			<div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12'>
				<Project
					img={snakePic}
					link={'https://github.com/SergiuT24/snake-game'}
					linkDemo={'https://classicsnake-game.netlify.app/'}
					title={snake}
					about={snakeAbout}
				/>
				<Project
					img={fifaPic}
					link={'https://github.com/SergiuT24/fifa-11'}
					linkDemo={'https://fifa11team.netlify.app/'}
					title={fifa}
					about={fifaAbout}
				/>
				<Project
					img={zodiakPic}
					link={'https://github.com/SergiuT24/Zodiac'}
					linkDemo={'https://zodiak.md/'}
					title={horoscope}
					about={horoscopeAbout}
				/>
				<Project
					img={portfolioPic}
					link={'https://github.com/SergiuT24/my-portfolio'}
					linkDemo={'https://sergiutudos.netlify.app'}
					title={portfolio}
					about={portfolioAbout}
				/>
				<Project
					img={todoPic}
					link={'https://github.com/SergiuT24/ToDo'}
					linkDemo={'https://to-do-app4.netlify.app/'}
					title={todo}
					about={todoAbout}
				/>
				<Project
					img={fifaRobotPic}
					link={'https://github.com/SergiuT24/fifa-bot'}
					linkDemo={'https://github.com/SergiuT24/fifa-bot/blob/b4b5f4bf2e71fd37bac229a15f867a62282316a1/README.md'}
					title={fifarobot}
					about={fifarobotAbout}
				/>
			</div>
		</section>
	)
}

export default Projects;