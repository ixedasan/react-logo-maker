import { Slider } from '@/components/ui/slider'
import { UpdateStorageContext } from '@/context/UpdateStorageContext'
import { useContext, useEffect, useState } from 'react'
import { ColorPickerMenu } from './ui/ColorPickerMenu'

export function BackgroundMaker() {
	const storage = JSON.parse(localStorage.getItem('value'))
	const [rounded, setRounded] = useState(storage?storage?.bgRounded:0)
	const [padding, setPadding] = useState(storage?storage?.bgPadding:0)
	const [color, setColor] = useState(storage?storage?.bgColor:'#000')
	const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext)

	useEffect(() => {
		const updateStorage = {
			...storage,
			bgRounded: rounded,
			bgPadding: padding,
			bgColor: color,
		}
		setUpdateStorage(updateStorage)
		localStorage.setItem('value', JSON.stringify(updateStorage))
	}, [rounded, padding, color])

	return (
		<>
			<div className='py-2'>
				<label className='p-2 flex justify-between items-center'>
					Rounded <span>{rounded}px</span>
				</label>
				<Slider
					defaultValue={[rounded]}
					max={512}
					step={1}
					onValueChange={e => setRounded(e[0])}
				/>
			</div>
			<div className='py-2'>
				<label className='p-2 flex justify-between items-center'>
					Padding <span>{padding}px</span>
				</label>
				<Slider
					defaultValue={[padding]}
					max={100}
					step={1}
					onValueChange={e => setPadding(e[0])}
				/>
			</div>
			<div className='py-2'>
				<label className='p-2 flex justify-between items-center'>
					Icon Color
				</label>
				<ColorPickerMenu selectedColor={color => setColor(color)} />
			</div>
		</>
	)
}
