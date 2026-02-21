let toasterMounted = false;
const pending: Array<() => void> = [];

export function setToasterMounted(value: boolean) {
  toasterMounted = value;
  if (value) pending.splice(0).forEach((fn) => fn());
}

export function isToasterMounted() {
  return toasterMounted;
}

export function deferOrDispatch(fn: () => void) {
  if (toasterMounted) fn();
  else pending.push(fn);
}
