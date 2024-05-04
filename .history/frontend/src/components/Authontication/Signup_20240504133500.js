import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
// import {Input} from '@chakra-ui/input'
import React from 'react'

export const Signup= () => {
  return (
    <VStack spacing='5px'>
        <FormControl>
            <FormLabel>

            </FormLabel>
            <Input placeholder='Enter Your Name'></Input>
        </FormControl>

    </VStack>
  )
}
