import { Box, Button, Input, Stack, Text, Textarea } from '@chakra-ui/react';
import React from 'react';

export const ArticleForm = () => {
  return (
    <Box as={'form'} mt={10}>
      <Stack spacing={4}>
        <Input
          placeholder="Authors"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
          _placeholder={{
            color: 'gray.500',
          }}
        />
        <Input
          placeholder="Title"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
          _placeholder={{
            color: 'gray.500',
          }}
        />
        <Textarea
          placeholder="Article"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
          _placeholder={{
            color: 'gray.500',
          }}
        />
        <Text color={'gray.300'} fontSize={'sm'}>
          Optional
        </Text>
        <Input
          placeholder="Abstract"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
          _placeholder={{
            color: 'gray.500',
          }}
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
      >
        Submit
      </Button>
    </Box>
  );
};
