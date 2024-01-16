import { Text } from '@chakra-ui/react'

const Titulo = ({titulo}) =>{
    return (
        <Text 
        as='h1'
        p='0 20px'
        fontSize={['2xl','3xl','4xl','5xl']}
        fontWeight={700}
        fontStyle={'italic'}
        color={'#000'}
        display='grid'
        placeItems='center'
        paddingY='10px'
        >{titulo}</Text>
    )
}

export default Titulo;