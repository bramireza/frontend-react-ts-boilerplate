export const getItemLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

export const setItemLocalStorage = <T>(key: string, value: T) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const removeItemLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
