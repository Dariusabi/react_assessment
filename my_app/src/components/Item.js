import React from "react";

const VideoItem = (video, handleVideoSelect) => {

    return (
        <div onClick={() => handleVideoSelect(video)}>
            <img src={video.url} alt={video.description}/>
            <div>
                <div>
                    {video.title}
                </div>
            </div>
        </div>
    )
};

export default VideoItem;