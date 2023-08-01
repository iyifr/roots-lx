import { Box, Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"

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

            <Box justifyContent={"center"} alignItems={"center"} flex={"0.5"} display={'flex'} flexDirection={'column'}>
                <Heading fontSize={'3.8em'} textAlign={"center"}>Enriching your skin to a healthy glow</Heading>
                <motion.div
                    initial={{
                        x: 0,
                        rotate: 45,
                    }}
                    animate={{
                        x: 50,
                        rotate: 270,
                    }}
                    style={{ backgroundColor: "black" }}
                />
                <Button colorScheme='green' my={6}>Shop now</Button>
            </Box>
        </Flex>
    )
}

export default HeroSection