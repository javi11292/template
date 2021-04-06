import { useState } from 'react';

export function useClasses(styles) {
  const [classes, setClasses] = useState(new Set());

  function addClass(className) {
    setClasses((state) => {
      const newClassName = styles[className];
      if (state.has(newClassName)) return state;
      const newClasses = new Set(state);
      newClasses.add(newClassName);
      return newClasses;
    });
  }

  function removeClass(className) {
    setClasses((state) => {
      const newClassName = styles[className];
      if (!state.has(newClassName)) return state;
      const newClasses = new Set(state);
      newClasses.delete(newClassName);
      return newClasses;
    });
  }

  return { classes, addClass, removeClass };
}
