import React, { useState } from 'react'
import './VincodeResponce.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { useDispatch } from 'react-redux'
import { findCarByVincode } from '../../redux/CarSlice'
import { useNavigate } from "react-router-dom";
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop'




const VincodeRequest = () => {
	const [vincode, setVincode] = useState()
	const dispatch = useDispatch()
    let navigate = useNavigate();

	const findCar = () => {
		dispatch(findCarByVincode(vincode))
		navigate('/vincode-responce')
	}
  return (
	<div className='v_req_wrapper'>
		<div className='v_req_header'>
			<Header />
		</div>
		<div className="v_req_form">
			<div className="v_req_img_block">
				<img className="v_req_img" src='/assets/vincode.svg'/>
			</div>	
			<div className="v_req_form_text">
				<div className="req_form_title" data-aos="fade-down" data-aos-duration='2000' >Поиск по <div className='green'>VIN Code</div></div>
				<div className="req_form_subtitle" data-aos="fade-down" data-aos-duration='3000' delay='1000'>Узнайте всё о своём авто по VIN-коду быстро и удобно.</div>
				<div className="req_form_input">
					<input type='text' 
					placeholder='Введите VIN Code вашего авто' 
					className='vincode_input'
					onChange={(e) => setVincode(e.target.value)}
					/>
				</div>
				<button 
				    data-aos="zoom-in" data-aos-duration='2000'
					className="req_form_btn"
					onClick={() => findCar()}
					>Найти машину</button>
			</div>
		</div>
		
		<div className="v_req_text" >
			<div data-aos="fade-up" data-aos-duration='2000'>
				<div>
				С нашим уникальным инструментом по поиску местоположения автомобиля по VIN-коду, вы сможете получить последний известный адрес, где ваше транспортное средство было зафиксировано
				</div>
				<div>
					Когда ваш автомобиль доставляется перевозчиком, каждый этап перевозки будет документироваться. Перевозчик будет фотографировать вашу машину и загружать эти фотографии на наш сайт. Вы сможете видеть, куда было доставлено ваше авто, а также просматривать отчет, состоящий из 4-х фотографий, чтобы убедиться в сохранности и состоянии вашего автомобиля.
				</div>
				<div>
					Мы предоставляем вам простой доступ к этой информации через наш сайт, где вы сможете ввести VIN-код своего автомобиля и просмотреть последний известный адрес доставки, а также просмотреть фотографии отчета.
		
				</div>	
				<div>
				Таким образом, наш инструмент поможет вам быть в курсе текущего местоположения вашего автомобиля, а также предоставит документальное подтверждение доставки в виде фотографий отчета.
				</div>
			</div>
			
		</div>
		<Footer />
		<ScrollToTop />
	</div>
  )
}

export default VincodeRequest