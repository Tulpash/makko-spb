import { Link } from 'react-router-dom'
import { observer } from "mobx-react"
import cartStorage from '../storages/cart.storage'
import CartSlot from '../components/cartSlot'

const CartPage = () => {
    const isEmpty = cartStorage.isEmpty()
    return(
        <div className={'w-full flex items-center justify-center'}>
            <div className={'w-[90%] md:w-1/2 min-h-[calc(100vh-80px-150px)] md:min-h-[calc(100vh-100px-150px)] flex flex-col'}>
                {
                    isEmpty ?
                    <div className={'w-full h-full flex-shrink flex-grow basis-auto flex flex-col items-center justify-center'}>
                        <img alt={''} src={'https://ninel.ru/upload/cart-empty.png'} className={'w-[100px] h-[100px]'}/>
                        <div className={'text-white text-[30px] mt-[20px]'}>
                            В корзине пусто
                        </div>
                        <Link to={'/catalog'} className={'px-5 py-2 text-yellow-300 text-[20px] rounded-md cursor-pointer duration-200 hover:bg-yellow-300 hover:text-slate-600'}>
                            За покупками
                        </Link>
                    </div> :
                    <>
                        <div className={'w-full pt-4 flex-shrink flex-grow basis-auto flex flex-col gap-4'}>
                            {cartStorage.cart().map(group => <CartSlot key={group.id} productGroup={group} />)}
                        </div>
                        <div>
                            
                        </div>
                        <div className={'w-full h-[100px] flex items-center justify-center'}>
                            <div className={'w-full h-[50px] px-[10px] flex flex-row items-center justify-center rounded-md cursor-pointer bg-green-400 text-white duration-200 hover:bg-green-500 hover:scale-105'}>
                                <span className={'text-[20px]'}>
                                    Оформить заказ {cartStorage.fullPrice()} р
                                </span>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default observer(CartPage)