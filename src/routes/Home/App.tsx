// import { Box } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import HeroSection from "../../features/Hero"
import CategoriesHero from "../../features/Hero/catalogue"
import Navigation from "../../features/Navigation"
import Cart from "../../features/Cart/cartDrawer"
Cart


function App() {
  const { getButtonProps, isOpen, onOpen, onClose } = useDisclosure()
  const buttonProps = getButtonProps()
  return (
    <>
      <Navigation buttonProps={buttonProps} />
      <HeroSection />
      <CategoriesHero />
      <Cart isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  )
}


export default App
