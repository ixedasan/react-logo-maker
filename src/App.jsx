import { useState } from 'react'
import { BackgroundMaker } from './components/BackgroundMaker'
import { Header } from './components/Header'
import { IconMaker } from './components/IconMaker'
import { Navbar } from './components/Navbar'
import { Preview } from './components/Preview'
import { UpdateStorageContext } from './context/UpdateStorageContext'

export function App() {
	const [selectedItem, setSelectedItem] = useState(1)
	const [updateStorage, setUpdateStorage] = useState({})
	const [downloadIcon, setDownloadIcon] = useState()

	return (
		<UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
			<div className='flex flex-col h-screen'>
				<Header downloadIcon={setDownloadIcon} />
				<div className='flex flex-grow'>
					<div className='w-32 md:w-64 h-full'>
						<Navbar selectedItem={value => setSelectedItem(value)} />
					</div>
					<div className='flex-grow grid grid-cols-1 md:grid-cols-6'>
						<div className='md:col-span-2 px-4 p-2 border shadow-sm h-full overflow-auto'>
							{selectedItem === 1 ? <IconMaker /> : <BackgroundMaker />}
						</div>
						<div className='md:col-span-3'>
							<Preview downloadIcon={downloadIcon} />
						</div>
						<div className='md:col-span-1'>{/* additional content */}</div>
					</div>
				</div>
			</div>
		</UpdateStorageContext.Provider>
	)
}
