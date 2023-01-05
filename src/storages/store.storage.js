import { makeAutoObservable } from "mobx"

class StoreStorage {
    constructor() {
        makeAutoObservable(this)
    }

    stores = [
        {
            address: "",
            time: ""
        }
    ]
}

const storeStorage = new StoreStorage()
export default storeStorage