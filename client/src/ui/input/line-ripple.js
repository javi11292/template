import { MDCLineRippleFoundation } from '@material/line-ripple';
import { useEffect, useRef } from 'react';

import { useClasses } from 'hooks/classes';
import { useStyle } from 'hooks/style';
import {
  classNames,
  registerHandler,
  deregisterHandler,
  setRef,
} from 'libraries/util';
import styles from './index.module.scss';

export default function Label({ lineRippleRef }) {
  const root = useRef();
  const { classes, addClass, removeClass } = useClasses(styles);
  const [style, setStyle] = useStyle();

  useEffect(() => {
    const lineRipple = new MDCLineRippleFoundation({
      addClass,
      removeClass,
      setStyle,
      registerInteractionHandler: registerHandler(root.current),
      deregisterInteractionHandler: deregisterHandler(root.current),
    });

    setRef(lineRippleRef, lineRipple);

    lineRipple.init();

    return () => lineRipple.destroy();
  }, []);

  return <span style={style} className={classNames(styles['mdc-line-ripple'], ...classes)} />;
}
