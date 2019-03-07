import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
	<div>
		<input 
			type='search'
			placeholder='filter projects...'
			onChange={searchChange}
		/>
	</div>
	);
}

export default SearchBox;