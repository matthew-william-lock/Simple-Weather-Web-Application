console.log("Client side javascript file is loaded!")

// Fetch json data example ===============================================================
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})

// Fetch json data example ===============================================================
fetch('http://localhost:3000/weather?address=cape&town').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        } else{            
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

// Fetch data function
const forecast = (location)=>{

    // Show loading message
    message.textContent='loading'

    const url = 'http://localhost:3000/weather?address=' + (location)
    fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
            message.textContent=data.error
        } else{            
            console.log(data.location)
            console.log(data.forecast)

            message.textContent=data.location
            forecastMessage.textContent=data.forecast
        }
    })
})
}

// Onclick listener
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
// const message = document.querySelector(.ClassName)
const message = document.querySelector("#message-1")
const forecastMessage = document.querySelector("#message-2")

weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault() // Prevent refresh
    const location = search.value
    console.log(location)
    forecast(location)
})