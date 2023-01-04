import { observer } from "mobx-react"
import cartStorage from "../storages/cart.storage"

const ProductCard = ({product}) => {
    const isVisible = cartStorage.include(product.id)
    return(
        <div className={"w-[350px] h-[400px] relative rounded-md overflow-hidden bg-slate-600"}>
            <div className={"h-[250px] rounded-t-md overflow-hidden"}>
                <img 
                    src={product.url}
                    className={"h-full object-cover"}
                />
            </div>
            <div className={'w-full h-[45px] px-[15px] absolute left-0 top-[205px] flex justify-between items-center bg-slate-600 bg-opacity-50'}>
                <span className={"text-yellow-300 text-xl"}>{product.title}</span>
                <span className={"text-white text-xl"}>{product.price} р</span>
            </div>
            <div className={'w-full h-[150px]'}>
                <div className={'px-[15px] py-[10px] h-[105px] flex items-center justify-start text-yellow-300 text-sm'}>
                    {product.description} ({product.mass} г)
                </div>
                {
                    isVisible ?
                    <div className={'h-[45px] flex flex-row items-center justify-between'}>
                        <div 
                            className={"h-full w-full flex items-center justify-center cursor-pointer rounded-md duration-200 hover:bg-red-400 group"}
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
                            className={"h-full w-full flex items-center justify-center cursor-pointer rounded-md duration-200 hover:bg-green-400 group"}
                            onClick={e => cartStorage.add(product.id)}
                        >
                            <span className={"material-symbols-outlined text-green-400 text-[30px] duration-200 group-hover:text-white"}>
                                add
                            </span>
                        </div>
                    </div> :
                    <div 
                        className={'w-full h-[45px] flex items-center justify-center text-green-400 cursor-pointer rounded-md duration-200 hover:text-white hover:bg-green-400'}
                        onClick={e => cartStorage.add(product.id)}
                    >
                        <span className={"material-symbols-outlined text-[30px]"}>
                            add
                        </span>
                    </div>
                }
            </div>
            {/* <div className={`w-full h-[200px] absolute left-0 top-[205px] bg-slate-600 bg-opacity-50 group`}>
                <div className={"h-[150px] px-[15px] flex-col"}>
                    <div className={"w-full h-[50px] flex flex-row items-center justify-between"}>
                        <span className={"text-yellow-300 text-xl"}>{product.title}</span>
                        <span className={"text-white text-xl"}>{product.price}</span>
                    </div>
                    <div className={"flex items-center justify-start text-yellow-300 text-sm"}>
                        {product.description}
                    </div>
                </div>
                {
                    isVisible ?
                    <div className={"h-[45px] flex flex-row items-center justify-between"}>
                        <div 
                            className={"h-full w-full flex items-center justify-center cursor-pointer rounded-md duration-200 hover:bg-red-400 group"}
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
                            className={"h-full w-full flex items-center justify-center cursor-pointer rounded-md duration-200 hover:bg-green-400 group"}
                            onClick={e => cartStorage.add(product.id)}
                        >
                            <span className={"material-symbols-outlined text-green-400 text-[30px] duration-200 group-hover:text-white"}>
                                add
                            </span>
                        </div>
                    </div> :
                    <div 
                        className={"h-[45px] w-full absolute top-[195px] left-0 bg-transparent flex items-center justify-center cursor-pointer rounded-md duration-200 group-hover:top-[150px] hover:bg-green-400 group"}
                        onClick={e => cartStorage.add(product.id)}
                    >
                        <span className={"material-symbols-outlined text-green-400 text-[30px] duration-200 hover:text-white"}>
                            add
                        </span>
                    </div>
                }        
            </div> */}
        </div>
    )
}

export default observer(ProductCard)