import React from 'react'

const CatalogueItem = () => {
  return (
	<div className="catalogue_item">
		<div className="catalogue_item_img">
			<img src='/assets/car3.svg' alt='' className='catalogue_img'/>
		</div>
		<div className="cat_it_wrapper">
			<div className="catalogue_item_header">
			<div className="cat_it_name">Tesla Model  S</div>
			<div className="cat_it_price">$ 124.000</div>
		</div>
		<div className="cat_item_type">Standart</div>
		
		<div className="params_header">Параметры машины</div>
		<div className="cat_item_params">
			<div className="params_item">
				<div className="params_item_img">
					<img src='/assets/battery.svg' alt='' className='params_icon'/>
				</div>
				<div className="params_item_text">630 km</div>
			</div>
			<div className="params_item">
				<div className="params_item_img">
					<img src='/assets/buttery2.svg' alt='' className='params_icon'/>
				</div>
				<div className="params_item_text">410 н.м/220 кВт</div>
			</div>
			<div className="params_item">
				<div className="params_item_img">
					<img src='/assets/speed.svg' alt='' className='params_icon'/>
				</div>
				<div className="params_item_text">120 km/h</div>
			</div>
		</div>	
			<div className="cat_item_buttons">
				<button className="btn_green">Заказать</button>
				<button className="btn_transparent">Подробнее</button>
			</div>
		
		</div>
		


	</div>
  )
}

export default CatalogueItem