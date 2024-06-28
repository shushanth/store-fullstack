import * as Styled from './styled';

const Error = (): JSX.Element => {
  return (
    <Styled.Label $level="error">
      Something went wrong, please try again later.
    </Styled.Label>
  );
};

export default Error;
