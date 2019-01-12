import React from 'react';
import "./formElements.css";

const Input = (props) => (
	<div className="form-group">
		<label className="form-label">{props.title}</label>
		<input
			type={props.inputType}
			className="form-input form-control"
			name={props.name}
			onChange={props.controlFunc}
			value={props.content}
			placeholder={props.placeholder} />
	</div>
);

export default Input;