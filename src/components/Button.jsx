import React from 'react';

function Button({ text, type, handler }) {
	return (
		<button type={type} onClick={handler}>
			{text}
		</button>
	);
}

export default Button;
