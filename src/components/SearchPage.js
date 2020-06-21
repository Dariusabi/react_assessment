import React, { useState } from 'react';
import youtube from '../services/youtube';
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";


function SearchPage() {
    const [results, setResult] = useState([]);
    
    const searchTextChanged = async (searchText) => {
        const response = await youtube.get('/search', {
            params: { q: searchText }
        });
        
        setResult(response.data.items)
    };


    return (
        <div>
            <SearchBar setText={searchTextChanged}/>
            <div>
                <VideoList results={results}/>
            </div>
        </div>
    )
}

export default SearchPage;
