function Cards({ title, children }) {
	return (
		<div className='flex justify-center'>
			<div className='border-2 bg-gray-50 border-gray-800 rounded-md m-4 lg:px-10 px-5 py-2'>
				<div className='w-16'>{children}</div>
				<h4 className='text-gray-800 font-semibold'>{title}</h4>
			</div>
		</div>
	);
}

export default Cards;
