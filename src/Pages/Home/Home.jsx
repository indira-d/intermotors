import React from 'react'
import Header from '../../Components/Header/Header'
import Slider from '../../Components/Slider/Slider'
import Catalogue from '../../Components/Catalogue/Catalogue'
import AboutCompany from '../../Components/AboutCompany/AboutCompany'
import Premium from '../../Components/Premium/Premium'
import Car from '../../Components/Car/Car'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
	<div>
		<Header/>
		<Slider />
		<Catalogue />
		<AboutCompany />
		<Premium />
		<Car />
		<Testimonials />
		<Footer />
	</div>
  )
}

export default Home