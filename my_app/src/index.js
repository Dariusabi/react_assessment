import React from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from "./components/Search";

function App() {
    return (
        <div className="App">
            <h1>Hello</h1>
            <SearchBar/>
        </div>
    );
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
});