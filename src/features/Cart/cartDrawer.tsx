import {
    Button, Drawer, DrawerOverlay,
    DrawerContent, DrawerCloseButton, DrawerHeader,
    DrawerBody, Input, DrawerFooter
} from "@chakra-ui/react"

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
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart