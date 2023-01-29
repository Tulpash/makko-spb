import storeStorage from "../storages/store.storage"

const Footer = () => {
    return(
        <div className={"w-full h-auto mt-[20px] flex flex-row justify-evenly"}>
            <div className={"flex flex-col text-white text-opacity-40"}>
                {
                    storeStorage.stores.map(s => <div>{s.address}</div>)
                }
            </div>
            <div className={"flex flex-col text-white text-opacity-40"}>
                <div>
                    +7 (920) 555 35 35
                </div>
                <div>
                    +7 (920) 777 77 77 
                </div>
            </div>
        </div>
    )
}

export default Footer;