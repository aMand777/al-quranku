'use client';
import { useState } from 'react';
import useOpenSurah from '@/hook/useOpenSurah';
import Loading from '@/app/surah/[id]/loading';
import CardListSkeleton from '@/components/skeleton/CardListSkeleton';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Alert,
  AlertIcon,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';

function Offline() {
  const { isOpenSurah } = useOpenSurah();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <>
      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody pb={6}>
            <Alert status="error" className="rounded-lg">
              <AlertIcon />
              No Connection
            </Alert>
            <div className="w-full flex justify-end mt-2">
              <button className="btn btn-outline btn-error btn-sm" onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className="flex mx-auto h-screen w-screen absolute top-0 left-0 right-0 -z-10 pt-16">
        <div
          className={`hidden bg-base-100 md:block transition overflow-auto duration-500 border-2 border-base-300 ${
            isOpenSurah ? 'w-1/3 translate-x-0' : '-translate-x-full'
          }`}
        >
          <CardListSkeleton />
        </div>
        <Loading />
      </div>
    </>
  );
}

export default Offline;
