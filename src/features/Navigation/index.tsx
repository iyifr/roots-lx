import TopHeader from "./Header";
import Ui from "./Ui";
import { observer } from "mobx-react-lite"
import { Button } from "@chakra-ui/react";
import { useStore } from "../../models";

export default ({ buttonProps }: { buttonProps: any }) => (

    <>
        <TopHeader />
        <Ui cartBtn={buttonProps} />
        <Res />
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


const Res = Carter()
