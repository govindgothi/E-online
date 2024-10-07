import mongoose,{Schema} from "mongoose"

const commentSchema = new Schema({
    productId:{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
    comment:{
        type:String,
        require:true,
        trim:true,
        maxlength:200,
    }
})

const Comment = mongoose.model("Comment",commentSchema)