import {Flex, Spacer} from '@chakra-ui/react'
import Titulo from '../Titulo/Titulo.jsx'
import NavBar from '../NavBar/NavBar.jsx'

const Header = () => {
  
    return (
     <>
     <Flex
     justify='space-between'
     bg="blue.500"
     >
        <Titulo titulo='Mina "La Casualidad"'/>
        <NavBar/>
     </Flex>
     </>
    )
}

export default Header