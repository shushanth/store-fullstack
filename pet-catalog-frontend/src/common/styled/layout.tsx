import styled from 'styled-components';

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
