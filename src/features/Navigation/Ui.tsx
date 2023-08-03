import { IconLink, TextLink } from './Header'
// import Logo from '/public/roots.svg'
import { Flex, Heading, Divider, Button } from '@chakra-ui/react'
import { LucideUser2, Search, ShoppingBag } from 'lucide-react';
import BadgeIcon from '../../common/BadgeIcon';
import withSplashScreen from '../../hoc/splashScreen';

const UI = ({ cartBtn }: { cartBtn: any }) => (
    <>
        <Flex justify={"space-between"} maxW={[500, 600, 700, 1200]} mx={'auto'} py={1}>

            <Flex gap={[4, 6, 8]} px={[2, 0]}>
                <Heading fontSize={[28, 32, 44, 64]} fontWeight={""}>rootsLX</Heading>
                <Flex alignItems={'center'} gap={4} fontSize={16} display={['none', 'none', 'flex']}>
                    <TextLink to='/' style={{ textTransform: "uppercase", fontSize: "14px" }} label='Shop' />
                    <TextLink to='/' style={{ textTransform: "uppercase", fontSize: "14px" }} label='Contact' />
                    <TextLink to='/' style={{ textTransform: "uppercase", fontSize: "14px" }} label='About' />
                </Flex>
            </Flex>

            <Flex gap={6} alignItems={'center'} display={['none', 'none', 'flex']} pt={3}>
                {
                    navIcons.map(i => (
                        <IconLink to={i.to} key={i.id}> {i.icon} </IconLink>
                    ))
                }

                <Button {...cartBtn}>
                    <BadgeIcon count={4} >
                        <ShoppingBag style={{ fontSize: '1.8em' }} />
                    </BadgeIcon>
                </Button>

            </Flex>

        </Flex>
        <Divider maxW={'90%'} mx={'auto'} borderTop={'0.5px'} color={"black"} opacity={0.9} mb={2} />
    </>
)

const navIcons = [{ id: 1, icon: <LucideUser2 />, to: "/" }, { id: 2, icon: <Search />, to: "/search" }]

export default withSplashScreen(UI)
