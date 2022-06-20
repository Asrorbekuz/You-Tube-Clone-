import React from 'react';

const Video = ({ video: { id: {videoId}, snippet: { title, channelTitle, description } } }) => {
   
     if(!videoId) return <p className="noResult">No Result </p>;
     const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
        <>
         <div className="videoIframe">
           <iframe 
                title="Video player"
                src={videoSrc}
                frameBorder="0"
                allowFullScreen
           />
         </div>   
            <div className="videoInfo">
                <h1 className="videoTitle">{title}</h1>
                <h3 className="channelTitle">{channelTitle}</h3>
                <p className="videoDescription">{description}</p>
            </div>
        </>
    );
};


export default Video;