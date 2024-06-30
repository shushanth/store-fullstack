import styled from 'styled-components';
import { colors, fontSizes } from './common';

export const Input = styled.input<{ $size?: 'small' | 'medium' }>`
  padding: 10px;
  color: #393939;
  border: 1px solid ${colors.grayPrimary};
  border-radius: 4px;
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return `width: 200px`;
      case 'medium':
        return `width: 350px;`;
      default:
        return `width: 150px;`;
    }
  }}
`;
