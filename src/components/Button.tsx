import React from 'react';

type ButtonProps = {
	icon: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ icon }) => {
	return (
		<button className='flex items-center cursor-pointer justify-center w-10 h-10 rounded-2xl bg-gray-800'>
			<div className="hover:text-gray-500">
				{icon}
			</div>
		</button>
	)
}

export default Button;