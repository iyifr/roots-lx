import {
    Drawer, DrawerOverlay,
    DrawerContent, DrawerCloseButton, DrawerHeader,
    DrawerBody, DrawerFooter
} from "@chakra-ui/react"
import CartContainer, { Checkout, ClearCart } from "./CartContainer"

function Cart({ isOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void }) {

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your Shopping Basket</DrawerHeader>

                    <DrawerBody>
                        <CartContainer />
                    </DrawerBody>

                    <DrawerFooter>
                        <ClearCart chakraProps={{ mr: 'auto' }} />
                        <Checkout />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart