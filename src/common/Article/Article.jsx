import React, { useState } from 'react'
import { FaRegStar , FaStar } from "react-icons/fa"

import "./Article.css" 
const Article = ({ data, click}) => {
    const[likes, setLikes] = useState(data.likes);
    const[isLiked, setIsLiked] = useState(data.isLiked);

    const handleClick = () => {
      if(isLiked){
        setLikes(likes - 1);
      }else{
        setLikes(likes + 1);
      }
      setIsLiked(!isLiked)
    };

  return (
    <article>
        
        <img src={data.image} alt={data.title} className='article-img' />

        <div className='article-header'>
        </div>
        
    </article>
  )
}

export default Article