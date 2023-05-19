import React, { useState } from 'react'
import './VincodeResponce.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { useDispatch } from 'react-redux'
import { findCarByVincode } from '../../redux/CarSlice'
import { useNavigate } from "react-router-dom";




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
				<div className="req_form_title">Поиск по <div className='green'>VIN Code</div></div>
				<div className="req_form_subtitle">Узнайте всё о своём авто по VIN-коду быстро и удобно.</div>
				<div className="req_form_input">
					<input type='text' 
					placeholder='Введите VIN Code вашего авто' 
					className='vincode_input'
					onChange={(e) => setVincode(e.target.value)}
					/>
				</div>
				<button 
					className="req_form_btn"
					onClick={() => findCar()}
					>Найти машину</button>
			</div>
		</div>
		
		<div className="v_req_text">
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
		<Footer />
	</div>
  )
}

export default VincodeRequest