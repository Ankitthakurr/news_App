import React from 'react'
import Navbar from './components/Navbar'
import DailyQuote from "./components/DailyQuote"
import NewsList from './components/NewsList'
import WeatherCard from './components/WeatherCard'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <DailyQuote />
        <div className="row">
          <WeatherCard />
          <NewsList />
        </div>
      </div>
    </div>
  )
}

export default App

