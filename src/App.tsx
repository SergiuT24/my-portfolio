import './styles/App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

function App() {

	return (
		<div className='relative flex flex-col min-h-screen background'>
			<ParticlesBackground />
			<Header />
			<Layout />
			<Footer />
		</div>
	)
}

export default App
