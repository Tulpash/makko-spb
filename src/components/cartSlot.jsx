import { observer } from "mobx-react"
import cartStorage from '../storages/cart.storage'

const CartSlot = ({productGroup}) => {
    return(
        <div className={'h-[80px] flex flex-row justify-between items-center gap-1 md:gap-4'}>
            <img alt={''} src={productGroup.url} className={'w-[50px] h-[50px] md:w-[80px] md:h-[80px] object-cover rounded-md'} />
            <div className={'h-full w-full flex-shrink flex-grow-0 basis-auto flex flex-col justify-center'}>
                <div className={'w-full text-yellow-300 text-[15px] md:text-[25px] text-left'}>
                    {productGroup.title} ({productGroup.mass} г)
                </div>
                <div className={'w-full text-white text-[15px] md:text-[20px] text-left'}>
                    {productGroup.price} р
                </div>
            </div>
            <div className={'w-[75px] md:w-[150px] h-full flex items-center justify-center'}>
                <div 
                    className={'w-[25px] h-[25px] md:w-[50px] md:h-[50px] flex items-center justify-center cursor-pointer rounded-md duration-200 hover:bg-red-400 group'}
                    onClick={() => cartStorage.remove(productGroup.id)} 
                >
                    <span className={"material-symbols-outlined text-red-400 text-[20px] md:text-[30px] duration-200 group-hover:text-white"}>
                        remove
                    </span>
                </div>
                <div className={'w-[25px] h-[25px] md:w-[50px] md:h-[50px] flex items-center justify-center text-yellow-300 text-[20px] md:text-[30px]'}>
                    {productGroup.quantity}
                </div>
                <div 
                    className={'w-[25px] h-[25px] md:w-[50px] md:h-[50px] flex items-center justify-center cursor-pointer rounded-md duration-200 hover:bg-green-400 group'}
                    onClick={() => cartStorage.add(productGroup.id)}    
                >
                    <span className={"material-symbols-outlined text-green-400 text-[20px] md:text-[30px] duration-200 group-hover:text-white"}>
                        add
                    </span>
                </div>
            </div>
            <div className={'min-w-[70px] md:min-w-[100px] h-full flex flex-col justify-center text-yellow-300 text-[20px] md:text-[30px] text-right'}>
                {productGroup.totalPrice} р
            </div>
        </div>
    )
}

export default observer(CartSlot)