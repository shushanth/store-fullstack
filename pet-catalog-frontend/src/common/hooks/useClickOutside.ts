import React from 'react';

interface UseClickOutsideProps {
  nodeRef: React.RefObject<HTMLElement>;
  handler: () => void;
}

export const useClickOutside = ({ nodeRef, handler }: UseClickOutsideProps) => {
  const clickOutsideHandler = React.useCallback(
    (event: MouseEvent) => {
      if (!nodeRef.current || !nodeRef.current.contains(event.target as Node)) {
        handler();
        return;
      }
    },
    [handler, nodeRef],
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', clickOutsideHandler);
    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
    };
  }, [nodeRef, handler, clickOutsideHandler]);
};
