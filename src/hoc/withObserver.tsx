import { observer } from "mobx-react-lite";

type Component<P = {}> = (props: P) => JSX.Element;

const withObserver = <P extends {}>(Component: Component<P>) => {
    const connectedComponent = observer(Component);
    return connectedComponent;
};

export default withObserver;