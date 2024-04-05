import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import parse from 'html-react-parser';

interface TafsirAyatProps {
  tafsir: string | undefined;
  namaLatin: string;
  ayat: number;
  isOpen: boolean;
  onClose: () => void;
}

function TafsirAyat({ tafsir, namaLatin, ayat, isOpen, onClose }: TafsirAyatProps) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // console.log('selectedAyat==>', selectedAyat)
  console.log('tafsir==>', tafsir);
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-center">
            Tafsir surah {namaLatin} ayat {ayat}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="whitespace-break-spaces">{tafsir}</div>
            {/* <div className="">{ tafsir && parse(tafsir) }</div> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TafsirAyat;
