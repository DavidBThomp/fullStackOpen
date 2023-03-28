const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const phoneBook = require('./models/phoneBook')

const app = express()

// Built in JSON parser
app.use(express.json())

// Cross Orgin Helper
app.use(cors())

// Static Build for base
app.use(express.static('build'))

// morgan Data Log
app.use(
morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    tokens.post(req, res), '<-- Data'

  ].join(' ')
})
)

morgan.token('post', function (req, res) { return JSON.stringify(req.body) })

let persons = [
]

// 
// GET REQUESTS
// 

app.get('/api/persons', (req, res) => {
  phoneBook.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if (!person){
    return res.status(400).json({ 
      error: 'No person found' 
  })}

  res.json(person)
})

app.get('/info', (req, res) => {
  const time = new Date()
  res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${time}</p>`)
})

// 
// DELETE REQUESTS
// 

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

res.status(204).end()
})

// 
// POST REQUESTS
// 

app.post('/api/persons', (req, res) => {
  const body = req.body

  if (body.name === undefined) {
    return res.status(400).json({ error: 'content missing' })
  }

  const person = new phoneBook({
    name: body.name,
    number: body.number || false,
  })

  person.save().then(savedPerson => {
    res.json(savedPerson)
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})