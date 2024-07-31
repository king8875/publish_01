const express = require('express')
const app = express()
const punycode = require('punycode/');
const methodOverride = require('method-override')

app.use(express.static(__dirname + '/css'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))


const { MongoClient, ObjectId } = require('mongodb')

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
app.get('/write', (req, res) => {
    res.render('write.ejs')
})




app.post('/add', async (req, res) => {
    console.log(req.body)

    if ( req.body.title == ''  ) {
        res.send('no title bro')
    } else {
        await db.collection('post').insertOne({
            title : req.body.title, 
            content : req.body.content
        })
    }
    res.redirect('/list')
})


app.get('/detail/:id', async (req, res) => {

    try {
        let result = await db.collection('post').findOne( { _id : new ObjectId(req.params.id)})
        res.render('details.ejs', {result : result})


    } catch(e) {
        console.log(e)
        res.status(400).send('이상한 url 입력')

    }

})

app.get('/edit/:id', async (req, res) => {
    let result = await db.collection('post').findOne({ _id : new ObjectId(req.params.id)})
    console.log(result)
    res.render('edit.ejs', {result : result})
})

app.post('/edit', async (req, res) => {
    console.log(req.body)

    if ( req.body.title == ''  ) {
        res.send('no title bro')
    } else {
        try {
            await db.collection('post').updateOne(
                { _id : new ObjectId(req.body.id)},
                {$set : {title : req.body.title, content : req.body.content }}
            );
        } catch (error) {
            console.error('Error updating document:', error);
            res.status(500).send('Error updating document');
            return;
        }
        res.redirect('/list')

    }
});

app.post('/like', async (req, res) => {
    const postId = req.body.id;
    await db.collection('post').updateOne(
        {_id : new ObjectId(postId) }, 
        {$inc : {like : 1}}
    );
    res.redirect('/list')
});