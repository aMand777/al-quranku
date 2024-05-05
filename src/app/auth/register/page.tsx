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
import { FaRegCircleUser, FaCheck } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { registerUser } from '@/lib/axios/services/register.services';

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const FormSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Name is required' })
    .min(3, { message: 'Name must be at least 3 characters' }),
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

function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const response = await registerUser(data);
    if (response.status === 409) {
      setLoading(false);
      toast.error(response.message);
    } else if (response.status === 201) {
      setLoading(false);
      toast.success(response.message);
      router.replace('/auth/login');
    } else {
      setLoading(false);
      toast.error(response.message);
    }
  };

  return (
    <div className="absolute w-screen h-screen top-0 bg-base-100 flex flex-col justify-center items-center z-[1600]">
      <Toaster />
      <div className="mockup-window border w-11/12 max-w-sm mx-auto p-5 flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <Text fontSize="lg" className="font-semibold underline">
            Register
          </Text>
          <Image src="/mosque-icon-100.png" alt="icon-mosque" width={50} height={50} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            {/* Field Username */}
            <Text fontSize="xs">Username</Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaRegCircleUser size={25} />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="John Doe"
                isInvalid={errors.username && true}
                errorBorderColor="crimson"
                {...register('username')}
              />
              {watch('username').length >= 3 && (
                <InputRightElement>
                  <FaCheck size={15} color="green" />
                </InputRightElement>
              )}
            </InputGroup>
            {errors.username && (
              <Alert status="error" className="rounded-lg p-0">
                <AlertIcon />
                <AlertDescription className="text-xs">{errors.username?.message}</AlertDescription>
              </Alert>
            )}
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
                <button
                  type="button"
                  className="mr-1"
                  onClick={() => setShowPassword(!showPassword)}
                >
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
          </Stack>
          <div className="mt-5 flex justify-between w-full">
            <Image src="/icon-lampion-100.png" alt="icon-lampion" width={50} height={50} />
            <button disabled={loading} type="submit" className="btn btn-outline btn-primary w-1/2">
              {loading && <span className="loading loading-spinner" />}
              {loading ? 'Loading' : 'Register'}
            </button>
          </div>
        </form>
      </div>
      <div className="mt-2">
        Already have an account?
        <Link href="/auth/login" className="link link-info ml-1">
          Login here
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
