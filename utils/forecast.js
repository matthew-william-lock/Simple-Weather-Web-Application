const request =  require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=3b63eb9ea4cf68c82d8cb0a9b6425bb4&query='+ latitude+','+longitude
    request({url:url,json:true}, (error,response)=>{
        if (error){
            callback('Unable to connect to weather services!',undefined)
        } else if (response.body.error) {
            callback("Unable to find locaiton.",undefined)
        } else {
            const weatherString = "The current temperature is " + response.body.current.temperature
            callback(undefined, weatherString)
        }
    })

}

module.exports = forecast
