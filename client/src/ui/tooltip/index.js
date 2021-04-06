import {
  MDCTooltipFoundation,
  XPosition,
  YPosition,
} from '@material/tooltip';
import { useEffect, useRef } from 'react';

import { useClasses } from 'hooks/classes';
import { useStyle } from 'hooks/style';
import {
  classNames,
  registerHandler,
  deregisterHandler,
} from 'libraries/util';
import styles from './index.module.scss';

export default function Button({ children, anchor }) {
  const root = useRef();
  const [tooltipRootStyle, setTooltipRootStyle] = useStyle();
  const [tooltipSurfaceStyle, setTooltipSurfaceStyle] = useStyle();
  const { classes, addClass, removeClass } = useClasses(styles);

  function getTooltipSize() {
    return { width: root.current.offsetWidth, height: root.current.offsetHeight };
  }

  useEffect(() => {
    function handleMouseEnter() {
      tooltip.handleAnchorMouseEnter();
    }

    function handleMouseLeave() {
      tooltip.handleAnchorMouseLeave();
    }

    const anchorElement = anchor.current;

    const tooltip = new MDCTooltipFoundation({
      addClass,
      removeClass,
      getTooltipSize,
      getAnchorBoundingRect: () => anchorElement.getBoundingClientRect(),
      getParentBoundingRect: () => anchorElement.parentElement?.getBoundingClientRect(),
      getViewportHeight: () => window.innerHeight,
      getViewportWidth: () => window.innerWidth,
      setStyleProperty: setTooltipRootStyle,
      setSurfaceStyleProperty: setTooltipSurfaceStyle,
      registerDocumentEventHandler: registerHandler(document.body),
      deregisterDocumentEventHandler: deregisterHandler(document.body),
      registerWindowEventHandler: registerHandler(window),
      deregisterWindowEventHandler: deregisterHandler(window),
    });

    tooltip.init();
    tooltip.setTooltipPosition({ xPos: XPosition.CENTER, yPos: YPosition.ABOVE });

    anchorElement.addEventListener('mouseenter', handleMouseEnter);
    anchorElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      anchorElement.removeEventListener('mouseenter', handleMouseEnter);
      anchorElement.removeEventListener('mouseleave', handleMouseLeave);
      tooltip.destroy();
    };
  }, []);

  return (
    <div style={tooltipRootStyle} ref={root} className={classNames(styles['mdc-tooltip'], ...classes)}>
      <div style={tooltipSurfaceStyle} className={styles['mdc-tooltip__surface']}>
        {children}
      </div>
    </div>
  );
}
