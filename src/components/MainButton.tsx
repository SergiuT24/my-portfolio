import React from 'react'
import { IconType } from 'react-icons';

type ButtonProps = {
	link: string;
	icon: IconType;
}

const MainButton: React.FC<ButtonProps> = ({ link, icon: Icon }) => {
	return (
		<button
			className='flex gap-2 items-center cursor-pointer justify-center w-fit py-1 px-4 rounded-2xl border hover:text-gray-700 dark:hover:text-gray-400'
		>
			<Icon />
			<p>{link}</p>
		</button>
	)
}

export default MainButton