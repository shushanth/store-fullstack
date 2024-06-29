import React from 'react';
import { useSelector } from 'react-redux';
import EmptyResults from '../../../common/EmptyResults';
import Loading from '../../../common/Loading';
import * as Styled from '../../../common/styled';
import { RootState } from '../../../store/rootStore';
import { Pet } from '../store/petListSliceModel';

// type PetListViewProps = {
//   pets: Pet[];
// };

const PetListView = React.memo((): JSX.Element => {
  const { loading, list } = useSelector(
    (state: RootState) => state.petListPage.pets,
  );
  return (
    <React.Suspense fallback={loading && <Loading />}>
      <Styled.Heading $type="h2">Pets</Styled.Heading>
      <Styled.ListContainer>
        {!loading && !list?.length && <EmptyResults label="pets" />}
        {list.map(({ _id, name, category, status, tags }: Pet) => {
          return (
            <Styled.Link
              className={'link'}
              $linkType="default"
              to={`/pet/${_id}`}
              key={_id}
            >
              <Styled.List>
                <Styled.ListBucket $noFlexResp>
                  <Styled.Label $size="xsmall" $level="primary">
                    Name
                  </Styled.Label>
                  <Styled.Label $size="xsmall">{name}</Styled.Label>
                </Styled.ListBucket>

                <Styled.ListBucket $noFlexResp>
                  <Styled.Label $size="xsmall" $level="primary">
                    category
                  </Styled.Label>
                  <Styled.Label $size="medium">
                    {category[0]?.name}
                  </Styled.Label>
                </Styled.ListBucket>

                <Styled.ListBucket $noFlexResp>
                  <Styled.Label $size="xsmall" $level="primary">
                    tags
                  </Styled.Label>
                  <Styled.Label $size="medium">{tags[0]?.name}</Styled.Label>
                </Styled.ListBucket>

                <Styled.ListBucket>
                  <Styled.Label $size="xsmall" $level="primary">
                    status
                  </Styled.Label>
                  <Styled.Label $size="medium">{status}</Styled.Label>
                </Styled.ListBucket>
              </Styled.List>
            </Styled.Link>
          );
        })}
      </Styled.ListContainer>
    </React.Suspense>
  );
});

export default PetListView;
