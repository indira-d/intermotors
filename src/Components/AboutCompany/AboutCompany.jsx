import React, { useEffect} from 'react'
import './AboutCompany.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutCompany = () => {
	
	useEffect(() => {
		 AOS.init({
			 delay: 100,
		 });  
	}, [])


  return (
	<div className='about'>
		<div className="about_content">
			<div className="about_content_left">
				<div className="main_header">О компании</div>
				<div className="about_subheader">
					<div className="green_subheader">Компания</div> &nbsp;
					<div className="bold_subheader">«InterMOTORS»</div>
				</div>
					<div className="about_description" >Компания «InterMOTORS» предоставляет услуги по поставке электромобилей из Китая в Кыргызстан и Россию, а также по странам СНГ. Мы являемся молодой компанией в этом направлении, но уже многие годы мы занимаемся логистическими операциями. Китайские заводы являются одними из лучших в мире по производству электрокаров. У нас есть специальная команда профессионалов в Китае базирующаяся в четырех провинциях (Ухань, Гуанжоу, Чиньдау, Ханжоу) мы вместе с командой с радостью подберем для Вас лучший вариант!</div>
				    <button className="about_btn" data-aos="zoom-in" data-aos-duration='2000'>Oб электромобилях</button>
			</div>

			<div className="about_content_right">
				<div className="about_img_block">
					<img src="/assets/about.svg" alt="" className="about_img" data-aos="fade-down-left" data-aos-duration="3000"/>
				</div>
			</div>
		</div>
		
		<div className="about_content_bottom">
			<div className="about_bottom_item"  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
				<div className="about_bottom_img_block">
					<img src="/assets/icon1.svg" alt="" className="about_icon" />
				</div>
				<div className="about_icons_subheader">
					Грамотность
				</div>
				<div className="about_icons_description">
					Полное ведение и осуществление сделки с Китаем
				</div>
			</div>
			<div className="about_bottom_item" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
				<div className="about_bottom_img_block">
					<img src="/assets/icon2.svg" alt="" className="about_icon" />
				</div>
				<div className="about_icons_subheader">
					Бесплатная консультация 
				</div>
				<div className="about_icons_description">
					Подробная консультация по всем вопросам, связанная с электромобилями
				</div>
			</div>
			<div className="about_bottom_item" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
				<div className="about_bottom_img_block">
					<img src="/assets/icon4.svg" alt="" className="about_icon" />
				</div>
				<div className="about_icons_subheader">
					Надежность
				</div>
				<div className="about_icons_description">
					Оформление и проверка всей необходимой документации
				</div>
			</div>
			<div className="about_bottom_item" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500">
				<div className="about_bottom_img_block">
					<img src="/assets/icon3.svg" alt="" className="about_icon" />
				</div>
				<div className="about_icons_subheader">
					Быстрота
				</div>
				<div className="about_icons_description">
					Быстрые сроки доставки (от 20-45 дней)
				</div>
			</div>
		</div>
	</div>
  )
}

export default AboutCompany