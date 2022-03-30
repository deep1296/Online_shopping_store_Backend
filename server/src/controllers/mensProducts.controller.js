const express = require('express');
const MensProduct = require('../models/mensProduct.model');
const router = express.Router();
const authenticate = require("../middlewares/authenticate");


// for adding the new products to the mens section
router.post( "/mensClothing",authenticate, async(req,res) => {
    try{
        req.body.user_id = req.user._id;
        const mensProducts = await MensProduct.create(req.body);

        return res.send(mensProducts);

    }
    catch(err){
        return res.send({ message: err.message });
    }
})


// getting and showing the products to front-end

router.get("/mensClothing", async(req,res) => {
    try{
        const mensProducts = await MensProduct.find().lean().exec();

        res.status(201).send(mensProducts);

    }
    catch(err){
        res.status(500).send(err.message);
    }
})

router.get("/mensClothing/:id", async(req,res) => {
    console.log('req.params.id: ', req.params.id);
    try{
        const mensProduct = await MensProduct.findById(req.params.id).lean().exec();
        

        res.status(201).send(mensProduct);
    }catch(err) {
        res.status(500).send(err.message);
    }
})

// router.delete('/mensClothing/:id',async(req,res) => {
//     try {
//         console.log("first")
//       const mensProduct = await MensProduct.findByIdAndDelete(req.params.id);
//       return res.send(mensProduct);
//     } catch (error) {
//       return res.status(500).send({ message: error.message });
//     }
//   })
router.delete("/mensClothing/:id", async (req, res) => {
    try {
        console.log("first")
      const mensProduct = await MensProduct.findByIdAndDelete(req.params.id);
  
      res.status(201).send(mensProduct);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  
// for adding the new products to the mens section
router.post("/mens", async (req, res) => {
    try {
      const mensProducts = await MensProduct.create(req.body);
  
      res.status(201).send(mensProducts);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  // getting and showing the products to front-end
  
  router.get("/mens", async (req, res) => {
    try {
      const mensProducts = await MensProduct.find().lean().exec();
  
      res.status(201).send(mensProducts);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  router.delete("/mens/:_id", async (req, res) => {
    try {
      const mensProduct = await MensProduct.findByIdAndDelete(req.params._id);
  
      res.status(201).send(mensProduct);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  router.get("/mens/:_id", async (req, res) => {
    //console.log('req.params.id: ', req.params._id);
    try {
      const mensProduct = await MensProduct.findById(req.params._id)
        .lean()
        .exec();
  
      res.status(201).send(mensProduct);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  

module.exports = router;