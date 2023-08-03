import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"
import withSplashScreen from "../../hoc/splashScreen"

const HeroSection = () => {
    return (
        <Flex>
            <Box
                bgImage={"url('/stock.png')"}
                height={'80dvh'}
                objectFit={'cover'}
                objectPosition={'center'}
                backgroundRepeat={'no-repeat'}
                maxWidth={'100%'}
                flex={'0.5'}
            />

            <Box
                justifyContent={"center"}
                alignItems={"center"}
                as={motion.div}
                flex={"0.5"}
                display={'flex'}
                flexDirection={'column'}
                initial='opacity: 0'
                transition='0.5s linear'>

                <Heading fontSize={'3.9em'} textAlign={"center"} lineHeight={1.5} fontWeight={"400"}>Enriching your skin to a healthy
                    <motion.span
                        //@ts-expect-error
                        variants={glowVariants}
                        initial="initial"
                        animate="glow"
                        style={{ marginLeft: '3%', opacity: '0.9' }}
                    >glow</motion.span>
                </Heading>
                <Button colorScheme='green' my={6} as={motion.button} whileTap={{ scale: 0.8 }}>Shop now</Button>
            </Box>
        </Flex>
    )
}

export default withSplashScreen(HeroSection)

const glowVariants = {
    glow: {
        textShadow: "0 0 10px #00ff60, 0 0 20px #00ff60, 0 0 30px #00ff60, 0 0 40px #00ff60, 0 0 70px #00ff60, 0 0 80px #00ff60, 0 0 100px #00ff60, 0 0 150px #00ff60",
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 1,
        },
    },
};