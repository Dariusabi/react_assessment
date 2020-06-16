import React, { useState } from 'react';

function SearchBar({ setText }) {
    const [searchText, setSearchText] = useState([]);
    
    const submit = (e) => {
        e.preventDefault()
        
        setText(searchText)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>Video Search</label>
                    <input name="video-search" type="text" onChange={e => setSearchText(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
