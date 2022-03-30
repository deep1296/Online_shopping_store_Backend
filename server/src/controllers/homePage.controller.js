
const express = require('express');
const cors = require('cors');
const router = express.Router();
const HomepageProduct = require('../models/homePage.model');

router.get('/', async (req, res) => {
    try {
        const homepageProduct = await HomepageProduct.find().lean().exec();

        res.status(201).send(homepageProduct);

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const homepageProduct = await HomepageProduct.findById(req.params._id).lean().exec();

        res.status(201).send(homepageProduct);

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.delete("/:_id", async (req, res) => {
    try {
        const homepageProduct = await HomepageProduct.findByIdAndDelete(req.params._id);

        res.status(201).send(homepageProduct);

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})



module.exports = router;
