import React from 'react';
import * as Styled from '../../common/styled';
import PetListView from './components/PetListView';
import { useDispatchEffect } from '../../common/hooks/useDispatchEffect';
import {
  fetchPetListLoading,
  fetchPetListSuccess,
  fetchPetsError,
} from './store/petListSlice';
import { HttpVerbs } from '../../common/services/apiService';
import PetPageActions from './components/PetPageActions';
import { DropDownItem } from '../../common/components/dropdown/Dropdown';
import { PetStatusEnum } from './store/petListSliceModel';
const effectsActions = {
  loading: fetchPetListLoading,
  success: fetchPetListSuccess,
  failure: fetchPetsError,
};
const PetList = (): JSX.Element => {
  const dispatchEffect = useDispatchEffect();

  const requestPets = () => {
    dispatchEffect({
      actions: effectsActions,
      httpMethod: HttpVerbs.GET,
      endPoint: '/pet',
    });
  };

  const onPetStatusFilter = ({ value }: DropDownItem) => {
    if (value === PetStatusEnum.all) {
      requestPets();
      return;
    }
    dispatchEffect({
      actions: effectsActions,
      httpMethod: HttpVerbs.GET,
      endPoint: `/pet/findByStatus?status=${value}`,
    });
  };

  const onPetTagFilter = (value: string) => {
    if (!value) {
      requestPets();
      return;
    }
    const valueInArr = value.trim().toLowerCase().split(/(\s+)/);
    const tagsQueryStr = valueInArr
      .filter((item) => !!item.trim())
      .map((item) => `tags=${item}`)
      .join('&');
    dispatchEffect({
      actions: effectsActions,
      httpMethod: HttpVerbs.GET,
      endPoint: `/pet/findByTags?${tagsQueryStr}`,
    });
  };

  React.useEffect(() => {
    requestPets();
  }, []);
  return (
    <Styled.PageLayout>
      <Styled.Heading $type="h2">Pets</Styled.Heading>
      <PetPageActions
        onPetTagFilter={onPetTagFilter}
        onPetStatusFilter={onPetStatusFilter}
      />
      <PetListView />
    </Styled.PageLayout>
  );
};

export default PetList;
