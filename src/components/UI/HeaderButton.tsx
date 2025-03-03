import React from 'react';

type ButtonProps = {
	icon: React.ReactNode;
	onClick: () => void;
}

const HeaderButton: React.FC<ButtonProps> = ({ icon, onClick }) => {
	return (
		<button
			title='Toggle Dark Mode'
			className='flex items-center cursor-pointer justify-center w-10 h-10 text-black dark:text-gray-400'
			onClick={onClick}
		>
			<div className="hover:text-gray-500 dark:hover:text-white">
				{icon}
			</div>
		</button>
	)
}

export default HeaderButton;