const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoibWF0dGhld3dpbGxpYW1sb2NrIiwiYSI6ImNrZDFvYXZqZDE1aWwydW91Y2Z4Ync0cXgifQ.24iMBn0fx1Hzp045ZpaKkQ&limit=1'

    request({url:url,json:true}, (error,response)=>{
        if (error){
            callback('Unable to connect to location services!',undefined)
        } else if (response.body.features.length<1)  {
            callback('Unable to find location.',undefined)
        } else {
        const lat = response.body.features[0].center[1]
        const long = response.body.features[0].center[0]
        const name = response.body.features[0].place_name
        callback(undefined,{latitude:lat,longitude:long,location:name})
        }
    })
}

module.exports = geocode