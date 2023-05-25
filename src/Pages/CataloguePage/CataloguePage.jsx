import React from 'react'
import './CataloguePage.css'
import Header from '../../Components/Header/Header';
import CatalogueItem from '../../Components/Catalogue/CatalogueItem';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterByBrand, getCarDetails } from '../../redux/CarSlice';


const CataloguePage = () => {
	const cars = useSelector(state => state.cars.cars)
	const dispatch = useDispatch()
	const categories = useSelector(state => state.cars.categories)

	const items1 = categories.map((it) => ({
		key: it.id,
		label: `${it.name}`,
		}));

  return (
	<div className='catalogue_page'>
		<Header />
		<div className="catalogue_banner">
			<img src="/assets/banner.svg" alt="" className="banner_img" />
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
	</div>
  )
}

export default CataloguePage