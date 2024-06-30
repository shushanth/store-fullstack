import * as Styled from '../../styled';
import { DropDownItem } from './Dropdown';

interface DropDownItemProps {
  items: DropDownItem[];
  itemClick: (item: DropDownItem) => void;
}

const DropdownItems = ({
  items,
  itemClick,
}: DropDownItemProps): JSX.Element => {
  return (
    <>
      {items.length &&
        items.map(({ id, label, value }: DropDownItem) => {
          return (
            <Styled.Label
              className="item"
              key={id}
              $size="medium"
              $level="primary"
              onClick={() => itemClick({ id, label, value })}
            >
              {label}
            </Styled.Label>
          );
        })}
    </>
  );
};

export default DropdownItems;
