import {
  Box,
  Button,
  HStack,
  Input,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { API } from '../api/contants';

export const ArticleForm = () => {
  const [authors, setAuthors] = useState([]);
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
          body: JSON.stringify({ ...newArticle, authors: authors }),
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
      resetInputFields();
    } else {
      setFormMessage({
        ...formMessage,
        msg: 'Please fill out the required fields*',
        msgBoxColor: 'red.200',
      });
    }
  };
  const resetInputFields = () => {
    setNewArticle({
      title: '',
      authors: [],
      article: '',
      abstract: '',
    });
    setAuthors([]);
  };
  const handleAddAuthor = e => {
    if (e.target.value !== '') {
      setAuthors([...authors, e.target.value]);
      e.target.value = '';
    }
  };
  const handleRemoveAuthor = index => {
    setAuthors(authors.filter(author => author !== authors[index]));
    console.log(authors);
  };
  const handleInputChange = e => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

  return (
    <Box
      as={'form'}
      mt={10}
      border={'1px'}
      borderColor="blackAlpha.100"
      p={10}
      rounded={'lg'}
      shadow={'xl'}
    >
      {formMessage.msg && (
        <Box
          textAlign={'center'}
          mb={6}
          bg={formMessage.msgBoxColor}
          p={4}
          rounded={'lg'}
        >
          {formMessage.msg}
        </Box>
      )}
      <Stack spacing={4}>
        <HStack spacing={4}>
          {authors.map((author, index) => (
            <Tag
              size={'md'}
              key={author}
              borderRadius="lg"
              variant="solid"
              colorScheme="gray"
            >
              <TagLabel>{author}</TagLabel>
              <TagCloseButton onClick={() => handleRemoveAuthor(index)} />
            </Tag>
          ))}
        </HStack>
        <Input
          placeholder="*Authors"
          bg={'gray.100'}
          border={0}
          name="authors"
          outlineColor={formMessage.msgBoxColor}
          color={'gray.500'}
          _placeholder={{
            color: 'gray.500',
          }}
          onKeyDown={e => e.key === 'Enter' && handleAddAuthor(e)}
          onBlur={handleAddAuthor}
        />
        <Input
          placeholder="*Title"
          bg={'gray.100'}
          border={0}
          name="title"
          outlineColor={formMessage.msgBoxColor}
          color={'gray.500'}
          _placeholder={{
            color: 'gray.500',
          }}
          value={newArticle.title || ''}
          onChange={handleInputChange}
        />
        <Textarea
          placeholder="*Article"
          bg={'gray.100'}
          border={0}
          name="article"
          outlineColor={formMessage.msgBoxColor}
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
        bgGradient="linear(to-r, green.400,green.700)"
        color={'white'}
        _hover={{
          bgGradient: 'linear(to-r, green.300,green.500)',
          boxShadow: 'xl',
        }}
        onClick={postArticle}
      >
        Submit
      </Button>
    </Box>
  );
};
