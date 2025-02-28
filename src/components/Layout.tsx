import { Element } from 'react-scroll';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { useTranslation } from 'react-i18next';

const Layout = () => {
	const { t } = useTranslation();


	return (
		<main className="flex flex-col items-center w-full flex-grow z-1">
			<Element name="home" className='w-full flex justify-center'>
				<Home
					welcome={t("welcome")}
					name={t("name")}
					aboutMe={t("about-me")}
				/>
			</Element>
			<Element name="about" className='w-full flex justify-center px-3 md:px-10'>
				<About
					about={t("about")}
					descriptionOne={t("description-one")}
					descriptionTwo={t("description-two")}
					descriptionThree={t("description-three")}
				/>
			</Element>
			<Element name="projects" className='w-full flex justify-center'>
				<Projects
					myProjects={t("my-projects")}
					snake={t("snake")}
					snakeAbout={t("snake-about")}
					fifa={t("fifa")}
					fifaAbout={t("fifa-about")}
					horoscope={t("horoscope")}
					horoscopeAbout={t("horoscope-about")} />
			</Element>
			<Element name="skills" className='w-full'>
				<Skills skills={t("skills")} />
			</Element>
			<Element name="contact" className='w-full'>
				<Contact connect={t("connect")} connectText={t("connect-text")} />
			</Element>
		</main>
	);
};

export default Layout;