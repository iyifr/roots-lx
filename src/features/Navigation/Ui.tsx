import { IconLink, TextLink } from './Header'
// import Logo from '/public/roots.svg'
import { Flex, Heading, Divider, Box } from '@chakra-ui/react'
import { LucideUser2, Search, ShoppingBagIcon } from 'lucide-react';

export default () => (
    <>
        <Flex justify={"space-between"} maxW={[500, 600, 700, 1200]} mx={'auto'} py={1}>

            <Flex gap={[4, 6, 8]} px={[2, 0]}>
                <Heading fontWeight={'bold'} fontSize={[28, 32, 44, 64]}>rootsLX</Heading>
                <Flex alignItems={'center'} gap={4} fontSize={16} display={['none', 'none', 'flex']}>
                    <TextLink to='/' style={{ textTransform: "uppercase", fontSize: "14px" }} label='Shop' />
                    <TextLink to='/' style={{ textTransform: "uppercase", fontSize: "14px" }} label='Contact' />
                    <TextLink to='/' style={{ textTransform: "uppercase", fontSize: "14px" }} label='About' />
                </Flex>
            </Flex>

            <Flex gap={6} alignItems={'center'} display={['none', 'none', 'flex']} pt={3}>
                {
                    navIcons.map(i => (
                        <IconLink to={i.to}> {i.icon} </IconLink>
                    ))
                }
            </Flex>

        </Flex>
        <Divider maxW={'90%'} mx={'auto'} borderTop={'2px'} color={"black"} />
    </>
)

const navIcons = [{ id: 1, icon: <LucideUser2 />, to: "/" }, { id: 2, icon: <Search />, to: "/" }, { id: 3, icon: <ShoppingBagIcon />, to: "/" }]
