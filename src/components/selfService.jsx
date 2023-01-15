import { useState } from 'react'
import { observer } from "mobx-react-lite"
import cartStorage from "../storages/cart.storage"
import storeStorage from "../storages/store.storage"
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

const center = [57.81148, 28.35451]

const StoreMap = observer(() => {
    return(
        <div className={'w-full h-auto flex flex-col gap-2'}>
            <div className={'rounded-md overflow-hidden'}>
                <YMaps query={{ oad: "package.full"}}>
                    <Map state={{
                        center,
                        zoom: 10,
                        controls: []
                    }}
                    width="100%"
                    height="400px">
                        {storeStorage.stores.map(store => 
                            <Placemark 
                                key={store.id} 
                                geometry={store.cords} 
                                options={{iconImageSize: [30,30], iconLayout: 'default#image'}} 
                                onClick={() => cartStorage.selectStore(store.id)}
                            />
                        )}
                    </Map>
                </YMaps>
            </div>
            {
                cartStorage.store !== null &&
                <div className={'w-full h-[70px] flex flex-row items-center justify-center bg-slate-800 rounded-md border-2 border-transparent'}>
                     <div className={'w-full p-[10px] flex flex-col items-sart justify-center'}>
                        <span className={'text-white opacity-60'}>{cartStorage.store.address}</span>
                        <span className={'text-white opacity-40'}>{cartStorage.store.start} - {cartStorage.store.end}</span>
                    </div>
                </div>
            }
        </div>
    )
})

const StoreList = observer(() => {
    return(
        <div className={'flex flex-col gap-2'}>
            {storeStorage.stores.map(store => 
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
                    cartStorage.store !== null && cartStorage.store.id === store.id &&
                    <div className={'w-[70px] flex items-center justify-center'}>
                        <span className={'material-symbols-outlined text-yellow-300 text-[30px]'}>
                            done
                        </span>
                    </div>
                }
            </div>)}
        </div>
    )
})

const SelfService = () => {
    const [isMap, setMap] = useState(false) 
    return(
        <div className={'w-full flex flex-col gap-2'}>
            <div className={'w-full h-[40px] flex flex-row items-center justify-start gap-2'}>
                <div 
                    className={`w-[40px] h-full flex justify-center items-center cursor-pointer rounded-md ${isMap ? '' : 'bg-slate-800'} text-white text-opacity-50 duration-200 hover:text-opacity-100 hover:text-yellow-300`}
                    onClick={() => setMap(false)}
                >
                    <span className="material-symbols-outlined text-[30px]">
                        format_list_bulleted
                    </span>
                </div>
                <div 
                    className={`w-[40px] h-full flex justify-center items-center cursor-pointer rounded-md ${isMap ? 'bg-slate-800' : ''} text-white text-opacity-50 duration-200 hover:text-opacity-100 hover:text-yellow-300`}
                    onClick={() => setMap(true)}    
                >
                    <span className="material-symbols-outlined text-[30px]">
                        map
                    </span>
                </div>
            </div>
            <div className={`${isMap ? 'hidden' : 'block'}`}>
                <StoreList />
            </div>
            <div className={`${isMap ? 'block' : 'hidden'}`}>
                <StoreMap />
            </div>
        </div>
    )
}

export default observer(SelfService)