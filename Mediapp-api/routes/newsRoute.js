const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');

const News = require('../models/News')


//get all news
router.get('/',(req,res) => {
    News.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))

})

//get single news by id
router.get('/:id', (req, res) => {
  
  const { id } = req.params
  console.log(id);
  News.findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})

//delete news by id
router.delete('/:id', (req, res) => {
  const id = req.params.id
  console.log(id);

  News.findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})

//add news
router.post('/', (req, res) => {
  const { title, description, url, urlToImage, publishedAt } = req.body

  const news = new News()
  
  news.title = title
  news.description = description
  news.url = url
  news.urlToImage = urlToImage
  news.publishedAt = publishedAt


  news.save()
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err))
})

//update news
//http://localhost:3000/news/new.id
router.put('/:id', (req, res) => {
  const id = req.params.id
  
  const { title, description, url, urlToImage, publishedAt } = req.body
 
  News.title = title
  News.description = description
  News.url = url
  News.urlToImage = urlToImage
  News.publishedAt = publishedAt
  console.log(News.description);
  
  News.findByIdAndUpdate(id,
    {title: News.title,
      description: News.description,
       url: News.url,
        urlToImage: News.urlToImage, 
        publishedAt: News.publishedAt, }, function(err, result){

    if(err){
        res.send(err)
    }
    else{
        res.send(result)
    }
})
})






module.exports = router