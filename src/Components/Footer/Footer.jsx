import React, { useState } from 'react'
import './Footer.css'
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createFeedback } from '../../redux/CarSlice'
import { Modal } from 'antd';

const Footer = () => {
	const contacts = useSelector(state => state.cars.contacts)
		
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const dispatch = useDispatch()
	const [secondModalOpen, setSecondModalOpen] = useState(false);

	const sendFeedback = () => {
	   dispatch(createFeedback(
		{
			name,
			phone,
			feedback_text: message
		}
	   ))

	   setSecondModalOpen(true)
	   setName('')
	   setPhone('')
	   setMessage('')

	}

  return (
	<div className='footer'>
		<div className="footer_img_block">
			<img src="/assets/footer.svg" alt="" className="footer_img" />
		</div>
		<div className="footer_text_block">
			<div className="footer_header" data-aos="fade-down" data-aos-duration="3000" >ОБРАТНАЯ СВЯЗЬ</div>
			<div>
				<div className="footer_content">
				<div className="footer_contacts"  data-aos="fade-right" data-aos-duration="3000">
					{
						contacts.map((it, index) => (
							<div key={index}>
								<div className="contacts_header">Контакты</div>
								<div className="contact_item">
									<div className="contact_title">Email:</div>
									<div className="contact_value">{it?.email}</div>
								</div>
								<div className="contact_item">
									<div className="contact_title">Телефон:</div>
									<div className="contact_value">{it?.phone}</div>
								</div>
								<div className="social_networks_icons">		
									<Link to={`${it?.instagram}`}><InstagramOutlined style={{marginBottom: '15px', color: 'white'}} className='network_icon' data-aos="zoom-in-down" data-aos-duration="1000"/></Link>
									<Link to={`${it?.whatsapp}`}><WhatsAppOutlined style={{marginBottom: '15px', color: 'white'}} className='network_icon' data-aos="zoom-in-down" data-aos-duration="2000"/></Link>
									<Link to={`${it?.facebook}`}><FacebookOutlined className='network_icon'  style={{ color: 'white'}} data-aos="zoom-in-down" data-aos-duration="3000"/></Link>
								</div>				
							</div>
						))
					}
					</div>
					 
				<div className="footer_form" data-aos="fade-left" data-aos-duration="3000">
					<input type="text" 
					       className="name" 
						   placeholder='Ваше имя' 
						   value={name}
						   onChange={(e) => setName(e.target.value)}/>
					<input 
					       type="text" 
						   className="phone" 
						   value={phone}
						   placeholder='Ваш номер телефона' 
						   onChange={(e) => setPhone(e.target.value)}/>
					<textarea 
					       name="" 
						   id="" 
						   cols="30" 
						   rows="10" 
						   value={message}
						   placeholder='Сообщение' 
						   onChange={(e) => setMessage(e.target.value)}></textarea>
					<button className="submit_btn" onClick={sendFeedback} data-aos="zoom-in" data-aos-duration="2000">Отправить</button>
				</div>
			</div>
			</div>
		</div>
		<div className="bottom_footer">
			<div>ОсОО “Inter Motors”</div>
			<div>Все права защищены</div>
		</div>
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
				<div style={{color: 'black', textAlign: 'center'}}><strong>Ваше сообщение отправлено!</strong> </div>
				<div style={{ textAlign: 'center', margin: '10px', color: 'gray'}}>Спасибо за обратную связь!</div>
				<button className='modal_btn' onClick={() =>  setSecondModalOpen(false)}>Закрыть</button>
			</div>
		</Modal>
	</div>
	
  )
}

export default Footer