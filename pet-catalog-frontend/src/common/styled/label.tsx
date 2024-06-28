import styled from 'styled-components';

import { fontSizes, colors } from './common';

export const Label = styled.p<{
  $level: 'primary' | 'secondary' | 'error';
  $size?: 'xsmall' | 'small' | 'medium';
}>`
  ${({ $size }) => {
    switch ($size) {
      case 'small': {
        return `font-size: ${fontSizes.labels.small}`;
      }
      case 'medium': {
        return `font-size: ${fontSizes.labels.medium}`;
      }
      default: {
        return `font-size: ${fontSizes.labels.large}`;
      }
    }
  }}
  ${({ $level }) => {
    switch ($level) {
      case 'primary':
        return `color: ${colors.blackPrimary}`;
      case 'secondary':
        return `color: ${colors.blackSecondary}`;
      case 'error':
        return `color: ${colors.redPrimary}`;
      default:
        return `color: inherit;`;
    }
  }}
  padding: 2px;
`;
