import React from 'react'
import Categories from './categories'
import Search from './search'
function Hero({status,show}) {
  return (
    <section className="hero">
      <div className="container">
      <div className="row">
        <Categories show={show}/>
        <Search status={status}  />
      </div>
    </div>
  </section>
  )
}

export default Hero