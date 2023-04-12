import { FaAngleRight } from 'react-icons/fa';
function Welcome() {
	return (
		<section className='pt-20'>
			<div className='lg:pl-24 px-6'>
				<div className='bg-yellow-500 lg:w-2/5 p-6 rounded-md'>
					<div className='lg:pl-2'>
						<span className='font-semibold text-4xl'>
							¿Va a visitar a Cuba pronto?
						</span>
						<span className='font-light text-3xl'>
							Conozco que <br /> debe tener en cuenta para su visita.
						</span>
					</div>
					<div className='flex justify-center pt-12'>
						<button className='border border-gray-800 pl-2 pr-6 py-5 rounded-md'>
							<FaAngleRight className='text-2xl' />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Welcome;
