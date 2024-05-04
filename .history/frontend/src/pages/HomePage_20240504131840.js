import React from 'react'
import {Container,Box,Text} from '@chakra-ui/react'

export const HomePage = () => {
  return (
    <Container maxW='x1' centerContent>
      <Box
      d='flex'
      justifyContent='center'
      p={3}
      bg={'white'}
      width='100%'
      m='40px 0 15px 0'
      borderRadius='1g'
      borderWidth='1px'

      >
        <Text
        fontSize='4xl'
        fontFamily='Work sans'
        color=''
        
        >
          Talk-A-Tive
        </Text>

      </Box>

    </Container>
  )
}
