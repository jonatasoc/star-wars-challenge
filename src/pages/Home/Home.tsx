import React from 'react';
import { Box } from '@material-ui/core';

import { Container, Title } from './Home.styles';
import StarshipTable from '../../components/StarshipTable';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Star Wars Challenge</Title>
      <StarshipTable />
    </Container>
  );
};

export default Home;
