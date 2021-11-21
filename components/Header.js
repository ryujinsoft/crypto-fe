import {
    Image, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Avatar,
  } from "@chakra-ui/react"
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import styles from '../styles/Navbar.module.css'

export default function Header(props) {

    return (
        <div className={styles.navbar}>
            <Head>
                <title>Crypto.com </title>
            </Head>

            <div className={styles.navbarContent}>
                <Image src="/full.png" ></Image>
                <Flex style={{ gap: '2px', marginLeft: '1.5rem' }}>
                    <Menu>
                        <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                            Coins
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Showroom</MenuItem>
                            <MenuItem>Top Gainers</MenuItem>
                            <MenuItem>Top Losers</MenuItem>
                            <MenuItem>Recently Added</MenuItem>
                            <MenuItem>Trending</MenuItem>
                            <MenuItem>Tokens to Watch</MenuItem>
                        </MenuList>
                    </Menu>
                    
                    <Menu>
                        <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                            Categories
                        </MenuButton>
                        <MenuList>
                            <MenuItem>DeFi</MenuItem>
                            <MenuItem>DEX</MenuItem>
                            <MenuItem>GameFi</MenuItem>
                            <MenuItem>Lending</MenuItem>
                            <MenuItem>Memes</MenuItem>
                            <MenuItem>Metaverse</MenuItem>
                            <MenuItem>NFT</MenuItem>
                            <MenuItem>Stablecoin</MenuItem>
                            <MenuItem>Yield Farming</MenuItem>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                            NFT
                        </MenuButton>
                        <MenuList>
                            <MenuItem>NFT Collections</MenuItem>
                            <MenuItem>NFT Whale Watch</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex style={{ marginLeft: 'auto', gap: '2px' }}>
                    <InputGroup borderColor="gray.300" mr={3}>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.500" />}
                        />
                        <Input backgroundColor="gray.100" borderRadius="0" type="tel" placeholder="Search all icons" />
                    </InputGroup>
                    <Avatar w="40px" h="40px" bg="gray.500" />
                    <div>
                        <Menu>
                            <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
                                English
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Hadeh Modal</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </Flex>
            </div>
        </div>
    )
}