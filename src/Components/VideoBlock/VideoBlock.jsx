import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoBlock.css';

const video_url = 'https://www.polestar.com/dato-assets/11286/1669725839-06-polestar-2-infotainment-driver-profiles-d.mp4';

const VideoBlock = () => {
	const [isVideoReady, setVideoReady] = useState(true);

	const onReady = () => {
		// Pause the video
		setVideoReady(false);
	};

	return (
		<div className="video">
			<div className="video_block">
				<div className="player-wrapper">
					<ReactPlayer url={video_url} playing={isVideoReady} controls={false} muted loop width="100%" height="100%" onReady={onReady} />
				</div>
			</div>
			<div className="text_block">
				<div className="matte-glass-block" data-aos="fade-down" data-aos-duration="500">
					<div className="text_block_text">
						<div className="" data-aos="fade-left" data-aos-duration="500">Премиальное качество, стиль и надежность</div>
						<div className="" data-aos="fade-left" data-aos-duration="1000">Китайские электромобили теперь доступнее в Кыргызстане и СНГ</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoBlock;
