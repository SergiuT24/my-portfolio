import React from 'react'

type TranslateProps = {
	connect: string,
	connectText: string,
}


const Contact: React.FC<TranslateProps> = ({ connect, connectText }) => {
	return (
		<section id="contact" className='mx-auto w-full flex justify-center bg-gray-300 dark:bg-neutral-900/85 pb-20 px-5 pt-10 lg:px-20'>
			<div className='container'>
				<h2 className='text-center mb-10'>{connect}</h2>
				<div>
					<p className='lg:text-lg'>{connectText}<a href="#" className="text-blue-500 hover:underline">cambino7777@gmail.com</a>.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Contact