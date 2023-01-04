import { makeAutoObservable } from "mobx"

class ProductStorage {

    products = [
        {
            id: 1,
            title: "Лапша",
            url: "https://grandkulinar.ru/uploads/posts/2020-05/1590842915_pibimpap.jpg",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 299
        },
        {
            id: 2,
            title: "Овощи",
            url: "https://sun9-19.userapi.com/impf/c858524/v858524277/18425/-Iosyyu3UNA.jpg?size=800x533&quality=96&sign=fae65b4c10e5bc89432d458e4efea5c2&type=album",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 149
        },
        {
            id: 3,
            title: "Свинина",
            url: "https://img.freepik.com/premium-photo/concept-of-tasty-food-with-sushi-top-view_185193-78051.jpg?w=2000",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 349
        },
        {
            id: 4,
            title: "Лапша",
            url: "https://grandkulinar.ru/uploads/posts/2020-05/1590842915_pibimpap.jpg",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 299
        },
        {
            id: 5,
            title: "Овощи",
            url: "https://sun9-19.userapi.com/impf/c858524/v858524277/18425/-Iosyyu3UNA.jpg?size=800x533&quality=96&sign=fae65b4c10e5bc89432d458e4efea5c2&type=album",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 149
        },
        {
            id: 6,
            title: "Свинина",
            url: "https://img.freepik.com/premium-photo/concept-of-tasty-food-with-sushi-top-view_185193-78051.jpg?w=2000",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 349
        },
        {
            id: 7,
            title: "Лапша",
            url: "https://grandkulinar.ru/uploads/posts/2020-05/1590842915_pibimpap.jpg",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 299
        },
        {
            id: 8,
            title: "Овощи",
            url: "https://sun9-19.userapi.com/impf/c858524/v858524277/18425/-Iosyyu3UNA.jpg?size=800x533&quality=96&sign=fae65b4c10e5bc89432d458e4efea5c2&type=album",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 149
        },
        {
            id: 9,
            title: "Свинина",
            url: "https://img.freepik.com/premium-photo/concept-of-tasty-food-with-sushi-top-view_185193-78051.jpg?w=2000",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 349
        },
        {
            id: 10,
            title: "Лапша",
            url: "https://grandkulinar.ru/uploads/posts/2020-05/1590842915_pibimpap.jpg",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 299
        },
        {
            id: 11,
            title: "Овощи",
            url: "https://sun9-19.userapi.com/impf/c858524/v858524277/18425/-Iosyyu3UNA.jpg?size=800x533&quality=96&sign=fae65b4c10e5bc89432d458e4efea5c2&type=album",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 149
        },
        {
            id: 12,
            title: "Свинина",
            url: "https://img.freepik.com/premium-photo/concept-of-tasty-food-with-sushi-top-view_185193-78051.jpg?w=2000",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 349
        },
        {
            id: 13,
            title: "Лапша",
            url: "https://grandkulinar.ru/uploads/posts/2020-05/1590842915_pibimpap.jpg",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 299
        },
        {
            id: 14,
            title: "Овощи",
            url: "https://sun9-19.userapi.com/impf/c858524/v858524277/18425/-Iosyyu3UNA.jpg?size=800x533&quality=96&sign=fae65b4c10e5bc89432d458e4efea5c2&type=album",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 149
        },
        {
            id: 15,
            title: "Свинина",
            url: "https://img.freepik.com/premium-photo/concept-of-tasty-food-with-sushi-top-view_185193-78051.jpg?w=2000",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 349
        },
        {
            id: 16,
            title: "Лапша",
            url: "https://grandkulinar.ru/uploads/posts/2020-05/1590842915_pibimpap.jpg",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 299
        },
        {
            id: 17,
            title: "Овощи",
            url: "https://sun9-19.userapi.com/impf/c858524/v858524277/18425/-Iosyyu3UNA.jpg?size=800x533&quality=96&sign=fae65b4c10e5bc89432d458e4efea5c2&type=album",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 149
        },
        {
            id: 18,
            title: "Свинина",
            url: "https://img.freepik.com/premium-photo/concept-of-tasty-food-with-sushi-top-view_185193-78051.jpg?w=2000",
            mass: 200,
            description: "лапша удон, рыба красная, креветка тигровая, томаты черри, перец болгарский, огурец, азиатский соус, укроп",
            price: 349
        }
    ]

    constructor() {
        makeAutoObservable(this)
    }
}

const productStorage = new ProductStorage()
export default productStorage