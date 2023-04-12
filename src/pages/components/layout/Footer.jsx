import { FaArrowRight } from 'react-icons/fa';
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaYoutube,
	FaGooglePlusSquare,
	FaTwitterSquare,
	FaArtstation,
	FaOdnoklassnikiSquare,
	FaSteamSymbol,
} from 'react-icons/fa';
import logo from '../../../assets/logo/logo.png';
import Image from 'next/image';

function Footer() {
	return (
		<footer className='bg-gray-200'>
			<div className='container mx-auto'>
				<div className='p-20'>
					<div className='md:mx-20 md:flex justify-between lg:p-8 p-2 rounded-md border-2 border-gray-800'>
						<div className='text-center'>
							<h2 className='md:text-3xl text-2xl font-semibold'>
								¿Buscando trabajo?
							</h2>
							<h3 className='md:text-2xl text-xl'>
								&Uacute;nase a nuestro equipo
							</h3>
						</div>
						<button className='flex justify-center items-center py-2 border border-gray-900 rounded-md bg-gray-800 lg:px-6 my-4 lg:mt-6 lg:mr-16'>
							<span className='uppercase p-1 text-gray-50 font-semibold text-sm'>
								Solicitar ahora
							</span>
							<i className='p-1'>
								<FaArrowRight className='text-white' />
							</i>
						</button>
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<div className='mt-6 text-teal-800 font-medium text-lg'>tranquilo</div>
				<div>
					<Image src={logo} alt='logo' width={200} />
				</div>
				<div className='mt-6 text-teal-800 font-medium text-lg'>se encarga</div>
			</div>
			<div className='hidden md:block lg:block'>
				<div className='flex justify-center container mx-auto'>
					<div></div>
					<div className='flex'>
						<div className='mx-10'>
							<div className='flex mt-6'>
								<FaArtstation className='text-3xl mx-1 text-gray-700' />
								<FaOdnoklassnikiSquare className='text-3xl mx-1 text-gray-700' />
								<FaSteamSymbol className='text-3xl mx-1 text-gray-700' />
							</div>
						</div>
						<div className='mx-10'>
							<div className='uppercase pl-2'>Encuentranos en</div>
							<div className='flex'>
								<FaFacebookSquare className='text-3xl mx-1 text-gray-700' />
								<FaInstagramSquare className='text-3xl mx-1 text-gray-700' />
								<FaTwitterSquare className='text-3xl mx-1 text-gray-700' />
								<FaYoutube className='text-3xl mx-1 text-gray-700' />
								<FaGooglePlusSquare className='text-3xl mx-1 text-gray-700' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='lg:mt-0 mt-10'>
				<div className='lg:flex lg:justify-between text-center container mx-auto mt-0 sm:mt lg:px-44'>
					<span className='lg:text-xs text-md'>
						T&eacute;rminos y condiciones de uso Politica y Privacidad
					</span>
					<br />
					<span className='lg:text-xs text-md'>
						©Cubamax 2022. Todos los derechos reservados
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
