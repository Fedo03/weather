import {key} from './hide'


var loca = document.getElementById("loc")
var div = document.getElementById("di")
var sea = document.getElementById("sea")
var divm = document.querySelector(".div")


var btt = document.createElement("button")
btt.innerHTML = "search"
btt.style.backgroundColor ="white"
btt.style.borderRadius = "0px 20px 20px 0px"
btt.style.marginLeft = "0px"
btt.style.paddingLeft = "0px"
btt.style.height = "32px"
btt.style.border = "none"
btt.style.boxShadow = "1px 0px 1px 1px rgb(94, 88, 88)"
    

    sea.appendChild(btt)

btt.addEventListener("click",function(){
var locaV = loca.value;
console.log(locaV)

fetch("https://api.openweathermap.org/data/2.5/weather?q="+locaV+"&appid="+ key+"").then(function(res){
    return res.json()
}).then(function(data){


    console.log(data)
    console.log(data)
    console.log(celsius(data.main.temp))
    console.log(data.weather[0].description)
    console.log(data.wind.speed)


    apd(loc(data.name),temp(celsius(data.main.temp)),wead(data.weather[0].description),sped(data.wind.speed))
    
})



loca.value = "";
})

function apd(na,de,we,sp){
    
    div.innerHTML = "";
    var apd = div
        apd.appendChild(na)
       apd.appendChild(de);
         apd.appendChild(we)
         apd.appendChild(sp)
    return apd ;
}

function celsius(temp){
 var celsius = temp - 273.15;
 celsius = Math.round(celsius)
 return celsius
}

function temp(temp){
    
    var de = document.createElement("p")
    de.innerHTML = temp + " C"
    de.style.fontSize = "70px"
    return de

}

function wead(wead){
    
    var de = document.createElement("p")
    de.innerHTML =  wead
    de.style.fontSize = "30px"
    anime(wead)
    return de

}

function sped(sped){
    
    var de = document.createElement("p")
    de.innerHTML = "wind speed : " + sped
    de.style.fontSize = "20px"
    return de

}
function loc(loc){
    
    var de = document.createElement("p")
    de.innerHTML =  loc 
    de.style.fontSize = "40px"
    return de

}

function anime(wed){
    

    if(wed.indexOf("clouds") > -1){
        
<<<<<<< HEAD
       var urls = '/weather_anime/clouds.gif'
      
       divm.style.color = "white"

       display(urls)
    } else if(wed.indexOf("clear") > -1){
        
      var urls = '/weather_anime/clear.gif'
        
        divm.style.color = "black"

        display(urls)
      
    }else if(wed.indexOf("rain") > -1){
        
        var urls = '/weather_anime/rain.gif'
        
    }else if(wed.indexOf("snow") > -1){
        
        var urls = '/weather_anime/snow.gif'
        display(urls)
    }else if(wed.indexOf("thounderstorm") > -1){
        
        var urls = '/weather_anime/thunderstaorm.gif'
        display(urls)
=======
       var picloc = "/weather_anime/clouds.gif"
       divm.style.color = "white"

       weatherDisplay(picloc)
    } else if(wed.indexOf("clear") > -1){
        
         var picloc= "/weather_anime/clear.gif"
        divm.style.color = "black"
        weatherDisplay(picloc)
        
    }else if(wed.indexOf("rain") > -1){
        
        var picloc = "/weather_anime/rain.gif"
        weatherDisplay(picloc)
        
    }else if(wed.indexOf("snow") > -1){
        
        var picloc = "/weather_anime/snow.gif"
        weatherDisplay(picloc)
    }else if(wed.indexOf("thounderstorm") > -1){
        
        var picloc = "/weather_anime/thunderstaorm.gif";
        weatherDisplay(picloc)
        
    
>>>>>>> 84e1556c70bae62127d06f94e309b57213005c28
    }


function display(url){
    divm.style.backgroundImage = "url('"+ url+"')"
        divm.style.backgroundRepeat = "no-repeat"
        divm.style.backgroundSize = "cover"
}

} 

  
function weatherDisplay(picPath){
    divm.style.backgroundImage = "url('"+ picPath+"')"
        divm.style.backgroundRepeat = "no-repeat"
        divm.style.backgroundSize = "cover"
}
    
