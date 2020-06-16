import React, {useState} from "react";
import axios from 'axios';
import VideoList from "./Items";


function Youtube() {
    const [results, setResult] = useState([]);

    axios.get('https://www.googleapis.com/youtube/v3/video?part=snippet&key={AIzaSyDQVZ8ECQMWT0uCHwi4XZdXpIi2qtO5H9g}')
        .then(res => {
            setResult(res.data)
        })
        .catch(err => console.log(err));
    return (
        <VideoList>

        </VideoList>
    )
}

export default Youtube;
