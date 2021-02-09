var express = require('express');
var router = express.Router();
var Shop = require('../models/Shop')

/* GET single shop. */
router.get('/:shopCode/:userToken?',async (req, res, next) => {
    let singleShop = await Shop.findOne({code: req.params.shopCode});
    res.json({
        modifiable:req.params.userToken != null && req.params.userToken == singleShop.author,
        code:singleShop.code,
        title:singleShop.title,
        description:singleShop.description,
        bannerUrl:singleShop.bannerUrl,
        items:singleShop.items
    });
});

/* GET all shops */
router.get('/',async (req, res, next) => {
    let shops = await Shop.find({});
    let shopsMap = shops.map(shop => {
        return {
            code:shop.code,
            title:shop.title,
            bannerUrl:shop.bannerUrl,
        }
    });
    res.json(shopsMap);
});
//creates a shop
router.post('/',async (req, res, next) => {
    if(checkShopFromBody(body)){
        const shop = getShopFromBody(req.body);
    
        let data = await shop.save();
            
        res.json(data);
    }else{
        res
            .status(400)
            .send("invalid shop");
    }

});

//deletes a shop
router.delete('/:shopCode/:userToken', async (req,res,next)=>{
    let shopToDelete = await Shop.findOne({code: req.params.shopCode});    
    if(req.params.userToken != null && shopToDelete.author == req.params.userToken){
        res.json(await Shop.findOneAndDelete({code: req.params.shopCode}));
    }
    else{
        res
            .status(403)
            .send("you don't have permission to delete");
    }
});

//patch shop
router.patch('/:shopCode/:userToken', async(req,res,next)=>{
    let shopToPatch = await Shop.findOne({code: req.params.shopCode});    
    if(req.params.userToken != null && shopToPatch.author == req.params.userToken){
        if(checkShopFromBody(req.body)){
            let newshop = getShopFromBody(req.body);
            Shop.findOneAndUpdate({code: req.params.shopCode},newshop);
        }
        else{
            res
                .status(400)
                .send("invalid shop");
        }        
    }
    else{
        res
            .status(403)
            .send("you don't have permission to update");
    }
});

function checkShopFromBody(body){
    return body.author != null && body.code != null;
}

function getShopFromBody(body) {
    return new Shop({
        author: body.author,
        code: body.code,
        title: body.title,
        description: body.description,
        bannerUrl: body.bannerUrl,
        items: body.items
    });
}

module.exports = router;