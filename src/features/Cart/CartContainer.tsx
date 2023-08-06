import { ButtonGroup, Button, IconButton, Flex, Text } from "@chakra-ui/react"
import withObserver from "../../hoc/withObserver"
import { useStore } from "../../models"
import { CartItem, CartItems } from "../../types/types"
import { Minus, PlusIcon } from "lucide-react"
import { observer } from "mobx-react-lite"
import { IconLink } from "../Navigation/Header"
import { motion } from "framer-motion"

const CartContainer = () => {
    const { cart } = useStore()

    return (
        <div>
            <OCartView items={cart.items} />
            <OCartTotal total={cart.totalPrice} isEmpty={cart.isEmpty} />
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

const CartTotal = ({ total, isEmpty }: { total: number, isEmpty: boolean }) => (
    <div>
        <h1> {!isEmpty && <p>Total - ${FNUM(total)}</p>} </h1>
    </div>
)

export const ClearCart = ({ chakraProps }: { chakraProps?: object }) => {
    const { cart } = useStore()
    return <Button onClick={() => cart.clearCart()} {...chakraProps}>Clear Cart</Button>
}

export const Checkout = observer(() => {
    const { cart } = useStore()

    return <IconLink to="/checkout/:cartId">
        <Button colorScheme='green' as={motion.button} whileTap={{ scale: 0.8 }} isDisabled={cart.isEmpty}>
            Checkout
        </Button>
    </IconLink>
})


const OCartTotal = withObserver(CartTotal)
const OCartView = withObserver(CartView)

const FNUM = (number: number) => new Intl.NumberFormat().format(number)