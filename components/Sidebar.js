import { useRouter } from 'next/router'
import { Link, Text } from '@chakra-ui/react'
import styles from '../styles/Personal.module.css'

function ActiveLink({ children, href }) {
    const router = useRouter()
    const color = (router.asPath == href ) ? 'blue.300' : 'black'
    const mr = (router.asPath === href) ? 10 : 4;

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (

        <Link href={href} onClick={handleClick} color={color} m={4}>
            <Text fontSize="lg" >{children}</Text>
        </Link>
    )
}

export default ActiveLink