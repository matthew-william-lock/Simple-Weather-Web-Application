const request =  require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=3b63eb9ea4cf68c82d8cb0a9b6425bb4&query='+ latitude+','+longitude
    request({url:url,json:true}, (error,response)=>{
        if (error){
            callback('Unable to connect to weather services!',undefined)
        } else if (response.body.error) {
            callback("Unable to find locaiton.",undefined)
        } else {
            const weatherString = "It is currently " + response.body.current.weather_descriptions[0]+" with a temperature of " + response.body.current.temperature+" °C. There is "+ response.body.current.precip+"% precipitation and the wind speed is "+response.body.current.wind_speed+ " km/h."
            callback(undefined, weatherString)
        }
    })

}

module.exports = forecast
