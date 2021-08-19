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
} from '@chakra-ui/react';
import React from 'react';

function GetPokemonCard({
  pokName,
  pokPicture,
  exp,
  height,
  weight,
  abilities,
}) {
  return (
    <ChakraProvider>
      <Box
        maxW="4xl"
        h="60vh"
        p={5}
        mt={5}
        boxShadow="xl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bgColor="#f7f7f7"
      >
        <Box d="flex" flexDirection="column">
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
              <Button colorScheme="green">Add to your Team</Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default GetPokemonCard;
