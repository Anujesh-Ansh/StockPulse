import express from "express";
import {
  getProducts,
  getAll,
  getTransactions,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

//stocks
router.get("/products", getProducts);

// stocks updates
router.get("/all", getAll);

//if u want, u can remove it
router.get("/transactions", getTransactions);

//remove
router.get("/geography", getGeography);

export default router;
