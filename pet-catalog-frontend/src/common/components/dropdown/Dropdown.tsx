import React from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

import * as Styled from '../../styled';
import DropdownItems from './DropdownItems';

export type DropDownItem = {
  id: number;
  label: string;
  value: string;
};

interface DropdownProps {
  items: DropDownItem[];
  withButton?: boolean;
  btnTitle?: string;
  onDropdownSelected: (item: DropDownItem) => void;
}

const DropdownMenu = ({
  items,
  withButton,
  btnTitle,
  onDropdownSelected,
}: DropdownProps): JSX.Element => {
  const dropdownLayoutRef = React.useRef(
    null,
  ) as React.MutableRefObject<HTMLDivElement | null>;
  const onOutsideClick = () => {
    setToggleDropdown(false);
  };
  useClickOutside({ nodeRef: dropdownLayoutRef, handler: onOutsideClick });
  const [toggleDropdown, setToggleDropdown] = React.useState(false);

  const dropdownItemClick = (item: DropDownItem) => {
    setToggleDropdown(false);
    onDropdownSelected(item);
  };
  return (
    <>
      {!withButton && (
        <Styled.DropdownLayout ref={dropdownLayoutRef}>
          <DropdownItems items={items} itemClick={dropdownItemClick} />
        </Styled.DropdownLayout>
      )}
      {withButton && (
        <Styled.ButtonDropdownWrapper>
          <Styled.Button onClick={() => setToggleDropdown(!toggleDropdown)}>
            {btnTitle} &darr;
          </Styled.Button>
          {toggleDropdown && (
            <Styled.DropdownLayout ref={dropdownLayoutRef}>
              <DropdownItems items={items} itemClick={dropdownItemClick} />
            </Styled.DropdownLayout>
          )}
        </Styled.ButtonDropdownWrapper>
      )}
    </>
  );
};

export default DropdownMenu;
