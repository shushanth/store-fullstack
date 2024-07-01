import { screen, act } from '@testing-library/react';
import { setupAppStore } from '../../store/rootStore';
import { renderWithProviders } from '../../config/tests/setupTests';
import PetDetails from '../../pages/petDetails/PetDetails';

import { PetStatusEnum } from '../../pages/petList/store/petListSliceModel';
import App from '../../App';
import {
  fetchPetDetailsError,
  fetchPetDetailsLoading,
  fetchPetDetailsSuccess,
} from '../../pages/petDetails/store/petDetailsSlice';

test('renders petDetails with initial app store', () => {
  const store = setupAppStore();

  renderWithProviders(<App />, { store });
  const element = screen.queryByTestId('petdetails-component');
  expect(element).toBeDefined();
});

test('renders petDetails with page layout component', () => {
  const store = setupAppStore();
  renderWithProviders(<App />, { store });
  const element = screen.queryByTestId('petDetailsLayout-component');
  expect(element).toBeDefined();
});

test('renders petDetails page with added pet', () => {
  const store = setupAppStore();
  renderWithProviders(<App />, { store });
  const element = screen.queryByTestId('petdetails-component');
  expect(element).toBeDefined();

  const petDetail = {
    _id: '6681a140ff7264b6eb8e2972',
    name: 'Husky',
    category: [
      {
        name: 'Dog',
      },
    ],
    tags: [{ name: 'ferry' }, { name: 'colorfull' }],
    photoUrls: [{ name: 'http://dummyimage.com/132x100.png/5fa2dd/ffffff' }],
    status: PetStatusEnum.available,
  };

  act(() => {
    store.dispatch(fetchPetDetailsSuccess(petDetail));
    const {
      petDetailsPage: { pet },
    } = store.getState();
    expect(pet.name).toEqual(petDetail.name);
    expect(pet.category[0].name).toEqual(petDetail.category[0].name);
    expect(pet.tags[0].name).toEqual(petDetail.tags[0].name);
    expect(pet.photoUrls[0].name).toEqual(petDetail.photoUrls[0].name);
    expect(pet.status).toEqual(petDetail.status);
  });

  act(() => {
    store.dispatch(fetchPetDetailsLoading(true));
    const {
      petDetailsPage: { loading },
    } = store.getState();
    expect(loading).toBeTruthy();
  });

  act(() => {
    store.dispatch(fetchPetDetailsError(true));
    const {
      petDetailsPage: { error },
    } = store.getState();
    expect(error).toBeTruthy();
  });
});
