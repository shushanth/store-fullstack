import React from 'react';
import * as Styled from '../../../common/styled';
import DropdownMenu, {
  DropDownItem,
} from '../../../common/components/dropdown/Dropdown';
import { PetStatusEnum } from '../store/petListSliceModel';

const petStatusFilter = [
  {
    id: 1,
    label: 'All',
    value: 'All',
  },
  {
    id: 2,
    label: PetStatusEnum.available,
    value: PetStatusEnum.available,
  },
  {
    id: 3,
    label: PetStatusEnum.pending,
    value: PetStatusEnum.pending,
  },
  {
    id: 4,
    label: PetStatusEnum.sold,
    value: PetStatusEnum.sold,
  },
];

type PetPageActions = {
  onPetStatusFilter: (item: DropDownItem) => void;
  onPetTagFilter: (item: string) => void;
};

const PetPageActions = ({
  onPetStatusFilter,
  onPetTagFilter,
}: PetPageActions) => {
  const [statusFilter, setStatusFilter] = React.useState<string>(
    petStatusFilter[0].label,
  );
  const [tagFilter, setTagFilter] = React.useState<string>('');

  const onStatusFilter = (item: DropDownItem) => {
    setStatusFilter(item.label);
    onPetStatusFilter(item);
  };

  const onTagFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (!inputValue) {
      onPetTagFilter(inputValue);
    }
    setTagFilter(inputValue);
  };

  return (
    <Styled.PageActionsLayout>
      <Styled.Layout $type="row">
        <Styled.Input
          placeholder="search by tags"
          $size="medium"
          onChange={onTagFilter}
          aria-label="search-filter-tags"
        ></Styled.Input>
        <Styled.Button title="search" onClick={() => onPetTagFilter(tagFilter)}>
          Search
        </Styled.Button>
      </Styled.Layout>
      <Styled.Layout $type="row">
        <DropdownMenu
          withButton
          btnTitle={`${statusFilter}`}
          items={petStatusFilter}
          onDropdownSelected={onStatusFilter}
        />
      </Styled.Layout>
    </Styled.PageActionsLayout>
  );
};

export default PetPageActions;
