import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
// import {Input} from '@chakra-ui/input'
import React,{useState} from 'react'

export const Signup= () => {
    const [name, setName]= useState()
  return (
    <VStack spacing='5px'>
        <FormControl>
            <FormLabel>

            </FormLabel>
            <Input placeholder='Enter Your Name' onChange={()=>{}}></Input>
        </FormControl>

    </VStack>
  )
}
