import React from 'react'
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react"
import Login from '../components/Authontication/Login'
// import { Signup } from '../components/Authontication/Signup'

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
        color='black'
        >
          Talk-A-Tive
        </Text>

      </Box>

      <Box bg='White' w='100%' p={4} borderRadius='lg' borderWidth='1px' textColor='black'>
      <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList mb='1em'>
    <Tab width='50%'>Loging</Tab>
    <Tab width='50%'>Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>


      </Box>

    </Container>
  )
}
