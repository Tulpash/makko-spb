import { makeAutoObservable } from "mobx"

class ProductStorage {

    selectedProduct = null
    isOpen = false
    products = [
        {
            id: 1,
            title: "Кимчи",
            url: "/makko-spb/images/1.jpg",
            mass: 100,
            description: "В общем случае это приправленные красным перцем, зелёным луком и луковым соком, чесноком и имбирём квашеные кочаны или листья крестоцветных.",
            price: 140
        },
        {
            id: 2,
            title: "Сукчу намуль",
            url: "/makko-spb/images/2.jpg",
            mass: 100,
            description: "Представляет собой салат из ростков маша (их также часто называют ростками бобов мунг), которые слегка отвариваются, а затем заправляются смесью соевого соуса с чесноком, кунжутным маслом.",
            price: 145
        },
        {
            id: 3,
            title: "Салат спаржа",
            url: "/makko-spb/images/3.jpg",
            mass: 100,
            description: "Уникальный продукт переработки соевых бобов, который производится из соевого молока.",
            price: 140
        },
        {
            id: 4,
            title: "Салат Чёрные грибы",
            url: "/makko-spb/images/4.jpg",
            mass: 100,
            description: "Черные китайские грибы или древесные грибы Муэр, подаются с паприкой и морковью.",
            price: 145
        },
        {
            id: 5,
            title: "Морковь по-корейски",
            url: "/makko-spb/images/5.jpg",
            mass: 100,
            description: "Салат из мелко нарезанной моркови с добавлением мелкого чеснока, ароматной кинзы и специй.",
            price: 125
        },
        {
            id: 6,
            title: "Салат из баклажанов",
            url: "/makko-spb/images/6.jpg",
            mass: 150,
            description: "В блюде используется кориандр, кинза и жгучий перец, именно они придают овощам восхитительный вкус и остроту.",
            price: 210
        },
        {
            id: 7,
            title: "Косари",
            url: "/makko-spb/images/7.jpg",
            mass: 100,
            description: "Более известный в Южной Азии салат из папоротника и репчатого лука. Будет вкусной и очень полезной закуской на столе.",
            price: 195
        },
        {
            id: 8,
            title: "Кактуги",
            url: "/makko-spb/images/8.jpg",
            mass: 100,
            description: "Это разновидность кимчи, в приготовлении которого, используются почти те же ингредиенты, только в место капусты используется редька.",
            price: 195
        },
        {
            id: 9,
            title: "Чукка",
            url: "/makko-spb/images/9.jpg",
            mass: 180,
            description: "Очень полезный, из-за своего происхождения, салат приготовленный из водорослей вакаме, с добавлением орехового соуса.",
            price: 220
        },
        {
            id: 10,
            title: "Пегодя",
            url: "/makko-spb/images/10.jpg",
            mass: 250,
            description: "Национальное корейское блюдо, которое представляет собой паровой пирожок с капустно-мясной начинкой и специями.",
            price: 95
        },
        {
            id: 11,
            title: "Кимпаб",
            url: "/makko-spb/images/11.jpg",
            mass: 300,
            description: "Популярное блюдо корейской кухни, представляет собой роллы, завернутые в сушеные прессованные листы «морской капусты», наполненные приготовленным на пару рисом, с добавлением начинки, выложенной полосками, обычно квашеных овощей, рыбы, морепродуктов, ветчины и омлета.",
            price: 320
        },
        {
            id: 12,
            title: "Куксу",
            url: "/makko-spb/images/12.jpg",
            mass: 700,
            description: "Традиционное блюдо корейской кухни, лапша, а также холодный суп с лапшой, квашеными овощами, говядиной и омлетом.",
            price: 390
        },
        {
            id: 13,
            title: "Кимчи рамён",
            url: "/makko-spb/images/13.jpg",
            mass: 700,
            description: "Это традиционное блюдо корейской, китайской и японской кухни, представляющее собой пшеничную лапшу с бульоном, салатом кимчи и свининой.",
            price: 440
        },
        {
            id: 14,
            title: "Ток поки",
            url: "/makko-spb/images/14.jpg",
            mass: 400,
            description: "Одно из самых популярных традиционных блюд в Южной Корее, которое готовят из карэттока, кочхуджана с добавлением овощей, шампиньонов и сосисок. ",
            price: 450
        },
        {
            id: 15,
            title: "Пибимпаб",
            url: "/makko-spb/images/15.jpg",
            mass: 550,
            description: "Блюдо состоит из отварного белого риса, покрытого овощным салатом намуль, пасты из острого перца кочхуджан, яичницы и тонко нарезанных кусочков говядины. Ингредиенты перемешиваются непосредственно перед употреблением блюда.",
            price: 470
        },
        {
            id: 16,
            title: "Чапче",
            url: "/makko-spb/images/16.jpg",
            mass: 350,
            description: "Корейская праздничная закуска на основе крахмалистой лапши. Лапшу жарят с овощами, грибами и мясом в раскалённом кунжутном масле, заправляют соевым соусом и посыпают семенами кунжута. Закуска может подаваться к столу как горячей, так и холодной.",
            price: 390
        },
        {
            id: 17,
            title: "Фуджи",
            url: "/makko-spb/images/17.jpg",
            mass: 240,
            description: "Авторский ролл с добавлением гребешка, сливочного сыра, лосося, мосаго, огурца, спайси соуса и кунжута.",
            price: 540
        },
        {
            id: 18,
            title: "Минари",
            url: "/makko-spb/images/18.jpg",
            mass: 300,
            description: "Очень сытный и прекрасный десерт, сочетаемый с довольно острой корейской кухней.",
            price: 370
        }
    ]

    constructor() {
        this.selectProduct = this.products.filter(p => p.id === 1)[0]
        makeAutoObservable(this)
    }

    p(id) {
        this.selectProduct = this.products.filter(p => p.id === id)[0]
    }

    setOpen(val) {
        this.isOpen = val
    }
}

const productStorage = new ProductStorage()
export default productStorage