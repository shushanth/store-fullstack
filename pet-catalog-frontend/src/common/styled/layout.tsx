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
