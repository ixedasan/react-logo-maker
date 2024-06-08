import { PaintBucket, Smile } from 'lucide-react'
import { useState } from 'react'

export function Navbar({ selectedItem }) {
	const menu = [
		{
			id: 1,
			name: 'Icon',
			icon: <Smile />,
		},
		{
			id: 2,
			name: 'Background',
			icon: <PaintBucket />,
		},
	]

	const [activeItem, setActiveItem] = useState(1)

	return (
		<>
			<nav className='h-full border-r shadow-sm'>
				<div>
					{menu.map(item => (
						<a
							key={item.id}
							onClick={() => {
								setActiveItem(item.id)
								selectedItem(item.id)
							}}
							className={`flex items-center gap-2 p-2 text-lg hover:bg-primary hover:text-white ${
								activeItem === item.id ? 'bg-primary text-white' : ''
							}`}
						>
							{item.icon}
							{item.name}
						</a>
					))}
				</div>
			</nav>
		</>
	)
}
