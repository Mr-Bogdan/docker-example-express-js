const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Test prod')
})

app.get('/students', (req, res) => {
    res.send([
        {
            name: "Bohdan Martyniv", age: 21, class: "7"
        },
        {
            name: "Josephina Jackson", age: 34, class: "3"
        }]);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
