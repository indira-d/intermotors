import React from 'react'
import './Catalogue.css'
import CatalogueItem from './CatalogueItem'
import { Link } from 'react-router-dom'

const Catalogue = () => {
  return (
	<div className='catalogue'>
	<h2 className='h2'>Каталог машин</h2>
		
		<div className="catalogue_filter">
			<div className='btn_wrapper'>
				<Link to='/catalogue' className="green_outlined_btn" style={{textDecoration: 'none'}}>Посмотреть весь каталог</Link>
			</div>
			<div className="filter_block">
				<button className="brand_btn" style={{background: '#5fa618', color: 'white'}}>ВСЕ</button>
				<button className="brand_btn">BYD</button>
				<button className="brand_btn">XPENG</button>
				<button className="brand_btn">GAC</button>
				<button className="brand_btn">TESLA</button>
				<button className="brand_btn">NIO</button>
				<button className="brand_btn">ZEEKR</button>
				<button className="brand_btn">BMV</button>
				<button className="brand_btn">AUDI</button>
				<button className="brand_btn">LI</button>
				<button className="brand_btn">Toyota</button>
			</div>
		</div>
		<div className="catalogue_items_block">
			<CatalogueItem />
			<CatalogueItem />
			<CatalogueItem />
			<CatalogueItem />
			<CatalogueItem />
			<CatalogueItem />
			<CatalogueItem />
			<CatalogueItem />
		</div>
		<div className='btn_wrapper_end'>
				<Link to='/catalogue' className="green_outlined_btn" style={{textDecoration: 'none'}}>Посмотреть весь каталог</Link>
			</div>
	</div>
  )
}

export default Catalogue
