import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './routes/Routes';

import * as Styled from '../common/styled';

const Pages = (): JSX.Element => {
  return (
    <Styled.PageLayout>
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </Styled.PageLayout>
  );
};

export default Pages;
