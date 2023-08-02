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
            }, 400);

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
    <Spinner size="xl" color='green.500' />
</div>

/* {loading ? return

if (loading) {
            return <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <Spinner size="xl" color='blue.500' />
            </div>
        }
        // Render the wrapped component once the UI has loaded
        else return <WrappedComponent {...props} />
}*/