const compression = require('compression');
const express = require('express');
const { default: helmet} = require('helmet');
const morgan = require('morgan');
const app = express();


//init middleware
app.use(morgan("dev"));
app.use(helmet()); // bảo vệ thông tin riêng tư
app.use(compression());


// init db


//init router
app.get('/', (req, res, next) => {
    const  strCompress = "Hello Dosi-JS"
    
    return res.status(200).json({
        message: "Hello nguyen",
        metadata: strCompress.repeat(100000)
    })
})

// handle errors

module.exports = app