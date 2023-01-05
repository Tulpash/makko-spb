import { Link } from 'react-router-dom'
import navigationStorage from '../storages/navigation.storage'

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
            {
                navigationStorage.menus.map((menu, id) => <MenuButton key={id} text={menu.title} path={menu.path} ico={menu.ico} />)
            }
        </div>
    )
}

export default FullNavigation