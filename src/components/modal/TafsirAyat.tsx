import React from 'react';
import useSelectFontSize from '@/hook/useSelectFontSize';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

interface TafsirAyatProps {
  tafsir: string | undefined;
  namaLatin: string;
  nomorAyat: number;
  isOpen: boolean;
  onClose: () => void;
}

function TafsirAyat({ tafsir, namaLatin, nomorAyat, isOpen, onClose }: TafsirAyatProps) {
  const { fontSize } = useSelectFontSize();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className={`text-center ${fontSize === 'small' ? 'text-lg' : 'text-xl' }`}>
            Tafsir {namaLatin} Ayat {nomorAyat}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className={`whitespace-break-spaces lg:px-16 text-justify ${fontSize === 'small' ? 'text-base': 'text-lg'}`}>{tafsir}</div>
          </ModalBody>
          <ModalFooter>
            <button onClick={onClose} className="btn btn-primary btn-outline">
              Close
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default TafsirAyat;
