// app/providers.tsx

import { ChakraProvider } from '@chakra-ui/react';
import theme from './chakraTheme';
import { RootStore, rootStore } from '../models';



export default function Provider({ children }: { children: React.ReactNode }) {
	return <ChakraProvider theme={theme}><RootStore value={rootStore}>{children}</RootStore></ChakraProvider>;
}
