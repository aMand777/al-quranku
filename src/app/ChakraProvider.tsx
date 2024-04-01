import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default Provider