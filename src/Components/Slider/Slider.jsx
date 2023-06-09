import React from 'react'
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Slider = ({executeScroll}) => {
	const contacts = useSelector(state => state.cars.contacts)
	const sliderData = useSelector(state => state.cars.sliderData)
  return (
	<div className="slider" key={executeScroll}>
		<div className="intermotors">INTER MOTORS</div>
		<div className='slider_wrapper'>
					<div className="left_block"> 
						<div color='slider_text_block'>
							<h2 className='slider_header'>{sliderData?.title}</h2>
							<div className="slider_text">{sliderData?.description}</div>
							<button className="slider_button" onClick={() => executeScroll()}>Подробнее</button>
						</div>
						{
							contacts?.map((it, index) => (
								<div className="social_networks" key={index}>
									<Link to={`${it?.instagram}`}><InstagramOutlined style={{marginBottom: '15px', color: 'white'}} className='network_icon'/></Link>
									<Link to={`${it?.whatsapp}`}><WhatsAppOutlined style={{marginBottom: '15px', color: 'white'}} className='network_icon'/></Link>
									<Link to={`${it?.facebook}`}><FacebookOutlined className='network_icon'  style={{ color: 'white'}}/></Link>
								</div>
							))
						}
					</div>
			
			<div className="right_block">
				<div className="carousel">
					<Carousel 
					    style={{transition: 'all 0.5s ease-in'}}
						showThumbs={false} 
						showStatus={false}
						autoPlay={true}
						interval={4000}
						infiniteLoop={true}
                        showArrows={false}
						>
						{
							sliderData?.main_slider_images?.map((it, index) => (
								<div className='slider_img_block' key={index}>
									<img src={it?.image} className='slider_img' />
								</div>
							))
						}
					</Carousel>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Slider