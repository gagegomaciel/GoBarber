import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 16px;
  background: #FF9000;
  width: 100%;
  border: 0;
  border-radius: 10px;
  height: 56px;
  color: #312e38;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.2, '#FF9000')};
  }
`;
