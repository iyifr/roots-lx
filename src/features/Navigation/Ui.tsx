import { TextLink } from './Header'
// import Logo from '/public/roots.svg'
import { Flex, Box, Heading } from '@chakra-ui/react'
import { LucideUser2, Search, ShoppingBagIcon } from 'lucide-react';
import Cart from '/cart.svg'

export default () => (
    <>
        <Flex justify={"space-between"} maxW={[500, 600, 700, 1200]} mx={'auto'} py={4}>
            {/* <img src={Logo} style={{ maxWidth: "60px", aspectRatio: "16:9" }} /> */}
            <Heading fontWeight={'bold'} fontSize={56}>roots LX</Heading>
            <Flex gap={8} alignItems={'center'} display={['none', 'none', 'flex']}>
                <LucideUser2 />

                <Search color='black' />
                <ShoppingBagIcon />
            </Flex>
        </Flex>
    </>
)
