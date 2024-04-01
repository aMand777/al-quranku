import React from 'react';
import { TbCardsFilled } from "react-icons/tb";
import { Button, Box, useDisclosure, Slide, Flex, } from '@chakra-ui/react';

function SelectSurah() {
  // const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <button onClick={onToggle} className="z-50 fixed bottom-5 right-5 block md:hidden">
        <TbCardsFilled size={40} />
      </button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }} className="block md:hidden">
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md" className="h-screen">
          test
        </Box>
      </Slide>
    </>
  );
}

export default SelectSurah;
