const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const pepeMeme = {
    'bad': {
        'url':'https://i.kym-cdn.com/photos/images/newsfeed/002/058/199/1ad.jpg'
    },
    'sad': {
        'url': 'https://static.displate.com/280x392/displate/2022-08-10/9097af0d20abe5edd06876f839163b73_e1cff3db2889a44065d072f1f69209bc.jpg' 
    },
    'happy': {
        'url':'https://media.tenor.com/1-_3JfrWHR0AAAAC/_frenhooo-_hooo.gif'
    },
    'fancy': {
        'url':'https://i.pinimg.com/originals/f8/de/43/f8de43aed921a61ac76f6e8d6f357f2e.jpg'
    },
    'mad': {
        'url':'https://media.tenor.com/ilmlntw9U1oAAAAC/angry-pepe-pepe-the-frog.gif'
    },
    'jealous': {
        'url':'https://i.kym-cdn.com/photos/images/facebook/002/121/966/c23.png'
    },
    'shy': {
        'url':'https://i.kym-cdn.com/photos/images/facebook/002/130/668/648.png'
    },
    'silly': {
        'url':'https://images.fineartamerica.com/images/artworkimages/medium/3/pepe-the-clown-jenna-joane-transparent.png'
    },
    'love': {
        'url':'https://media.tenor.com/w5fyExxz2k4AAAAC/pepe-heart.gif'
    },
    'productive': {
        'url':'https://ih1.redbubble.net/image.2483072107.8916/raf,750x1000,075,t,e0e1dd:064437a66d.jpg'
    },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})
app.get('/css/style.css', (request, response)=>{
    response.setHeader('Content-Type', 'text/css')
    response.sendFile(__dirname + '/css/style.css')
})
app.get('/api/allOptions', (request, response) => {
    response.json(pepeMeme)
})
app.get('/api/:name',(request,response)=>{
    const emotion = request.params.name.toLowerCase()

    if( pepeMeme[emotion] ){
        response.json(pepeMeme[emotion])
    }else{
        response.json(pepeMeme['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! It's legally Pepe time`)
})