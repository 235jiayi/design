const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs')
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Custom-Header')
  next();
})
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Custom-Header')
  next();
})
let dataUrl=''
app.use(express.static(__dirname+'/public/dist'))
app.post('/head', (req, res) => { 
  dataUrl = req.body.result
})
app.get('/head', (req, res) => { 
  res.send(dataUrl)
})
app.listen(5000, () => { console.log('http://127.0.0.1:5000')})