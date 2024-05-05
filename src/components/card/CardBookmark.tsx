import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, Stack, Heading, Text, useDisclosure } from '@chakra-ui/react';
import AlertDialogDelete from '@/components/alert/AlertDialogDelete';

interface CardBookmarkProps {
  id: string;
  surah: string;
  number: string;
  ayat: string;
}

function CardBookmark({ id, surah, number, ayat }: CardBookmarkProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <AlertDialogDelete idBookmark={id} isOpen={isOpen} onClose={onClose} />
      <Card
        className="my-5"
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <div className="bg-primary flex items-center">
          <Image src="/icon-512.png" alt="icon" width={80} height={80} />
        </div>
        <Stack className="w-full bg-base-300">
          <CardBody>
            <Heading size="md">Surah: {surah}</Heading>

            <Text py="2">Ayat: {ayat}</Text>
            <div className="flex gap-5 justify-end mt-2 w-full">
              <Link
                href={`/surah/${number}#ayat-${ayat}`}
                className="btn btn-outline btn-sm btn-primary"
              >
                Open Ayat
              </Link>
              <button onClick={onOpen} className="btn btn-outline btn-sm btn-error">
                delete
              </button>
            </div>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
}

export default CardBookmark;
