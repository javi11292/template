import { useState } from 'react';

import { snakeToCamel } from 'libraries/util';

export function useStyle() {
  const [style, setStyle] = useState();

  function setStyleProperty(property, value) {
    setStyle((state) => ({ ...state, [snakeToCamel(property)]: value }));
  }
  return [style, setStyleProperty];
}
