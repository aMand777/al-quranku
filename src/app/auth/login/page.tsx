/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
import {
  InputGroup,
  InputLeftElement,
  Stack,
  Input,
  InputRightElement,
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';
import { MdAlternateEmail } from 'react-icons/md';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { FaCheck } from 'react-icons/fa6';
import { BsIncognito } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

type Inputs = {
  email: string;
  password: string;
};

const FormSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' })
    .refine((password) => /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password), {
      message:
        'Password must have at least one number, one capital letter, and one unique character',
    }),
});

function LoginPage() {
  const { replace } = useRouter();
  const [loadingWithCredentials, setLoadingWithCredentials] = useState<boolean>(false);
  const [loadingWithGoogle, setLoadingWithGoogle] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoadingWithCredentials(true);
    const { email, password } = data;
    const login = await signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
      redirect: false,
    });
    if (login?.ok) {
      setLoadingWithCredentials(false);
      toast.success('User logged in success');
      replace('/');
    } else {
      setLoadingWithCredentials(false);
      toast.error('Incorrect email or password');
    }
  };

  const handleLoginWithGoogle = async () => {
    setLoadingWithGoogle(true);
    await signIn('google', { callbackUrl: '/' });
  };

  return (
    <div className="absolute w-screen h-screen top-0 bg-base-100 flex flex-col justify-center items-center z-[1600]">
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mockup-window border w-11/12 max-w-sm mx-auto p-5 flex flex-col justify-center shadow-2xl border-neutral"
      >
        <div className="flex justify-between items-center">
          <Text fontSize="lg" className="font-semibold underline">
            Login
          </Text>
          <Image src="/mosque-icon-100.png" alt="icon-mosque" width={50} height={50} />
        </div>
        <Stack>
          {/* Field Email */}
          <Text fontSize="xs">Email</Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <MdAlternateEmail size={25} />
            </InputLeftElement>
            <Input
              type="email"
              placeholder="example@mail.com"
              isInvalid={errors.email && true}
              errorBorderColor="crimson"
              {...register('email')}
            />
            {!errors.email && watch('email').includes('@') && (
              <InputRightElement>
                <FaCheck size={15} color="green" />
              </InputRightElement>
            )}
          </InputGroup>
          {errors.email && (
            <Alert status="error" className="rounded-lg p-0">
              <AlertIcon />
              <AlertDescription className="text-xs">{errors.email?.message}</AlertDescription>
            </Alert>
          )}
          {/* Field Password */}
          <Text fontSize="xs">Password</Text>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <RiLockPasswordLine size={25} />
            </InputLeftElement>
            <Input
              pr="4.5rem"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              isInvalid={errors.password && true}
              errorBorderColor="crimson"
              {...register('password')}
            />
            <InputRightElement width="4.5rem">
              <button type="button" className="mr-1" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaRegEye size={25} /> : <FaRegEyeSlash size={25} />}
              </button>
              {!errors.password && watch('password').length >= 6 && (
                <FaCheck size={15} color="green" />
              )}
            </InputRightElement>
          </InputGroup>
          {errors.password && (
            <Alert status="error" className="rounded-lg p-0">
              <AlertIcon />
              <AlertDescription className="text-xs">{errors.password?.message}</AlertDescription>
            </Alert>
          )}
          {/* </form> */}
        </Stack>
        <div className="mt-5 flex justify-between">
          <Image src="/icon-lampion-100.png" alt="icon-lampion" width={50} height={50} />
          <button
            disabled={loadingWithCredentials}
            type="submit"
            className="btn btn-outline btn-primary w-1/2"
          >
            {loadingWithCredentials && <span className="loading loading-spinner" />}
            {loadingWithCredentials ? 'Loading' : 'Login'}
          </button>
        </div>
        <div className="divider">or</div>
        <div className="flex flex-col gap-3">
          <button
            disabled={loadingWithGoogle}
            onClick={handleLoginWithGoogle}
            type="button"
            className="btn btn-primary"
          >
            {loadingWithGoogle && <span className="loading loading-spinner" />}
            <FcGoogle size={20} className="bg-white rounded-full" />
            Continue with Google
          </button>
          <Link href="/" className="btn btn-primary">
            <BsIncognito size={20} className="bg-white rounded-full" />
            Continue as Guest
          </Link>
        </div>
      </form>
      <div className="mt-2">
        Don't have an account?
        <Link href="/auth/register" className="link link-info ml-1">
          Register here
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
