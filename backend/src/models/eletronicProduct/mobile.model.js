import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
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
    enum: ["tablet", "mobile"],
    default: "Other",
    trim: true,
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
  //---------------------------------------------------------------------------------------
  productHighlight: {
    memory: {
      type: String,
    },
    display: {
      type: String,
    },
    camera: {
      type: String,
    },
    battery: {
      type: String,
    },
    processor: {
      type: String,
    },
  },
  //---------------------------------------------------------------------------------------
  specification: {
    general: {
      In_The_Box: {
        type: String,
      },
      Model_Number: {
        type: String,
      },
      Model_Name: {
        type: String,
      },
      Color: {
        type: String,
      },
      Browse_Type: {
        type: String,
      },
      SIM_Type: {
        type: String,
      },
      Hybrid_Sim_Slot: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      Touch_Screen: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      OTG_Compatible: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      Quick_Charging: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      Sound_Enhancements: {
        type: String,
      },
    },

    displayFeatures: {
      Display_Size: {
        type: String,
      },
      Resolution: {
        type: String,
      },
      Resolution_Type: {
        type: String,
      },
      GPU: {
        type: String,
      },
      Display_Type: {
        type: String,
      },
      Display_Colors: {
        type: String,
      },
      Other_Display_Feature: {
        type: String,
      },
    },
    OS_ProcessorFeatures: {
      Operating_System: {
        type: String,
      },
      Processor_Brand: {
        type: String,
      },
      Processor_Type: {
        type: String,
      },
      Processor_Core: {
        type: String,
      },
      Primary_Clock_Speed: {
        type: String,
      },
      Secondary_Clock_Speed: {
        type: String,
      },
      Operating_Frequency: {
        type: String,
      },
    },
    Memory_Storage_feature: {
      Internal_Storage: {
        type: String,
      },
      RAM: {
        type: String,
      },
      Expandable_Storage: {
        type: String,
      },
      Memory_Card_Slot_Type: {
        type: String,
      },
    },
    Camera_Features: {
      Primary_Camera_Available: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      Primary_Camera: {
        type: String,
      },
      Primary_Camera_Features: {
        type: String,
      },
      Optical_Zoom: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      Secondary_Camera_Available: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      Secondary_Camera: {
        type: String,
      },
      Secondary_Camera_Features: {
        type: String,
      },
      Flash: {
        type: String,
      },
      HD_Recording: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      Full_HD_Recording: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      Video_Recording: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      Video_Recording_Resolution: {
        type: String,
      },
      Digital_Zoom: {
        type: String,
      },
      Frame_Rate: {
        type: String,
      },
      Dual_Camera_Lens: {
        type: String,
      },
    },
    Call_Features: {
      Video_Call_Support: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      Speaker_Phone: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      Call_Records: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
    },
    Connectivity_Features: {
        Network_Type:{
            type:String,
        },
        Supported_Networks:{
            type:String,
        },

        Internet_Connectivity:{
            type:String,
        },
         Three_G:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
         },
        GPRS:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },

        Micro_USB_Port:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },

        Micro_USB_Version:{
            type:String,
        },
        Bluetooth_Support:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },
        Bluetooth_Version:{
            type:String,
        },
        Wifi:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },

        Wifi_Version:{
            type:String,
        },
        Wifi_Hotspot:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },
        NFC:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },
        Infrared:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },
        USB_Connectivity:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },
        EDGE:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },
        Audio_Jack:{
            type:String,
        },
        Map_Support:{
            type:String,
        },
        GPS_Support:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },
    },
    Other_Details: {
        Smartphone:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },
        Touchscreen_Type:{
            type:String,
        },
        SIM_Size:{
            type:String,
        },
        User_Interface:{
            type:String,
        },
        SMS:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },
        Graphics_PPI:{
            type:String,
        },
        Sensors:{
            type:String,
        },
        Ringtones_Format:{
            type:String,
        },
        Other_Features:{
            type:String,
        },
        GPS_Type:{
            type:String,
        },
    },
    Multimedia_Features: {
      FM_Radio: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      FM_Radio_Recording: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      DLNA_Format: {
        type: String,
        enum: ["Yes", "No"],
        default: "NA",
      },
      Audio_Format: {
        type: String,
      },
      Video_Format: {
        type: String,
      },
    },
    Battery_Power_Features: {
      Battery_Capacity: {
        type: String,
      },
      Battery_Type: {
        type: String,
      },
    },
    dimension: {
      Width: {
        type: String,
      },
      Height: {
        type: String,
      },
      Depth: {
        type: String,
      },
      Wieght: {
        type: String,
      },
    },
    Warranty: {
      Warranty_Summary: {
        type: String,
      },
      Domestic_Warranty: {
        type: String,
      },
    },
  },
});

const Product = mongoose.model("Product", productSchema);
export { Product };
