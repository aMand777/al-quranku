import React from 'react';
import parse from 'html-react-parser';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import { BsInfoCircleFill } from 'react-icons/bs';

interface DetailSurahProps {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
}

function DetailSurah({
  nomor,
  nama,
  tempatTurun,
  namaLatin,
  jumlahAyat,
  arti,
  deskripsi,
}: DetailSurahProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <button className="p-5">
          <BsInfoCircleFill size={20} className="text-info" />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader className="text-xl text-center">
          {namaLatin} | {nama}
        </PopoverHeader>
        <PopoverBody>
          <p>
            Merupakan <span className="text-highlight">surah ke {nomor}</span>dalam al-quran yang
            diturunkan di
            <span className="text-highlight">{tempatTurun}</span>dengan jumlah
            <span className="text-highlight">{jumlahAyat} ayat </span>yang memiliki arti
            <span className="text-highlight">{arti}</span>
          </p>
        </PopoverBody>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Deskripsi
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className="overflow-y-scroll h-64">
              {parse(deskripsi)}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </PopoverContent>
    </Popover>
  );
}

export default DetailSurah;
