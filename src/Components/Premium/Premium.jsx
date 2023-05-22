import React from 'react'
import './Premium.css'

const Premium = () => {
  return (
	<div className='premium'>
		<div className="premium_img_block">
			<img src="/assets/premium.svg" alt="" className="premium_img" />
		</div>
		<div className='text_wrapper'>
			<div className="premium_text_block">
				<div className="premium_header">Премиальное качество, стиль и надежность</div>
				<div className="premium_subheader">Китайские электромобили теперь доступнее в Кыргызстане и СНГ</div>
				<div className="premium_description">Китай впереди планеты по развитию экономики и производству электромобилей. Они привлекают мировых дизайнеров, чтобы создавать автомобили с инновационным дизайном и высоким качеством. Китайцы стремятся занять лидирующие позиции на рынке, поэтому не экономят на материалах и предлагают длительные гарантии на аккумуляторы и электродвигатели. "INTERMOTORS" следит за развитием китайских производителей и предоставляет гарантийную поддержку клиентам.</div>
		   </div>
		</div>
	</div>
  )
}

export default Premium