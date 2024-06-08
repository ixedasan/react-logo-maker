import { ImageDown } from 'lucide-react'
import { Button } from './ui/button'

export function Header({ downloadIcon }) {
	return (
		<>
			<header className='px-2 flex justify-between items-center'>
				<a href='#' className='flex gap-2 items-center text-xl'>
					<img src='logo.png' alt='' />
					Logo Maker
				</a>

				<Button
					className='flex items-center gap-2'
					onClick={() => downloadIcon(Date.now())}
				>
					<ImageDown />
					Download
				</Button>
			</header>
		</>
	)
}
