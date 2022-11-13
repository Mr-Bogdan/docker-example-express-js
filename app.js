const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World MAN!')
})

app.get('/students', (req, res) => {
    res.send([
        {
            name: "Christian Scholz", age: 20, class: "FIA95"
        },
        {
            name: "Jason Rösgen", age: 20, class: "FIA95"
        }]);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
