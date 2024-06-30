import * as Styled from '../styled';

interface ImageProps {
  type?: 'fallback';
  url?: string;
  label: string;
}

const Image = ({ type, url, label }: ImageProps): JSX.Element => {
  return type === 'fallback' ? (
    <Styled.Image alt={label} $type="fallback" />
  ) : (
    <Styled.Image src={url} alt={label} />
  );
};
export default Image;
