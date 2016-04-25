'use strict'

const PORT = process.env.PORT || 3000;

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({foo : 'bar'})
});

app.listen(PORT, () => console.log(`Server running in ${PORT}`))
