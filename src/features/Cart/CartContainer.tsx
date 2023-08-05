import { ButtonGroup, Button, IconButton, Flex, Text } from "@chakra-ui/react"
import withObserver from "../../hoc/withObserver"
import { useStore } from "../../models"
import { CartItem, CartItems } from "../../types/types"
import { PlusIcon } from "lucide-react"

const CartContainer = () => {
    const { cart } = useStore()
    return (
        <div>
            <OCartView items={cart.items} />
        </div>
    )
}

export default CartContainer


const CartView = ({ items }: CartItems) => (
    <div>
        {items.map((i) => (
            <CartItem item={i} />
        ))}
    </div>
)

const CartItem = ({ item }: CartItem) => (
    <Flex flexDir={'row'} p={5} gap={2}>
        <Flex flexDir={'column'} fontSize={13}>
            <Text fontWeight={'700'} textTransform={'capitalize'}>{item.name}</Text>
            <Text>{`$${item.qty * item.price}`} <Text display={'inline'} color={"gray.500"}>{`$${item.price} per unit`}</Text></Text>
        </Flex>
        <ButtonGroup size='sm' isAttached variant='outline'>
            <Button>Save</Button>
            <IconButton aria-label='Add to friends' icon={<PlusIcon />} />
        </ButtonGroup>
    </Flex>
)

const OCartView = withObserver(CartView)
