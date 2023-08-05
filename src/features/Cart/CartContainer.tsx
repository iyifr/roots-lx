import { ButtonGroup, Button, IconButton, Flex, Text } from "@chakra-ui/react"
import withObserver from "../../hoc/withObserver"
import { useStore } from "../../models"
import { CartItem, CartItems } from "../../types/types"
import { Minus, PlusIcon } from "lucide-react"
import { observer } from "mobx-react-lite"

const CartContainer = () => {
    const { cart } = useStore()

    return (
        <div>
            <OCartView items={cart.items} />
            <OCartTotal total={cart.totalPrice} />
        </div>
    )
}

export default withObserver(CartContainer)


const CartView = ({ items }: CartItems) => (
    <div>
        {items.map((i) => (
            <CartItem item={i} />
        ))}
    </div>
)

const CartItem = observer(({ item }: CartItem) => (
    <Flex flexDir={'row'} p={5} gap={2}>

        <Flex flexDir={'column'} fontSize={13}>
            <Text fontWeight={'700'} textTransform={'capitalize'}>{item.name}</Text>
            <Text>{`$${FNUM(item.qty * item.price)}`} <Text display={'inline'} color={"gray.500"}>{`$${FNUM(item.price)} per unit`}</Text></Text>
        </Flex>

        <ButtonGroup size='sm' isAttached colorScheme="green" variant='outline' mx={1}>
            <IconButton
                aria-label='Add to cart'
                icon={<Minus size={14} />}
                borderRight={'none'}
                onClick={() => item.decQty(1)}
                isDisabled={item.qty < 1}
            />

            <Button disabled={true}
                borderRight={'none'}
                borderLeft={'none'}>{item.qty}
            </Button>

            <IconButton aria-label='Add to cart'
                icon={<PlusIcon size={14} />}
                borderLeft={'none'}
                onClick={() => item.incQty()}
            />
        </ButtonGroup>
    </Flex>
))

const CartTotal = ({ total }: { total: number }) => (
    <div>
        Your total is : {FNUM(total)}
    </div>
)

export const ClearCart = () => {
    const { cart } = useStore()
    return <Button onClick={() => cart.clearCart()}>Clear Cart</Button>
}

const OCartTotal = withObserver(CartTotal)
const OCartView = withObserver(CartView)

const FNUM = (number: number) => new Intl.NumberFormat().format(number)