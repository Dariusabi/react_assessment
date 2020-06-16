import React, {useState} from 'react';


function SearchBar() {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Video Search</label>
                    <input name="video-search" type="text" value={text} onChange={e => setText(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;