import React from 'react';
import SideVideos from './SideVideos';

const ListVideos = ({videos,onVideoSelect}) => {
    const videoLists = videos.map(video => {
        return <SideVideos 
        key={video.id.videoId} 
        video={video} 
        onVideoSelect={onVideoSelect} />
    })
    return (
        <div>
            {videoLists}
        </div>
    );
};


export default ListVideos;