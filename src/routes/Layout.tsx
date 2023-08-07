import Navigation from '../features/Navigation'
import { useDisclosure } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Cart from '../features/Cart/cartDrawer'



const Layout = () => {
    const { getButtonProps, isOpen, onClose, onOpen } = useDisclosure()
    const buttonProps = getButtonProps()
    return (
        <>
            <Navigation buttonProps={buttonProps} />
            <Cart isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Outlet />
        </>
    )
}

export default Layout