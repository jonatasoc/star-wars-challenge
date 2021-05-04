import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 450px;
  margin: 0 auto;

  background-color: var(--white);

  padding: 0 50px;
`;

export const Title = styled.p`
  color: var(--text-highlight);
  text-align: center;

  font-size: 30px;
  letter-spacing: 1px;
`;

export const Card = styled.div`
  width: 100%;
  height: 564px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    color: var(--green);
    margin-bottom: 60px;
  }

  .MuiFormControl-root {
    width: 100%;
    margin-bottom: 15px;
  }

  .lds-dual-ring {
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
