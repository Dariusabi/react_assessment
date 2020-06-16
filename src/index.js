import React from 'react';
import ReactDOM from 'react-dom';

import SearchPage from "./components/SearchPage";

function App() {

    return (<SearchPage/>);
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
});

