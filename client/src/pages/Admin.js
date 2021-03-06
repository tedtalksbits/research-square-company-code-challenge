import {
  Badge,
  Box,
  Container,
  Heading,
  Select,
  Stack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { API, PUT_API } from '../api/contants';

export const Admin = () => {
  const [articles, setArticles] = useState(null);

  const fetchArticles = async () => {
    const res = await fetch(API);
    const { data } = await res.json();
    setArticles(data);
  };
  useEffect(() => {
    fetchArticles();
  }, [articles]);

  const updateStatus = async (id, statusObj) => {
    try {
      await fetch(`${PUT_API}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(statusObj),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = async (e, articleId) => {
    await updateStatus(articleId, { status: e.target.value });
  };

  if (!articles) {
    <Box>No article at this time</Box>;
  }
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
      <Box
        m={'4rem auto'}
        textAlign={'center'}
        maxInlineSize={'150ch'}
        border={'1px'}
        borderRadius={'lg'}
        borderColor={'gray.200'}
        p={4}
        shadow={'lg'}
        bg={'white'}
      >
        <Heading mb={20}>Approve an article</Heading>
        <Table variant="simple">
          <TableCaption>{articles?.length} Articles</TableCaption>
          <Thead>
            <Tr>
              {articles &&
                Object.keys(...articles).map((thead, key) => (
                  <Th key={key}>{thead}</Th>
                ))}
            </Tr>
          </Thead>
          <Tbody>
            {articles?.map((article, key) => (
              <Tr key={key}>
                <Td>{article.id.substr(0, 3) + '...'}</Td>
                <Td>{article.title}</Td>
                <Td>
                  <VStack alignItems={'left'}>
                    {article.authors.map((author, key) => (
                      <Text
                        textAlign={'left'}
                        key={key}
                        as={'span'}
                        color={'green.400'}
                      >
                        {author}
                      </Text>
                    ))}
                  </VStack>
                </Td>
                <Td>{article.article}</Td>
                <Td>{article?.abstract}</Td>
                <Td>
                  <Badge
                    bg={
                      article.status === 'approved'
                        ? 'green.100'
                        : article.status === 'pending'
                        ? 'orange.100'
                        : 'red.100'
                    }
                  >
                    {article.status}
                  </Badge>
                </Td>
                <Td>{article.date}</Td>
                <Td>{article?.approvedDate}</Td>
                <Td>
                  <Select
                    width={'fit-content'}
                    placeholder={article?.staus}
                    onChange={e => handleChange(e, article.id)}
                    style={{ width: 'fit-content' }}
                  >
                    <option
                      value="approved"
                      placeholder="approved"
                      selected={article.status === 'approved'}
                      defaultValue="approved"
                    >
                      Approved
                    </option>
                    <option
                      value="disapproved"
                      placeholder="disapproved"
                      selected={article.status === 'disapproved'}
                      defaultValue="disapproved"
                    >
                      Disapproved
                    </option>
                    <option
                      value="pending"
                      placeholder="pending"
                      selected={article.status === 'pending'}
                      defaultValue="pending"
                    >
                      Pending
                    </option>
                  </Select>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};
