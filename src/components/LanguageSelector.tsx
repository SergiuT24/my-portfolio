import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const LanguageSelector: React.FC = () => {
	const { i18n } = useTranslation();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const languages = [
		{ code: "en", label: "EN" },
		{ code: "ro", label: "RO" },
		{ code: "ru", label: "RU" },
	];

	const toggleLanguage = (code: string) => {
		i18n.changeLanguage(code);
		navigate(`/${code}`);
		setIsOpen(false);
	};

	return (
		<div className="relative dark:text-gray-400">
			<button
				className="cursor-pointer flex gap-2 items-center bg-gray-300 dark:bg-neutral-900 hover:text-gray-800 dark:hover:text-white px-2 rounded-2xl"
				onClick={() => setIsOpen(!isOpen)}
			>
				<CiGlobe />
				<p>{i18n.language.toUpperCase()}</p>
				<IoIosArrowDown />
			</button>
			{isOpen && (
				<ul className="absolute flex flex-col gap-2 left-0 ml-1 mt-2 bg-gray-300 dark:bg-neutral-900 p-1 rounded-md">
					{languages.map(({ code, label }) => (
						<li
							className={`flex justify-center items-center gap-2 cursor-pointer px-3 rounded-md hover:text-white ${i18n.language === code ? "text-white bg-neutral-700" : ""
								}`}
							key={code}
							onClick={() => toggleLanguage(code)}
						>
							{i18n.language === code && <FaCheck />} {label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default LanguageSelector;