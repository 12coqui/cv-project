import Form from './components/Form';
import Modal from './components/Modal';
import Preview from './components/Preview';
import './css/app.css';

function App() {
	return (
		<>
			<h1>cv maker</h1>
			<div id='cv-container'>
				<Form />
				<Preview />
			</div>
			<Modal />
		</>
	);
}

export default App;
