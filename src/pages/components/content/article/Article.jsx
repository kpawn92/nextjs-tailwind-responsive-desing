import DownloadApp from './DownloadApp';
import Welcome from './Welcome';

function Article() {
	return (
		<article>
			<div className='container mx-auto'>
				<Welcome />
				<DownloadApp />
			</div>
		</article>
	);
}

export default Article;
