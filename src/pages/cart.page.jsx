import { useState } from 'react'
import { Link } from 'react-router-dom'
import { observer } from "mobx-react"
import cartStorage from '../storages/cart.storage'
import CartSlot from '../components/cartSlot'
import { isVisible } from '@testing-library/user-event/dist/utils'

const CartPage = () => {
    const isEmpty = cartStorage.isEmpty()
    const [left, setLeft] = useState(0)
    return(
        <div className={'w-full flex items-center justify-center'}>
            <div className={`w-[90%] md:w-[80%] xl:w-3/4 min-h-[calc(100vh-80px-150px)] md:min-h-[calc(100vh-100px-150px)] flex flex-col gap-6 lg:flex-row ${isEmpty ? 'justify-center items-center' : ''}`}>
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
                        <div className={'w-full pt-4 lg:pt-6 flex flex-col gap-2'}>
                            {cartStorage.cart().map(group => <CartSlot key={group.id} productGroup={group} />)}
                        </div>
                        <div className={'w-full lg:pt-6 flex flex-col gap-4 justify-start items-ceter'}>
                            <div className={'w-full h-[50px] flex items-center justify-between'}>
                                <div className={'w-2/3 h-full relative'}>
                                    <input 
                                        type={'text'} 
                                        name={'promocode'} 
                                        placeholder={'Промокод'} 
                                        className={'w-full h-full px-[10px] bg-slate-800 rounded-md text-yellow-300 placeholder-transparent border-2 border-slate-800 peer duration-200 hover:border-yellow-300 focus:border-yellow-300'}
                                    />
                                    <laabel 
                                        for={'promocode'}
                                        className={'absolute left-3.5 top-[-25px] text-yellow-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:text-opacity-50 peer-placeholder-shown:top-3.5 peer-focus:top-[-25px] peer-focus:text-yellow-300 peer-focus:text-sm'}
                                    >
                                        Промокод
                                    </laabel>
                                </div>
                                <div className={'w-1/3 h-full flex items-center justify-end text-yellow-300 text-[25px] md:text-[30px]'}>
                                    {cartStorage.fullPrice()} р
                                </div>  
                            </div>
                            <div className={'w-full h-[50px] flex items-center justify-center'}>
                                <div className={'w-full h-full rounded-md bg-slate-800 flex relative'}>
                                    <div className={`w-[calc(50%-6px)] h-[calc(100%-6px)] bg-yellow-300 m-[3px] absolute top-0 left-[${left}%] rounded-md duratin-200 z-[2] duration-200 hover:scale-95`}>

                                    </div>  
                                    <div 
                                        className={`w-[50%] h-full flex items-center justify-center ${left === 0 ? 'text-slate-700 text-opacity-100' : 'text-white text-opacity-50'} cursor-pointer duration-200 hover:text-opacity-100 z-[3]`}
                                        onClick={() => setLeft(0)}
                                    >
                                        Сам заберу
                                    </div>
                                    <div 
                                        className={`w-[50%] h-full flex items-center justify-center ${left === 50 ? 'text-slate-700 text-opacity-100' : 'text-white text-opacity-50'} cursor-pointer duration-200 hover:text-opacity-100 z-[3]`}
                                        onClick={() => setLeft(50)}
                                    >
                                        Доставка
                                    </div>  
                                </div>
                            </div>
                            <div className={'w-full h-[50px] flex items-center justify-center'}>
                                <div className={'w-full h-full px-[10px] flex flex-row items-center justify-center rounded-md cursor-pointer bg-green-400 text-white duration-200 hover:bg-green-500 hover:scale-95'}>
                                    <span className={'text-[20px]'}>
                                        Оформить заказ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default observer(CartPage)