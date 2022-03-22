import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const Admin = () => {
  return (
    <Box as="section">
      <Box as="header" bg={'gray.200'} minBlockSize={'30vh'}>
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              Welcome to <br />
              <Text as={'span'} color={'green.400'}>
                The Admin Dashboard
              </Text>
            </Heading>
            <Text color={'gray.500'}></Text>
          </Stack>
        </Container>
      </Box>
      <Container mt={20} textAlign={'center'}>
        <Heading>Approve an article</Heading>
      </Container>
    </Box>
  );
};
