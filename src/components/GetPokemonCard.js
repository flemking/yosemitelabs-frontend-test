import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  theme,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

let team = [];
let teamId = [];
function GetPokemonCard({
  pokName,
  pokPicture,
  exp,
  height,
  weight,
  abilities,
  id,
}) {
  const [teambtn, setTeambtn] = useState('Add to your Team');
  const [teambtnColor, setTeambtnColor] = useState('green');
  const toast = useToast();

  let handleClick = () => {
    let name = pokName;
    let newId = id;
    if (team.length < 6) {
      if (team.includes(pokName)) {
        //  ---------------getting the team saved and removing the poke-----------------------
        team = JSON.parse(localStorage.getItem('team')) || [];
        teamId = JSON.parse(localStorage.getItem('teamId')) || [];
        team = team.filter(element => element !== name);
        teamId = teamId.filter(element => element !== newId);
        localStorage.setItem('team', JSON.stringify(team));
        localStorage.setItem('teamId', JSON.stringify(teamId));
        setTeambtn('Add to your Team');
        setTeambtnColor('green');
        //  ---------------let the user know the the poke is removed-------------------
        toast({
          title: 'Pokemon removed successfully',
          description: `You've removed ${name} | Please refresh or fetch a new Pokemon to see the changes in your Team menu`,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } else {
        //  ---------------getting the team saved and add the poke------------------
        team = JSON.parse(localStorage.getItem('team')) || [];
        teamId = JSON.parse(localStorage.getItem('teamId')) || [];
        team.push(name);
        teamId.push(newId);
        localStorage.setItem('team', JSON.stringify(team));
        localStorage.setItem('teamId', JSON.stringify(teamId));
        setTeambtn('Remove from Team');
        setTeambtnColor('red');
        //  ---------------let the user know the the poke is added---------
        toast({
          title: 'Pokemon add successfully',
          description: `You've added ${name} | Please refresh or fetch a new Pokemon to see the changes in your Team menu`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      setTeambtn('Team limit is 6 Pokemon');
      setTeambtnColor('purple');
    }

    console.log(team);
  };

  // correct the handleClick behavior by rerendering an initial state
  function reRender() {
    if (team.includes(pokName)) {
      setTeambtn('Remove from Team');
      setTeambtnColor('red');
    } else {
      setTeambtn('Add to your Team');
      setTeambtnColor('green');
    }
  }
  useEffect(() => {
    reRender();
  }, [pokName]);

  // ---------------Give the user some important information---------------------
  const firstInfo = () => {
    toast({
      title: 'Update your Team',
      description: `After adding a Pokemon to your team, look for another Pokemon (random search or search by name) or reload to see the changes in your Pokemon team menu.
      If stuck on loading, please refresh the page or fetch another Pokemon
      `,
      status: 'info',
      duration: 10000,
      isClosable: true,
    });
  };

  useEffect(() => {
    firstInfo();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box
        maxW="4xl"
        h="100%"
        p={5}
        mt={5}
        boxShadow="xl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bgColor="#f7f7f7"
      >
        <Box d="flex" flexDirection="column" justifyContent="space-around">
          <Box>
            <Image
              src={pokPicture}
              boxSize="100%"
              maxH="35vh"
              objectFit="contain"
              alt={pokName + ' picture'}
            />
          </Box>
          <Box maxH="25vh" p="absolute" bottom={0}>
            <Text fontSize="30px" fontWeight="bold" textTransform="uppercase">
              {pokName}
            </Text>
            <Flex>
              <Stat>
                <StatLabel>Exp</StatLabel>
                <StatNumber>{exp}</StatNumber>
              </Stat>

              <Stat>
                <StatLabel>Weight</StatLabel>
                <StatNumber>{weight}</StatNumber>
              </Stat>

              <Stat>
                <StatLabel>Height</StatLabel>
                <StatNumber>{height}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Abilities</StatLabel>
                <StatNumber>{abilities}</StatNumber>
              </Stat>
            </Flex>
            <Flex justify="center" mt={2}>
              <Button colorScheme={teambtnColor} onClick={handleClick}>
                {teambtn}
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default GetPokemonCard;
export { team };
export { teamId };
