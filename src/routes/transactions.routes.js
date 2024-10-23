import TransactionsController from "../controllers/transactions.controller.js";
import express from "express";

class TransactionsRoutes {
  constructor() {
    this.controller = new TransactionsController();
    this.router = new express.Router();
  }

  start() {
    
    this.router.get("/transactions", this.controller.getAllTransactions);

    this.router.get("/transactions/total", this.controller.getTotalTransactions);

    this.router.post("/addTransaction", this.controller.addTransaction);

    this.router.delete("/deleteTransaction/:id", this.controller.deleteTransaction);

    return this.router;
  }
}

export default TransactionsRoutes;
