import { Box, Button, Input, Stack, Text, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';
import { API } from '../api/contants';

export const ArticleForm = () => {
  const [newArticle, setNewArticle] = useState({
    title: '',
    authors: [],
    article: '',
    abstract: '',
  });
  const [formMessage, setFormMessage] = useState({
    msg: '',
    msgBoxColor: '',
  });
  const postArticle = async () => {
    if (newArticle.title && newArticle.authors && newArticle.article) {
      try {
        await fetch(API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newArticle),
        });

        setFormMessage({
          ...formMessage,
          msg: 'Success!',
          msgBoxColor: 'green.200',
        });
      } catch (error) {
        setFormMessage({
          ...formMessage,
          msg: 'Something went wrong, please try again later.',
          msgBoxColor: 'red.200',
        });
      }
      setNewArticle({
        title: '',
        authors: [],
        article: '',
        abstract: '',
      });
    } else {
      setFormMessage({
        ...formMessage,
        msg: 'Title, authors, and article fields must not be empty',
        msgBoxColor: 'red.200',
      });
    }
  };
  const handleInputChange = e => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };
  return (
    <Box as={'form'} mt={10}>
      <Stack spacing={4}>
        <Input
          placeholder="Authors"
          bg={'gray.100'}
          border={0}
          name="authors"
          color={'gray.500'}
          _placeholder={{
            color: 'gray.500',
          }}
          value={newArticle.authors || ''}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Title"
          bg={'gray.100'}
          border={0}
          name="title"
          color={'gray.500'}
          _placeholder={{
            color: 'gray.500',
          }}
          value={newArticle.title || ''}
          onChange={handleInputChange}
        />
        <Textarea
          placeholder="Article"
          bg={'gray.100'}
          border={0}
          name="article"
          color={'gray.500'}
          _placeholder={{
            color: 'gray.500',
          }}
          onChange={handleInputChange}
          value={newArticle.article || ''}
        />
        <Text color={'gray.300'} fontSize={'sm'}>
          Optional
        </Text>
        <Input
          placeholder="Abstract"
          bg={'gray.100'}
          border={0}
          name="abstract"
          color={'gray.500'}
          _placeholder={{
            color: 'gray.500',
          }}
          value={newArticle.abstract || ''}
          onChange={handleInputChange}
        />
      </Stack>
      <Button
        fontFamily={'heading'}
        mt={8}
        w={'full'}
        bgGradient="linear(to-r, green.400,gray.700)"
        color={'white'}
        _hover={{
          bgGradient: 'linear(to-r, green.300,gray.500)',
          boxShadow: 'xl',
        }}
        onClick={postArticle}
      >
        Submit
      </Button>
      {formMessage.msg && (
        <Box mt={6} bg={formMessage.msgBoxColor} p={4} rounded={'lg'}>
          {formMessage.msg}
        </Box>
      )}
    </Box>
  );
};
