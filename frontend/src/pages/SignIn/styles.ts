import styled from 'styled-components';
import { shade } from 'polished';

import signInBackfroundImg from '../../assets/sign-in-background.png';

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
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      width: 100%;
      padding: 16px;
      border: 2px solid #232129;
      border-radius: 10px;
      color: #f4ede8;

      &::placeHolder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      margin-top: 16px;
      background: #FF9000;
      width: 100%;
      border: 0;
      border-radius: 10px;
      height: 50px;
      color: #312e38;
      font-weight: 500;
      transition: background-color 0.3s;

      &:hover {
        background: ${shade(0.2, '#FF9000')};
      }
    }

    a {
      margin-top: 24px;
      display: block;
      color: #f4ede8;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    margin-top: 24px;
    display: block;
    color: #ff9000;
    text-decoration: none;
    transition: color 0.3s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 6px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackfroundImg}) no-repeat center;
  background-size: cover;
`;
