import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
	<div className='header'>
		<Link to='/' className="logo" style={{textDecoration:'none'}}>
			<img src='/assets/logo.svg' alt='' className='logo_img'/>
		</Link>
        <Link to={'/vincode-request'}
              style={{textDecoration: 'none'}}
              className="car_tracker_menu">
            CAR TRACKER
        </Link>
		{/*<div className="header_menu">*/}
		{/*	<div className='line'>*/}
		{/*		<div className='line1'></div>*/}
		{/*		<div className='line2'></div>*/}
		{/*		<div className='line3'></div>*/}
		{/*	</div>*/}
		{/*</div>*/}
	</div>
  )
}

export default Header