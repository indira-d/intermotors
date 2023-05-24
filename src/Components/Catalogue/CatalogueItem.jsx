import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../redux/CarSlice';

const CatalogueItem = ({car}) => {
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
	<div className="catalogue_item">
		<div className="catalogue_item_img">
			<img src={car?.images[0]?.image} alt='' className='catalogue_img'/>
		</div>
		<div className="cat_it_wrapper">
			<div className="catalogue_item_header">
			<div className="cat_it_name">{car?.model}</div>
			<div className="cat_it_price">$ {car?.price}</div>
		</div>
		<div className="cat_item_type">Standart</div>
		
		<div className="params_header">Параметры машины</div>
		<div className="cat_item_params">
			<div className="params_item">
				<div className="params_item_img">
					<img src='/assets/battery.svg' alt='' className='params_icon'/>
				</div>
				<div className="params_item_text">{car?.driving_range}</div>
			</div>
			<div className="params_item">
				<div className="params_item_img">
					<img src='/assets/buttery2.svg' alt='' className='params_icon'/>
				</div>
				<div className="params_item_text">{car?.power}</div>
			</div>
			<div className="params_item">
				<div className="params_item_img">
					<img src='/assets/speed.svg' alt='' className='params_icon'/>
				</div>
				<div className="params_item_text">{car?.top_speed}</div>
			</div>
		</div>	
			<div className="cat_item_buttons">
				<button className="btn_green" onClick={() => {setIsModalOpen(true); setCarId(car.id)}}>Заказать</button>
				<Link to={`/car/:${car.id}`} style={{textDecoration: 'none', color: 'inherit', fontSize: '12px'}} className="btn_transparent" >Подробнее</Link>
			</div>
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

	</div>
  )
}

export default CatalogueItem