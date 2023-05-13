import React from 'react'
import './CataloguePage.css'
import Header from '../../Components/Header/Header';
import CatalogueItem from '../../Components/Catalogue/CatalogueItem';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import Footer from '../../Components/Footer/Footer';


const CataloguePage = () => {

	const items1 = ['Toyota', 'Honda', 'Subary', 'Audi', 'BMV', 'Mercedes'].map((key) => ({
		key,
		label: `nav ${key}`,
		}));

  return (
	<div className='catalogue_page'>
		<Header />
		<div className="catalogue_banner">
			<img src="/assets/banner.svg" alt="" className="banner_img" />
			<div className="catalogue_main_content">
				<div className="catalogue_sidebar">
					<div className="category_filtr">Фильтр</div>
					<Sider style={{ color: 'red' }}  width={300}>
							<Menu
								mode="inline"
								defaultSelectedKeys={['1']}
								defaultOpenKeys={['sub1']}
								style={{ height: '100%' }}
								items={items1}
							/>
						</Sider>
				</div>
				<div className="catalogue_main">
					<CatalogueItem/>
					<CatalogueItem/>
					<CatalogueItem/>
					<CatalogueItem/>
					<CatalogueItem/>
					<CatalogueItem/>
					<CatalogueItem/>
					<CatalogueItem/>
					<CatalogueItem/>
				</div>
			</div>
		</div>
		<Footer />
	</div>
  )
}

export default CataloguePage