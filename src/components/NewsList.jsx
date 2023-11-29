import React, { useContext } from 'react'
import NewsCard from './NewsCard'
import NewsContext from '../context/NewsContext'

const NewsList = () => {
  const {allnews} = useContext(NewsContext)


  return (
    <>
      <div id='newslist' className="my-1 col-md-8 col-sm-12">
       {allnews.length === 0 ? <h1 className='display-2 text-center mt-5'>Loading...</h1> : allnews.map((item,index) => { return <NewsCard key={index} item={item}/> })}
      </div>
    </>
  )
}

export default NewsList
