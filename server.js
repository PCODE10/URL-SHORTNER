const express= require('express')
const mongoose=require('mongoose')
const ShortUrl= require('./models/shortUrl')
const app= express()
mongoose.connect('mongodb://localhost/urlshortener',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', { shortUrls: shortUrls })
  })
  app.get('/search', async (req, res) => {
    const searchQuery = req.query.q;
    const shortUrls = await ShortUrl.find({
      $or: [
        { full: { $regex: searchQuery, $options: 'i' } },
        { short: { $regex: searchQuery, $options: 'i' } },
        { notes: { $regex: searchQuery, $options: 'i' } }
      ]
    });
    res.render('index', { shortUrls: shortUrls });
  });
  app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl , notes: req.body.notes} )
    res.redirect('/')
  })
  
  app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
  
    shortUrl.clicks++
    shortUrl.save()
  
    res.redirect(shortUrl.full)
  })

  
  
app.listen(3000)