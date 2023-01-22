import { useState } from 'react'
import { Link } from "react-router-dom"
import { observer } from "mobx-react"
import cartStorage from "../storages/cart.storage"
import ClockLoader from "react-spinners/ClockLoader";

const BuyPage = () => {
    const [isLoading, setLoading]= useState(true);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    const milliseconds = Math.floor(Math.random() * 5) * 1000
    sleep(milliseconds).then(() => setLoading(false))
    return(
        <div className={"w-screen h-screen bg-slate-700 flex flex-col justify-center items-center text-[25px] text-white"}>
            {
                isLoading ?
                <ClockLoader
                    color={"#fddf47"}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> :
                <>
                    <div className={"text-yello2-300 text-[30px] text-yellow-300 mb-[80px]"}>
                        Спасибо за покупку!
                    </div>
                    {
                        cartStorage.isDelivery ?
                        <div>
                            Доставка по адресу <span className={"text-yellow-300"}>{cartStorage.address}</span> на имя <span className={"text-yellow-300"}>{cartStorage.name}</span> в <span className={"text-yellow-300"}>{cartStorage.time}</span>
                        </div> :
                        <div>
                            Самовывоз из магазина по адресу <span className={"text-yellow-300"}>{cartStorage.store.address}</span>, время работы <span className={"text-yellow-300"}>{cartStorage.store.start}</span> - <span className={"text-yellow-300"}>{cartStorage.store.end}</span>
                        </div>
                    }
                    <div className={"mb-[80px]"}>
                        Для подтверждения заказа с вами свяжется наш оперпатор
                    </div>
                    <Link to={"/makko-spb"} onClick={() => cartStorage.reset()} className={'px-2 py-2 flex flex-row justify-center items-center gap-2 text-yellow-300 text-[20px] rounded-md cursor-pointer duration-200 hover:bg-yellow-300 hover:text-slate-600 hover:gap-6'}>
                        <span className={'material-symbols-outlined text-[35px]'}>
                            chevron_left
                        </span>
                        <span>
                            Вернутсья в магазин
                        </span>
                    </Link>
                </>
            }
        </div>
    )
}

export default observer(BuyPage)