import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';
import Image from 'next/image';
import ButtonApp from './ButtonApp';

import mobile from '../../../../assets/mobile/mobile.png';
function DownloadApp() {
	return (
		<div className='container mx-auto pt-20 lg:flex lg:justify-between'>
			<div>
				<div className='font-light lg:text-3xl text-2xl lg:pl-20 pl-5 pt-16'>
					Visita la tienda para que
					<br /> descargues nuestro APP
				</div>
				<div className='mt-6 lg:pl-20 pl-0 flex justify-center'>
					<ButtonApp title={'para android'}>
						<FaGooglePlay className='text-3xl' />{' '}
					</ButtonApp>
					<ButtonApp title={'para iphone'}>
						<FaAppStoreIos className='text-3xl' />
					</ButtonApp>
				</div>
			</div>
			<div>
				<Image src={mobile} alt='App' />
			</div>
		</div>
	);
}

export default DownloadApp;
