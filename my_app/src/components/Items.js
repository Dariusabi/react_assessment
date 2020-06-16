import React from "react";
import VideoItem from "./Item";
import results from "./Video";

const VideoList = () => {

    const rendVideos = results.map((video, i) => {
        return <VideoItem key={video.i} video={video} />
    });

    return <div>{rendVideos}</div>
};

export default VideoList;