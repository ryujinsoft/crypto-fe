import Header from '../components/Header'
import styles from '../styles/Personal.module.css'
import { Grid, GridItem, Input, Text, Heading, Box, Link, Divider, Button } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'


export default function Main() {

    return (
        <div className={styles.content} >
            <Header />

            <div className={styles.container}>
                <Heading size="md" color="#1A202C" fontWeight="normal" mt={10}>Crypto.com account verification</Heading>

                <Box bg="white" w="100%" p={4} mt={5} className={styles.boxShadow}>


                    <Grid
                        h="auto"
                        minH="100vh"
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(5, 1fr)"
                        gap={4}
                    >

                        <GridItem rowSpan={2} colSpan={1} ml={5}>
                            <Sidebar href="/account" > Account</Sidebar>
                            <Sidebar href="/address" > Address</Sidebar>
                            <Sidebar href="/connect" > Connect</Sidebar>
                        </GridItem>
                        <GridItem colSpan={4} >

                            <Text fontSize="xl" p={2}>Confirm your personal information</Text>
                            <Divider orientation="horizontal" variant="solid" />
                            <div className={styles.separo}>


                                <Text mt={2} mb={2} fontSize="md"> Cardholder Name </Text>
                                <Input placeholder="Email" size="lg"></Input>
                                <Text mt={4} mb={2} fontSize="md"> Card Number </Text>
                                <Input placeholder="Full Name" size="lg"></Input>
                                <Text mt={4} mb={2} fontSize="md"> Expired Date </Text>
                                <Input placeholder="Date Of Birth" size="lg"></Input>
                                <Text mt={4} mb={2} fontSize="md"> Security Code ( CVV ) </Text>
                                <Input placeholder="Phone Number" size="lg"></Input>
                                <Button bg="blue.300" color="#FFFFFF" width="100%" size="lg" mt={7}>Continue</Button>
                            </div>
                        </GridItem>


                    </Grid>
                </Box>
            </div>
        </div>
    )
}