import FloatInput from './floatInput'

const SelfService = () => {
    return(
        <div className={'w-full py-[10px] flex flex-col gap-4'}>
            <FloatInput placeholder={'Номер телефона'} />
            <FloatInput placeholder={'Имя'} />
        </div>
    )
}

export default SelfService