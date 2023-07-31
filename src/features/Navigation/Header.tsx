import { Select, Flex, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'


export const Currency = () => (
  <Select placeholder='NGN' w={'88px'} border={"none"} color={"white"} focusBorderColor="transparent">
    <option value='option3' style={{ backgroundColor: "inherit", color: "black" }}>GBP</option>
    <option value='option3' style={{ backgroundColor: "inherit", color: "black" }}>GBP</option>
    <option value='option3' style={{ backgroundColor: "inherit", color: "black" }}>GBP</option>
    <option value='option3' style={{ backgroundColor: "inherit", color: "black" }}>GBP</option>
  </Select>
)


const TopHeader = () => (
  <>
    <Flex justify={"space-between"} bgColor={"pink.900"} px={12} color={"white"} fontWeight={'semiBold'}>
      <Currency />
      <Box py={2}>
        <ChakraLink as={ReactRouterLink} to='/' mx={5}>
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
