const express = require("express");
const router = express.Router();
const controller = require("./../Controller/auth.controller");
const { check } = require("express-validator");
const validateProduct = ()=>{
    return [
        check("ProductName","Tối thiểu 6 ký tự").isLength({min:6}),
        check("ProductCode","Vui lòng nhap code").not().isEmpty(),    
        check("ProductOriginPrice","Vui lòng nhập giá sản phẩm").not().isEmpty(),
        check("ProductDate","Vui lòng nhap ngay sx").not().isEmpty(),
        check("Quantity","Tối thiểu 1 sản phẩm").isLength({min:1}),
    ]
}

router.get("/product",controller.product);
router.post("/product",validateProduct(),controller.postProduct);

router.post("/all-product",controller.all_product);
router.get("/delete-product",controller.delete);
router.post("/update-product",controller.update);
module.exports = router;