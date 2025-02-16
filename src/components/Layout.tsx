import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';

const Layout = () => {
	return (
		<main className="flex flex-col items-center w-full flex-grow z-1">
			<Home />
			<About />
			<Projects />
		</main>
	);
};

export default Layout;