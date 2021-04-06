import { MDCSnackbarFoundation } from '@material/snackbar';
import { useEffect, useRef } from 'react';

import { useClasses } from 'hooks/classes';
import { classNames } from 'libraries/util';
import styles from './index.module.scss';

export default function Snackbar({
  styles: additionalStyles = {},
  style,
  children,
  open,
  onExit = () => {},
}) {
  const snackbar = useRef();
  const { classes, addClass, removeClass } = useClasses(styles);

  useEffect(() => {
    snackbar.current = new MDCSnackbarFoundation({ addClass, removeClass, notifyClosed: onExit });

    snackbar.current.init();
    snackbar.current.setTimeoutMs(4000);

    return () => snackbar.current.destroy();
  }, []);

  useEffect(() => {
    if (open) {
      snackbar.current.open();
    }
  }, [open]);

  return (
    <div style={style} className={classNames(styles['mdc-snackbar'], additionalStyles['mdc-snackbar'], ...classes)}>
      <div className={classNames(styles['mdc-snackbar__surface'], additionalStyles['mdc-snackbar__surface'])}>
        <div className={classNames(styles['mdc-snackbar__label'], additionalStyles['mdc-snackbar__label'])}>
          {children}
        </div>
      </div>
    </div>
  );
}
