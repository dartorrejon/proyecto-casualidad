
import {chakra} from '@chakra-ui/react'
import './NavBar.css'
const NavBar = () => {
    return (
        <>
            <chakra.ul 
            display='flex'
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'auto'}
            p='20px'
            w={'500px'}
            listStyleType={'none'}
            visibility={['hidden','hidden','hidden','visible','visible']}
            
            >
                <li><a  href="">Contacto</a></li>
                <li><a  href="">Mina Julia</a></li>
                <li><a  href="">Azufreros</a></li>
                <li><a  href="">Acerca de</a></li>
            </chakra.ul>
        </>
    )
}

export default NavBar;