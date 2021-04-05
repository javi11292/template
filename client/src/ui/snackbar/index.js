import { MDCSnackbarFoundation } from '@material/snackbar';
import { useEffect, useRef, useState } from 'react';

import { classNames } from 'libraries/util';
import styles from './index.module.scss';

export default function Snackbar({ children, open, onExit = () => {} }) {
  const root = useRef(null);
  const snackbar = useRef(null);
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

  useEffect(() => {
    snackbar.current = new MDCSnackbarFoundation({ addClass, removeClass, notifyClosed: onExit });

    snackbar.current.setTimeoutMs(4000);

    return () => snackbar.current.destroy();
  }, []);

  useEffect(() => {
    if (open) {
      snackbar.current.open();
    }
  }, [open]);

  return (
    <div ref={root} className={classNames(styles['mdc-snackbar'], ...classes)}>
      <div className={styles['mdc-snackbar__surface']}>
        <div className={styles['mdc-snackbar__label']}>
          {children}
        </div>
      </div>
    </div>
  );
}
