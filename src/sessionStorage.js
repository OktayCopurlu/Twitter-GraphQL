export function setItem(key, value) {
  sessionStorage.setItem(key, value);
}

export function getItem(key) {
  const item = sessionStorage.getItem(key);
  return item;
}

export function removeITem(key) {
  sessionStorage.removeItem(key);
}
