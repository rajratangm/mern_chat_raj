import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
// import {Input} from '@chakra-ui/input'
import React,{useState} from 'react'

export const Signup= () => {
    
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);
  return (
    <VStack spacing='5px' color='black'>
        <FormControl id='first-name' isRequired>
            <FormLabel>

            </FormLabel>
            <Input placeholder='Enter Your Name' onChange={(e)=>{setName(e.target.value)}}></Input>
        </FormControl>

    </VStack>
  )
}
