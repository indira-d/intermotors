import React from 'react'
import './Map.css'

const Map = () => {
  return (
		<map className='map_block'>
		<iframe classname='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.705919846207!2d74.57626571156882!3d42.87905087102908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8171c6d66a3%3A0x15bae5388bc7e83c!2zOTkg0YPQuy4g0JrQsNC70YvQutCwINCQ0LrQuNC10LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1686055335222!5m2!1sru!2skg" width="100%" height="400" style={{border: 'none', margin: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</map>

  )
}

export default Map