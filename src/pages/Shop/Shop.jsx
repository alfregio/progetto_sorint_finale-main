import React from 'react'
import Article from '../../common/Article/Article'
import articles from '../../article.json'
const Shop = () => {
    const buttonClick = () => {
      console.log('Click !')
    }
  
    return (
      <div id="homeArticle" className='wrapper'>
        <h1>Article Homepage</h1>
        <div className='article-section'>
  
          {articles.map((item) => {
            return(
              <Article key={item.image} data={item}/>
            )
          })}
        </div>
        
      </div>
    )
  }
  
  export default Shop