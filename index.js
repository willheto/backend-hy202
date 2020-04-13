const express = require('express')
const app = express()

app.use(express.json())

const port = 3001
app.listen(port)
console.log(`server running on port ${port}`)

let numbers = [
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

app.delete('/api/persons/:id', (request, response) => {

    const id = Number(request.params.id)
    console.log(id)
    numbers = numbers.filter(number => number.id !== id)

    response.status(204).end()

})

app.post('/api/persons', (request, response) => {
    const newObject = request.body

    if (newObject) {
        console.log(newObject)

        if (newObject.name && newObject.number) {
            console.log(newObject)
            const id = Math.floor(Math.random() * Math.floor(10000))
            newObject.id = id

            numbers = numbers.concat(newObject)
            console.log(`success, added ${newObject.name}`)
        }

        response.status(400).json({ error: 'name must be unique' })

    }

})

app.get('/api/persons/:id', (request, response) => {

    const id = Number(request.params.id)
    console.log(id)
    const presentedNumber = numbers.find(number => number.id === id)

    if (presentedNumber) {
        console.log(presentedNumber)
        response.json(presentedNumber)
    } response.status(404).end()

})

app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`<div><p>Phonebook has info for ${numbers.length} people</p>
        <p>${date}</p></div>`)
})

app.get('/', (request, response) => {
    response.send('')
})

