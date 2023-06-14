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
import Map from '../../Components/Map/Map'
import Animation from '../../Components/Animation/Animation'
import VideoBlock from '../../Components/VideoBlock/VideoBlock'



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
	myRef.current.scrollIntoView()
   }

  return (
	<div className='home'>
		<Header/>
		<Slider executeScroll={executeScroll}/>
		<Catalogue />
		<div ref={myRef}>
			<AboutCompany/>
		</div>
		<Premium/>
		{/* <Car /> */}
        <VideoBlock />
	
		<Testimonials />
		<Map />
		<Footer />
	</div>
  )
}

export default Home