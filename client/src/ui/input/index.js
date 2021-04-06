import { MDCTextFieldFoundation } from '@material/textfield';
import { useEffect, useRef } from 'react';

import { useClasses } from 'hooks/classes';
import {
  classNames,
  registerHandler,
  deregisterHandler,
  setRef,
} from 'libraries/util';
import Label from './label';
import LineRipple from './line-ripple';
import styles from './index.module.scss';

export default function Input({
  label,
  autoFocus,
  value = '',
  onChange,
  type = 'text',
  inputRef,
  onKeyDown,
}) {
  const root = useRef();
  const labelRef = useRef();
  const lineRippleRef = useRef();
  const input = useRef();
  const { classes, addClass, removeClass } = useClasses(styles);

  function addRef(element) {
    if (!element) return;
    input.current = element;
    setRef(inputRef, element);
  }

  useEffect(() => {
    const textField = new MDCTextFieldFoundation({
      addClass,
      removeClass,
      registerTextFieldInteractionHandler: registerHandler(root.current),
      deregisterTextFieldInteractionHandler: deregisterHandler(root.current),
      getNativeInput: () => input.current,
      isFocused: () => document.activeElement === input.current,
      registerInputInteractionHandler: registerHandler(input.current, { passive: true }),
      deregisterInputInteractionHandler: deregisterHandler(input.current, { passive: true }),
      floatLabel: labelRef.current.float.bind(labelRef.current),
      getLabelWidth: labelRef.current.getWidth.bind(labelRef.current),
      hasLabel: () => true,
      shakeLabel: labelRef.current.shake.bind(labelRef.current),
      activateLineRipple: lineRippleRef.current.activate.bind(lineRippleRef.current),
      deactivateLineRipple: lineRippleRef.current.deactivate.bind(lineRippleRef.current),
      setLineRippleTransformOrigin: lineRippleRef
        .current
        .setRippleCenter
        .bind(lineRippleRef.current),
    });

    textField.init();

    if (autoFocus) {
      input.current.focus();
    }

    return () => textField.destroy();
  }, []);

  return (
    <div ref={root} className={classNames(styles['mdc-text-field'], styles['mdc-text-field--filled'], ...classes)}>
      <span className={styles['mdc-text-field__ripple']} />
      <Label labelRef={labelRef}>{label}</Label>
      <input
        ref={addRef}
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={value}
        className={styles['mdc-text-field__input']}
        type={type}
      />
      <LineRipple lineRippleRef={lineRippleRef} />
    </div>
  );
}
