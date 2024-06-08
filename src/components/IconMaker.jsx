import { Slider } from '@/components/ui/slider'
import { UpdateStorageContext } from '@/context/UpdateStorageContext'
import { Label } from '@radix-ui/react-label'
import { Smile } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { ColorPickerMenu } from './ui/ColorPickerMenu'
import { IconList } from "./IconList"

export function IconMaker() {
	const storage = JSON.parse(localStorage.getItem('value'))
	const [size, setSize] = useState(storage ? storage?.size : 280)
	const [rotate, setRotate] = useState(storage ? storage?.rotate : 0)
	const [color, setColor] = useState(storage ? storage?.color : '#ffffff')
	const [icon, setIcon] = useState(storage ? storage?.icon : 'Smile')
	const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext)

	useEffect(() => {
		const updateStorage = {
			...storage,
			size: size,
			rotate: rotate,
			color: color,
			icon: icon,
		}
		setUpdateStorage(updateStorage)
		localStorage.setItem('value', JSON.stringify(updateStorage))
	}, [size, rotate, color, icon])

	return (
		<>
			<div>
				<IconList selectedIcon={icon => setIcon(icon)}/>
				<div className='py-2'>
					<label className='p-2 flex justify-between items-center'>
						Size <span>{size}px</span>
					</label>
					<Slider
						defaultValue={[size]}
						max={512}
						step={1}
						onValueChange={e => setSize(e[0])}
					/>
				</div>
				<div className='py-2'>
					<label className='p-2 flex justify-between items-center'>
						Rotate <span>{rotate}°</span>
					</label>
					<Slider
						defaultValue={[rotate]}
						max={360}
						step={1}
						onValueChange={e => setRotate(e[0])}
					/>
				</div>
				<div className='py-2'>
					<label className='p-2 flex justify-between items-center'>
						Icon Color
					</label>
					<ColorPickerMenu selectedColor={color => setColor(color)} />
				</div>
			</div>
		</>
	)
}
