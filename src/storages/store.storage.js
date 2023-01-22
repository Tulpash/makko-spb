import { makeAutoObservable } from "mobx"
import { format } from 'date-fns'

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

    availableTime() {
        //End time
        let end = new Date()
        end.setHours(23)
        end.setMinutes(0)

        //current time
        let now = new Date()
        now.setHours(now.getHours() + 1)

        //Result times
        let times = []

        while (end > now) {
            let tmp = format(end, 'HH:mm')
            times.push(tmp)
            end.setMinutes(end.getMinutes() - 15)
        }

        return times.reverse()
    }
}

const storeStorage = new StoreStorage()
export default storeStorage