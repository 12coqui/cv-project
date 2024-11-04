import Edition from './components/Edition';
import Preview from './components/Preview';
import './css/app.css';
import { CvContext } from './components/context/CvContext';
function App() {
	return (
		<CvContext>
			<div id='cv-container'>
				<Edition />
				<Preview />
			</div>
		</CvContext>
	);
}

export default App;
