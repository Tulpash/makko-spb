import { Link } from 'react-router-dom'

const LinkLogo = () => {
    return(
        <Link to={'/makko-spb'}>
            <img 
                alt={''}
                src={"/makko-spb/images/logo.png"} 
                className={"h-full cursor-pointer"}
            />
        </Link>
    )
}

export default LinkLogo