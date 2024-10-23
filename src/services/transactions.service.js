import Factory from "../models/Factory.js";

class TransactionsService {
  constructor() {
    this.model = Factory.get("MEM");
  }

  getAllTransactions = async () => {
    return await this.model.getAllTransactions();
  };

  addTransaction = async (data) => {
    return await this.model.addTransaction(data);
  };
  
  getTotalTransactions = async () => {
    return await this.model.getTotalTransactions();
  };

  deleteTransaction = async (id) => {
    return await this.model.deleteTransaction(id);
  };
  
}
export default TransactionsService;
