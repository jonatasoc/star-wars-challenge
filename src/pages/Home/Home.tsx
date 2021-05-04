import React from 'react';
import { Box } from '@material-ui/core';

import { Container, Title } from './Home.styles';
import StarshipForm from '../../components/StarshipForm';

const Home: React.FC = () => {
  return (
    <Box boxShadow={1}>
      <Container>
        <Title>Star Wars Challenge</Title>
        <StarshipForm />
      </Container>
    </Box>
  );
};

export default Home;
