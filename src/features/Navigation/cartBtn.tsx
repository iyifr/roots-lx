import { ShoppingBag } from "lucide-react";
import { useStore } from "../../models";
import BadgeIcon from "../../common/BadgeIcon";
import withObserver from "../../hoc/withObserver";

const OpenCart = () => {
    const { cart } = useStore()

    return <BadgeIcon count={cart.totalItems} >
        <ShoppingBag style={{ fontSize: '1.8em' }} />
    </BadgeIcon>
}

export default withObserver(OpenCart)