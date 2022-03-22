import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { getApproved } from '../api/actions';
import { ArticleForm } from '../components/ArticleForm';

export const Home = () => {
  const fetchArticles = async () => {
    const data = await getApproved();
    console.log(data);
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Box as="section">
      <Box as="header" bg={'gray.200'} minBlockSize={'40vh'}>
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
                Preprint
                <Text as={'span'} fontSize={'lg'}>
                  ©
                </Text>
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              At Research Square Company, we're committed to making research
              communication faster, fairer, and more useful. We do this by
              developing innovative software and high quality services for the
              global research community. Our growing team of researchers and
              industry professionals works together to solve the most critical
              problems facing scientific publishing.
            </Text>
          </Stack>
        </Container>
      </Box>
      <Container mt={20}>
        <Heading>Submit an article for approval</Heading>
        <ArticleForm />
      </Container>
    </Box>
  );
};
