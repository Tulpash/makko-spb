import { Link } from 'react-router-dom'

const MenuButton = ({text, path, ico}) => {
    return(
        <Link to={path} className={'group px-2 py-2 cursor-pointer flex flex-row gap-2 items-center text-xl text-yellow-300 rounded-md duration-200 hover:text-slate-600 hover:bg-yellow-300'}>
            <span className={"material-symbols-outlined text-[30px]"}>
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
            <MenuButton text={'Главная'} path={'/makko-spb'} ico={'restaurant_menu'} />
            <MenuButton text={'Каталог'} path={'/makko-spb/catalog'} ico={'restaurant_menu'} />
            <MenuButton text={'Условия'} path={'/makko-spb/terms'} ico={'restaurant_menu'} />
            <MenuButton text={'О нас'} path={'/makko-spb/about'} ico={'restaurant_menu'} />
        </div>
    )
}

export default FullNavigation