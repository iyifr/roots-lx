import { Button } from "@chakra-ui/react";
import { useStore } from "../../models";
import TopHeader from "./Header";
import Ui from "./Ui";
import CartContainer from "../Cart/CartContainer";


export default ({ buttonProps }: { buttonProps: any }) => {
    const { cart } = useStore()
    function addToCart() {
        cart.addCartItem({ name: "Roots LX brightening Serum", price: 20000, qty: 2 })
    }

    return <>
        <TopHeader />
        <Ui cartBtn={buttonProps} />
        <Button onClick={() => addToCart()}>Add to cart</Button>
        <CartContainer />
    </>
}

