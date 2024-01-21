import productModel from "../models/productModel.js";
import dotenv from 'dotenv';
dotenv.config();
export const getAllProductsController = async(req,res)=>{
    try {
       const listOfData  = await productModel.find({});
    //  console.log(data.length);
       return res.status(200).send({
        productLength:listOfData.length,
        success:true,
        message:"All Products...",
        listOfData
       })
    } catch (error) {
        console.log(error)
       return res.status(400).send({
        success:false,
        message:"Something went wrong while getting all products",
        error
       })
    }
}

export const productSearchController = async(req,res)=>{
    try {
        const {keyword} = req.params
        const data = await productModel.find(
          {
            $or: [
              { title: { $regex: keyword, $options: "i" } },
              { description: { $regex: keyword, $options: "i" } },
            ],
          }
        ).select('-photo');
        return res.status(200).send(data);
    } catch (error) {
       console.log(error)
       return res.status(400).send({
        success:false,
        message:"Something went wrong while searching a products",
        error
       })
    }
}
export const monthFilterController = async(req,res)=>{
    try {
        const {month} = req.params
        const data = await productModel.find(
          {
            $or: [
              { month: { $regex:month, $options: "i" } },
            ],
          }
        )
        return res.status(200).send(data);
    } catch (error) {
       console.log(error)
       return res.status(400).send({
        success:false,
        message:"Something went wrong while searching a products",
        error
       })
    }
}
