import { useState } from 'react'
import { Link } from 'react-router-dom'

const MenuButton = ({text, path, ico, action}) => {
    return(
        <Link 
            to={path} 
            className={"flex flex-row p-4 items-center justify-between text-2xl text-yellow-300 rounded-md duration-200 hover:bg-yellow-300 hover:text-slate-600 hover:pl-10"}
            onClick={() => action != null ? action() : null}
        >
            <div className={"flex flex-row gap-4"}>
                <span className="material-symbols-outlined text-[35px]">
                    {ico}
                </span>
                <span>
                    {text}
                </span>
            </div>
            <span className="material-symbols-outlined text-[35px] text-slate-600">
                chevron_right
            </span>
        </Link>
    )
}

const ShortNavigation = () => {
    const [isOpen, setOpen] = useState(false)
    const hideMenu = () => setOpen(false)
    const showMenu = () => setOpen(true)
    return(
        <>
            <div 
                className={"h-[50px] w-[50px] flex items-center justify-center cursor-pointer rounded-md bg-transparent text-yellow-300 duration-200 hover:bg-yellow-300 hover:text-slate-600"}
                onClick={e => showMenu()}
            >
                <span className={"material-symbols-outlined text-[40px]"}>
                    apps
                </span>
            </div>
            {
                isOpen && 
                <div className={"fixed top-0 left-0 h-screen w-screen px-[10px] py-[15px] flex flex-col z-999 bg-slate-600"}>
                    <div className={"w-full flex flex-row-reverse"}>
                        <div 
                            className={"h-[50px] w-[50px] flex items-center justify-center rounded-md text-yellow-300 text-2xl cursor-pointer duration-200 hover:text-slate-600 hover:bg-yellow-300"}
                            onClick={e => hideMenu()}
                        >
                            <span className={"material-symbols-outlined text-[40px]"}>
                                close
                            </span>
                        </div>
                    </div>
                    <div className={"flex flex-col flex-shrink flex-grow basis-auto justify-center"}>
                        <MenuButton text={'Главная'} path={'/makko-spb'} ico={'restaurant_menu'} action={() => setOpen(false)} />
                        <MenuButton text={'Каталог'} path={'/makko-spb/catalog'} ico={'restaurant_menu'} action={() => setOpen(false)} />
                        <MenuButton text={'Условия'} path={'/makko-spb/terms'} ico={'restaurant_menu'} action={() => setOpen(false)} />
                        <MenuButton text={'О нас'} path={'/makko-spb/about'} ico={'restaurant_menu'} action={() => setOpen(false)} />
                    </div>
                    <div className={"h-[50px]"}>

                    </div>
                </div>
            }
        </>
    )
}

export default ShortNavigation