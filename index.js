const express = require('express')
const app = express()

const port = 3001
app.listen(port)
console.log(`server running on port ${port}`)

const numbers = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "040-123123123",
        id: 2
    },
    {
        name: "Dan abramov",
        number: "12-43-234-345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    },
]

app.get('/api/persons', (request, response) => {
    response.send(numbers)
})

app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`<div><p>Phonebook has info for ${numbers.length} people</p>
        <p>${date}</p></div>`)
})

app.get('/', (request, response) => {
    response.send('')
})

