import { Box, Center, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

function GetPokemonCard({ pokName, pokPicture }) {
  return (
    <>
      <Box
        maxW="4xl"
        h="50vh"
        boxShadow="xl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Center>
          <VStack>
            <Image
              src={pokPicture}
              boxSize="100%"
              objectFit="contain"
              alt={pokName + ' picture'}
            />
            <Text
              fontSize="30px"
              fontWeight="bold"
              textTransform="uppercase"
              // style={{ textTransform: 'uppercase' }}
            >
              {pokName}
            </Text>
          </VStack>
        </Center>
      </Box>
    </>
  );
}

export default GetPokemonCard;
