export function classNames(...args) {
  return args.reduce((acc, item) => (item ? `${acc} ${item}` : acc));
}
