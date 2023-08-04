import TopHeader from "./Header";
import Ui from "./Ui";
import { observer } from "mobx-react-lite"
import { Button } from "@chakra-ui/react";
import { useStore } from "../../models";
import withObserver from "../../hoc/withObserver";

export default ({ buttonProps }: { buttonProps: any }) => (

    <>
        <TopHeader />
        <Ui cartBtn={buttonProps} />
        <Res />
        <ObservableIyi />
        <ButtonB />
    </>
)



const Carter = () => observer(() => {
    const { cart } = useStore()
    return <div>
        <p>
            Hello, {cart.owner}!
        </p>
        <Button onClick={() => console.log("Iyi")}>Hi {cart.owner}</Button>
    </div>
})


const Iyi = () => {
    const { cart } = useStore()
    return <>
        <>Hi {cart.items.map((i, index) => (<div key={index}>This is a cart item {i.name}</div>))}</>
    </>
}

const ObservableIyi = withObserver(Iyi)

const ButtonB = () => {
    const { cart } = useStore()
    return <Button onClick={() => cart.addCartItem({ name: "Roots Lx GLow", qty: 3, price: 2000 })}> Hiii</Button>
}
const Res = Carter()
