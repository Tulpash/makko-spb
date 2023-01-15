import { Link } from "react-router-dom"
import { observer } from "mobx-react"
import cartStorage from "../storages/cart.storage"

const BuyPage = () => {
    return(
        <div className={"w-screen h-screen bg-slate-700 flex flex-col justify-center items-center text-[25px] text-white"}>
            <div className={"text-yello2-300 text-[30px] text-yellow-300 mb-[80px]"}>
                Спасибо за покупку!
            </div>
            {
                cartStorage.isDelivery ?
                <div>
                    Доставка по адресу <span className={"text-yellow-300"}>{cartStorage.address}</span> на имя <span className={"text-yellow-300"}>{cartStorage.name}</span> в ближайшее время
                </div> :
                <div>
                    Самовывоз из магазина по адресу <span className={"text-yellow-300"}>{cartStorage.store.address}</span>, время работы <span className={"text-yellow-300"}>{cartStorage.store.start}</span> - <span className={"text-white"}>{cartStorage.store.end}</span>
                </div>
            }
            <div className={"mb-[80px]"}>
                Для подтверждения заказа с вами свяжется наш оперпатор
            </div>
            <Link to={"/makko-spb"} className={'px-2 py-2 flex flex-row justify-center items-center gap-2 text-yellow-300 text-[20px] rounded-md cursor-pointer duration-200 hover:bg-yellow-300 hover:text-slate-600 hover:gap-6'}>
                <span className={'material-symbols-outlined text-[35px]'}>
                    chevron_left
                </span>
                <span>
                    Вернутсья в магазин
                </span>
            </Link>
        </div>
    )
}

export default observer(BuyPage)