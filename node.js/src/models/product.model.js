const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    // _id
    ProductCode: {
        type: String,
        required:[true,"Trường này bắt buộc phải nhập dữ liệu"],
        minLength:[1,"Độ dài tối thiểu 1"]
    },
    ProductName: {
    type: String,
    required:[true,"Trường này bắt buộc phải nhập dữ liệu"],
    minLength:[6,"Độ dài tối thiểu 6"]
},
ProductDate:{
    type: String,
    required:[true,"Trường này bắt buộc phải nhập dữ liệu"],
    minLength:[6,"Độ dài tối thiểu 6"]
},
ProductOriginPrice:{
    type: String,
    required:[true,"Trường này bắt buộc phải nhập dữ liệu"],
    minLength:[6,"Độ dài tối thiểu 6"]
},
Quantity:{
    type: String,
    required:[true,"Trường này bắt buộc phải nhập dữ liệu"],
    minLength:[1,"Độ dài tối thiểu 1"]
},
});
module.exports = mongoose.model("Product",product_schema);// product