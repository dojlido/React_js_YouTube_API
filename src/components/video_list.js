/**
 * Created by maciejdo on 12.11.2018.
 */
import React from 'react';
import VideoListItem from './video_list_item';

// props tzn. property ...
const VideoList = (props) => {
    const videoItems = props.videos.map(video => (
        <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} />
    ));
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};
export default VideoList;
