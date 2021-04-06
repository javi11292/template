import { MDCFloatingLabelFoundation } from '@material/floating-label';
import { ponyfill } from '@material/dom';
import { useEffect, useRef } from 'react';

import { useClasses } from 'hooks/classes';
import {
  classNames,
  registerHandler,
  deregisterHandler,
  setRef,
} from 'libraries/util';
import styles from './index.module.scss';

export default function Label({ children, labelRef }) {
  const root = useRef();
  const { classes, addClass, removeClass } = useClasses(styles);

  useEffect(() => {
    const label = new MDCFloatingLabelFoundation({
      addClass,
      removeClass,
      getWidth: () => ponyfill.estimateScrollWidth(root.current),
      registerInteractionHandler: registerHandler(root.current),
      deregisterInteractionHandler: deregisterHandler(root.current),
    });

    setRef(labelRef, label);

    label.init();

    return () => label.destroy();
  }, []);

  return <span ref={root} className={classNames(styles['mdc-floating-label'], ...classes)}>{children}</span>;
}
