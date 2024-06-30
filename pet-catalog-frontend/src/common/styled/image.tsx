import styled from 'styled-components';

import { colors } from './common';

export const Image = styled.img<{ $type?: 'fallback' }>`
  width: 100px;
  height: 100px;
  border: 3px dotted ${colors.whiteSnow};
  border-radius: 50%;
  ${({ $type }) => {
    switch ($type) {
      case 'fallback':
        return `
          font-size: 22px;
          padding: 20px;
        `;
      default: {
        return `
          padding: 0;
        `;
      }
    }
  }}
`;
