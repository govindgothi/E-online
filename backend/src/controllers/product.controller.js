import { Product } from "../models/eletronicProduct/mobile.model.js";

const ListingProduct = async (req, res) => {
  try {
    const detail = req.body;
    console.log(detail);
    const product = Product.create({
      productName: detail.productName,
      productCategory: detail.productCategory,
      productPrice: detail.productPrice,
      productImage: detail.productImage,
      productDescription: detail.productDescription,
      //---------------------------------------------------------------------------------------
      productHighlight: detail.productHighlight,
      //---------------------------------------------------------------------------------------
      specification: detail.specification,

      displayFeatures: detail.displayFeatures,

      OS_ProcessorFeatures: detail.OS_ProcessorFeatures,

      Memory_Storage_feature: detail.Memory_Storage_feature,

      Camera_Features: detail.Camera_Features,
      Call_Features: detail.Call_Features,
      Connectivity_Features: detail.Connectivity_Features,
      Other_Details: detail.Other_Details,
      Multimedia_Features: detail.Multimedia_Features,
      Battery_Power_Features: detail.Battery_Power_Features,

      dimension: detail.dimension,
      Warranty: detail.Warranty,
    });
  } catch {}
};
export { ListingProduct };
