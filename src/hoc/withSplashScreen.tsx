import { useState, useEffect, ComponentType } from 'react';
import { Spinner } from '@chakra-ui/react';

type WithSplashScreenProps = {
    // Rea
};

function withSplashScreen<T extends WithSplashScreenProps>(WrappedComponent: ComponentType<T>) {
    return (props: T) => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            // Simulate a delay in the loading of the UI
            const timeoutId = setTimeout(() => {
                setLoading(false);
            }, 500);

            // Cancel the timeout when the component unmounts
            return () => clearTimeout(timeoutId);
        }, []);

        return loading ? <FullScreenLoader /> : <WrappedComponent {...props} />;
    };
}

export default withSplashScreen;

const FullScreenLoader = () => <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}}>
    <Spinner size="xl" color='green.900' />
</div>
