import { iconList } from '@/assets/constants/icon'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { icons } from 'lucide-react'
import { useState } from 'react'

export function IconList({ selectedIcon }) {
	const [open, setOpen] = useState(false)
	const storage = JSON.parse(localStorage.getItem('value'))
	const [icon, setIcon] = useState(storage ? storage?.icon : 'Smile')

	const Icon = ({ name, color, size }) => {
		const LucidIcon = icons[name]
		if (!LucidIcon) return
		return <LucidIcon size={size} color={color} />
	}

	return (
		<>
			<div>
				<label>Icon</label>
				<div
					onClick={() => setOpen(true)}
					className='p-3 cursor-pointer rounded-sm bg-gray-200  w-[48px] h-[48px] my-2 flex items-center justify-center'
				>
					<Icon name={icon} size={24} color='#000000' />
				</div>
			</div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Select the Icon</DialogTitle>
						<DialogDescription>
							<Tabs defaultValue='icon' className=''>
								<TabsList>
									<TabsTrigger value='icon'>Lucide Icons</TabsTrigger>
									<TabsTrigger value='color-icon'>Color Icons</TabsTrigger>
								</TabsList>
								<TabsContent value='icon'>
									<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 overflow-auto h-[400px] max-w-lg min-w-md'>
										{iconList.map((icon, index) => (
											<div
												key={index}
												className='p-3 cursor-pointer rounded-sm bg-gray-200  w-[48px] h-[48px] my-2 flex items-center justify-center'
												onClick={() => {
													selectedIcon(icon)
													setOpen(false)
													setIcon(icon)
												}}
											>
												<Icon name={icon} size={24} color='#000000' />
											</div>
										))}
									</div>
								</TabsContent>
								<TabsContent value='color-icon'>
									Color Icon List
								</TabsContent>
							</Tabs>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</>
	)
}
