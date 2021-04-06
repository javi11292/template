import { MDCTopAppBarFoundation } from '@material/top-app-bar';
import { useEffect, useRef } from 'react';

import { useClasses } from 'hooks/classes';
import { useStyle } from 'hooks/style';
import { classNames } from 'libraries/util';
import styles from './index.module.scss';

export default function TopAppBar({ children, buttons, title }) {
  const { classes, addClass, removeClass } = useClasses(styles);
  const [style, setStyle] = useStyle();
  const root = useRef();

  useEffect(() => {
    const appBar = new MDCTopAppBarFoundation({
      classes,
      addClass,
      removeClass,
      setStyle,
      getTopAppBarHeight: () => root.current.clientHeight,
      getViewportScrollY: () => window.pageYOffset,
    });

    appBar.init();
    const handleTargetScroll = appBar.handleTargetScroll.bind(appBar);
    const handleWindowResize = appBar.handleWindowResize.bind(appBar);

    window.addEventListener('scroll', handleTargetScroll);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('scroll', handleTargetScroll);
      window.removeEventListener('resize', handleWindowResize);
      appBar.destroy();
    };
  }, []);

  return (
    <>
      <header ref={root} style={style} className={classNames(styles.root, styles['mdc-top-app-bar'], styles['mdc-top-app-bar--dense'])}>
        <div className={styles['mdc-top-app-bar__row']}>
          <section className={classNames(styles['mdc-top-app-bar__section'], styles['mdc-top-app-bar__section--align-start'])}>
            <span className={styles['mdc-top-app-bar__title']}>
              {title}
            </span>
          </section>
          <section className={classNames(styles['mdc-top-app-bar__section'], styles['mdc-top-app-bar__section--align-end'])}>
            {buttons}
          </section>
        </div>
      </header>
      <main className={styles['mdc-top-app-bar--dense-fixed-adjust']}>
        {children}
      </main>
    </>
  );
}
