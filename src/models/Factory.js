import TransactionsModelMem from "./DAO/transactions.model.mem.js"
import TransactionsModelFs from "./DAO/transactions.model.fs.js"

class Factory{
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return new TransactionsModelMem()
            case "FS":
                console.log("Persistiendo en File System")
                return new TransactionsModelFs()
            default:
                console.log("Persistiendo por default en la memoria del servidor")
                return new TransactionsModelMem()
        }
    }
}

export default Factory