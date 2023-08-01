import { Box, Flex } from "@chakra-ui/react"

const HeroSection = () => {
    return (
        <Flex>
            <Box
                bgImage={"url('/stock.png')"}
                height={'80dvh'}
                objectFit={'cover'}
                objectPosition={'center'}
                backgroundRepeat={'no-repeat'}
                border={'1px solid red'}
                maxWidth={'100%'}
                flex={'0.5'}
            />

        </Flex>
    )
}

export default HeroSection