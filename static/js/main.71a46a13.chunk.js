(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),i=a.n(r),l=(a(9),a(1)),s="b0105367c10a309df73fedf0f8b8f403",m="https://api.openweathermap.org/data/2.5/";var o=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({}),o=Object(l.a)(i,2),u=o[0],p=o[1],d=Object(n.useState)({}),h=Object(l.a)(d,2),f=h[0],E=h[1],g=Object(n.useState)({}),y=Object(l.a)(g,2),v=y[0],w=y[1],N=function(e){return e=e.replace(/(....).(..).(..)/,"$2/$3/$1")};return c.a.createElement("div",{className:"undefined"!=typeof u.main&&u.main.temp>100?"app warm":"app"},"undefined"!=typeof v.results?c.a.createElement("div",{className:"background",style:{opacity:"60%"}},c.a.createElement("img",{src:v.results[1].urls.regular,alt:"",className:"image"})):"",c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return r(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&(fetch("".concat(m,"weather?q=").concat(a,"&units=imperial&APPID=").concat(s)).then((function(e){return e.json()})).then((function(e){p(e),r("")})),fetch("".concat(m,"forecast?q=").concat(a,"&units=imperial&APPID=").concat(s)).then((function(e){return e.json()})).then((function(e){E(e)})),fetch("https://api.unsplash.com/search/photos/?client_id=".concat("GBZIvsNHDMoO8ghj5neW-nOlNdZaCHtBdOBsJp7ZK_M","&orientation=portrait&query=").concat(a)).then((function(e){return e.json()})).then((function(e){w(e),console.log(e)})))}})),c.a.createElement("h1",null,"Welcome"),"undefined"!=typeof u.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},u.name,", ",u.sys.country),c.a.createElement("div",{className:"date"},function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(u.main.temp),"\u02daf"),c.a.createElement("div",{className:"weather"},u.weather[0].main))):"","undefined"!=typeof f.list?c.a.createElement("div",null,c.a.createElement("div",{className:"forecast-box"},c.a.createElement("div",{className:"forecast"},c.a.createElement("div",{className:""},N(f.list[2].dt_txt.split(" ")[0])),c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(f.list[2].weather[0].icon,".png"),alt:""}),c.a.createElement("p",null,"Temp: ",Math.round(f.list[2].main.temp),"\u02daf"),c.a.createElement("p",null,"Humidity: ",f.list[2].main.humidity,"%")),c.a.createElement("div",{className:"forecast"},c.a.createElement("div",{className:""},N(f.list[10].dt_txt.split(" ")[0])),c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(f.list[10].weather[0].icon,".png"),alt:"",id:"imgForecast0"}),c.a.createElement("p",null,"Temp: ",Math.round(f.list[10].main.temp),"\u02daf"),c.a.createElement("p",null,"Humidity: ",f.list[10].main.humidity,"%")),c.a.createElement("div",{className:"forecast"},c.a.createElement("div",{className:""},N(f.list[18].dt_txt.split(" ")[0])),c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(f.list[18].weather[0].icon,".png"),alt:"",id:"imgForecast0"}),c.a.createElement("p",null,"Temp: ",Math.round(f.list[18].main.temp),"\u02daf"),c.a.createElement("p",null,"Humidity: ",f.list[18].main.humidity,"%")),c.a.createElement("div",{className:"forecast"},c.a.createElement("div",{className:""},N(f.list[26].dt_txt.split(" ")[0])),c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(f.list[26].weather[0].icon,".png"),alt:"",id:"imgForecast0"}),c.a.createElement("p",null,"Temp: ",Math.round(f.list[26].main.temp),"\u02daf"),c.a.createElement("p",null,"Humidity: ",f.list[26].main.humidity,"%")),c.a.createElement("div",{className:"forecast"},c.a.createElement("div",{className:""},N(f.list[34].dt_txt.split(" ")[0])),c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(f.list[34].weather[0].icon,".png"),alt:"",id:"imgForecast0"}),c.a.createElement("p",null,"Temp: ",Math.round(f.list[34].main.temp),"\u02daf"),c.a.createElement("p",null,"Humidity: ",f.list[34].main.humidity,"%")))):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.71a46a13.chunk.js.map