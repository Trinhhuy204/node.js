const productModel = require("./../models/product.model");
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");
exports.product = function(req,res){
    res.render("auth/product");
}
exports.postProduct = async function(req,res){
        const data = req.body;
        const u = new productModel(data);
        u.save();
        res.render("auth/all_product");
    
}
exports.all_product = function(req,res){
    const data = req.body;
    var products = db.collection('products');
    products.findOne({}, function (err,data) {
        //nếu có lỗi
        if (err) throw err;
        //nếu thành công
        console.log(data);
    });
    db.close();
    res.render("auth/all_product");
}
exports.delete = function(req,res){
    let productId = req.params.productId;
    Product.findByIdAndDelete(productId, (err, doc) => {
        if (err) throw err;
        res.send(doc)
    });
    res.render("auth/all_product");
}
exports.update = function(req,res){
let productId = req.params.productId;
    Product.findByIdAndUpdate(
        { _id: productId },
        { $set: { ProductCode: req.body.ProductCode, ProductName: req.body.ProductName, ProductDate: req.body.ProductDate
            , ProductOriginPrice: req.body.ProductOriginPrice, Quantity: req.body.Quantity } },
        { useFindAndModify: false })
        .then(doc => {
            res.render("auth/all_product");
        })
    }