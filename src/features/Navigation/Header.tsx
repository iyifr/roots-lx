import { Flex, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { useState } from "react";

type LinkProps = {
  label?: string,
  to: string,
  style?: object
  icon?: any
  children?: React.ReactNode
  chakraProps?: object
}

export const TextLink = ({ label = "Text link", to = '/home', chakraProps }: LinkProps) => (
  <ChakraLink as={ReactRouterLink} to={to}  {...chakraProps}>
    {label}
  </ChakraLink>
)

export const IconLink = ({ to = '/', children, chakraProps }: LinkProps) => (
  <ChakraLink as={ReactRouterLink} to={to} _hover={{ color: 'green.400', transition: '0.2s ease-in' }} {...chakraProps}>
    {children}
  </ChakraLink>
)

const TopHeader = () => {
  const [showHeader, setShowHeader] = useState(true)
  const hideHeader = () => setShowHeader(false)
  return <>
    {showHeader && <Flex align="center" bgColor="green.700" px={[2, 4, 12]} py={[1.5]} color="white" fontWeight="semiBold" wrap="wrap">
      <Text align={"center"} fontSize={14} mx={"auto"}>Sign up and
        <span style={{ fontWeight: "800", fontSize: 16, textTransform: "uppercase", marginInline: 8 }}>get 20% off</span>
        your first order.  <TextLink to="/signup" label="Sign up now" chakraProps={{ color: "white.400", fontWeight: "semibold" }}></TextLink>
      </Text>
    </Flex>
    }
  </>

}
export default TopHeader

//#E3E0DD