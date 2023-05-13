import React from 'react'
import './Header.css'

const Header = () => {
  return (
	<div className='header'>
		<div className="logo">
			<img src='/assets/logo.svg' alt='' className='logo_img'/>
		</div>
		<div className="header_menu">
			<div className='line'>
				<div className='line1'></div>
				<div className='line2'></div>
				<div className='line3'></div>
			</div>
		</div>
	</div>
  )
}

export default Header