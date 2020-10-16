import './video.css';
import React from 'react';


const VideoItem = ({ video }) => {
    
    return (
        <div classname="item" id="video">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
