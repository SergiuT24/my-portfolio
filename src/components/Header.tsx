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
import { Menu, X } from 'lucide-react';


const Header: React.FC = () => {
	const { t } = useTranslation();
	const { theme, toggleTheme } = useTheme();
	const [isScrolled, setIsScrolled] = useState(false);
	const [typedText, setTypedText] = useState('');
	const [index, setIndex] = useState(0);
	const targetText = '<Tudos/>';
	const [opened, setOpened] = useState(false);

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
		<header className={`fixed top-0 left-0 w-full z-50 flex justify-between py-3 px-3 md:px-6 lg:px-10 
			border-b-[0.5px] border-gray-300 dark:border-gray-500 
			transition-backdrop-filter duration-300 ease-in-out 
			${isScrolled ? "lg:backdrop-blur-md bg-white/90 dark:bg-neutral-900/80"
				: "bg-white/50 dark:bg-neutral-900/50"}`}>
			<div className='flex items-center gap-3 text-black dark:text-white'>
				<TbDeviceDesktopCode size={24} />
				<Link to='home' smooth={true} duration={800}>
					<p className='cursor-pointer logo text-xl'>{typedText}</p>
				</Link>
			</div>
			<div className='relative flex text-sm lg:gap-8'>
				<div className={`fixed top-0 z-1 right-0 h-full w-[250px] md:w-[400px] bg-gray-300 dark:bg-neutral-950 flex flex-col items-center
				transition-transform duration-200 ${opened ? "translate-x-0" : "translate-x-[250px] md:translate-x-[400px]"} lg:hidden`}>
					{/* Mobile Menu */}
					<nav className='flex flex-col items-left gap-6 mt-20'>
						<Link to="home" smooth={true} duration={800} className='flex items-center gap-2 text-lg text-black dark:text-gray-400' onClick={() => setOpened(false)}>
							<FaHome />
							<p>{t("home")}</p>
						</Link>
						<Link to="projects" smooth={true} duration={800} className='flex items-center gap-2 text-lg text-black dark:text-gray-400' onClick={() => setOpened(false)}>
							<FaProjectDiagram />
							<p>{t("projects")}</p>
						</Link>
						<Link to="skills" smooth={true} duration={800} className='flex items-center gap-2 text-lg text-black dark:text-gray-400' onClick={() => setOpened(false)}>
							<GiSkills />
							<p>{t("skills")}</p>
						</Link>
						<Link to="contact" smooth={true} duration={800} className='flex items-center gap-2 text-lg text-black dark:text-gray-400' onClick={() => setOpened(false)}>
							<MdTextsms />
							<p>{t("contact")}</p>
						</Link>
					</nav>
					<button className='absolute top-4 right-4 dark:text-white' onClick={() => setOpened(false)}>
						<X size={32} />
					</button>
				</div>
				{/* Desktop Menu */}
				<nav className="hidden lg:flex items-center gap-9">
					<Link to="home" smooth={true} duration={800} className='flex items-center gap-2 text-black dark:text-gray-400 dark:hover:text-white hover:text-gray-800'>
						<FaHome />
						<p>{t("home")}</p>
					</Link>
					<Link to="projects" smooth={true} duration={800} offset={-70} className='flex items-center gap-2 text-black dark:text-gray-400 dark:hover:text-white hover:text-gray-800'>
						<FaProjectDiagram />
						<p>{t("projects")}</p>
					</Link>
					<Link to="skills" smooth={true} duration={800} offset={-70} className='flex items-center gap-2 text-black dark:text-gray-400 dark:hover:text-white hover:text-gray-800'>
						<GiSkills />
						<p>{t("skills")}</p>
					</Link>
					<Link to="contact" smooth={true} duration={800} offset={-70} className='flex items-center gap-2 text-black dark:text-gray-400 dark:hover:text-white hover:text-gray-800'>
						<MdTextsms />
						<p>{t("contact")}</p>
					</Link>
				</nav>
				<div className='flex items-center lg:gap-2'>
					<LanguageSelector />
					<HeaderButton
						icon={theme === "dark" ? <IoSunnyOutline size={24} /> : <FaMoon size={24} />}
						onClick={toggleTheme}
					/>
				</div>
				<img className='hidden lg:flex w-10 h-10 rounded-full' src={myPhoto} />
				<button className='lg:hidden hover:text-gray-400 dark:text-gray-400 dark:hover:text-white' onClick={() => setOpened(!opened)}>
					{opened ? <X size={32} /> : <Menu size={32} />}
				</button>
			</div>
		</header>
	);
};

export default Header;