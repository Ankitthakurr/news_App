import React, { useContext, useEffect } from 'react'
import NewsContext from '../context/NewsContext'

const DailyQuote = () => {

  const { allnews } = useContext(NewsContext)


  return (
    <div>
      <marquee className="display-5 my-4 bg-light" >{allnews.length <= 0 ? "Loading..." : allnews.map((description)=> description.description )}</marquee>
    </div>
  )
}

export default DailyQuote
