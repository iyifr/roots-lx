import {
    Button, Drawer, DrawerOverlay,
    DrawerContent, DrawerCloseButton, DrawerHeader,
    DrawerBody, DrawerFooter
} from "@chakra-ui/react"
import CartContainer, { ClearCart } from "./CartContainer"

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
                    <DrawerHeader>Your Shopping cart</DrawerHeader>

                    <DrawerBody>
                        <CartContainer />
                    </DrawerBody>

                    <DrawerFooter>
                        <ClearCart />
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Clear Cart
                        </Button>
                        <Button colorScheme='green'>Checkout</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart