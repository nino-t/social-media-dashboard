import express from 'express'
import fs from 'fs'
import path from 'path'

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use('/', express.static(path.join(__dirname, 'static')))

const manifest = fs.readFileSync(path.join(__dirname, 'static/manifest.json'), 'utf-8')
const assets = JSON.parse(manifest)

server.get('*', (req, res) => {
  res.render('client', { assets })
})

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
