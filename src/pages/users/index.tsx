import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";
import { useQuery } from 'react-query';
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";
import { useEffect } from "react";

export default function UserList() {

  const query = useQuery('users', async () => {
   const response = await fetch('http://localhost:3000/api/users')
   const data = await response.json()
   return data
  })

  console.log(query)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  /*
  useEffect(()=> {
    
  }, [])

  */

  return (
    <Box>
      <Header/>

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
          <Flex mb="8" justify="space-between" align="center" >
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
            

            <Button 
              as="a" 
              size="sm" 
              fontSize="sm" 
              colorScheme="pink" 
              leftIcon={<Icon as={RiAddLine} fontSize="20"  />} 
            >
              Usuário
            </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha" >
            <Thead>
              <Tr>
                <Th px={["4","4", "6"]} color="gray.300" width="8" >
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th> Usuário </Th>
                { isWideVersion && <Th> Data de cadastro </Th> } 
                
              </Tr>
              </Thead>

                <Tbody>
                  <Tr>
                    <Td px={["4","4", "6"]} >
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold" > Celso Farias </Text>
                        <Text fontSize="sm" color="gray.300" > fariasoc@outlook.com </Text>
                      </Box>
                    </Td>

                    { isWideVersion && <Td> 04 de Abril, 2021 </Td>}


                  </Tr>

                  <Tr>
                    <Td >
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold" > Celso Farias </Text>
                        <Text fontSize="sm" color="gray.300" > fariasoc@outlook.com </Text>
                      </Box>
                    </Td>

                    { isWideVersion && <Td> 04 de Abril, 2021 </Td>}


                  </Tr>



                  <Tr>
                    <Td px={["4","4", "6"]} >
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold" > Celso Farias </Text>
                        <Text fontSize="sm" color="gray.300" > fariasoc@outlook.com </Text>
                      </Box>
                    </Td>

                    { isWideVersion && <Td> 04 de Abril, 2021 </Td>}


                  </Tr>


                  
                </Tbody>
          
       
          </Table>

          <Pagination/>

        </Box>

      </Flex>
    </Box>
  );
}