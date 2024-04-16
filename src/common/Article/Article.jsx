import React, { useState } from 'react'

import "./Article.css" 
const Article = ({ data}) => {
    
  return (
    <article>
        
        <img src={data.image} alt={data.title} className='article-img' />

        <div className='article-header'>
          {data.intro}
        </div>

        <p>
          {data.price}
        </p>
        
    </article>
  )
}

export default Article