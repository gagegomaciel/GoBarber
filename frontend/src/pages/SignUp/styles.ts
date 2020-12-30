import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackfroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  `;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 400px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    margin-top: 24px;
    display: block;
    color: #f4ede8;
    text-decoration: none;
    transition: color 0.3s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 6px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackfroundImg}) no-repeat center;
  background-size: cover;
`;
