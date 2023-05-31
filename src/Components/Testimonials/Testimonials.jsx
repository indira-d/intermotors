import React from 'react'
import './Testimonials.css'
import { useSelector } from 'react-redux'

const Testimonials = () => {
	const testimonials = useSelector(state => state.cars.testimonials)
  return (
	<div className='testimonials_wrapper'>
		<div className="testimonials_header">Отзывы наших клиентов</div>
		<div className="testimonials">

			{
				testimonials?.map((it, index) => (
				<div className="testimonial" key={index}
				    data-aos={ index % 2 === 0 ? "fade-right" : "fade-left"} 
					data-aos-duration="2000">
					<div className="testimonial_img_block">
						<img src="/assets/avatar.svg" alt="" className="testimonial_img" />
					</div>
					<div className="testimonial_text">
						<div className="testimonial_name">{it.fullname}</div>
						<div className="testimonial_position">{it.job}</div>
						<div className="testimonial_description">{it.feedback_text}</div>
					</div>
				</div>
				 ))
			}
			
			

			{/* <div className="testimonial" data-aos="fade-left" data-aos-duration="2000">
				<div className="testimonial_img_block">
					<img src="/assets/avatar.svg" alt="" className="testimonial_img" />
				</div>
				<div className="testimonial_text">
					<div className="testimonial_name">Ник Перри</div>
					<div className="testimonial_position">Перекупщик</div>
					<div className="testimonial_description">Китайский электромобиль, который я купил, превзошел все мои ожидания. Прекрасный дизайн, передовые технологии и пожизненная гарантия от компании "INTERMOTORS" делают его лучшим выбором на рынке. Рекомендую всем!</div>
				</div>
			</div> */}
			
		</div>
		
	</div>
  )
}

export default Testimonials