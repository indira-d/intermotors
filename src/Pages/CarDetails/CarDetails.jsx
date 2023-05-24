
import React from 'react'
import Header from '../../Components/Header/Header';
import { Carousel } from 'react-responsive-carousel';
import './CarDetails.css'
import { Link } from 'react-router-dom';
import CatalogueItem from '../../Components/Catalogue/CatalogueItem';
import Footer from '../../Components/Footer/Footer';
import { useSelector } from 'react-redux';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

const CarDetails = () => {
	const car = useSelector(state => state.cars.car)
	const similar = useSelector(state => state.cars.car.similar_cars)
  return (
	<div className='car_details'>
		<Header />
		<div className="car_slider">
				<Carousel 
					showStatus={false}
					autoPlay={true}
					showIndicators={false}
					showArrows={false}
					>	
						<div className='slider_img_block'>
							<img src="/assets/car1.svg" className='slider_img' />
						</div>
						<div className='slider_img_block'>
							<img src="/assets/car2.svg" className='slider_img'/>
						</div>
					
            </Carousel>
			
		</div>
	
	  <div className="car_details_dark">
		<div className="car_details_header">
			
			<div className="car_details_title">{car.category.name.toUpperCase()} {car.model.toUpperCase()}</div>
				<div className='car_header_block'>
				<button className="order_btn">Заказать</button>
				<div className="car_details_price">от $ {car.price}</div>
				<div className="car_details_note1">Стоимость рассчитывается индивидуально</div>
			</div>
			<div className="car_details_note2">Не является публичной офертой.</div>
		</div>
		<div className="car_params">
			<div className="params_left">
				<div className="car_params_item">
					<div className="params_title">Год выпуска:</div>
					<div className="params_value">{car.production_year}</div>
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
					<div className="params_title">Колесная база:</div>
					<div className="params_value">{car.wheelbase}</div>
				</div>
			</div>

			<div className="params_right">
				<div className="car_params_item">
					<div className="params_title"> Мощность:</div>
					<div className="params_value">{car.power}</div>
				</div>
				<div className="car_params_item">
					<div className="params_title"> Привод:</div>
					<div className="params_value">{car.drive_type}</div>
				</div>
				<div className="car_params_item">
					<div className="params_title"> Размеры авто:</div>
					<div className="params_value">{car.dimensions}</div>
				</div>
				<div className="car_params_item">
					<div className="params_title"> Максимальная скорость:</div>
					<div className="params_value">{car.top_speed}</div>
				</div>
				<div className="car_params_item">
					<div className="params_title"> Vin code:</div>
					<div className="params_value">{car.vincode}</div>
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
			{
				similar?.map((it, index) => 
					index < 8 ?<Link to={`/car/{it.id}`} style={{textDecoration: 'none', color: 'inherit'}}><CatalogueItem car={it}/></Link> : null)
			}
		</div>
		<Footer />
		<ScrollToTop />
	</div>
  )
}

export default CarDetails