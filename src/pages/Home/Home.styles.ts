import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  background-color: var(--white);

  padding: 0 50px;

  @media only screen and (max-width: 600px) {
    padding: 0 5px;
  }
`;

export const Title = styled.p`
  color: var(--blue);

  font-size: 30px;
  letter-spacing: 1px;

  margin: 40px 0 40px;
`;
