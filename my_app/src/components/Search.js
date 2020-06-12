import React, {useState} from 'react';


export function SearchBar() {
    const [text, setText] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
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