function ButtonApp({ title, children }) {
	return (
		<button className='border-2 border-gray-800 rounded-md mx-1 lg:px-4'>
			<div className='flex m-1 justify-center items-center py-1'>
				<div className='px-2'>{children}</div>
				<span>{title}</span>
			</div>
		</button>
	);
}

export default ButtonApp;
