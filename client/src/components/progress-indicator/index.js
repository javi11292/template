import { classNames } from 'libraries/util';
import styles from './index.module.scss';

export default function ProgressIndicator({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={classNames(styles.root, className)}>
      <circle shapeRendering="geometricPrecision" cx="50" cy="50" r="40" className={styles.circle} />
    </svg>
  );
}
