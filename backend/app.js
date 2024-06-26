const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
// require("dotenv").config();
var cors = require('cors');



// import routes
const todos = require('./routes/todoRoutes');


//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cors());


//ROUTES MIDDLEWARE
app.use('/api', todos);

//PORT
const port = 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});