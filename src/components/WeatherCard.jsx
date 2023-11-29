import React, { useContext } from 'react'
import NewsContext from '../context/NewsContext'

const WeatherCard = () => {
  const { weather } = useContext(NewsContext)

  return (
 <>{weather.length !== 0 ?  <div className="col-md-4 col-sm-12 " >
 <div className="card p-5 rounded-0 shdow-sm d-flex flex-row" >
   <img className='' src={weather.current.condition.icon} alt="" width={"150rem"} />
   <div>
     <h1 className="card-title display-6 ">{weather.location.name}</h1>
     <h1 className="display-8">Temp : {weather.current.temp_c}</h1>
   </div>
 </div>
</div>:<></> }</>
  )
}

export default WeatherCard
