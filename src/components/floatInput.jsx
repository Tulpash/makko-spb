const FloatInput = ({placeholder}) => {
    return(
        <div className={'w-full h-full relative'}>
            <input 
                type={'text'} 
                name={'promocode'} 
                placeholder={'Промокод'} 
                className={'w-full h-[50px] px-[10px] bg-slate-800 rounded-md text-yellow-300 placeholder-transparent border-2 border-slate-800 peer duration-200 hover:border-yellow-300 focus:border-yellow-300'}
            />
            <label 
                htmlFor={'promocode'}
                className={'absolute left-3.5 top-[-25px] text-yellow-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:text-opacity-50 peer-placeholder-shown:top-3.5 peer-focus:top-[-25px] peer-focus:text-yellow-300 peer-focus:text-sm pointer-events-none'}
            >
                {placeholder}
            </label>
        </div>
    )
}

export default FloatInput