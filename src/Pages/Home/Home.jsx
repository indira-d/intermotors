import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Slider from '../../Components/Slider/Slider'
import Catalogue from '../../Components/Catalogue/Catalogue'
import AboutCompany from '../../Components/AboutCompany/AboutCompany'
import Premium from '../../Components/Premium/Premium'
import Car from '../../Components/Car/Car'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/Footer/Footer'
import { getCars, getCategories, getSliderData } from '../../redux/CarSlice'
import { useDispatch } from 'react-redux'
import './Home.css'

const Home = () => {
	const dispatch = useDispatch()

  useEffect(() => {
	dispatch(getCars())
	dispatch(getSliderData())
	dispatch(getCategories())
  }, [dispatch])

  return (
	<div className='home'>
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