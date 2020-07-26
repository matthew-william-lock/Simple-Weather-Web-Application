const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')


// console.log(__dirname)
// console.log(__filename)

// Define paths
const publicDirectory = path.join(__dirname,'../public')
const viewsDirecory = path.join(__dirname,'../templates/views')
const partialsDirecory = path.join(__dirname,'../templates/partials')

console.log(publicDirectory)

// Instantiate the server
const app = express()

// Get port number
const port = process.env.PORT || 3000 // Set by heroku, default to 3000 locally

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsDirecory)
hbs.registerPartials(partialsDirecory)

// Setup static directory to serve
app.use(express.static(publicDirectory))

// This will never be seen as when static server is set up
app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather Application',
        name:'Matthew Lock'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Weather Application',
        name:'Matthew Lock'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help for Weather Application',
        msg:'Go back to index to get a weather forecast'
    })
})

app.get('/weather',(req,res)=>{

    const location = req.query.address

    if(!location) {
        return res.send({
            error:'You must provide an address!'
        })
    } 

    geocode(location,(error, geoData) =>{
        console.log('Error',error)
        console.log('Data',geoData)
    
        if(geoData){
            forecast(geoData.latitude,geoData.longitude,(error,data)=>{
                console.log('Error',error)
                console.log('Data',data)
                if(error){
                    res.send({
                        error:"Error fetching forecast"
                    })
                } else {
                    res.send({
                        forecast:data,
                        location:geoData.location,
                        address:req.query.address
                    })
                }
            })
        } else{
            res.send({
                error
            })
        }  
    })
    
})

app.get('/products',(req,res)=>{

    if(!req.query.search) {
        return res.send({
            error:'You must provide a seach term!'
        })
    } 

    console.log(req.query)
    res.send({
        products:[]
    })
})

// 404 Handler
// Must be at the end
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404 Page Not Found',
        body:'This page does not exist'
    })
})

app.listen(port,()=>{
    console.log('Server is up on port '+port)
})