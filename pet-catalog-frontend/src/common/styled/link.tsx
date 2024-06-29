import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from './common';

export const Link = styled(NavLink)<{ $linkType: 'nav' | 'default' }>`
  ${({ $linkType }) => {
    switch ($linkType) {
      case 'nav': {
        return `
        color: ${colors.persianBlue};
        text-decoration: none;
        margin: 20px;
        padding-bottom: 4px;
        &:hover,
        &:focus {
          color: ${colors.persianBlueLight};
        }
        &.active {
          border-bottom: 3px solid;
          pointer-events: none;
          opacity: 0.8;
        }
        `;
      }
      case 'default': {
        return `
        text-decoration: none;
          &:hover {
            border-left: 2px solid ${colors.persianBlue};
          }
        `;
      }
    }
  }}
`;
