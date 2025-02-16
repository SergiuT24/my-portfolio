import { useEffect, useState } from 'react'
import myPhoto from '../assets/my-photo.jpg';
import Button from './Button';
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { FaHome, FaProjectDiagram, FaInfoCircle } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { TbDeviceDesktopCode } from "react-icons/tb";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [darkMode, setDarkMode] = useState(true);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
		document.documentElement.classList.toggle("dark", !darkMode);
	}

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
		<header className={`fixed top-0 left-0 w-full z-50 flex justify-between py-3 px-10 border-b-[0.5px] border-gray-500 transition-backdrop-filter duration-300 ease-in-out ${isScrolled ? "backdrop-blur-md bg-neutral-900/80" : "bg-neutral-900/50"}`}>
			<div className='flex items-center gap-3'>
				<TbDeviceDesktopCode size={24} />
				<p className='cursor-default logo text-xl'>&lt;Tudos/&gt;</p>
			</div>
			<div className='flex text-sm gap-8'>
				<nav className='flex items-center gap-9'>
					<a className='flex items-center gap-2' href="">
						<FaHome />
						<p>Home</p>
					</a>
					<a className='flex items-center gap-2' href="">
						<FaProjectDiagram />
						<p>Projects</p>
					</a>
					<a className='flex items-center gap-2' href="">
						<GiSkills />
						<p>Skills</p>
					</a>
					<a className='flex items-center gap-2' href="">
						<FaInfoCircle />
						<p>About Me</p>
					</a>
				</nav>
				<div className='flex gap-2'>
					<Button
						icon={<FaMoon size={24} />} />
					<Button
						icon={<IoSunnyOutline size={24} />} />
				</div>
				<img className='w-10 h-10 rounded-4xl' src={myPhoto} />
			</div>
		</header >
	);
};

export default Header;