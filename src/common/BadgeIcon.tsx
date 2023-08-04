import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const BadgeIcon = ({ count, children }: { count: number, children: React.ReactNode }) => {


    return (
        <Flex position="relative" alignItems="center">
            {children}
            {count > 0 && (
                <Box
                    position="absolute"
                    top="-0.3rem"
                    right="-0.3rem"
                    bg="red.500"
                    borderRadius="full"
                    color="white"
                    fontSize="xs"
                    fontWeight="bold"
                    minW="1rem"
                    minH="1rem"
                    textAlign="center"
                    zIndex="docked"
                >
                    {count}
                </Box>
            )}
        </Flex>
    );
};

export default BadgeIcon;