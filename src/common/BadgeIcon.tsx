import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

const BadgeIcon = ({ count, children }: { count: number, children: React.ReactNode }) => {

    return (
        <Flex position="relative" alignItems="center">
            {children}
            {count > 0 && (
                <Box
                    position="absolute"
                    top="-0.8rem"
                    right="-0.8rem"
                    bg="green.500"
                    borderRadius="full"
                    color="white"
                    fontSize="xs"
                    fontWeight="bold"
                    minW="1rem"
                    minH="1rem"
                    textAlign="center"
                    zIndex="docked"
                    padding={0.9}
                >
                    {count}
                </Box>
            )}
        </Flex>
    );
};

export default observer(BadgeIcon);