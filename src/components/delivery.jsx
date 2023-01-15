import { observer } from "mobx-react"
import FloatInput from './floatInput'
import cartStorage from "../storages/cart.storage"

const Delivery = () => {
    return(
        <div className={'w-full py-[10px] flex flex-col gap-6'}>
            <FloatInput placeholder={'Адрес доставки'} onInput={(e) => cartStorage.selectAddress(e.target.value)} value={cartStorage.address}/>
            <FloatInput placeholder={'Номер телефона'} onInput={(e) => cartStorage.selectPhone(e.target.value)} value={cartStorage.phone}/>
            <FloatInput placeholder={'Имя'} onInput={(e) => cartStorage.selectName(e.target.value)} value={cartStorage.name}/>
            <div className={'w-full flex items-start gap-2'}>
                <input type={'checkbox'} />
                <div className={'text-white text-opacity-60'}>
                    Я согласен с политикой конфиденциальности, пользовательским соглашением и даю разрешение на обработку персональных данных.
                </div>
            </div>
        </div>
    )
}

export default observer(Delivery)