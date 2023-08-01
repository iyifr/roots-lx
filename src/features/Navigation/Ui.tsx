import { TextLink } from './Header'
// import Logo from '/public/roots.svg'
import { Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Divider } from '@chakra-ui/react'
import { LucideUser2, Search, ShoppingBagIcon } from 'lucide-react';

export default () => (
    <>
        <Flex justify={"space-between"} maxW={[500, 600, 700, 1200]} mx={'auto'} py={2.5}>
            {/* <img src={Logo} style={{ maxWidth: "60px", aspectRatio: "16:9" }} /> */}
            <Flex gap={4}>
                <Heading fontWeight={'bold'} fontSize={64}>rootsLX</Heading>
                <TextLink to='/' style={{ textTransform: "uppercase", pt: '10', fontSize: "14px" }} label='Shop' />
                <TextLink to='/' style={{ textTransform: "uppercase", pt: '10', fontSize: "14px" }} label='Contact' />
                <TextLink to='/' style={{ textTransform: "uppercase", pt: '10', fontSize: "14px" }} label='About' />
            </Flex>

            <Flex gap={8} alignItems={'center'} display={['none', 'none', 'flex']} pt={6}>
                <LucideUser2 opacity={0.5} />
                <Search color='black' />
                <ShoppingBagIcon />
            </Flex>
        </Flex>
        <Divider maxW={'90%'} mx={'auto'} borderTop={'2px'} color={"black"} />
    </>
)
