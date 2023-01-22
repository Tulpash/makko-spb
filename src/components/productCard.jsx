import { observer } from "mobx-react"
import cartStorage from "../storages/cart.storage"
import productStorage from '../storages/product.storage'

const ProductCard = ({product}) => {
    const isVisible = cartStorage.include(product.id)
    return(
        <>
            <div className={"w-[350px] h-[400px] relative rounded-md overflow-hidden bg-slate-600"}>
                <div className={"h-[350px] rounded-t-md overflow-hidden"}>
                    <img 
                        alt={''}
                        src={product.url}
                        className={"h-full object-cover"}
                    />
                </div>
                <div className={'w-full h-[50px] px-[15px] absolute left-0 top-[0px] flex justify-between items-center bg-slate-600 bg-opacity-50'}>
                    <span className={"text-yellow-300 text-xl"}>{product.title}</span>
                    <span 
                        class={"material-symbols-outlined text-[20px] cursor-pointer text-white text-opacity-50 duration-200 hover:text-opacity-100"}
                        onClick={() => { productStorage.p(product.id); productStorage.setOpen(true); }}    
                    >
                        question_mark
                    </span>
                </div>
                <div className={'w-full h-[50px] px-[15px] absolute left-0 top-[300px] flex justify-between items-center bg-slate-600 bg-opacity-50'}>
                    <span className={"text-yellow-300 text-xl"}>{product.price} р</span>
                    <span className={"text-white text-xl"}>{product.mass} г</span>
                </div>
                <div className={'w-full h-[50px]'}>
                    {
                        isVisible ?
                        <div className={'h-[50px] flex flex-row items-center justify-between'}>
                            <div 
                                className={"h-full w-full flex items-center justify-center cursor-pointer rounded-bl-md duration-200 hover:bg-red-400 group"}
                                onClick={e => cartStorage.remove(product.id)} 
                            >
                                <span className={"material-symbols-outlined text-red-400 text-[30px] duration-200 group-hover:text-white"}>
                                    remove
                                </span>
                            </div>
                            <div className={"min-w-[50px] h-full flex justify-center items-center text-yellow-300 text-2xl"}>
                                {cartStorage.count(product.id)}
                            </div>
                            <div 
                                className={"h-full w-full flex items-center justify-center cursor-pointer rounded-br-md duration-200 hover:bg-green-400 group"}
                                onClick={e => cartStorage.add(product.id)}
                            >
                                <span className={"material-symbols-outlined text-green-400 text-[30px] duration-200 group-hover:text-white"}>
                                    add
                                </span>
                            </div>
                        </div> :
                        <div 
                            className={'w-full h-[50px] flex items-center justify-center text-green-400 cursor-pointer rounded-b-md duration-200 hover:text-white hover:bg-green-400'}
                            onClick={e => cartStorage.add(product.id)}
                        >
                            <span className={"material-symbols-outlined text-[30px]"}>
                                add
                            </span>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default observer(ProductCard)