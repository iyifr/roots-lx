import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Unfonts({
    //   fontsource: {
    //     families: [
    //       'Inter/variable',
    //       {
    //         name: 'Italiana',
    //         weights: [400]
    //       }
    //     ]
    //   }
    // })
  ],
})
