import { classNames } from 'libraries/util';
import styles from './index.module.scss';

/**
 * @param { object } props
 * @param { object } props.children
 * @param { string } props.className
 * @param {(
 *  "body1" |
 *  "headline1" |
 *  "headline2" |
 *  "headline3" |
 *  "headline4" |
 *  "headline5"
 * )} props.type
 */
export default function Text({ children, className, type = 'body1' }) {
  return <div className={classNames(styles[`mdc-typography--${type}`], className)}>{children}</div>;
}
