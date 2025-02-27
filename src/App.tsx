import './styles/App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from "react-router-dom";

const LanguageWrapper = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	useEffect(() => {
		const checkDarkMode = () => {
			const htmlElement = document.documentElement
			setIsDarkMode(htmlElement.classList.contains('dark'))
		}

		checkDarkMode()

		const observer = new MutationObserver(checkDarkMode)
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		})

		return () => observer.disconnect()
	}, [])

	const { lang } = useParams();
	const { i18n } = useTranslation();

	useEffect(() => {
		if (lang && i18n.language !== lang) {
			i18n.changeLanguage(lang);
		}
	}, [lang, i18n]);

	return (
		<div className='relative flex flex-col min-h-screen text-black dark:text-white bg-gray-200 dark:bg-black'>
			{isDarkMode && <ParticlesBackground />}
			<Header />
			<Layout />
			<Footer />
		</div>
	)
}


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/en" />} />
				<Route path="/:lang" element={<LanguageWrapper />} />
			</Routes>
		</Router>
	);
}

export default App
