import React from 'react'
function BlogItem({src}) {
  return (
    <div className="blog__item">
    <div className="blog__item__pic">
      <img src={src} alt="" />
    </div>
    <div className="blog__item__text">
      <ul>
        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
        <li><i className="fa fa-comment-o" /> 5</li>
      </ul>
      <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
      <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
        quaerat </p>
      <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
    </div>
  </div>
  )
}

export default BlogItem