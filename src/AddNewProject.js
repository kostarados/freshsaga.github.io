import React from 'react';

const AddNewProject = ({ onProjectInputChange, onProjectInputLengthChange, onProjectSubmit }) => {
	return (
		<div className='card-alt'>
			<p>{'Add a new project:'}</p>
			<input type='text' onChange={ onProjectInputChange } placeholder='What is your task?'></input>
			<input type='number' onChange={ onProjectInputLengthChange } placeholder='How many hours?' max='200' size='4'></input>
			<button onClick={ onProjectSubmit }>Add</button>
		</div>
		)
}

export default AddNewProject