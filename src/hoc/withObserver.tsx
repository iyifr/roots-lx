import { observer } from "mobx-react-lite";

type Component = () => JSX.Element

const withObserver = (Component: Component) => {
    const connectedComponent = observer(Component);
    return connectedComponent
}

export default withObserver