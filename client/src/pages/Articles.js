import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { API } from '../api/contants';

export const Articles = () => {
  const [articles, setArticles] = useState(null);
  const fetchArticles = async () => {
    const res = await fetch(API);
    const { data } = await res.json();
    setArticles(data.filter(approved => approved.status === 'approved'));
  };
  useEffect(() => {
    fetchArticles();
  }, []);

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
              Approved Articles <br />
            </Heading>
            <Text color={'gray.500'}></Text>
          </Stack>
        </Container>
      </Box>
      <Container mt={20} textAlign={'center'}>
        <Heading>Articles</Heading>
        {articles?.map((article, key) => (
          <Box key={key} boxShadow={'sm'} margin={4} bg={'gray.100'} p={5}>
            <Heading>{article?.title}</Heading>
            <Text>{article?.article}</Text>
            <Text>{article?.abstract}</Text>
            <Text>{article.authors}</Text>
          </Box>
        ))}
      </Container>
    </Box>
  );
};
