import React from 'react'

const CatalogueItem = ({car}) => {
  return (
	<div className="catalogue_item">
		<div className="catalogue_item_img">
			<img src={car?.images[0]?.image} alt='' className='catalogue_img'/>
		</div>
		<div className="cat_it_wrapper">
			<div className="catalogue_item_header">
			<div className="cat_it_name">{car?.model}</div>
			<div className="cat_it_price">$ {car?.price}</div>
		</div>
		<div className="cat_item_type">Standart</div>
		
		<div className="params_header">Параметры машины</div>
		<div className="cat_item_params">
			<div className="params_item">
				<div className="params_item_img">
					<img src='/assets/battery.svg' alt='' className='params_icon'/>
				</div>
				<div className="params_item_text">{car?.driving_range}</div>
			</div>
			<div className="params_item">
				<div className="params_item_img">
					<img src='/assets/buttery2.svg' alt='' className='params_icon'/>
				</div>
				<div className="params_item_text">{car?.power}</div>
			</div>
			<div className="params_item">
				<div className="params_item_img">
					<img src='/assets/speed.svg' alt='' className='params_icon'/>
				</div>
				<div className="params_item_text">{car?.top_speed}</div>
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