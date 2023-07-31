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
}

export const TextLink = ({ label = "Text link", to = '/home', style = { color: "red" } }: ILinkProps) => (
  <ChakraLink as={ReactRouterLink} to={to} sx={style}>
    {label}
  </ChakraLink>
)

const TopHeader = () => (
  <>
    <Flex justify={"space-between"} bgColor={"green.700"} px={12} color={"white"} fontWeight={'semiBold'}>
      <Currency />
      <Box py={2}>
        <ChakraLink as={ReactRouterLink} to='/' mx={8}>
          Sign in
        </ChakraLink>

        <ChakraLink as={ReactRouterLink} to='/'>
          Create an account
        </ChakraLink>
      </Box>
    </Flex>
  </>
)
export default TopHeader
