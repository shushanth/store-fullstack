import React from 'react';
import * as Styled from '../../common/styled';
import PetListView from './components/PetListView';
import { useDispatchEffect } from '../../common/hooks/useDispatchEffect';
import petListSlice, {
  fetchPetListLoading,
  fetchPetListSuccess,
  fetchPetsError,
} from './store/petListSlice';
import { HttpVerbs } from '../../common/services/apiService';

const PetList = (): JSX.Element => {
  const dispatchEffect = useDispatchEffect();
  const requestPets = () => {
    debugger;
    const effectsActions = {
      loading: fetchPetListLoading,
      success: fetchPetListSuccess,
      failure: fetchPetsError,
    };
    dispatchEffect({
      actions: effectsActions,
      httpMethod: HttpVerbs.GET,
      endPoint: '/pet',
    });
  };

  React.useEffect(() => {
    requestPets();
  }, []);
  return (
    <Styled.PageLayout>
      <PetListView />
    </Styled.PageLayout>
  );
};

export default PetList;
