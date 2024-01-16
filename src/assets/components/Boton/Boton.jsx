import {Button} from '@chakra-ui/react'
import { FaXTwitter } from "react-icons/fa6";

const Boton = () => {
    return (
        <Button
        colorScheme='twitter'
        variant='ghost'
        leftIcon={<FaXTwitter/>}
        size='lg'>
            Enviar
        </Button>
    )
}

export default Boton;