import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='bg-neutral-900 backdrop-blur-md py-2.5 px-3'>
			<div className='flex justify-between my-2'>
				<div className='w-1/3 text-center'>
					<h4>
						Designed and Developed by Sergiu Tudos
					</h4>
				</div>
				<div className='w-1/3 text-center'>
					<h4>
						Copyright &copy; 2025 ST
					</h4>
				</div>
				<div className='flex justify-center w-1/3'>
					<ul className='flex gap-10'>
						<li>
							<a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
								<FaGithub size={24} />
							</a>
						</li>
						<li>
							<a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
								<FaLinkedin size={24} />
							</a>
						</li>
						<li>
							<a href="mailto:youremail@example.com" className="hover:text-gray-400">
								<FaEnvelope size={24} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer