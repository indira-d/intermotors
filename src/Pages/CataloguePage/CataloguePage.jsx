import React, { useEffect } from 'react'
import './CataloguePage.css'
import Header from '../../Components/Header/Header';
import CatalogueItem from '../../Components/Catalogue/CatalogueItem';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterByBrand, getCarDetails } from '../../redux/CarSlice';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import AOS from 'aos';


const CataloguePage = () => {
	const cars = useSelector(state => state.cars.cars)
	const dispatch = useDispatch()
	const categories = useSelector(state => state.cars.categories)
	
		useEffect(() => {
		 AOS.init({
			 delay: 100,
		 });  
	}, [])

	const items1 = categories.map((it) => ({
		key: it.id,
		label: `${it.name}`,
		}));

  return (
	<div className='catalogue_page'>
		<Header />
		<div className="catalogue_banner">
			<img src="/assets/banner.svg" alt="" className="banner_img" data-aos="zoom-out" data-aos-duration='3000'/>
			<div className="catalogue_main_content">
				<div className="catalogue_sidebar">
					<div className="category_filtr">Фильтр</div>
					<Sider >
							<Menu
								mode="inline"
								defaultSelectedKeys={['1']}
								defaultOpenKeys={['sub1']}
								style={{ height: '100%' }}
								items={items1}
								onClick={(e) => dispatch(filterByBrand(e.key))}
								className='filter_item'
							/>
						</Sider>
				</div>
				<div className="catalogue_main">
					{
						cars.map(car => (
							<CatalogueItem car={car}
											onClick={() => dispatch(getCarDetails(car.id))}
							/>					
						))
					}
				</div>
			</div>
		</div>
		<Footer />
		<ScrollToTop />
	</div>
  )
}

export default CataloguePage