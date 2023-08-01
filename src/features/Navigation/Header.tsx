import { Select, Flex, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

export const Currency = () => (
  <Select placeholder='NGN' w={'88px'} border={"none"} color={"white"} focusBorderColor="transparent">
    <option value='option3' style={{ backgroundColor: "inherit", color: "black" }}>GBP</option>
    <option value='option3' style={{ backgroundColor: "inherit", color: "black" }}>GBP</option>
    <option value='option3' style={{ backgroundColor: "inherit", color: "black" }}>GBP</option>
    <option value='option3' style={{ backgroundColor: "inherit", color: "black" }}>GBP</option>
  </Select>
)

type ILinkProps = {
  label?: string,
  to: string,
  style?: object
  icon?: any
  children?: React.ReactNode
}

export const TextLink = ({ label = "Text link", to = '/home', style = { color: "red" } }: ILinkProps) => (
  <ChakraLink as={ReactRouterLink} to={to} sx={style}>
    {label}
  </ChakraLink>
)

export const IconLink = ({ to = '/', children }: ILinkProps) => (
  <ChakraLink as={ReactRouterLink} to={to} _hover={{ color: 'green', scale: '1.2', transition: '0.2s ease-out' }}>
    {children}
  </ChakraLink>
)

const TopHeader = () => (
  <>
    <Flex justify={['space-between', 'space-between', 'space-between']} align="center" bgColor="green.700" px={[2, 4, 12]} py={[2, 3]} color="white" fontWeight="semiBold" wrap="wrap">
      <Box>
        <Currency />
      </Box>

      <Box>
        <Box mx={[2, 4]}>
          <TextLink to="/" label="Sign in" style={{ color: 'white', textDecoration: 'underline' }} />
        </Box>
        <Box mx={[2, 4]}>
          <TextLink to="/" label="Create an account" style={{ color: 'white', textDecoration: 'underline' }} />
        </Box>
      </Box>
    </Flex>
  </>

)
export default TopHeader

//#E3E0DD