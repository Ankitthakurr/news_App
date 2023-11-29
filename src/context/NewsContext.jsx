import { createContext, useEffect, useReducer } from "react";
import NewsReducer from "./NewsReducer";
import axios from "axios";

const NewsContext = createContext()

export const NewsProvider = ({ children }) => {
    let newsapi = "https://newsapi.org/v2/everything?q=tesla&from=2023-11-03&sortBy=publishedAt&apiKey=b2201d4097bc40ebb5b1ab634206f5da"
    let weatherapi = "https://api.weatherapi.com/v1/current.json?key=1ae81f1bc92b4cf28fd93203232408&q=Indore4&aqi=no"
    const intialState = {
        allnews: [],
        input: '',
        weather: [],
       
    }

    const [state, Newsdispatch] = useReducer(NewsReducer, intialState)

    const getNews = async (topic) => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${typeof (topic) === 'undefined' ? state.input === '' ? "Indore" : state.input : topic}&from=2023-11-03&sortBy=publishedAt&apiKey=b2201d4097bc40ebb5b1ab634206f5da`)
        // const res = await fetch(`b2201d4097bc40ebb5b1ab634206f5da`)
        const data = await res.json()
        console.log(data)
        if(data.totalResults > 0){
        Newsdispatch(
            {
                type: "GETDATA",
                payload: data.articles
            }
        )
    }else{
        alert("Please inter a valid News")
    }
        getWeather();
    }
    useEffect(() => {
        getNews()
        getWeather()
    }, [])

    const nav = (e) => {
        getNews(e.target.innerText);
    }

    const getWeather = async () => {

        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=1ae81f1bc92b4cf28fd93203232408&q=${state.input === "" ? "Indore" : state.input}&aqi=no`)     
        const data = await res.json()
        data.location !== undefined &&
        Newsdispatch({
            type: "GETWEATHER",
            payload: data
        })

       
    }

    return (
        <NewsContext.Provider value={{ ...state, Newsdispatch, getNews, nav }}>
            {children}
        </NewsContext.Provider>
    )
}
export default NewsContext; 

