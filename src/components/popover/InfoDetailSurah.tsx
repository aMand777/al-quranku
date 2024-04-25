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
import { DetailSurah } from '@/interface';

function InfoDetailSurah({ detailSurah }: { detailSurah: DetailSurah }) {
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
          {detailSurah?.namaLatin} | {detailSurah?.nama}
        </PopoverHeader>
        <PopoverBody>
          <p className="text-center">
            Surah ke <span className="text-highlight">{detailSurah?.nomor}</span>dalam al-quran<br />yang
            diturunkan di<span className="text-highlight">{detailSurah?.tempatTurun}</span><br/>dengan jumlah
            <span className="text-highlight">{detailSurah?.jumlahAyat} ayat</span><br/>memiliki arti
            <span className="text-highlight">{detailSurah?.arti}</span>
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
            <AccordionPanel pb={4} className="overflow-y-scroll h-64 text-justify whitespace-break-spaces">
              {detailSurah && parse(detailSurah?.deskripsi)}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </PopoverContent>
    </Popover>
  );
}

export default InfoDetailSurah;
