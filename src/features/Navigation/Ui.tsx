import { IconLink, TextLink } from './Header'
// import Logo from '/public/roots.svg'
import { Flex, Heading, Divider, Button } from '@chakra-ui/react'
import { LucideUser2, Search } from 'lucide-react';
import OpenCart from './cartBtn'
import withSplashScreen from '../../hoc/withSplashScreen';

const UI = ({ cartBtn }: { cartBtn: any }) => (
    <>
        <Flex justify={"space-between"} maxW={[500, 600, 700, 1200]} mx={'auto'} py={1}>

            <Flex gap={[4, 6, 8]} px={[2, 0]}>
                <Heading fontSize={[28, 32, 38, 44]}>rootsLX</Heading>
                <Flex alignItems={'center'} gap={4} fontSize={16} display={['none', 'none', 'flex']} mt={3}>
                    <TextLink to='/' chakraProps={{ fontSize: "16px" }} label='Shop' />
                    <TextLink to='/' chakraProps={{ fontSize: "16px" }} label='New Arrivals' />
                    <TextLink to='/' chakraProps={{ fontSize: "16px" }} label='About' />
                </Flex>
            </Flex>

            <Flex gap={6} alignItems={'center'} display={['none', 'none', 'flex']} pt={3}>
                {
                    navIcons.map(i => (
                        <IconLink to={i.to} key={i.id}> {i.icon} </IconLink>
                    ))
                }

                <Button {...cartBtn} variant={'outline'}>
                    <OpenCart />
                </Button>

            </Flex>

        </Flex>
        <Divider maxW={'90%'} mx={'auto'} borderTop={'0.5px'} color={"black"} opacity={0.9} mb={2} />
    </>
)

const navIcons = [{ id: 1, icon: <LucideUser2 size={20} />, to: "/" }, { id: 2, icon: <Search size={22} />, to: "/search" }]

export default withSplashScreen(UI)

