import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import Kits from '../../assets/kits.jpg'
import Full from '../../assets/catg.jpg'
import Soaps from '../../assets/sopas.jpg'


export const categories = [
    { id: 1, name: 'Face Washes', imgSrc: Full, main: true },
    { id: 2, name: 'Face Washes', imgSrc: Kits },
    { id: 3, name: 'Face Washes', imgSrc: Soaps },
]

const CategoriesHero = () => (
    <Box maxW={1200} mx={'auto'} my={8}>
        <Heading mb={7} fontSize={30} textTransform={'uppercase'}>Catalogue</Heading>
        <Box
            maxW={1300}
            mx={'auto'}
        >
            <Flex gap={9}>
                {
                    categories.map((i) => (
                        <CategoryItem key={i.id} imgSrc={i.imgSrc} chakraProps={{ maxW: "45%" }} />
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
        maxW={'300px'}
        src={imgSrc}
        alt='Category Image'
        fit={'cover'}
        {...chakraProps}
    />
)
