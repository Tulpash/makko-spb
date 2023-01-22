import productStorage from '../storages/product.storage'
import cartStorage from "../storages/cart.storage"
import { observer } from "mobx-react"

const ProductInfo = () => {
    const prod = productStorage.selectProduct
    const isVisible = cartStorage.include(prod.id)
    return(
        <div className={`fixed top-0 ${productStorage.isOpen ? 'flex' : 'hidden'} w-screen h-screen flex items-center justify-center bg-black bg-opacity-60 z-[999]`}>
           {
             prod &&
             <div className={'h-full w-full lg:h-[600px] lg:w-[1000px] rounded-md bg-slate-700 flex flex-col lg:flex-row overflow-hidden'}>
                <div className={'w-full h-[50%] lg:w-[50%] lg:h-full'}>
                    <img 
                        alt={''}
                        src={prod.url}
                        className={"h-full w-full object-cover"}
                    />
                </div>
                <div className={'w-full h-[50%] lg:w-[50%] lg:h-full flex flex-col'}>
                    <div className={'fixed top-0 right-0 lg:relative flex flex-row justify-end place-items-center p-[10px]'}>
                        <span 
                            className={"material-symbols-outlined cursor-pointer text-[30px] text-white text-opacity-50 duration-200 hover:text-opacity-100"}
                            onClick={() => productStorage.setOpen(false)}    
                        >
                            close
                        </span>
                    </div>
                    <div className={'text-yellow-300 text-[40px] p-[10px]'}>
                        {prod.title}
                    </div>
                    <div className={'text-white flex-shrink basis-[100%] p-[10px]'}>
                        {prod.description}
                    </div>
                    <div className={'flex justify-between items-center p-[10px]'}>
                        <span className={'text-[30px] text-white'}>{prod.mass} г</span>
                        <span className={'text-[30px] text-yellow-300'}>{prod.price} р</span>
                    </div>
                    {
                        isVisible ?
                        <div className={'min-h-[50px] h-[50px] flex flex-row items-center justify-between'}>
                            <div 
                                className={"h-full w-full flex items-center justify-center cursor-pointer duration-200 hover:bg-red-400 group"}
                                onClick={e => cartStorage.remove(prod.id)} 
                            >
                                <span className={"material-symbols-outlined text-red-400 text-[30px] duration-200 group-hover:text-white"}>
                                    remove
                                </span>
                            </div>
                            <div className={"min-w-[50px] h-full flex justify-center items-center text-yellow-300 text-2xl"}>
                                {cartStorage.count(prod.id)}
                            </div>
                            <div 
                                className={"h-full w-full flex items-center justify-center cursor-pointer rounded-br-md duration-200 hover:bg-green-400 group"}
                                onClick={e => cartStorage.add(prod.id)}
                            >
                                <span className={"material-symbols-outlined text-green-400 text-[30px] duration-200 group-hover:text-white"}>
                                    add
                                </span>
                            </div>
                        </div> :
                        <div 
                            className={'w-full min-h-[50px] h-[50px] flex items-center justify-center text-green-400 cursor-pointer rounded-br-md duration-200 hover:text-white hover:bg-green-400'}
                            onClick={e => cartStorage.add(prod.id)}
                        >
                            <span className={"material-symbols-outlined text-[30px]"}>
                                add
                            </span>
                        </div>
                    }
                </div>
            </div>
           }
        </div>
    )
}

export default observer(ProductInfo)