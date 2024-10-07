import mongoose,{Schema} from "mongoose";

const chargerSchema = new Schema({
    ChargerName:{
        type:String,
        require:true,
        trim:true,
    },
    MRP_Price:{
        type:Number,
    },
    chargerDiscount:{
        type:Number,
    },
    oringinalPrice:{
        type:Number,
    },
    chargerImage:[
        {
            type:String,
            require:true,
        }
    ],
    ChargerHighlight:{
        charger_Type:{
            type:String,
            require:true,
            trim:true,
        },
        suitable_For:{
            type:String,
        },
        cable_Include:{
            type:String,
        },
        Output_Current:{
            type:String,
        },
    },
    
    Specification:{

        General:{ 
        Sales_Package:{
                type:String,
        },
        Model_Number:{
            type:String,
        },
        Model_Name:{
            type:String,
        },
        Output_Interface:{
            type:String,
        },
        LED_Indicator:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },
        Display:{
            type:String,
            enum: ["Yes", "No"],
            default: "NA",
        },
        Number_Of_Devices_Batteries_Charged:{
            type:String,
        },
        Width_Height_Depth:{
            type:String,
        },
        Weight:{
            type:String,
        }
        },

        Power_Features:{
        Power_Input:{
            type:String,
        },
        Output_Current:{
            type:String,
        },
        Output_Wattage:{
            type:String,
        },
        },

        Warranty:{
        Warranty_Service_Type:{  
        type:String,
        },
        Domestic_Warranty:{
        type:String,
        },
        },
    }
})