import styled from 'styled-components';

import { fontSizes, colors } from './common';

export const Heading = styled.p<{ $type?: 'h1' | 'h2' | 'h3' }>`
  padding: 4px;
  ${({ $type }) => {
    switch ($type) {
      case 'h2':
        return `font-size: ${fontSizes.headings.large}`;
      default:
        return `font-size: ${fontSizes.headings.small}`;
    }
  }};
  padding: 20px 0;
`;

export const Label = styled.p<{
  $size?: 'xsmall' | 'small' | 'medium';
  $level?: 'primary' | 'secondary' | 'error';
  $breakWord?: boolean;
}>`
  ${({ $size }) => {
    switch ($size) {
      case 'xsmall':
        return `font-size: ${fontSizes.labels.xsmall};`;
      case 'small':
        return `font-size: ${fontSizes.labels.small};`;
      case 'medium':
        return `font-size: ${fontSizes.labels.medium};`;
      default:
        return `font-size: ${fontSizes.labels.large}`;
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
  word-break: ${(props) => (props.$breakWord ? 'break-word' : 'initial')};
  }
`;
