const express = require('express')
const app = express()

app.use(express.static(__dirname + '/css'))
app.set('view engine', 'ejs')

const { MongoClient } = require('mongodb')

let db
const url = 'mongodb+srv://dhgh8875:8875@cluster0.5qbcg28.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
  app.listen(8080, () => {
    console.log('http://localhost:8080')
})
}).catch((err)=>{
  console.log(err)
})



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/news', (req, res) => {
    res.send('today news!')
})

app.get('/list', async (req, res) => {
    let result = await db.collection('post').find().toArray()
    res.render('list.ejs', { post : result })
})

app.get('/time', (req, res) => {
    res.render('time.ejs', { data : new Date() })
})