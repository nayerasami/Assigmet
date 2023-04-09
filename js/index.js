async function searchWeather() {

let response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=bdb08829f49844f683f222600230403&q=cairo&days=7")
  let finalResponse=await response.json()
     console.log(finalResponse);

     displayWeather(finalResponse.location,finalResponse.current)
     displayAnotherday(finalResponse.forecast.forecastday)
    }  
    document.getElementById("search").addEventListener("keyup",(e)=>{
        console.log(e.target.value);
        searchWeather(e.target.value)
    })
 searchWeather()

 let weekDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


 function displayWeather(f,y){
    var d = new Date(y.last_updated.replace(" ","T"))
    let dayOne=` <div class="card">
             <div class="card-header">
                <ul class="list-unstyled">
                  <li class="float-start">
                    ${weekDays[d.getDay()]}
                  </li>
                  <li class="float-end">
                  ${d.getDate() + months[d.getMonth()]}</li>
                </ul>
             </div>
            <div class="card-body">
                <h5 class="card-title">${f.name}</h5>
                <div
                 class="weather-degree d-flex justify-content-between align-items-center me-5">
                 <div class="num">
                    <p class="w-degree">${y.temp_c}<sup>o</sup>C</p>
                  </div>
                  <div class="icon1">
                  <img src="https:${y.condition.icon}" alt="" width="90">
                </div>
               </div>
              <p class="w-status">${y.condition.text}</p>
               <div class="row g-0">
                  <div class="col-md-3 d-flex">
                    <div class="icon2"><i class="fa-solid fa-cloud"></i></div>
                   <div class="text2 ms-2">20%</div>
                  </div>
                  <div class="col-md-3 d-flex">
                    <div class="icon2"><i class="fa-solid fa-cloud"></i></div>
                    <div class="text2 ms-2">20%</div>
                  </div>
                  <div class="col-md-3 d-flex">
                    <div class="icon2"><i class="fa-solid fa-cloud"></i></div>
                  <div class="text2 ms-2">20%</div>
                  </div>
                </div>
            </div>
             </div>`

             document.getElementById("weather").innerHTML=dayOne
 }
function displayAnotherday(z){
temp=" "
for(var i =1;i<3;i++){
    temp+=`<div class="card ">
    <div class="card-header text-center">
    ${weekDays[new Date(z[i].date.replace(" ", "T")).getDay()]}
        
    </div>
  <div class="card-body card-cont1 text-center">

<div class="card-cont m-auto">
<h5 class="card-title"></h5>
<div
class="weather-degree  me-5">
<div class="icon6">
<img src="https:${z[i].day.condition.icon}" alt="" width=48>
</div>
<div class="larg-num">
<p class=" larg-num ">${z[i].day.maxtemp_c}<sup>o</sup>C</p>
</div>
<div class="small-num">
<p class="small-num">${z[i].day.mintemp_c}<sup>o</sup>C</p>
</div>

<p class="condition">${z[i].day.condition.text}</p>
</div>
</div>
</div>
 </div>`
}
document.getElementById("weather").innerHTML+=temp
}