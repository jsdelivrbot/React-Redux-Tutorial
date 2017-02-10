import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
  props.videos.map((video) => {
    return <VideoListItem video={video} />;
  });

  return (
    <ul className="col-md-4 list-group">
    </ul>
  );
};


export default VideoList;
