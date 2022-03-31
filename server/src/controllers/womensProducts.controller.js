const express = require("express");
const WomensProduct = require("../models/womensProduct.model");
const router = express.Router();

// for adding the new products to the mens section
router.post("/", async (req, res) => {
  try {
    const womensProducts = await WomensProduct.create(req.body);

    res.status(201).send(womensProducts);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// getting and showing the products to front-end

router.get("/", async (req, res) => {
  try {
    const womensProducts = await WomensProduct.find().lean().exec();

    res.status(201).send(womensProducts);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const womensProduct = await WomensProduct.findByIdAndDelete(req.params._id);

    res.status(201).send(womensProduct);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:_id", async (req, res) => {
  //console.log('req.params.id: ', req.params._id);
  try {
    const womensProduct = await WomensProduct.findById(req.params._id)
      .lean()
      .exec();

    res.status(201).send(womensProduct);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
