import * as Styled from '../styled';

interface EmptyResultsProps {
  label: string;
}

const EmptyResults = ({ label }: EmptyResultsProps) => {
  return (
    <Styled.Layout $type="column" $itemsCenter>
      <Styled.Label $level="secondary" $size="small">
        {label} are empty
      </Styled.Label>
    </Styled.Layout>
  );
};

export default EmptyResults;
