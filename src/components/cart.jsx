import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return(
        <div className={"h-[50px] w-[50px] md:w-[100px] flex items-center justify-end"}>
            <Link to={"/makko-spb/cart"}>
                <div className={"h-[50px] w-[50px] flex items-center justify-center cursor-pointer rounded-md bg-transparent text-yellow-300 duration-200 hover:bg-yellow-300 hover:text-slate-600"}>
                    <span className={"material-symbols-outlined text-[35px]"}>
                        shopping_cart
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default observer(Cart)