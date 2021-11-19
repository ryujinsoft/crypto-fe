import { Image , Text } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Navbar.module.css'

export default function Header(props) {

    return (
        <div  className={styles.navbar}>
            <Head>
                <title>Crypto.com </title>
            </Head>


            <div className={styles.navbarContent}>
                <Image src="/full.png" ></Image>
            </div>

          
        </div>
    )
}