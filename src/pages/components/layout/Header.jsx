import Image from 'next/image';
import logo from '../../../assets/logo/logo.png';
import {
	FaArtstation,
	FaOdnoklassnikiSquare,
	FaSteamSymbol,
} from 'react-icons/fa';

function Header() {
	return (
		<header className='bg-gray-50'>
			<div className='container mx-auto flex justify-between items-center'>
				<div>
					<Image src={logo} width={220} alt='Logotipo' priority />
				</div>
				<div className='text-right'>
					<div className='mb-6'>{'(305)512-0330'}</div>
					<div className='flex items-center'>
						<span className='leading-3 mx-1 text-center text-gray-800'>
							m&aacute;s <br /> opciones
						</span>
						<FaArtstation className='text-3xl mx-1 text-gray-700' />
						<FaOdnoklassnikiSquare className='text-3xl mx-1 text-gray-700' />
						<FaSteamSymbol className='text-3xl mx-1 text-gray-700' />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
