import React from 'react'
import ReactPlayer from 'react-player';

function Rough() {
    const handleProgress = (state:any) => {
        // Handle video progress (e.g., update UI based on current time)
        console.log('Video progress:', state.played);
      };
    
      const handleEnded = () => {
        // Handle video end event
        console.log('Video ended');
      };

  return (
    <>
       <div className='container mx-auto max-w-7xl lg:px-8'>
            <div className='flex justify-center'>
            <ReactPlayer
        url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" // replace with your video URL
        controls
        playing
        width="100%"
        height="100%"
        onProgress={handleProgress}
        onEnded={handleEnded}
      />
            </div>
       </div>
    </>
  )
}

export default Rough