import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext';
import myPhoto from '../assets/my-photo.jpg';
import HeaderButton from './HeaderButton';
import { Link } from 'react-scroll';
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { MdTextsms } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { TbDeviceDesktopCode } from "react-icons/tb";
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';


const Header: React.FC = () => {
	const { t } = useTranslation();
	const { theme, toggleTheme } = useTheme();
	const [isScrolled, setIsScrolled] = useState(false);
	const [typedText, setTypedText] = useState('');
	const [index, setIndex] = useState(0);
	const targetText = '<Tudos/>';

	useEffect(() => {
		if (index < targetText.length) {
			const typingEffect = setTimeout(() => {
				setTypedText((prev) => prev + targetText[index]);
				setIndex((prevIndex) => prevIndex + 1);
			}, 150);

			return () => clearTimeout(typingEffect);
		}
	}, [index]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={`fixed top-0 left-0 w-full z-50 flex justify-between py-3 px-10 
			border-b-[0.5px] border-gray-300 dark:border-gray-500 
			transition-backdrop-filter duration-300 ease-in-out 
			${isScrolled ? "backdrop-blur-md bg-white/80 dark:bg-neutral-900/80"
				: "bg-white/50 dark:bg-neutral-900/50"}`}>
			<div className='flex items-center gap-3 text-black dark:text-white'>
				<TbDeviceDesktopCode size={24} />
				<Link to='home' smooth={true} duration={800}>
					<p className='cursor-pointer logo text-xl'>{typedText}</p>
				</Link>
			</div>
			<div className='flex text-sm gap-8'>
				<nav className='flex items-center gap-9'>
					<Link to="home" smooth={true} duration={800} className='flex text-black dark:text-gray-400 dark:hover:text-white hover:text-gray-800 items-center gap-2' href="">
						<FaHome />
						<p>{t("home")}</p>
					</Link>
					<Link to="projects" smooth={true} duration={800} offset={-70} className='flex text-black dark:text-gray-400 dark:hover:text-white hover:text-gray-800 items-center gap-2' href="">
						<FaProjectDiagram />
						<p>{t("projects")}</p>
					</Link>
					<Link to="skills" smooth={true} duration={800} offset={-70} className='flex text-black dark:text-gray-400 dark:hover:text-white hover:text-gray-800 items-center gap-2' href="">
						<GiSkills />
						<p>{t("skills")}</p>
					</Link>
					<Link to="contact" smooth={true} duration={800} offset={-70} className='flex text-black dark:text-gray-400 dark:hover:text-white hover:text-gray-800 items-center gap-2' href="">
						<MdTextsms />
						<p>{t("contact")}</p>
					</Link>
				</nav>
				<div className='flex items-center gap-2'>
					<LanguageSelector />
					<HeaderButton
						icon={theme === "dark" ? <IoSunnyOutline size={24} /> : <FaMoon size={24} />}
						onClick={toggleTheme}
					/>
				</div>
				<img className='w-10 h-10 rounded-4xl' src={myPhoto} />
			</div>
		</header >
	);
};

export default Header;