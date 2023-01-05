import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import cartStorage from '../storages/cart.storage'

const Cart = () => {
    return(
        <Link to={"/makko-spb/cart"}>
            <div className={"h-[50px] w-[50px] md:w-[100px] flex items-center justify-end group"}>
                <div className={"h-[50px] w-[50px] relative flex items-center justify-center cursor-pointer rounded-md bg-transparent text-yellow-300 duration-200 group-hover:bg-yellow-300 group-hover:text-slate-600"}>
                    <span className="material-symbols-outlined text-[35px]">
                        shopping_cart
                    </span>
                    <div className={'min-w-[20px] h-[20px] w-max absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] rounded-[50%] bg-red-400 text-[12px] flex items-center justify-center'}>
                        {cartStorage.size()}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default observer(Cart)