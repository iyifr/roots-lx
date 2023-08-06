// import { Box } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import HeroSection from "../features/Hero"
import CategoriesHero from "../features/Hero/catalogue"
import Navigation from "../features/Navigation"
import Cart from "../features/Cart/cartDrawer"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"


function App() {
  const { getButtonProps, isOpen, onOpen, onClose } = useDisclosure()
  const buttonProps = getButtonProps()
  return (
    <>
      <Navigation buttonProps={buttonProps} />
      <HeroSection />
      <CategoriesHero />
      <Cart isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <TextReplace />
    </>
  )
}


export default App

const TextReplace = () => {
  const texts = [
    <h1 key="header1" style={{ color: "red" }}>Header 1</h1>,
    <h2 key="header2">glow</h2>,
    <h3 key="header3">Header 3</h3>
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);


  return (
    <div>
      {texts.map((text, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            scale: currentIndex === index ? 1 : 0.9,
            transition: { delay: currentIndex === index ? 0 : 0.4 }
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.9 }}
          style={{ display: currentIndex === index ? 'block' : 'none' }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};