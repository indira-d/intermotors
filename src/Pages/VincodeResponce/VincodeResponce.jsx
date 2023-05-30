
import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './VincodeResponce.css'

const VincodeResponce = () => {
	const carTracker = useSelector(state => state.cars.carTraker)
	const selectedCar = useSelector(state => state.cars.car)

	const images = carTracker?.map(it => (
		 {
			original: it.photo1,
			thumbnail: it.photo1,
		},
		{
			original: it.photo2,
			thumbnail: it.photo2,
		},
		{
			original: it.photo3,
			thumbnail: it.photo3,
		}, 
		{
			original: it.photo4,
			thumbnail: it.photo4,
		}
			)
		)
 
  return (
	<div className='vincode_responce'>
		<Header />
		<div>
			{
			    carTracker?.map(car => (
				<div>
					<div className='car_treker_top_block'>
						<div className="car_tracker_img_block" data-aos="fade-right" data-aos-duration='3000'>
							<ImageGallery 
								thumbnailPosition='right'
								items = {[
									{
										original: car.photo1,
										thumbnail: car.photo1,
									},
									{
										original: car.photo2,
										thumbnail: car.photo2,
									},
									{
										original: car.photo2,
										thumbnail: car.photo2,
									}, 
									{
										original: car.photo1,
										thumbnail: car.photo1,
									}
								]}
								showFullscreenButton={false}
								showPlayButton={false}
								showNav={false}
								thumbnailWidth={500}
								thumbnailHeight={500}
								className={'imageGallary'}
								/>
						</div>	

						<div className="car_traker_details" data-aos="fade-left" data-aos-duration='3000'>
								<div className="v_res_title" >{selectedCar.category.name} &nbsp; {selectedCar.model}</div>
								<div className="checkpoints" data-aos-duration='500'>Чек-поинты:</div>

								<div className="checkpoint_item">
									<div className="checkpoint_subtile">Фотографии сделаны:</div>
									<div className="checkpoint_value">{car.checkpoint_name}</div>
								</div>
								<div className="checkpoint_item" >
									<div className="checkpoint_subtile">Дата:</div>
									<div className="checkpoint_value">{car.checkpoint_date}</div>
								</div>
								<div className="checkpoint_item">
									<div className="checkpoint_subtile">Местоположение:</div>
									<div className="checkpoint_value">{car.location}</div>
								</div>
								<div className="checkpoint_item">
									<div className="checkpoint_subtile">Контакты перевозчика:</div>
									<div className="checkpoint_value">{car.info_from_company}</div>
								</div>
						</div>

					</div>

					<div className="car_traker_description">
						<h2>Сообщение от перевозчика:</h2>
						<div>
						<p>Уважаемый клиент,</p>
						Мы хотим поделиться хорошей новостью - ваш автомобиль безопасно и надежно находится в пути к заданному пункту назначения. Мы принимаем особую заботу о сохранности вашего транспортного средства, и каждый шаг в процессе перевозки выполняется с максимальной осторожностью.
						Перед загрузкой автомобиля мы проводим осмотр и проверку, чтобы убедиться в его идеальном состоянии. Наша команда высококвалифицированных специалистов гарантирует правильную фиксацию и защиту вашего автомобиля на протяжении всего пути.
					</div>
					</div>
				</div>	
				))
			}
				

			
		</div>

		<Footer />
	</div>
  )
}

export default VincodeResponce