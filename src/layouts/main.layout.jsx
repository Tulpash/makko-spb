import LinkLogo from '../components/linkLogo'
import Cart from '../components/cart'
import FullNavigation from '../components/fullNavigation'
import ShortNavigation from '../components/shortNavigation'

const MainLayout = (props) => {
    return(
        <>
            <header className={'h-[80px] md:h-[100px] w-full px-[10px] md:px-[30px] z-[100] fixed top-0 left-0 bg-slate-600 flex flex-row items-center justify-between'}>
                <div className={'hidden md:block w-[100px]'}>
                    <LinkLogo />
                </div>
                <div className={'hidden md:block'}>
                    <FullNavigation />
                </div>
                <div className={'block md:hidden'}>
                    <ShortNavigation />
                </div>
                <div className={'block md:hidden w-[100px]'}>
                    <LinkLogo />
                </div>
                <div>
                    <Cart />
                </div>
            </header>
            <main className={'flex-grow flex-shrink basis-auto mt-[80px] md:mt-[100px] bg-slate-700'}>
                {props.children}
            </main>
            <footer className={'h-[150px] bg-slate-600'}>
                
            </footer>
        </>
    )
}

export default MainLayout