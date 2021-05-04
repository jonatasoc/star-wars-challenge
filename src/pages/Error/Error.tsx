import React from 'react';
import { useHistory } from 'react-router';

import { Button } from '@material-ui/core';
import { MdArrowBack } from 'react-icons/md';
import { GoAlert } from 'react-icons/go';

import { Container, Card, Title } from './Error.styles';

const Error: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Title>Sorry, an error occurred! Try again.</Title>
      <Card>
        <GoAlert size={50} />

        <Button
          variant="contained"
          color="primary"
          endIcon={<MdArrowBack />}
          type="submit"
          onClick={() => history.push('/')}
        >
          Back
        </Button>
      </Card>
    </Container>
  );
};

export default Error;
