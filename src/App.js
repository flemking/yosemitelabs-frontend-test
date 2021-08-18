import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Input,
  Button,
  Center,
  Heading,
  HStack,
  VStack,
  FormControl,
} from '@chakra-ui/react';
import Getpokemon from './components/Getpokemon';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Center spacing="24px">
          <Grid minH="100vh" maxW="3000px" border="1px" borderColor="gray.200">
            <Heading as="h1" size="2xl" color="purple.600" pt="14">
              Pokemon App
            </Heading>
            <Getpokemon />
            <VStack spacing={5} alignSelf="end" py={14}>
              <FormControl>
                <HStack spacing={4}>
                  <Input variant="filled" placeholder="Search by name" />
                  <Button colorScheme="purple" variant="outline">
                    Search
                  </Button>
                </HStack>
              </FormControl>
              <Button colorScheme="purple">Random Pokemon</Button>
            </VStack>
          </Grid>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
