import { observer } from "mobx-react"
import FloatInput from './floatInput'
import cartStorage from "../storages/cart.storage"
import storeStorage from '../storages/store.storage'

const Delivery = () => {
    const times = storeStorage.availableTime(15)
    cartStorage.selectTime(times[0])
    return(
        <div className={'w-full py-[10px] flex flex-col gap-2'}>
            <FloatInput placeholder={'Имя'} onInput={(e) => cartStorage.selectName(e.target.value)} value={cartStorage.name}/>
            <FloatInput placeholder={'Номер телефона'} onInput={(e) => cartStorage.selectPhone(e.target.value)} value={cartStorage.phone}/>
            <div className={'w-full h-auto flex flex-row gap-2'}>
                <FloatInput placeholder={'Адрес доставки'} onInput={(e) => cartStorage.selectAddress(e.target.value)} value={cartStorage.address}/>
                <div className={'flex flex-row items-end justify-items-center'}>
                    <select 
                        className={'appearance-none h-[50px] px-[10px] text-yellow-300 focus:text-yellow-300 text-[20px] cursor-pointer bg-slate-800 border-2 border-slate-800 rounded-md duration-200 hover:border-yellow-300'}
                        onChange={e => cartStorage.selectTime(e.target.value)}
                    >
                        {
                            times.map((e, index) => <option key={index} value={e}>{e}</option>)
                        }
                    </select>
                </div>
            </div>      
            <div className={'w-full flex items-start'}>
                <div 
                    className={`flex flex-row justify-center items-center ${cartStorage.agree ? 'text-yellow-300' : 'text-white text-opacity-50'} cursor-pointer bg-slate-800 border-2 border-transparent rounded-md p-[10px] duration-200 hover:border-yellow-300`}
                    onClick={e => cartStorage.selectAgree(!cartStorage.agree)}
                >
                    <span className={`material-symbols-outlined duration-200 ${cartStorage.agree ? 'text-[30px] mr-2' : 'text-[0px]'}`}>
                        done
                    </span>
                    <div>
                        Я согласен с политикой конфиденциальности, пользовательским соглашением и даю разрешение на обработку персональных данных.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(Delivery)