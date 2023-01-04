import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import cartStorage from '../storages/cart.storage'

const Cart = () => {
    const price = cartStorage.fullPrice()
    return(
        <Link to={"/cart"} className={"group"}>
            <div className={"h-[50px] w-[50px] flex items-center justify-center cursor-pointer rounded-md bg-transparent text-yellow-300 duration-200 group-hover:bg-yellow-300 group-hover:text-slate-600"}>
                <span className="material-symbols-outlined text-[35px]">
                    shopping_cart
                </span>
            </div>
            {/* {
                price > 0 &&
                <div className={"absolute top-[-12px] right-[-12px] p-1 rounded-md text-green-400 text-sm duration-200 group-hover:bg-green-400 group-hover:text-white"}>
                    {price}
                </div>
            } */}
        </Link>
    )
}

export default observer(Cart)