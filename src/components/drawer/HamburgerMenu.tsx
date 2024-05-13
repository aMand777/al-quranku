'use client';
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
import { signOut } from 'next-auth/react';
import { User } from '@/interface';

interface NavbarProps {
  session: User | null;
}

function HamburgerMenu({ session }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  const handleClickButtonAuth = () => {
    onClose();
    if (session) {
      signOut({ callbackUrl: '/' });
    } else {
      router.push('/auth/login');
    }
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
          <DrawerHeader className="bg-accent text-black">Al-Quranku</DrawerHeader>
          <DrawerBody>
            <div className="avatar flex gap-5 items-center">
              <div className="w-16 rounded-full">
                {session?.user?.image ? (
                  <Image src={session?.user.image} alt="avatar" width={100} height={100} />
                ) : (
                  <Image
                    src={`https://ui-avatars.com/api/?name=${
                      session?.user?.name || 'Guest'
                    }&background=random`}
                    alt="avatar"
                    width={100}
                    height={100}
                  />
                )}
              </div>
              <span className="text-xl font-semibold">
                {session ? session.user?.name : 'Visit as Guest'}
              </span>
            </div>
            <div className="divider" />
            <div className="flex flex-col gap-3 font-semibold">
              <Link
                href="/surah/1"
                onClick={onClose}
                className={`btn btn-ghost text-lg ${
                  pathname.includes('surah') ? 'text-primary' : ''
                }`}
              >
                Home
              </Link>
              <Link
                href="/bookmarks"
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
            <button
              onClick={handleClickButtonAuth}
              className={`${session ? 'btn-error' : 'btn-info'} btn btn-outline w-full group`}
            >
              <span className="text-xl font-semibold">{session ? 'Logout' : 'Login'}</span>
              {session ? (
                <RiLogoutCircleRLine size={20} className="text-error group-hover:text-black" />
              ) : (
                <RiLoginCircleLine size={20} className="text-info group-hover:text-black" />
              )}
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
