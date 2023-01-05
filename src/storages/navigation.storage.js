import { makeAutoObservable } from "mobx"

class NavigationStorage {
    constructor() {
        makeAutoObservable(this)
    }

    menus = [
        {
            title: "Главная",
            path: "/makko-spb/",
            ico: "restaurant_menu"
        },
        {
            title: "Каталог",
            path: "makko-spb/catalog",
            ico: "restaurant_menu"
        },
        {
            title: "Условия",
            path: "makko-spb/post",
            ico: "store"
        },
        {
            title: "О магазине",
            path: "makko-spb/about",
            ico: "apartment"
        }
    ]
}

const navigationStorage = new NavigationStorage()
export default navigationStorage