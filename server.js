require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./server/src/configs/db');

const mensController = require('./server/src/controllers/mensProducts.controller');
const womensController = require('./server/src/controllers/womensProducts.controller');

const homepageProductController = require('./server/src/controllers/homePage.controller');

app.use(express.json())
app.use(cors());
app.use("/mens" , mensController);
app.use("/womens" , womensController);
app.use("/products",homepageProductController);





app.listen(process.env.PORT || 7000,async() => {
    try{
        await connect();
        console.log("Listening on 7000")
    } catch(e){
        console.log(e.message);
    }
})