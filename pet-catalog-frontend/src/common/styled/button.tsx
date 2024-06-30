import { styled } from 'styled-components';
import { fontSizes, colors } from './common';

export const Button = styled.button<{
  $level?: 'primary' | 'danger';
  $size?: 'xxsmall' | 'xsmall' | 'small';
}>`
  padding: 10px 15px;
  background-color: ${colors.white};
  cursor: pointer;
  font-size: ${fontSizes.labels.small};
  border-radius: 4px;
  &:disabled {
    pointer-events: none;
    background-color: ${colors.neonSilver};
    border-color: ${colors.neonSilverLight};
  }
  &:hover {
    color: ${colors.white};
    background-color: ${colors.persianBlueLight};
  }
  ${({ $size = 'small' }) => {
    switch ($size) {
      case 'xxsmall':
        return `width: 50px`;
      case 'xsmall':
        return `
          width: 100px;
          
          `;
      case 'small':
        return `
            width: 140px;
          `;
      default:
        return `width: 150px;`;
    }
  }}

  ${({ $level = 'primary' }) => {
    switch ($level) {
      case 'primary':
        return `
          color: ${colors.persianBlueLight}; 
          border: 1px solid ${colors.tropicalIndigoLight};
  
          &:hover {
            color: ${colors.white};
            background-color: ${colors.persianBlueLight};
          };
          
          `;
      case 'danger':
        return `
          color: #f83a3a; 
          border: 1px solid #f83a3a61;
  
          &:hover {
            color: ${colors.white};
            background-color: #f83a3a9c;
          };
          `;
      default:
        return `width: 150px;`;
    }
  }}
`;

export const ButtonDropdownWrapper = styled.div`
  position: relative;
  flex: 1;
`;
