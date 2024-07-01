import { screen, act } from '@testing-library/react';
import { setupAppStore } from '../../store/rootStore';
import { renderWithProviders } from '../../config/tests/setupTests';
import PetList from '../../pages/petList/PetList';

import { fetchPetListSuccess } from '../../pages/petList/store/petListSlice';
import { PetStatusEnum } from '../../pages/petList/store/petListSliceModel';
import App from '../../App';

test('renders petList with initial app store', () => {
  const store = setupAppStore();

  renderWithProviders(<PetList />, { store });
  const element = screen.queryByTestId('petlist-component');
  expect(element).toBeDefined();
});

test('renders petList with list view component', () => {
  const store = setupAppStore();
  renderWithProviders(<PetList />, { store });
  const element = screen.queryByTestId('petlist-view-component');
  expect(element).toBeDefined();
});

test('renders petList with page action component', () => {
  const store = setupAppStore();
  renderWithProviders(<PetList />, { store });
  const element = screen.queryByTestId('petlist-pageAction-component');
  expect(element).toBeDefined();
});

test('renders petlist page with added pet', async () => {
  const store = setupAppStore();
  renderWithProviders(<App />, { store });
  const element = screen.queryByTestId('petlist-component');
  expect(element).toBeDefined();

  const newPet = [
    {
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
    },
  ];

  act(() => {
    store.dispatch(fetchPetListSuccess(newPet));
    const {
      petListPage: {
        pets: { list },
      },
    } = store.getState();
    expect(list.length).toEqual(1);
    expect(list[0].name).toEqual(newPet[0].name);
    expect(list[0].category[0].name).toEqual(newPet[0].category[0].name);
    expect(list[0].photoUrls[0].name).toEqual(newPet[0].photoUrls[0].name);
    expect(list[0].tags[0].name).toEqual(newPet[0].tags[0].name);
    expect(list[0].status).toEqual(newPet[0].status);
  });
});
