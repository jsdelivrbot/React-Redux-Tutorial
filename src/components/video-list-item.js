import React from 'react';

//{video} is ES6 syntax to just grab video property from props object
const VideoListItem = ({video}) => {
  const imageURL = video.snippet.thumbnails.default.url;
  return(
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
