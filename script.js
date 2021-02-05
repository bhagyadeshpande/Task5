var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function(){
  var countrydata = JSON.parse(this.response);
  //error handling
  try{    
    countrydata.forEach(element =>{
    //calling the function getweatherdata() by passing 
    //latitude and longitude of each country as parameters      
       getweatherdata(element.latlng[0], element.latlng[1]);      
       }   
       )}    
  catch(error){
  alert(error.name + error.message);
  alert(error.stack);
  }}

  //function to call openweather API and display the temeparture details of countries
  function getweatherdata(latitude, longitude){   
  var key = "83362a76bd91e5c5b5de9b7fc4202b50";
  var req = new XMLHttpRequest();
  req.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`, true) 
  req.send();
  req.onload = function(){
    if(latitude!==0 && longitude!==0){
    var weatherdata = JSON.parse(this.response);
    console.log(weatherdata["main"]);
  }  
  }
  }

