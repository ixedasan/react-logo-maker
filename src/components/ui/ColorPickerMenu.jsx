import { useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'

export function ColorPickerMenu({ selectedColor }) {
	const [color, setColor] = useState('#000')
	return (
		<>
			<ColorPicker
				value={color}
				onChange={e => {
					setColor(e)
					selectedColor(e)
				}}
				hideControls
				hidePresets
				hideEyeDrop
				hideAdvancedSliders
				hideColorGuide
				hideInputType
			/>
		</>
	)
}
