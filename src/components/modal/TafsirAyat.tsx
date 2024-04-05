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
} from '@chakra-ui/react';

interface TafsirAyatProps {
  tafsir: string | undefined;
  namaLatin: string;
  ayat: number;
  isOpen: boolean;
  onClose: () => void;
}

function TafsirAyat({ tafsir, namaLatin, ayat, isOpen, onClose }: TafsirAyatProps) {

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-center">
            Tafsir {namaLatin} ayat {ayat}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="whitespace-break-spaces">{tafsir}</div>
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
