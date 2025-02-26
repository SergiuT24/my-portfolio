import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className='bg-gray-300 dark:bg-neutral-900 backdrop-blur-md py-2.5 px-3 border-t-[0.5px] border-gray-500'>
			<div className='flex justify-between my-2'>
				<div className='w-1/3 text-center'>
					<h4>
						{t("design")}
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
							<a href="https://github.com/SergiuT24" target="_blank" className="dark:text-gray-500 hover:text-gray-600 dark:hover:text-white">
								<FaGithub size={24} />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/tudos-sergiu-8476b129b/" target="_blank" className="dark:text-gray-500 hover:text-gray-600 dark:hover:text-white">
								<FaLinkedin size={24} />
							</a>
						</li>
						<li>
							<a href="mailto:cambino7777@gmail.com" className="dark:text-gray-500 hover:text-gray-600 dark:hover:text-white">
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