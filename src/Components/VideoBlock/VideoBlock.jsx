import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import './VideoBlock.css'

const VideoBlock = () => {
	const [id, setVideoID] = useState()
	let video_url = "https://www.youtube.com/watch?v=K0BB1ld4WW4"

	useEffect(() => {
		function YouTubeGetID(){
			 let url = video_url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
   			setVideoID((url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0]);
			}

			YouTubeGetID()
	}, [])

	const opts = {
      height: '700px',
      width: '100%',
      playerVars: {
        autoplay: 1,
		   controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1
      },
    };

	 const onReady = (e) => {
    // access to player in all event handlers via event.target
    e.target.pauseVideo();
  }

	

  return (
	<div className='video'>
		<div className="video_block">
			<YouTube videoId={id} opts={opts} onReady={(e) => onReady(e)}/>
		</div>
		<div className="text_block" data-aos="fade-down"  data-aos-duration="1000">
		 	<div className="green_text">INTERMOTORS</div> &nbsp; - &nbsp; ПРЕМИАЛЬНОЕ КАЧЕСТВО, СТИЛЬ И НАДЕЖНОСТЬ
		</div>
	</div>
  )
}

export default VideoBlock