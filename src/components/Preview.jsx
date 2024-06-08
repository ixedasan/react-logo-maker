import { UpdateStorageContext } from '@/context/UpdateStorageContext'
import html2canvas from 'html2canvas'
import { icons } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'

export function Preview({ downloadIcon }) {
	const [storage, setStorage] = useState()
	const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext)

	useEffect(() => {
		const storageData = JSON.parse(localStorage.getItem('value'))
		setStorage(storageData)
	}, [updateStorage])

	useEffect(() => {
		if (downloadIcon) {
			downloadLogo()
		}
	}, [downloadIcon])

	const downloadLogo = () => {
		const downloadLogoDiv = document.getElementById('logoDiv')
		html2canvas(downloadLogoDiv, { backgroundColor: null }).then(canvas => {
			const image = canvas.toDataURL('image/png')
			const downloadLink = document.createElement('a')
			downloadLink.href = image
			downloadLink.download = 'logo.png'
			downloadLink.click()
		})
	}

	const Icon = ({ name, color, size, rotate }) => {
		const LucidIcon = icons[name]
		if (!LucidIcon) return
		return (
			<LucidIcon
				size={size}
				color={color}
				style={{ transform: `rotate(${rotate}deg)` }}
			/>
		)
	}

	return (
		<>
			<div className='flex w-full h-screen justify-center items-center'>
				<div
					className='h-[480px] w-[480px] bg-gray-100 outline-dotted outline-gray-300'
					style={{
						padding: storage?.bgPadding,
					}}
				>
					<div
						id='logoDiv'
						className='w-full h-full flex justify-center items-center'
						style={{
							borderRadius: storage?.bgRounded,
							backgroundColor: storage?.bgColor,
						}}
					>
						<Icon
							name={storage?.icon}
							color={storage?.color}
							size={storage?.size}
							rotate={storage?.rotate}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
