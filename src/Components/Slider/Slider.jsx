import React from 'react'
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

const Slider = () => {
  return (
	<div className="slider">
		<div className="intermotors">INTER MOTORS</div>
		<div className="left_block">
			<h2>INTER MOTORS</h2>
			<div className="slider_text">Профессиональный подбор и продажа автомобилей в Бишкеке</div>
			 <button className="slider_button">Подробнее</button>
			 <div className="social_networks">
				<div><InstagramOutlined style={{marginBottom: '15px'}} className='network_icon'/></div>
				<div><WhatsAppOutlined style={{marginBottom: '15px'}} className='network_icon'/></div>
				<div><FacebookOutlined className='network_icon'/></div>
			 </div>
		</div>
		<div className="right_block">
			<div className="carousel">
				<Carousel 
					showThumbs={false} 
					showStatus={false}
					autoPlay={true}
					>	
				<div className='slider_img_block'>
                    <img src="/assets/car1.svg" className='slider_img' />
                </div>
				<div className='slider_img_block'>
                    <img src="/assets/car2.svg" className='slider_img'/>
                </div>
                <div className='slider_img_block'>
                    <img src="/assets/car1.svg" className='slider_img' />
                </div>
               
			
            </Carousel>
			</div>
		</div>
		
	</div>
  )
}

export default Slider