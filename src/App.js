/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
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
  Spinner,
} from '@chakra-ui/react';
import GetPokemonCard from './components/GetPokemonCard';

function App() {
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const getRandomPok = random(1, 898);
  const [input, setInput] = useState(getRandomPok);
  const [pokName, setPokName] = useState(
    <Spinner color="purple.500" size="xl" />
  );
  const [pokPicture, setPokPicture] = useState(<Spinner color="red.500" />);

  let url = `https://pokeapi.co/api/v2/pokemon/${input}/`;

  // getting the data from the api
  async function getPokemon() {
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPokName(data.name);
        setPokPicture(data.sprites.other.dream_world.front_default);
      });
  }

  useEffect(() => {
    getPokemon();
  }, [input]);

  //handleSubmit function
  function handleSubmit(e) {
    e.preventDefault();
    const receivedPokemon = e.target.pokemon.value;
    console.log(receivedPokemon);
    setInput(`${receivedPokemon}`);
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Center spacing="24px">
          <Grid minH="100vh" maxW="3000px">
            <Heading as="h1" size="2xl" color="purple.600" pt="14">
              Pokemon App
            </Heading>

            <GetPokemonCard pokName={pokName} pokPicture={pokPicture} />

            <VStack spacing={5} alignSelf="end" py={14}>
              <form onSubmit={handleSubmit}>
                <HStack spacing={4}>
                  <Input
                    variant="filled"
                    placeholder="Search by name"
                    name="pokemon"
                  />
                  <Button colorScheme="purple" variant="outline" type="submit">
                    Search
                  </Button>
                </HStack>
              </form>
              <Button
                colorScheme="purple"
                onClick={() => {
                  setInput(`${getRandomPok}`);
                }}
              >
                Random Pokemon
              </Button>
            </VStack>
          </Grid>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
