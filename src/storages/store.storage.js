import { makeAutoObservable } from "mobx"

class StoreStorage {
    constructor() {
        makeAutoObservable(this)
    }

    stores = [
        {
            id: 1,
            address: "test 1",
            start: "09:00",
            end: "10:00"
        },
        {
            id: 2,
            address: "test 2",
            start: "09:00",
            end: "10:00"
        },
        {
            id: 3,
            address: "test 3",
            start: "09:00",
            end: "10:00"
        },
        {
            id: 4,
            address: "test 4",
            start: "09:00",
            end: "10:00"
        }
    ]
}

const storeStorage = new StoreStorage()
export default storeStorage