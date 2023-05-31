import React, { useEffect, useRef } from 'react'
import Header from '../../Components/Header/Header'
import Slider from '../../Components/Slider/Slider'
import Catalogue from '../../Components/Catalogue/Catalogue'
import AboutCompany from '../../Components/AboutCompany/AboutCompany'
import Premium from '../../Components/Premium/Premium'
import Car from '../../Components/Car/Car'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/Footer/Footer'
import { getCars, getCategories, getContacts, getSliderData, getTestimonials } from '../../redux/CarSlice'
import { useDispatch } from 'react-redux'
import './Home.css'

const Home = () => {
	const dispatch = useDispatch()
	const myRef = useRef(null)

  useEffect(() => {
	dispatch(getCars())
	dispatch(getSliderData())
	dispatch(getCategories())
	dispatch(getTestimonials())
	dispatch(getContacts())
  }, [dispatch])

   const executeScroll = () => {
	console.log('test')
	myRef.current.scrollIntoView()
   }

  return (
	<div className='home'>
		<Header/>
		<Slider executeScroll={executeScroll}/>
		<Catalogue />
		<div ref={myRef}>
			<AboutCompany ref={myRef}/>
		</div>
		<Premium />
		<Car />
		<Testimonials />
		<Footer />
	</div>
  )
}

export default Home