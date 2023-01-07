import { observer } from "mobx-react-lite"
import cartStorage from "../storages/cart.storage"
import storeStorage from "../storages/store.storage"

const Delivery = () => {
    const selectedStore = cartStorage.store
    return(
        <div className={'w-full flex flex-col gap-2'}>
            <div className={'w-full h-[40px] flex flex-row items-center justify-start gap-4'}>
                <div className={'w-[40px] h-full flex justify-center items-center cursor-pointer text-white text-opacity-50 duration-200 hover:text-opacity-100 hover:text-yellow-300'}>
                    <span class="material-symbols-outlined text-[30px]">
                        format_list_bulleted
                    </span>
                </div>
                <div className={'w-[40px] h-full flex justify-center items-center cursor-pointer text-white text-opacity-50 duration-200 hover:text-opacity-100 hover:text-yellow-300'}>
                    <span class="material-symbols-outlined text-[30px]">
                        map
                    </span>
                </div>
            </div>
            {
                storeStorage.stores.map(store => 
                <div 
                    key={store.id} 
                    className={'w-full h-[70px] flex flex-row items-center justify-center bg-slate-800 rounded-md border-2 border-transparent cursor-pointer duration-200 hover:border-yellow-300'}
                    onClick={() => cartStorage.selectStore(store.id)}    
                >
                    <div className={'w-full p-[10px] flex flex-col items-sart justify-center'}>
                        <span className={'text-white opacity-60'}>{store.address}</span>
                        <span className={'text-white opacity-40'}>{store.start} - {store.end}</span>
                    </div>
                    {
                        selectedStore !== null && selectedStore.id === store.id &&
                        <div className={'w-[70px] flex items-center justify-center'}>
                            <span className={'material-symbols-outlined text-yellow-300 text-[30px]'}>
                                done
                            </span>
                        </div>
                    }
                </div>)
            }
        </div>
    )
}

export default observer(Delivery)