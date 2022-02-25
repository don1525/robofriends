import React from 'react';

const SearchBox = ({ setSearch }) => {
    return(
        <div className='pa3'>
            <input
                className='pa3 ba br3 b--red bg-lightest-blue'
                type='search' 
                placeholder='Search for Robots containing...' 
                size='30'
                onChange={setSearch}
            />
        </div>
    )
}

export default SearchBox;