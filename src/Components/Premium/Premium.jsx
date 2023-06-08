import React, { useEffect, } from 'react'
import './Premium.css'
// import AOS from 'aos'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const Premium = () => {


	useEffect(() => {
	  gsap.from('.premium_img', {
		keyframes: {
			"0%":   { opacity: 1},
			"50%":  { opacity: 0}, // finetune with individual eases
			"100%": { opacity: 1},
			},
		    scrollTrigger: {trigger: '.premium_img'},
			duration: 2,
			delay: 2,
			ease: 'expo.out'
	    },
		)
	}, [])



  return (
	<div className='premium'>
		<style>
    </style>
		<div className="premium_img_block" data-aos="fade-right"  data-aos-duration="2000">
			<img src="/assets/16.png" alt="" className="premium_img" />
			<img src="/assets/17.png" alt="" className="premium_img1" />
		</div>
		<div className='text_wrapper'>
			<div className="premium_text_block" >
				<div className="premium_header" data-aos="fade-left" data-aos-duration="500">Премиальное качество, стиль и надежность</div>
				<div className="premium_subheader" data-aos="fade-left" data-aos-duration="1000">Китайские электромобили теперь доступнее в Кыргызстане и СНГ</div>
				<div className="premium_description" data-aos="fade-left" data-aos-duration="1500">Китай впереди планеты по развитию экономики и производству электромобилей. Они привлекают мировых дизайнеров, чтобы создавать автомобили с инновационным дизайном и высоким качеством. Китайцы стремятся занять лидирующие позиции на рынке, поэтому не экономят на материалах и предлагают длительные гарантии на аккумуляторы и электродвигатели. "INTERMOTORS" следит за развитием китайских производителей и предоставляет гарантийную поддержку клиентам.</div>
		   </div>
		</div>
	</div>
  )
}

export default Premium