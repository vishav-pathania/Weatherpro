import "./style.css"
import { getweather } from "./weather"
 getweather(10,10,Intl.DateTimeFormat().resolvedOptions().timeZone).then( data => console.log(data) )