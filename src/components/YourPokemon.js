import React from 'react';
import {
  Badge,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
// import { team } from './GetPokemonCard';
// import { teamId } from './GetPokemonCard';

const YourPokemon = ({ setInput }) => {
  let team = JSON.parse(localStorage.getItem('team')) || [];
  let teamId = JSON.parse(localStorage.getItem('teamId')) || [];
  const toast = useToast();
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Your Pokemon Team
        </MenuButton>
        <MenuList>
          {team.map(el => {
            let index = team.indexOf(el);
            return (
              <MenuItem
                key={teamId[index]}
                minH="40px"
                onClick={() => {
                  setInput(teamId[index]);
                }}
              >
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  // src="https://cdn.pixabay.com/photo/2016/08/05/15/27/team-1572487_960_720.jpg"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${teamId[index]}.svg`}
                  alt={el}
                  mr="12px"
                />
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                >
                  <Text
                    fontSize="sm"
                    textTransform="uppercase"
                    fontWeight="bold"
                    pr={2}
                  >
                    {el}
                  </Text>
                  <Badge
                    colorScheme="red"
                    onClick={() => {
                      team = team.filter(element => element !== el);
                      teamId = teamId.filter(
                        element => element !== teamId[index]
                      );
                      localStorage.setItem('team', JSON.stringify(team));
                      localStorage.setItem('teamId', JSON.stringify(teamId));
                      toast({
                        title: 'Pokemon removed successfully',
                        description: `You've removed ${el}`,
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                      });
                    }}
                  >
                    Remove
                  </Badge>
                </Flex>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};

export default YourPokemon;
