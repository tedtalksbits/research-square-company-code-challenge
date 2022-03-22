import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { Nav } from './components/Nav';
import { Articles } from './pages/Articles';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box as={'main'}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
