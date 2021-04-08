import dynamic from 'next/dynamic';
import { useRef } from 'react';

import ProgressIndicator from 'components/progress-indicator';
import { classNames } from 'libraries/util';
import styles from './index.module.scss';

const Tooltip = dynamic(() => import('ui/tooltip'));

function IconButton({ children, loading }) {
  return loading ? null : children;
}

/**
 * @param { object } props
 * @param { object } props.children
 * @param { string } props.description
 * @param { boolean } props.icon
 * @param { function } props.onClick
 * @param { string } props.className
 * @param { boolean } props.loading
 * @param { "text" | "raised" } props.type
 */
export default function Button({
  children,
  description,
  icon,
  onClick,
  className,
  loading = false,
  type = 'text',
}) {
  const button = useRef();

  function handleClick(event) {
    event.currentTarget.blur();
    if (onClick) onClick(event);
  }

  return (
    <>
      <button
        ref={button}
        disabled={loading}
        data-loading={loading || undefined}
        onClick={handleClick}
        type="button"
        className={classNames(
          styles.root,
          className,
          icon ? classNames(styles['mdc-icon-button'], 'material-icons') : styles['mdc-button'],
          type === 'raised' && styles['mdc-button--raised'],
        )}
      >
        {icon ? (
          <IconButton loading={loading}>
            {children}
          </IconButton>
        ) : (
          <>
            <span className={styles['mdc-button__ripple']} />
            <span className={styles['mdc-button__label']}>
              {children}
            </span>
          </>
        )}

        <ProgressIndicator className={styles['progress-indicator']} />
      </button>

      {description && <Tooltip anchor={button}>{description}</Tooltip>}
    </>
  );
}
