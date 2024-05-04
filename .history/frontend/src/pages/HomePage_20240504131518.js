import React from 'react'
import {Container,Box,Text} from '@chakra-ui/react'

export const HomePage = () => {
  return (
    <Container maxW='x1' centerContent>
      <Box
      d='flex'
      justifyContent='center'
      p={3}
      >
        <Text>
          Talk-A-Tive
        </Text>

      </Box>

    </Container>
  )
}
