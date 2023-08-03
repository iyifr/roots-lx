import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import Kits from '../../assets/kits.jpg'
import Full from '../../assets/catg.jpg'
import Soaps from '../../assets/sopas.jpg'


export const categories = [
    { name: 'Face Washes', imgSrc: Full, main: true },
    { name: 'Face Washes', imgSrc: Kits },
    { name: 'Face Washes', imgSrc: Soaps },
]

const CategoriesHero = () => (
    <Box maxW={1200} mx={'auto'} my={8}>
        <Heading mb={7} fontSize={36}>Catalogue</Heading>
        <Box
            maxW={1300}
            mx={'auto'}
        >
            <Flex gap={9}>
                {
                    categories.map((i, index) => (
                        <CategoryItem imgSrc={i.imgSrc} key={index} chakraProps={{ maxW: "45%" }} />
                    ))
                }
            </Flex>
        </Box>
    </Box>
)
export default CategoriesHero


const CategoryItem = ({ imgSrc, chakraProps }: { imgSrc: string, chakraProps?: object }) => (
    <Image
        borderRadius='20px'
        height={400}
        maxW={'100%'}
        src={imgSrc}
        alt='Category Image'
        fit={'cover'}
        {...chakraProps}
    />
)
