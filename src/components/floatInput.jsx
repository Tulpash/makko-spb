import { useState } from 'react'

const FloatInput = (props) => {
    const [isEmpty, setEmpty] = useState(true);
    const onInput = (e) => {
        if (e.target.value === null || e.target.value === "")
            setEmpty(true)
        else
            setEmpty(false)

        if (props.onInput)
            props.onInput(e)
    }
    return(
        <div className={'w-full h-full relative'}>
            <input 
                type={'text'} 
                name={'input'} 
                {...props}
                onInput={(e) => onInput(e)}
                className={`w-full h-[50px] px-[10px] ${isEmpty ? 'mt-0' : 'mt-[20px]'} bg-slate-800 rounded-md text-yellow-300 placeholder-transparent border-2 border-slate-800 peer duration-200 hover:border-yellow-300 focus:border-yellow-300 focus:mt-[20px]`}
            />
            <label 
                htmlFor={'input'}
                className={`absolute left-3.5 ${isEmpty ? 'top-[-20px]' : 'top-[-2px]'} text-yellow-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:text-opacity-50 peer-placeholder-shown:top-3.5 peer-focus:top-[-2px] peer-focus:text-yellow-300 peer-focus:text-sm pointer-events-none`}
            >
                {props.placeholder}
            </label>
        </div>
    )
}

export default FloatInput