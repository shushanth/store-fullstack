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
};

const PetPageActions = ({ onPetStatusFilter }: PetPageActions) => {
  const [selectedSort, setSelectedSort] = React.useState<string>(
    petStatusFilter[0].label,
  );
  const onSelectedSort = (item: DropDownItem) => {
    setSelectedSort(item.label);
    onPetStatusFilter(item);
  };

  return (
    <Styled.PageActionsLayout>
      <Styled.Layout $type="row">
        <DropdownMenu
          withButton
          btnTitle={`${selectedSort}`}
          items={petStatusFilter}
          onDropdownSelected={onSelectedSort}
        />
      </Styled.Layout>
    </Styled.PageActionsLayout>
  );
};

export default PetPageActions;
