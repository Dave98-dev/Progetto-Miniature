var express = require('express');
var router = express.Router();
var Shop = require('../models/Shop')

/* GET users listing. */
router.get('/:postCode',async (req, res, next) => {
    let singleShop = await Shop.findOne({code: req.params.postCode});
    res.json(singleShop);
});

router.post('/',async (req, res, next) => {
    const shop = new Shop({
        code:req.body.code,
        title:req.body.title,
        description:req.body.description,
        bannerUrl:req.body.bannerUrl,
        items:req.body.items
    });

    let data = await shop.save();
        
    res.json(data);
});

module.exports = router;
