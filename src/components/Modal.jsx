import React from 'react';

function Modal() {
	return (
		<aside id='modal'>
			<div id='modal-content'>
				<h2>cv maker</h2>
				<p>¿Estás seguro de que deseas eliminar este elemento?</p>
				<div id='modal-buttons'>
					<button id='cancel-button'>cancelar</button>
					<button id='accept-button'>aceptar</button>
				</div>
			</div>
		</aside>
	);
}

export default Modal;
