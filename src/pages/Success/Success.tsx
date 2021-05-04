import React from 'react';
import { useHistory } from 'react-router';

import { Button } from '@material-ui/core';
import { MdCheckCircle, MdArrowBack } from 'react-icons/md';

import { Container, Card, Title } from './Success.styles';

const Success: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Title>All Good! Your data was sent to us.</Title>
      <Card>
        <MdCheckCircle size={50} />

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

export default Success;
