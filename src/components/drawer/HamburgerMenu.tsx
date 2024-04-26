import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
  const pathname = usePathname();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  const handleClickButtonLogin = () => {
    onClose();
    router.push('/feature');
  };
  return (
    <>
      <span className="btn btn-circle cursor-pointer" ref={btnRef} onClick={onOpen}>
        <FiMenu size={30} />
      </span>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton className="text-black" />
          <DrawerHeader className="bg-primary text-black">Al-Quranku</DrawerHeader>
          <DrawerBody>
            <div className="avatar flex gap-5 items-center">
              <div className="w-16 rounded-full">
                <Image
                  src="https://ui-avatars.com/api/?name=Guest&background=random"
                  alt="avatar"
                  width={100}
                  height={100}
                />
              </div>
              <span className="text-xl font-semibold">Visit as Guest</span>
            </div>
            <div className="divider" />
            <div className="flex flex-col gap-3 font-semibold">
              <Link
                href="/"
                onClick={onClose}
                className={`btn btn-ghost text-lg ${
                  pathname.includes('surah') ? 'text-primary' : ''
                }`}
              >
                Home
              </Link>
              <Link
                href="/feature"
                onClick={onClose}
                className={`btn btn-ghost text-lg ${
                  pathname.includes('bookmarks') ? 'text-primary' : ''
                }`}
              >
                Bookmarks
              </Link>
            </div>
          </DrawerBody>
          <DrawerFooter className="flex flex-col gap-7">
            <button onClick={handleClickButtonLogin} className="btn btn-info w-full">
              <span className="text-xl font-semibold text-white">Login</span>
              <RiLoginCircleLine size={30} className="text-white" />
            </button>
            <div className="text-xs">
              &copy; 2024 with <span className="animate-pulse text-error">&#10084;</span> by @aMand
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
