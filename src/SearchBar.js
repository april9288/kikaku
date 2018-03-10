import React from 'react';
import {DebounceInput} from 'react-debounce-input';
import './SearchBar.css';

const SearchBar = ({onInput}) => {
return (
	<div>
        <DebounceInput
          className = 'input_css'
          type = 'search'
          minLength={2}
          debounceTimeout={1000}
          placeholder="search video"
          onChange={onInput} />
	</div>
	);
}

export default SearchBar;