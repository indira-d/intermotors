
import React from 'react'
import Header from '../../Components/Header/Header';
import { Carousel } from 'react-responsive-carousel';
import './CarDetails.css'

import { Link } from 'react-router-dom';
import CatalogueItem from '../../Components/Catalogue/CatalogueItem';
import Footer from '../../Components/Footer/Footer';

const CarDetails = () => {
  return (
	<div className='car_details'>
		<Header />
		<div className="car_slider">
				<Carousel 
					// showThumbs={false} 
					showStatus={false}
					autoPlay={true}
					showIndicators={false}
		
					>	
						<div className='slider_img_block'>
							<img src="/assets/car1.svg" className='slider_img' />
						</div>
						<div className='slider_img_block'>
							<img src="/assets/car2.svg" className='slider_img'/>
						</div>
						{/* <div className='slider_img_block'>
							<img src="/assets/car3.svg" className='slider_img'/>
						</div> */}
            </Carousel>
		</div>
	  <div className="car_details_dark">
		<div className="car_details_header">
			
			<div className="car_details_title">TESLA MODEL Y</div>
				<div className='car_header_block'>
				<button className="order_btn">Заказать</button>
				<div className="car_details_price">от $ 120 000</div>
				<div className="car_details_note1">Стоимость рассчитывается индивидуально</div>
			</div>
			<div className="car_details_note2">Не является публичной офертой.</div>
		</div>
		<div className="car_params">
			<div className="params_left">
				<div className="car_params_item">
					<div className="params_title">Вес аккумулятора:</div>
					<div className="params_value">500 кг</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Разгон 0-100 км/ч: </div>
					<div className="params_value">7,9 с </div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Максимальная скорость: </div>
					<div className="params_value">180 км/ч</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Ёмкость батареи, полная / полезная:</div>
					<div className="params_value">2 кВт⋅ч / 76,6 кВт⋅ч</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Тип аккумулятора:</div>
					<div className="params_value">литий-ионный</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">КФС:</div>
					<div className="params_value">0,28</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Запас хода (цикл WLTP):</div>
					<div className="params_value">447–521 км</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Электродвигатель:</div>
					<div className="params_value">2 шт</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Скорость:</div>
					<div className="params_value">200 км/ч</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Колесная база:</div>
					<div className="params_value">3111мм</div>
				</div>
			</div>
			<div className="params_right">
				<div className="car_params_item">
					<div className="params_title">Вес аккумулятора:</div>
					<div className="params_value">500 кг</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Разгон 0-100 км/ч: </div>
					<div className="params_value">7,9 с </div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Максимальная скорость: </div>
					<div className="params_value">180 км/ч</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Ёмкость батареи, полная / полезная:</div>
					<div className="params_value">2 кВт⋅ч / 76,6 кВт⋅ч</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Тип аккумулятора:</div>
					<div className="params_value">литий-ионный</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">КФС:</div>
					<div className="params_value">0,28</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Запас хода (цикл WLTP):</div>
					<div className="params_value">447–521 км</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Электродвигатель:</div>
					<div className="params_value">2 шт</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Скорость:</div>
					<div className="params_value">200 км/ч</div>
				</div>
				<div className="car_params_item">
					<div className="params_title">Колесная база:</div>
					<div className="params_value">3111мм</div>
				</div>
			</div>
			</div>
			<div className="car_details_description">
				Lexus UX предлагает уникальное сочетание компактных размеров, просторного салона, высокой посадки, а также захватывающей управляемости и динамики. Новая платформа позволила сделать центр тяжести автомобиля низким, а выверенная компоновка и тщательно подобранные настройки шасси обеспечили ему захватывающую управляемость, свойственную всем автомобилям бренда Lexus. 

Плавные и стремительные черты облика нового премиального компактного кроссовера Lexus UX в полной мере отражают все лучшие качества этого автомобиля. Смелый и привлекательный дизайн находит свое продолжение в интерьере, выполненном в лучших традициях мастеров такуми. В отделке салона использованы японские техники вышивки, эффектная перфорация и орнаменты, основанные на текстурах традиционной волокнистой японской бумаги «васи».


Модель UX 250h с новой электрической гибридной системой IV поколения объединяет в себе двухлитровый бензиновый четырехцилиндровый двигатель, электронную бесступенчатую трансмиссию и систему полного привода Lexus E-Four.
		</div>
	  </div>
		
		<div className="similars_header">Похожие авто</div>
		<div className="similar_cars">
					<Link to='/car/1' style={{textDecoration: 'none', color: 'inherit'}}><CatalogueItem /></Link>
					<Link to='/car/2' style={{textDecoration: 'none', color: 'inherit'}}><CatalogueItem /></Link>
					<Link to='/car/3' style={{textDecoration: 'none', color: 'inherit'}}><CatalogueItem /></Link>
					<Link to='/car/4' style={{textDecoration: 'none', color: 'inherit'}}><CatalogueItem /></Link>
		</div>
		<Footer />
	</div>
  )
}

export default CarDetails