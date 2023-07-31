import { Select, Flex, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'


export const Currency = () => (
  <Select placeholder='NGN' w={'82px'} border={"none"} color={"white"} focusBorderColor="transparent">
    <option value='option1'>CAD</option>
    <option value='option2'>USD</option>
    <option value='option3'>GBP</option>
    <option value='option3' style={{ backgroundColor: "inherit", color: "black" }}>GBP</option>
  </Select>
)


const TopHeader = () => (
  <>
    <Flex justify={"space-between"} bgColor={"blue.900"} px={12} color={"white"} fontWeight={'bold'}>
      <Currency />
      <Box py={2}>
        <ChakraLink as={ReactRouterLink} to='/home' mx={5}>
          Sign in
        </ChakraLink>

        <ChakraLink as={ReactRouterLink} to='/home'>
          Create an account
        </ChakraLink>
      </Box>
    </Flex>
  </>
)
export default TopHeader
