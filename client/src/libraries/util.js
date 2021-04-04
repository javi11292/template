export function joinClassName(...classNames) {
  return classNames.reduce((acc, item) => (item ? `${acc} ${item}` : acc));
}
