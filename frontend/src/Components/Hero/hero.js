import React from 'react'
import Categories from './categories'
import Search from './search'

function Hero() {
  return (
    <section className="hero">
    <div className="container">
      <div className="row">
        <Categories />
        <Search />
      </div>
    </div>
  </section>
  )
}

export default Hero