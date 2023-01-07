import { useState } from 'react'
import { observer } from "mobx-react-lite"
import storeStorage from '../storages/store.storage'

const Delivery = () => {
    const [selected, setSelected] = useState(null)
    return(
        <div className={'w-full flex flex-col gap-2'}>
            {
                storeStorage.stores.map(store => 
                <div 
                    key={store.id} 
                    className={'w-full h-[70px] flex flex-row items-center justify-center bg-slate-800 rounded-md border-2 border-transparent cursor-pointer duration-200 hover:border-yellow-300'}
                    onClick={() => setSelected(store.id)}    
                >
                    <div className={'w-full p-[10px] flex flex-col items-sart justify-center'}>
                        <span className={'text-white opacity-60'}>{store.address}</span>
                        <span className={'text-white opacity-40'}>{store.start} - {store.end}</span>
                    </div>
                    {
                        selected !== null && selected === store.id &&
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