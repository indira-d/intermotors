
import React, { useState } from 'react'
import Header from '../../Components/Header/Header';
import { Carousel } from 'react-responsive-carousel';
import './CarDetails.css'
import { Link } from 'react-router-dom';
import CatalogueItem from '../../Components/Catalogue/CatalogueItem';
import Footer from '../../Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import { Modal } from 'antd';
import { createOrder } from '../../redux/CarSlice';

const CarDetails = () => {
	const car = useSelector(state => state.cars.car)
	const similar = useSelector(state => state.cars.car.similar_cars)
	const [isModalOpen, setIsModalOpen] = useState()
    const [secondModalOpen, setSecondModalOpen] = useState(false);
	const dispatch = useDispatch()
	const [name, setName] = useState()
	const [phone, setPhone] = useState()
	const [carId, setCarId] = useState()

	const makeOrder = async () => {
        dispatch(createOrder(
                {
                   phone_number: phone,
				   name,
				   vehicle: carId
                }
        ))
        setIsModalOpen(false);
        setSecondModalOpen(true)
    };

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
					{
						car?.images?.map(it => (
							<div className='slider_img_block'>
								<img src={`${it?.image}`} className='slider_img' />
							</div>
						))
					}				
            </Carousel>
			
		</div>
	
	  <div className="car_details_dark">
		<div className="car_details_header">
			<div className="car_details_title">{car?.category?.name.toUpperCase()} {car?.model?.toUpperCase()}</div>
				<div className='car_header_block'>
				<button className="order_btn" onClick={() => {setIsModalOpen(true); setCarId(car?.id)}}>Заказать</button>
				<div className="car_details_price">от $ {car?.price}</div>
				<div className="car_details_note1">Стоимость рассчитывается индивидуально</div>
			</div>
			<div className="car_details_note2">Не является публичной офертой.</div>
		</div>
		<div className="car_params">
			<div className="params_left">
				<div className="car_params_item">
					<div className="params_title">Год выпуска:</div>
					<div className="params_value">{car?.production_year}</div>
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
					<div className="params_value">{car?.wheelbase}</div>
				</div>
			</div>

			<div className="params_right">
				<div className="car_params_item">
					<div className="params_title"> Мощность:</div>
					<div className="params_value">{car?.power}</div>
				</div>
				<div className="car_params_item">
					<div className="params_title"> Привод:</div>
					<div className="params_value">{car?.drive_type}</div>
				</div>
				<div className="car_params_item">
					<div className="params_title"> Размеры авто:</div>
					<div className="params_value">{car?.dimensions}</div>
				</div>
				<div className="car_params_item">
					<div className="params_title"> Максимальная скорость:</div>
					<div className="params_value">{car?.top_speed}</div>
				</div>
				<div className="car_params_item">
					<div className="params_title"> Vin code:</div>
					<div className="params_value">{car?.vincode}</div>
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

		  <Modal 
		    width={300}
			height={270}
			onCancel={() =>  setIsModalOpen(false)}
			style={{border: '3px solid #5fa618', background: 'white'}}
			cancelButtonProps={{style: { display: 'none' }}}
			okButtonProps={{ style: { display: 'none' } }}
		    title="Сделайте заказ" open={isModalOpen}>
				<div className="modal">
					<input type="text" placeholder='Ваше имя' onChange={(e) => setName(e.target.value)} className='input_modal'/>
					<input type="text" placeholder='Ваш номер телефона' onChange={(e) => setPhone(e.target.value)} className='input_modal'/>
					<button onClick={() => makeOrder()} className='modal_btn'>Отправить</button>
				</div>
			
		</Modal>
		  <Modal
			width={350}
			open={secondModalOpen}
			style={{border: '2px solid #5fa618', background: 'white'}}
			onCancel={() =>  setSecondModalOpen(false)}
			cancelButtonProps={{style: { display: 'none' }}}
			okButtonProps={{ style: { display: 'none' } }}
		>
			<div className='secondModal'>
				<div style={{ width: '100%', display: 'flex'}}>
					<img src='/assets/CheckCircle.svg' style={{width: '70px', height: '70px',  margin: '10px auto'}}/>
				</div>
				<div style={{color: 'black', textAlign: 'center'}}><strong>Спасибо за Ваш заказ!</strong> </div>
				<div style={{ textAlign: 'center'}}>Мы перезвоним как можно скорее!</div>
				<button className='modal_btn' onClick={() =>  setSecondModalOpen(false)}>Закрыть</button>
			</div>
		</Modal>
		<Footer />
		<ScrollToTop />
	</div>
  )
}

export default CarDetails