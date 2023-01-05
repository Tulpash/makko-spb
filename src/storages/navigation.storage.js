import { makeAutoObservable } from "mobx"

class NavigationStorage {
    constructor() {
        makeAutoObservable(this)
    }

    menus = [
        {
            title: "Главная",
            path: "/",
            ico: "restaurant_menu"
        },
        {
            title: "Каталог",
            path: "/catalog",
            ico: "restaurant_menu"
        },
        {
            title: "Условия",
            path: "/post",
            ico: "store"
        },
        {
            title: "О магазине",
            path: "/about",
            ico: "apartment"
        }
    ]
}

const navigationStorage = new NavigationStorage()
export default navigationStorage