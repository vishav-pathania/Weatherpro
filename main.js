import "./style.css"
import { getweather } from "./weather"
 getweather(10,10,Intl.DateTimeFormat().resolvedOptions().timeZone)
 .then(renderWeather)
 .catch(e => {
    console.error(e)
    alert("Error getting Weather!")
 })

 function renderWeather({ current, daily, hourly }){
    renderCurrentWeather(current)
    // renderDailyWeather(daily)
    // renderHourlyWeather(hourly)
    document.body.classList.remove("blurred")
 }

function setValue(selector, value, {parent=document}={}){
    parent.querySelector(`[data-${selector}]`).textContent= value
}

function getIconUrl(iconCode){
    return `icons/${iconCode}.svg`
}

const currentIcon = document.querySelector("[data-current-icon")
 function renderCurrentWeather(current){
    currentIcon.src=getIconUrl(current.iconCode)
    setValue("current-temp", current.currentTemp)
    setValue("current-low", current.lowTemp)
    setValue("current-high", current.highTemp)
    setValue("current-fl-high", current.highFeelsLike)
    setValue("current-fl-low", current.lowFeelsLike)
    setValue("current-wind", current.windSpeed)
    setValue("current-precip", current.precip)
 }