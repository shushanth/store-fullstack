import styled from 'styled-components';
import { colors } from './common';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const Layout = styled.div<{
  $type: 'row' | 'column';
  $fullSize?: boolean;
  $itemsCenter?: boolean;
}>`
  display: flex;
  column-gap: 40px;
  row-gap: 10px;
  flex-direction: ${(props) => props.$type};
  flex: ${(props) => (props.$fullSize ? 1 : 'none')};
  align-items: ${(props) => (props.$itemsCenter ? 'center' : 'initial')};
`;

export const PageCardLayout = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${colors.graniteGray};
  box-shadow: 0 10px 10px ${colors.graniteGray};
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

export const PageActionsLayout = styled.div<{ $fullSize?: boolean }>`
  display: flex;
  gap: 20px;
  margin: 10px 0 15px;
  flex: ${(props) => (props.$fullSize ? 1 : 'none')};
`;

export const DropdownLayout = styled.div`
  width: 200px;
  border: 1px solid ${colors.tropicalIndigo};
  position: absolute;
  z-index: 1;
  background: #fff;
  margin: 6px 0;
  padding-bottom: 8px;
  box-shadow: 0 10px 10px ${colors.graniteGray};
  border-radius: 4px;
  .item {
    font-size: 15px;
    border-bottom: 1px solid ${colors.tropicalIndigo};
    color: blue;
    cursor: pointer;
    padding: 10px;
    &:hover {
      background-color: ${colors.tropicalIndigo};
    }
    &:last-child {
      border: none;
    }
  }
`;
