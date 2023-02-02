const  MainPage = () => {
    return (
        // <div className={'w-full h-full p-5 md:p-10 flex justify-center items-center'}>
        //     <div className={'w-full md:w-[80%] h-[calc(100vh-250px)]'}>
        //         <div className={"w-[70%] mt-[50px] text-yellow-300 text-[65px]"}>
        //             Любите паназиацкую кухню и корейскую в частности?
        //         </div>
        //         <div className={"w-[70%] text-white text-[30px]"}>
        //             У нас представлены большинство традиционных корейских блюд для вас и вашего стола!
        //         </div>
        //         <div className={"w-[70%] mt-[70px] text-yellow-300 text-[40px]"}>
        //             Korean food - Приготовим быстро и вкусно!
        //         </div>
        //     </div>
        // </div>    
        <div className={'w-full h-full p-5 md:p-10 flex justify-center items-center'}>
            <div className={'w-full md:w-[80%] h-[calc(100%-50px)]'}>
                <div className={'w-full mt-[20px] text-yellow-300 text-[25px] md:text-[50px]'}>
                    Korean food - Приготовим быстро и вкусно!
                </div>
                <div className={'w-full mt-[20px] text-yellow-300 text-[20px] md:text-[30px]'}>
                    Любите паназиацкую кухню и корейскую в частности?
                </div>
                <div className={'w-full mt-[10px] text-white text-[20px] md:text-[30px]'}>
                    У нас представлены большинство традиционных корейских блюд для вас и вашего стола!
                </div>
            </div>
        </div> 
    )
}

export default MainPage