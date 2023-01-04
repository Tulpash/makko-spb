import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return(
        <Link to={"/cart"} className={"group"}>
            <div className={"h-[50px] w-[100px] flex items-center justify-end"}>
                <div className={"h-[50px] w-[50px] flex items-center justify-center cursor-pointer rounded-md bg-transparent text-yellow-300 duration-200 group-hover:bg-yellow-300 group-hover:text-slate-600"}>
                    <span className="material-symbols-outlined text-[35px]">
                        shopping_cart
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default observer(Cart)