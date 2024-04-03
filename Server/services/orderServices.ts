import { NextFunction,Response } from "express";
import { CatchAsyncError } from "../middleware/CatchAsyncErrors";
import OrderModel from "../models/orderModel";

async function newOrder(data: any, next: NextFunction,res:Response) {
 const order = await OrderModel.create(data);
 
 res.status(200).json({
     success: true,
     order
});

}
export const createNewOrder = CatchAsyncError(newOrder);