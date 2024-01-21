import express, { json } from "express";
import dbConnect from "./databaseConn/Db.js";
import ProductRoutes from "./router.js";
import productModel from "./models/productModel.js";
import dotenv from "dotenv";
import { fetchDataFromApi } from "./fetchUrl.js";
import cors from "cors";
const App = express();
dotenv.config(); // env
dbConnect(); // database connect
App.use(cors());
App.use(express.json());

//----- Please don't run this code Bcoz data is already seeded in database -------
//----------- write this code for adding data into mongoDB database;

// for getting date and month from dateOfSale string
// const dateFun = (dateString,flag) => {
//     const dateObj = new Date(dateString);
//     const year = dateObj.getFullYear();
//     const month = dateObj.getMonth() + 1;
//     const day = dateObj.getDate();
//     const monthNames = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     const monthName = monthNames[month - 1];
//     if(flag === "date"){
//         return `${day}-${month}-${year}`
//     }else if(flag === "month"){
//         return `${monthName}`
//     }
// };

//Fetching data from api url

// const apiUrl = process.env.APIURL;
// fetchDataFromApi(apiUrl)
//   .then(async (data) => {
//     try {
//       var result = [];
//       data.map((it, i) => {
//         let res = {
//           title: it.title,
//           description: it.description,
//           price: it.price,
//           category: it.category,
//           image: it.image,
//           dateOfSale: dateFun(it.dateOfSale,"date"),
//           month: dateFun(it.dateOfSale,"month"),
//           sold: it.sold,
//         };
//         result.push(res);
//       });
//       await productModel.insertMany(result);
//       console.log("Product Data Inserted Successfully");
//     } catch (error) {
//       console.log(`Error : ${error}`);
//       console.log("Got ERROR while inserting data");
//     }
//   })
//   .catch(() => {
//     console.log("Error in fetching the data");
//   });
//--------- END OF THE THAT CODE --------------------


// Routes
App.use("/api/v1/product", ProductRoutes);
const PORT = process.env.PORT || 5000;
App.listen(PORT, () => {
  console.log("server is runnig on Port", PORT);
});
