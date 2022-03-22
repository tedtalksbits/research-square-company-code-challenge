import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
export const Nav = () => {
  return (
    <Box
      as="nav"
      boxShadow={'sm'}
      h={20}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={'0 2.5rem'}
    >
      <Image
        src="https://uploads-ssl.webflow.com/5f3420025b90061b5a79e42e/5f4d114e0536dc4e82e0162f_rs-logo-company.svg"
        alt="Logo"
        objectFit={'contain'}
        height="2rem"
      />
      <Box className="links">
        <Flex gap={'1rem'}>
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
          <NavLink activeclassname="active" to="/articles">
            Articles
          </NavLink>
          <NavLink activeclassname="active" to="/admin">
            Admin
          </NavLink>
        </Flex>
      </Box>
    </Box>
  );
};
