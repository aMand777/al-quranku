import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { RiLoginCircleLine, RiLogoutCircleRLine } from 'react-icons/ri';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

function HamburgerMenu() {
  const pathname = usePathname()
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)
  return (
    <>
      <button className="btn btn-circle" ref={btnRef} onClick={onOpen}>
        <FiMenu size={30} />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Al-Quranku</DrawerHeader>

          <DrawerBody>
            <div className="avatar flex gap-5 items-center">
              <div className="w-16 rounded-full">
                <Image src="https://ui-avatars.com/api/?name=Guest&background=random" alt="avatar" width={100} height={100}/>
              </div>
              <span className="text-xl font-semibold">Guest</span>
            </div>
            <div className="divider" />
            <div className="flex flex-col gap-3 text-xl font-semibold">
              <Link
                href="/"
                className={`btn btn-ghost ${pathname.includes('/') ? 'bg-base-300' : ''}`}
              >
                Home
              </Link>
              <Link
                href="#"
                className={`btn btn-ghost ${pathname.includes('/bookmarks') ? 'bg-base-300' : ''}`}
              >
                Bookmarks
              </Link>
              <Link
                href="#"
                className={`btn btn-ghost ${
                  pathname.includes('/jadwalsholat') ? 'bg-base-300' : ''
                }`}
              >
                Jadwal Sholat
              </Link>
            </div>
          </DrawerBody>
          <DrawerFooter>
            <button className="btn btn-primary w-full">
              <span className="text-xl font-semibold text-white">Login</span>
              <RiLoginCircleLine size={30} className="text-white" />
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HamburgerMenu