import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ results }) => {
    return (
        <div>
            {
                results.map((video, i) => {
                    return <VideoItem key={i} video={video} />
                })   
            }
        </div>
    )
};

export default VideoList;
