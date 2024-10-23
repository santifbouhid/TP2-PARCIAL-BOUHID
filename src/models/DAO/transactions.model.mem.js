class TransactionsModelMem {
  constructor() {
    this.transactions = [
      { id: 1, tipo: "retiro", monto: 1000, destinatario: "Juan Perez" },
      {
        id: 2,
        tipo: "transferencia",
        monto: 5000,
        destinatario: "Daniela Gomez",
      },
      { id: 3, tipo: "retiro", monto: 2000, destinatario: "Nicolás Pereyra" },
    ];
  }

  getAllTransactions = async () => {
    let resp;
    if (this.transactions.length > 0) {
      resp = await this.transactions;
    } else {
      resp = "No hay transacciones hechas";
    }
    return resp;
  };

  addTransaction = async (data) => {
    data.id =
      this.transactions.length > 0
        ? this.transactions[this.transactions.length - 1].id + 1
        : 1;
    await this.transactions.push(data);
    return data;
  };

  getTotalTransactions = async () => {
    const total = await this.transactions.length;
    return `Cantidad total de transacciones: ${total}`;
  };

  deleteTransaction = async (id) => {
    let resp;
    const index = await this.transactions.findIndex((t) => t.id == id);
    if (index > -1) {
      const transactionDeleted = await this.transactions.splice(index, 1);
      resp = await `Transacción eliminada correctamente: \n ${JSON.stringify(
        transactionDeleted
      )}`;
    } else {
      resp = "Id inválido";
    }
    return resp;
  };
}

export default TransactionsModelMem;
