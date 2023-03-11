const express = require('express')
const katex = require('katex')

const app = express()
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
  res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
  next();
});
app.use(express.json())
const PORT = 3000
const HOST = '0.0.0.0'



app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/tex2mathml', (req, res) => {
  if(!req.body.tex) {
    throw new Error('TEX IS MISSING')
  }
  const content = req.body.tex
  console.log('content', content)
  const html = katex.renderToString(content, {throwOnError:false,displayMode:true,fleqn:true})
  const match = html.match('<math.*><\/math>')
  if(match) {
    return res.send(match[0])
  }
  throw new Error('CANNOT ERROR')
})

app.post('/tex2html', (req, res) => {
  if(!req.body.tex) {
    throw new Error('TEX IS MISSING')
  }
  const content = req.body.tex
  const html = katex.renderToString(content, {throwOnError:false,displayMode:true,fleqn:true})
  return res.send(html)
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
