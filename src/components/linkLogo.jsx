import { Link } from 'react-router-dom'

const LinkLogo = () => {
    return(
        <Link to={'/'}>
            <img 
                alt={''}
                src={"https://menufyproduction.imgix.net/637441624273676818+346995.png?auto=compress,format&fit=max&w=1024&h=1024"} 
                className={"h-full cursor-pointer"}    
            />
        </Link>
    )
}

export default LinkLogo