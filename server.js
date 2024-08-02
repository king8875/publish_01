const express = require('express')
const app = express()
const punycode = require('punycode/');
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

app.use(express.static(__dirname + '/css'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(passport.initialize())
app.use(session({
  secret: '암호화에 쓸 비번',
  resave : false,
  saveUninitialized : false
}))
app.use(passport.session()) 

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

passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
    let result = await db.collection('user').findOne({ username : 입력한아이디})
    if (!result) {
      return cb(null, false, { message: '아이디 DB에 없음' })
    }
    if (result.password == 입력한비번) {
      return cb(null, result)
    } else {
      return cb(null, false, { message: '비번불일치' });
    }
  }))


app.get('/login', async (req, res) => {
    res.render('login.ejs')
})

app.post('/login', async (req, res) => {

    passport.authenticate('local', (error, user, info)=>{
        if(error) return res.status(500).json(error)
        if(!user) return res.status(401).json(info.message)
        req.logIn(user, (err)=>{
            if (err) return next(err)
            res.redirect('/list')
        })
    }) (req, res, next)
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

app.delete('/delete', async (req, res) => {
    const postId = req.body.id;

    await db.collection('post').deleteOne(
        { _id: new ObjectId(postId) }
    );

});


app.get('/list/:id', async (req, res) => {
    let result = await db.collection('post').find().skip((req.params.id - 1) * 5).limit(5).toArray()
    res.render('list.ejs', { post : result })
})

app.get('/list/next/:id', async (req, res) => {
    let result = await db.collection('post')
    .find({ _id : {$gt : new ObjectId(req.params.id) }})
    .limit(5).toArray()
    res.render('list.ejs', { post : result })
})