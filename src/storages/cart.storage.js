import { makeAutoObservable } from 'mobx'
import productStorage from './product.storage'
import storeStorage from './store.storage'

class CartStorage {
    constructor() {
        makeAutoObservable(this)
    }

    //Selected food
    selected = []

    //Fort cart
    isDelivery = false

    //For cart - delivery
    store = null

    //For cart - self service
    name = null
    phone = null
    address = null

    add(id) {
        let item = productStorage.products.filter(e => e.id === id).slice()[0]
        this.selected.push(item)
    }

    remove(id) {
        let index = this.selected.findIndex(e => e.id === id)
        this.selected.splice(index, 1)
    }

    include(id) {
        let items = this.selected.filter(e => e.id === id)
        return items.length > 0
    }

    count(id) {
        return this.selected.filter(e => e.id === id).length
    }

    size() {
        return this.selected.length
    }

    fullPrice() {
        if (this.selected.length <= 0)
            return 0
        return this.selected.reduce((res, current) => res + current.price, 0)
    }

    cart() {
        let groups = this.selected.reduce((res, current) => {
            (res[current.id] = res[current.id] || []).push(current)
            return res
        }, []).filter(e => e)
        let t = groups.map(g => { 
            let total = g.reduce((res, current) => res + current.price, 0)
            return ({ id: g[0].id, title: g[0].title, price: g[0].price, mass: g[0].mass, quantity: g.length, totalPrice: total, url: g[0].url })
        })
        return t
    }

    isEmpty() {
        return this.selected.length <= 0 ? true : false
    }

    selectStore(id) {
        this.store = storeStorage.stores.filter(s => s.id === id)[0]
    }

    setDelivery(bool) {
        this.isDelivery = bool
    }

    selectName(name) {
        this.name = name
    }

    selectAddress(address) {
        this.address = address
    }

    selectPhone(phone) {
        this.phone = phone
    }

    isReadyToBuy() {
        if (!this.isDelivery)
            return this.store !== null
        else 
            return this.name !== null && this.name !== "" &&
                this.phone !== null && this.phone !== "" &&
                this.address !== null && this.address !== "" 
    }
}

const cartStorage = new CartStorage()
export default cartStorage