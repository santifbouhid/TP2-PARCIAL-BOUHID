import TransactionsService from "../services/transactions.service.js";

class TransactionsController {
  constructor() {
    this.service = new TransactionsService();
  }

  getAllTransactions = async (req, res) => {
    const resp = await this.service.getAllTransactions();
    res.send(resp);
  };

  addTransaction = async (req, res) => {
    const data = req.body;
    if (JSON.stringify(data) === "{}") {
      res.send("Transacción inválida");
    } else {
      const transactionAdded = await this.service.addTransaction(data);
      res.send(transactionAdded);
    }
  };

  getTotalTransactions = async (req, res) => {
    const resp = await this.service.getTotalTransactions();
    res.send(resp);
  };

  deleteTransaction = async (req, res) => {
    const { id } = req.params;
    const transactionDeleted = await this.service.deleteTransaction(id);
    res.send(transactionDeleted);
  };
}

export default TransactionsController;
