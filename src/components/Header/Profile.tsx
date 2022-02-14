import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
  return (

    <Flex
    align="center"
  >

    <Box mr="4" textAlign="right">
      <Text>Celso Farias</Text>
      <Text color="gray.300" fontSize="small" > fariasoc@outlook.com </Text>
    </Box>

    <Avatar size="md" name="Celso Farias" src="https://github.com/fariasoc.png" />

  </Flex>

  )
}