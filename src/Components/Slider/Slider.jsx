import React from 'react'
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
	<div className="slider">
		<div className="intermotors">INTER MOTORS</div>
		<div className='slider_wrapper'>
			<div className="left_block">
				<div color='slider_text_block'>
					<h2 className='slider_header'>INTER MOTORS</h2>
					<div className="slider_text">Профессиональный подбор и продажа автомобилей в Бишкеке</div>
					<button className="slider_button">Подробнее</button>
				</div>
				<div className="social_networks">
					<Link to='https://www.instagram.com/inter_motors.kg/'><InstagramOutlined style={{marginBottom: '15px', color: 'white'}} className='network_icon'/></Link>
					<Link to='https://wa.me/996702744444'><WhatsAppOutlined style={{marginBottom: '15px', color: 'white'}} className='network_icon'/></Link>
					<Link to='https://www.facebook.com/people/Кылымбек-Кудайбердиев/pfbid02qfh2V5aKvvYWxe4aNzhReHQHCy5x7iwuVdUQD2bX7r9gEziKS4YKbHedo5ThAswMl/'><FacebookOutlined className='network_icon'  style={{ color: 'white'}}/></Link>
				</div>
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
		
		
		
	</div>
  )
}

export default Slider