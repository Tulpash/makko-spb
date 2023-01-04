import { Link } from 'react-router-dom'

const MenuButton = ({text, path, ico}) => {
    return(
        <Link to={path} className={'group px-2 py-2 cursor-pointer flex flex-row gap-2 items-center text-xl text-yellow-300 rounded-md duration-200 hover:text-slate-600 hover:bg-yellow-300'}>
            <span className={"material-symbols-outlined text-[30px] hidden group-hover:block"}>
                {ico}
            </span>
            <span>
                {text}
            </span>
        </Link>
    )
}

const FullNavigation = () => {
    return(
        <div className={'flex flex-row gap-4'}>
            <MenuButton text={"Меню"} path={"/catalog"} ico={"restaurant_menu"} />
            <MenuButton text={"О компании"} path={"/about"} ico={"apartment"} />
            <MenuButton text={"Пункты выдачи"} path={"/post"} ico={"store"} />
        </div>
    )
}

export default FullNavigation