import Image from 'next/image';
import * as imgs from '../../../../assets/categories';
import Cards from './Cards';

function Categories() {
	return (
		<div className='bg-gradient-to-r from-cyan-300 to-blue-300'>
			<div className='container mx-auto'>
				<div className='container grid lg:grid-cols-4 grid-cols-2 text-center py-20'>
					<Cards title={'Remesas'}>
						<Image src={imgs.mony} alt='remesas' />
					</Cards>
					<Cards title={'Tienda'}>
						<Image src={imgs.store} alt='tienda' />
					</Cards>
					<Cards title={'Recargas'}>
						<Image src={imgs.phone} alt='recargas' />
					</Cards>
					<Cards title={'Viajes'}>
						<Image src={imgs.avion} alt='viajes' />
					</Cards>
					<Cards title={'Consulado'}>
						<Image src={imgs.mony} alt='remesas' />
					</Cards>
					<Cards title={'Paquete'}>
						<Image src={imgs.consulado} alt='consulado' />
					</Cards>
					<Cards title={'Hotel'}>
						<Image src={imgs.hotel} alt='hotel' />
					</Cards>
					<Cards title={'Auto'}>
						<Image src={imgs.auto} alt='auto' />
					</Cards>
				</div>
			</div>
		</div>
	);
}

export default Categories;
