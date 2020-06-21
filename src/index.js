import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";


// document.addEventListener('DOMContentLoaded', function () {
//     ReactDOM.render(
//         <App />,
//         document.getElementById('root')
//     );
// });

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
