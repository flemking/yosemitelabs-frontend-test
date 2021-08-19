/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Input,
  Button,
  Center,
  HStack,
  VStack,
  Spinner,
  Image,
  // useToast,
} from '@chakra-ui/react';
import GetPokemonCard from './components/GetPokemonCard';
import YourPokemon from './components/YourPokemon';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  //  ---------------getting a randomID for a Pokemon---------------
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const getRandomPok = random(1, 898);
  //  -----------------------------------------------------------
  const [input, setInput] = useState(getRandomPok);
  //  ---------------variables to save each data-----------------------
  const [pokName, setPokName] = useState('');
  const [pokPicture, setPokPicture] = useState('');
  const [exp, setExp] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [abilities, setAbilities] = useState('');
  const [id, setId] = useState('');
  //  -------------------------------------------------------
  // const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${input}/`);

  let url = `https://pokeapi.co/api/v2/pokemon/${input}/`;

  // getting the data from the api
  async function getPokemon() {
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        //  ---------------saving each data-----------------------
        setPokName(data.name);
        setPokPicture(data.sprites.other.dream_world.front_default);
        setExp(data.base_experience);
        setHeight(data.height);
        setWeight(data.weight);
        setAbilities(Object.keys(data.abilities).length);
        setId(data.id);
      })
      .catch(error => {
        console.log(error);
        alert("Pokemon don't find : Retry or Reload");
      });
  }
  //  ---------------updating the component-----------------------
  useEffect(() => {
    getPokemon();
  }, [input, url]);

  //handleSubmit function
  function handleSubmit(e) {
    e.preventDefault();
    const receivedPokemon = e.target.pokemon.value.toLowerCase();
    // console.log(receivedPokemon);
    setInput(`${receivedPokemon}`);
  }
  // i was trying to tell the user with a toast that is the loading stuck to reload
  // const toast = useToast();

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" minH="100vh">
        <Center spacing="24px" minH="100vh">
          <Box minH="100vh" maxW="3000px">
            {/* The logo */}
            <Image
              src="https://fontmeme.com/permalink/210819/969ada64e5293a83d95837ab4c3609af.png"
              boxSize="100%"
              maxH="10vh"
              objectFit="contain"
              pt={4}
              alt="Pokemon App Logo"
            />

            {/* Render the Pokemoncard */}
            {pokPicture ? (
              <GetPokemonCard
                pokName={pokName}
                pokPicture={pokPicture}
                exp={exp}
                height={height}
                weight={weight}
                abilities={abilities}
                id={id}
              />
            ) : (
              <Box w="50vh" p="200px">
                <Spinner color="red.500" size="xl" minH="80%" />
                {/* {toast({
                  title: 'If loading too long',
                  description: `Please reload the page to fecth new data`,
                  status: 'info',
                  duration: 1000,
                  isClosable: true,
                })} */}
              </Box>
            )}
            {/* render the buttons */}
            <VStack spacing={5} alignSelf="end" py={14}>
              <form onSubmit={handleSubmit}>
                <HStack spacing={4}>
                  <Input
                    variant="filled"
                    placeholder="Search by name"
                    name="pokemon"
                    autoComplete="false"
                    autoFocus="true"
                    focusBorderColor="purple.400"
                  />
                  <Button colorScheme="purple" variant="outline" type="submit">
                    Search
                  </Button>
                </HStack>
              </form>
              <HStack>
                <Button
                  colorScheme="purple"
                  onClick={() => {
                    setInput(`${getRandomPok}`);
                  }}
                >
                  Random Pokemon
                </Button>
                <YourPokemon setInput={setInput} />
              </HStack>
            </VStack>
          </Box>
        </Center>
      </Box>
      {/* <ColorModeSwitcher /> */}
    </ChakraProvider>
  );
}

export default App;
