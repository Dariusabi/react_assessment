import React from "react";

const VideoItem = ({video, handleVideoSelect}) => {
    console.log(video);
    
    return (
        <div onClick={() => handleVideoSelect(video)}>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
            <div>
                <div>
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
};

export default VideoItem;
