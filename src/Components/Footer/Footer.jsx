import React from 'react'
import './Footer.css'
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
	<div className='footer'>
		<div className="footer_img_block">
			<img src="/assets/footer.svg" alt="" className="footer_img" />
		</div>
		<div className="footer_text_block">
			<div className="footer_header">Оставьте заявку</div>
			<div>
				<div className="footer_content">
				<div className="footer_contacts">
					 <div className="contacts_header">Контакты</div>
					 <div className="contact_item">
						<div className="contact_title">Email:</div>
						<div className="contact_value">sales@inter-motors.co</div>
					 </div>
					 <div className="contact_item">
						<div className="contact_title">Телефон:</div>
						<div className="contact_value">+996 702 744 444</div>
					 </div>
					 <div className="social_networks_icons">		
						{/* <div><InstagramOutlined style={{marginBottom: '15px'}} className='network_icon'/></div>
						<div><WhatsAppOutlined style={{marginBottom: '15px'}} className='network_icon'/></div>
						<div><FacebookOutlined className='network_icon'/></div> */}
						<Link to='https://www.instagram.com/inter_motors.kg/'><InstagramOutlined style={{marginBottom: '15px', color: 'white'}} className='network_icon'/></Link>
						<Link to='https://wa.me/996702744444'><WhatsAppOutlined style={{marginBottom: '15px', color: 'white'}} className='network_icon'/></Link>
						<Link to='https://www.facebook.com/people/Кылымбек-Кудайбердиев/pfbid02qfh2V5aKvvYWxe4aNzhReHQHCy5x7iwuVdUQD2bX7r9gEziKS4YKbHedo5ThAswMl/'><FacebookOutlined className='network_icon'  style={{ color: 'white'}}/></Link>
					</div>
					
				</div>
				<div className="footer_form">
					<input type="text" className="name" placeholder='Ваше имя'/>
					<input type="text" className="phone" placeholder='Ваш номер телефона'/>
					<textarea name="" id="" cols="30" rows="10" placeholder='Сообщение'></textarea>
					<button className="submit_btn">Отправить</button>
				</div>
			</div>
			</div>
		</div>
		<div className="bottom_footer">
			<div>ОсОО “Inter Motors”</div>
			<div>Все права защищены</div>
		</div>
	</div>
  )
}

export default Footer