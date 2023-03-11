const express = require('express')
const morgan = require('morgan')

const app = express()

// Built in JSON parser
app.use(express.json())

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
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

// 
// GET REQUESTS
// 

app.get('/', (req, res) => {
    res.send("<h1>Making Code</h1>")
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
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

  personExists = () => {
    return persons.find(n => n.name === body.name)
  }

  if (!body.name || !body.number){
    return res.status(400).json({
      error: 'No Name or Number'
    })
  }

  if(personExists()) {
    return res.status(400).json({
      error: 'User already exists'
    })
  }

  const randomId = () => {
    return Math.floor(Math.random() * 99999)
  }

  const person = { 
      "id": randomId(),
      "name": body.name || "New Person", 
      "number": body.number || "39-23-6423122"
    }

  persons = persons.concat(person)
  
  res.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})