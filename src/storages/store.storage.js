import { makeAutoObservable } from "mobx"

class StoreStorage {
    constructor() {
        makeAutoObservable(this)
    }

    stores = [
        {
            id: 1,
            address: "Линейная ул., 3",
            start: "09:00",
            end: "10:00",
            cords: [57.83829, 28.31976]
        },
        {
            id: 2,
            address: "Октябрьский пр., 50к1",
            start: "09:00",
            end: "10:00",
            cords: [57.81773, 28.33487]
        },
        {
            id: 3,
            address: "Ленинградское ш., 26Б",
            start: "09:00",
            end: "10:00",
            cords: [57.79492, 28.41603]
        },
        {
            id: 4,
            address: "Пожиговская ул., 10",
            start: "09:00",
            end: "10:00",
            cords: [57.83711, 28.38647]
        }
    ]
}

const storeStorage = new StoreStorage()
export default storeStorage