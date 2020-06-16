import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/Search";
import VideoList from "./components/Items";
import Youtube from "./components/Video";

function App() {

    return (
        <div>
            <SearchBar />

        </div>
    );
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
});

