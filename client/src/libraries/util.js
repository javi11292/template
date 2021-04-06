export function classNames(...args) {
  return args.reduce((acc, item) => (item ? `${acc} ${item}` : acc));
}

export function snakeToCamel(string) {
  return string.replace(/-(\w)/, (match, p1) => p1.toUpperCase());
}

export function registerHandler(element, options) {
  return (event, handler) => {
    element.addEventListener(event, handler, options);
  };
}

export function deregisterHandler(element, options) {
  return (event, handler) => {
    element.removeEventListener(event, handler, options);
  };
}

export function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else {
    // eslint-disable-next-line no-param-reassign
    ref.current = value;
  }
}
