import mongoose,{Schema} from "mongoose"
 
const productSchema = new Schema({
   productName:{
    type: String,
    required: true,
    trim: true,
    index: true,
    maxlength: 50,
   },
   productCategory:{
    type: String,
    enum: ['Electronics', 'Clothing', 'Books', 'Home', 'Other'],
    default: 'Other',
    trim: true,
   },
   productPrice:{
    type: Number,
    required: true,
    min: 0,
    trim: true,
   },
   productImage:[
    {
        type:String,
        required: true,
    }
   ],
   productRating:{

   },
   productComment:[
    {

    }
   ],
   productDetail:{
       type: String,
       maxlength:500,
   },
})

const Product = mongoose.model("Product",productSchema)
//export {Product}