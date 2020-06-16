import React from "react";

const VideoItem = ({video, handleVideoSelect}) => {
    console.log(video);
    
    return (
        <div>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
            <div>
                <div>
                    {video.snippet.title}
                </div>
            </div>
            
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </div>
    )
};

export default VideoItem;
