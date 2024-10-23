// DEBAJO DE TODO HAY UN ARRAY DE PRUEBA

import fs from "fs";

class TransactionsModelFs {
  constructor() {
    this.transactions = "transactions.json";
  }

  getAllTransactions = async () => {
    const transactionsJson = await fs.promises.readFile(this.transactions, "utf-8");
    const transactionsArr = JSON.parse(transactionsJson);

    let resp;
    if (transactionsArr.length > 0) {
      resp = await transactionsArr;
    } else {
      resp = "No hay transacciones hechas";
    }
    return resp;
  };

  addTransaction = async (data) => {
    const transactionsJson = await fs.promises.readFile(this.transactions, "utf-8");
    const transactionsArr = await JSON.parse(transactionsJson);

    data.id =
      transactionsArr.length > 0
        ? transactionsArr[transactionsArr.length - 1].id + 1
        : 1;
    transactionsArr.push(data);
    let newJson = JSON.stringify(transactionsArr);
    await fs.promises.writeFile(this.transactions, newJson);
    return data;
  };

  getTotalTransactions = async () => {
    const transactionsJson = await fs.promises.readFile(this.transactions, "utf-8");
    const transactionsArr = JSON.parse(transactionsJson);

    const total = await transactionsArr.length;
    return `Cantidad total de transacciones: ${total}`;
  };

  deleteTransaction = async (id) => {
    const transactionsJson = await fs.promises.readFile(this.transactions, "utf-8");
    const transactionsArr = JSON.parse(transactionsJson);

    let resp;
    const index = await transactionsArr.findIndex((t) => t.id == id);
    if (index > -1) {
      const transactionDeleted = await transactionsArr.splice(index, 1);
      resp = await `Transacción eliminada correctamente: \n ${JSON.stringify(
        transactionDeleted
      )}`;
    } else {
      resp = "Id inválido";
    }

    let newJson = JSON.stringify(transactionsArr);
    await fs.promises.writeFile(this.transactions, newJson);

    return resp;
  };
}

export default TransactionsModelFs;

/*

[
    {
        "id": 1,
        "tipo": "retiro",
        "monto": 1000,
        "destinatario": "Joaquin Lopez"
    },
    {
        "id": 2,
        "tipo": "transferencia",
        "monto": 5000,
        "destinatario": "Julieta Barrios"
    },
    {
        "id": 3,
        "tipo": "retiro",
        "monto": 2000,
        "destinatario": "Nicolás Pereyra"
    }
]


*/
