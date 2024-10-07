import mongoose, { Schema } from "mongoose";

const smartwatchsSchema = new Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
    index: true,
    maxlength: 50,
  },
  //---------------------------------------------------------------------------------------
  productCategory: {
    type: String,
    enum: ["watchs", "smartWatch"],
    default: "Other",
    trim: true,
    require: true,
  },
  //---------------------------------------------------------------------------------------
  productPrice: {
    type: Number,
    required: true,
    min: 0,
    trim: true,
  },
  //---------------------------------------------------------------------------------------
  productImage: [
    {
      type: String,
      required: true,
    },
  ],
  //---------------------------------------------------------------------------------------

  productDescription: [
    {
      specesName: {
        type: String,
        require: true,
        maxlength: 200,
      },
      detailDescription: {
        type: String,
        // maxlength:300,
      },
    },
  ],
  productHighlight: [
    {
      type: String,
      maxlength: 150,
    },
  ],
  Specification: {
    General: {},
    ProductDetails: {},
    ConnectivityFeatures: {
      Call_Function: {
        type: String,
    enum: ["Yes", "No"],
    default: "No",
      },
      Bluetooth: {
        type: String,
    enum: ["Yes", "No"],
    default: "No",
      },
      Messaging_Support: {
        type: String,
    enum: ["Yes", "No"],
    default: "No",
      },
      Email_Support: {
        type: String,
    enum: ["Yes", "No"],
    default: "No",
      },
      Operating_Range: {
        type:String,
        required:true
      },
      Call_Features: {
        
      },
    },
    Camera_DisplayFeatures: {},
    Fitness_WatchFunctions: {},
    Audio_Video_Features: {},
    Warranty: {},
  },
});
const Smartwatchs = mongoose.model("Smartwatchs", smartwatchsSchema);
export { Smartwatchs };
