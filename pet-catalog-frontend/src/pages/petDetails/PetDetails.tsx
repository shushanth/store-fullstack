import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatchEffect } from '../../common/hooks/useDispatchEffect';
import { HttpVerbs } from '../../common/services/apiService';
import * as Styled from '../../common/styled';
import {
  fetchPetDetailsError,
  fetchPetDetailsLoading,
  fetchPetDetailsSuccess,
} from './store/petDetailsSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootStore';
import Image from '../../common/components/Image';
const PetDetails = (): JSX.Element => {
  const params = useParams();
  const dispatchEffect = useDispatchEffect();

  const { loading, error, pet } = useSelector((state: RootState) => {
    return state.petDetailsPage;
  });

  const getImageLabel = (): string =>
    `${pet?.name?.charAt(0)} ${pet?.name?.charAt(1)}`;

  const getPetCategories = (): string =>
    pet?.category?.map((cate) => cate.name).join(',');

  const getPetTags = (): string => pet?.tags?.map((tag) => tag.name).join(',');

  const requestPetDetails = () => {
    const effectsActions = {
      loading: fetchPetDetailsLoading,
      success: fetchPetDetailsSuccess,
      failure: fetchPetDetailsError,
    };
    dispatchEffect({
      actions: effectsActions,
      httpMethod: HttpVerbs.GET,
      endPoint: `/pet/${params.id}`,
    });
  };
  useEffect(() => {
    requestPetDetails();
  }, []);
  return (
    <Styled.PageCardLayout>
      <Styled.Layout $type="row">
        <Styled.Layout $type="column">
          <React.Suspense fallback={<Image type="fallback" label="image" />}>
            <Image
              label={pet?.name && getImageLabel()}
              url={pet?.photoUrls?.[0]?.name}
            />
          </React.Suspense>
        </Styled.Layout>
        <Styled.Layout $type="column" $fullSize>
          {/* fullname */}
          <Styled.Heading $type="h1">{pet?.name}</Styled.Heading>
          {/* Age */}
          <Styled.Label $size="small">Status</Styled.Label>
          <Styled.Label>{pet?.status}</Styled.Label>
          {/* Email */}
          <Styled.Label $size="small">Category</Styled.Label>
          <Styled.Label>{getPetCategories()}</Styled.Label>

          {/* Address */}
          <Styled.Label $size="small">Tags</Styled.Label>
          <Styled.Label>{getPetTags()}</Styled.Label>
        </Styled.Layout>
      </Styled.Layout>
    </Styled.PageCardLayout>
  );
};

export default PetDetails;
