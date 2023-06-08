import React from 'react'
import './Catalogue.css'
import CatalogueItem from './CatalogueItem'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { filterByBrand, getCarDetails } from '../../redux/CarSlice';


const Catalogue = () => {
	const cars = useSelector(state =>  state.cars.cars)
	const dispatch = useDispatch()
	const categories = useSelector(state => state.cars.categories)

	


  return (
	<div className='catalogue'>

	  <h2 className='h2' data-aos="fade-down" data-aos-duration='1000'>Каталог машин</h2>
		<div className="catalogue_filter">
			<div className='btn_wrapper'>
				<Link to='/catalogue' className="green_outlined_btn" style={{textDecoration: 'none'}} data-aos="fade-right" data-aos-duration='1000'>Посмотреть каталог</Link>
			</div>
			<div className="filter_block" data-aos="fade-left" data-aos-duration='1000'>
				<Link to='/catalogue' className="brand_btn" style={{background: '#5fa618', border: '1px solid #5fa618',  color: 'white', textDecoration: 'none', textAlign: 'center'}}>ВСЕ</Link>
				{
					categories?.map(it => (
					<button className="brand_btn"
							key={it.id}
							onClick={() => dispatch(filterByBrand(it.id))}
							>{it.name}</button>
					))
				}
			</div>
		</div>
		<div className="catalogue_items_block" >
			{
				cars?.map((car, index) => (
					index < 12 ?
						<CatalogueItem
						    key={index}
							car={car}
							onClick={() => dispatch(getCarDetails(car.id))}
						/>
					: null
				))
			}
		</div>
		<div className='btn_wrapper_end'>
			<Link to='/catalogue' className="green_outlined_btn" style={{textDecoration: 'none'}} data-aos="zoom-in" data-aos-duration='1000'>Посмотреть весь каталог</Link>
		</div>
	</div>
  )
}

export default Catalogue
